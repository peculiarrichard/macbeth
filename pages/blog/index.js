import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const Blog = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Macbeth | Blog</title>
        <meta name="description" content="Your relationship expert" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className="text-center mt-6 md:mt-10 xl:mt-16 capitalize md:text-base w-4/5 m-auto">
        Enjoy daily free/ unlimited write ups concerning relationships,
        marriage, growth and happiness. We aim at making your understand all
        that is needed for your relation to grow happily and rapidly.
      </p>
      <div className="w-4/5 sm:mt-6 md:mt-12 flex flex-col m-auto gap-12 md:gap-16 mb-4">
        {posts.map((post, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-center md:justify-between">
            <div className="mb-4 flex flex-col md:w-115 xl:w-125">
              <h3 className="text-blue2 sm:text-center md:text-ss lg:text-base font-hairline capitalize">
                {post.frontMatter.title}
                <span>
                  <p className="font-thin text-black">
                    {post.frontMatter.subtitle}
                  </p>
                </span>
              </h3>
              <p className=" text-black text-sx md:text-sm xl:text-ss font-thin mt-2 md:mt-6 sm:text-justify">
                {post.frontMatter.description}
              </p>
              <Link
                href={"/blog/" + post.slug}
                className="text-sx md:text-sm mt-2 self-center md:self-end text-blue2 underline">
                Read complete nugget for free
              </Link>
            </div>
            <Image
              src={post.frontMatter.thumbnailUrl}
              alt="thumbnail"
              className="sm:w-125 xl:w-125 md:w-115"
              width="100"
              height="100"
              unoptimized></Image>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });
  return {
    props: {
      posts,
    },
  };
};
