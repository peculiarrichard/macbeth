import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Comments from "@/components/Comments";
import Head from "next/head";

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

const PostPage = ({
  frontMatter: { title, subtitle, thumbnailUrl, author, reads },
  mdxSource,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Your relationship expert" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="my-8 flex flex-col m-auto w-4/5">
        <div className="flex justify-between sm:flex-col-reverse items-center">
          <Image
            src={thumbnailUrl}
            alt="thumbnail"
            width={100}
            height={100}
            className="w-125 xl:w-125 md:w-115"
            unoptimized></Image>
          <div className="text-center">
            <h1 className="text-blue2 sm:text-center md:text-ss lg:text-base font-hairline capitalize">
              {title}
              <span>
                <p className="font-thin text-black">{subtitle}</p>
              </span>
            </h1>
            <p className="">({reads} reads)</p>
          </div>
        </div>
        <p className=" text-sm md:text-ss text-black mt-4">Author: {author}</p>
        <div className=" text-black text-sx md:text-sm xl:text-ss font-thin mt-2 md:mt-6 sm:text-justify mb-20">
          <MDXRemote {...mdxSource} />
        </div>
        <Comments></Comments>
      </div>
    </>
  );
};

export default PostPage;
