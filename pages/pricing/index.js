import React from "react";
import Image from "next/image";
import Link from "next/link";
import prices from "@/data/price";
import Head from "next/head";

const Pricing = () => {
  return (
    <>
      <Head>
        <title>Macbeth | Pricing</title>
        <meta name="description" content="Your relationship expert" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className="text-center mt-4 md:mt-16 xl:mt-20 xl:mb-10 capitalize md:text-base">
        Our Pricing System
      </p>
      <div className="flex sm:flex-col mb-6 items-center md:justify-between w-4/5 m-auto mt-8 md:mt-14 sm:gap-6">
        {prices.map((price) => (
          <div
            key={price.id}
            className="flex flex-col border-2 border-blue2 rounded-2xl w-115 xl:w-125 p-10 h-128 md:h-131 justify-start items-center">
            <div className="flex gap-4">
              <Image src={price.img} alt="tags" width="30" height="30"></Image>
              <h1 className="text-sm md:text-ss text-blue1 font-hairline">
                {price.name}
              </h1>
            </div>
            <p className="mt-4 text-sm xl:text-ss">
              ({price.description} subscription)
            </p>
            <p className="self-end text-sm md:text-ss text-hairline text-blue1 mt-4">
              ${price.amount}
            </p>
            <div className="flex gap-2 self-start mt-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 20 20">
                <path
                  fill="#343A95"
                  d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm7.854 4.854l-5 5a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L8.5 11.793l4.646-4.647a.5.5 0 0 1 .708.708Z"
                />
              </svg>
              <h3 className="text-sm md:text-ss text-blue1 font-hairline">
                Benefits
              </h3>
            </div>
            <ul className="list-disc list-inside py-4 h-3/5 text-sx xl:text-sm">
              {price.benefits.split(".").map((line, index) => (
                <li key={index} className="pb-2">
                  {" "}
                  {line}
                </li>
              ))}
            </ul>
            <Link
              href="/pricing/[productId]"
              as={`/pricing/${price.name}`}
              className=" capitalize bg-blue2 p-4 border rounded-2xl text-white tex-center text-sm xl:text-ss hover:border-green hover:shadow-3xl hover:scale-105 duration-300">
              <button>Book session for ${price.amount}</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Pricing;
