import React from "react";
import Link from "next/link";
import Image from "next/image";
import bloga from "../public/assests/bloga.png";
import blogb from "../public/assests/blogb.png";

const Blog = () => {
  return (
    <>
      <p className="text-center mt-4 md:mt-16 xl:mt-20 xl:mb-10 capitalize md:text-base">
        Our blog
      </p>
      <div className="w-4/5 sm:mt-6 md:mt-12 flex flex-col m-auto gap-12 md:gap-16">
        <div className="flex flex-col md:flex-row justify-center md:justify-between">
          <div className="mb-4 flex flex-col md:w-115 xl:w-125">
            <h3 className="text-black sm:text-center md:text-ss lg:text-base font-hairline capitalize">
              Building a Strong and Lasting Relationship:
              <span>
                <p className="font-thin">Tips and Strategies</p>
              </span>
            </h3>
            <p className=" text-black text-sx md:text-sm xl:text-ss font-thin mt-2 md:mt-6 sm:text-justify">
              This write-up covers a range of topics that are essential for any
              couple looking to build a strong and lasting relationship. It
              provides tips and strategies on how to navigate the challenges of
              a relationship, such as communication breakdowns, trust issues,
              and conflicts....
            </p>
            <Link
              href="/blog"
              className="text-sx md:text-sm mt-2 self-center md:self-end text-blue2 underline">
              Read complete nugget for free
            </Link>
          </div>
          <Image
            src={bloga}
            alt=""
            className="sm:w-125 xl:w-125 md:w-115"></Image>
        </div>
        <div className="flex  flex-col md:flex-row justify-between">
          <div className="mb-4 flex flex-col md:w-115 xl:w-125">
            <h3 className="text-black sm:text-center md:text-ss lg:text-base font-hairline capitalize">
              Building a Strong and Lasting Relationship:
              <span>
                <p className="font-thin">Tips and Strategies</p>
              </span>
            </h3>
            <p className=" text-black text-sx md:text-sm xl:text-ss font-thin mt-2 md:mt-6 sm:text-justify">
              This write-up covers a range of topics that are essential for any
              couple looking to build a strong and lasting relationship. It
              provides tips and strategies on how to navigate the challenges of
              a relationship, such as communication breakdowns, trust issues,
              and conflicts....
            </p>
            <Link
              href="/blog"
              className="text-sx md:text-sm mt-2 self-center md:self-end text-blue2 underline">
              Read complete nugget for free
            </Link>
          </div>
          <Image
            src={blogb}
            alt=""
            className="sm:w-125 xl:w-125 md:w-115"></Image>
        </div>
        <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-8 mb-6">
          <Link
            href="/blog"
            className="w-56 border-2 border-blue2 text-center p-2 rounded-lg sm:mb-2 hover:border-green hover:shadow-3xl ">
            <button>Explore our blog</button>
          </Link>
          <p className="sm:text-center md:self-end text-black text-sx md:text-sm xl:text-ss">
            We have taken it upon ourselves to share priceless nuggets for free
            to our clients and visitors.
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog;
