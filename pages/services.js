import React from "react";
import Link from "next/link";
import Image from "next/image";
import servicea from "../public/assests/servicea.png";
import serviceb from "../public/assests/serviceb.png";
import servicec from "../public/assests/servicec.png";
import Head from "next/head";

const Services = () => {
  return (
    <>
      <Head>
        <title>Macbeth | Services</title>
        <meta name="description" content="Your relationship expert" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-[url("../public/assests/vintage.png")] w-4/5 m-auto text-white h-40 bg-no-repeat my-6 rounded-r-3xl'>
        <p className="text-center mt-4 md:mt-16 xl:mt-20 xl:mb-10 text-sx md:text-sm xl:text-base p-6 ">
          We are dedicated to make sure every human is fine, happy and mentally
          healthy. We have a mandate to serve humans and revive as many as 1
          billion marriages, bringing them to the peak of their happiness.
        </p>
      </div>
      <div className="w-4/5 sm:mt-6 md:mt-12 flex flex-col m-auto gap-12 md:gap-16 mb-10 xl:mb-20">
        <div className="flex flex-col md:flex-row justify-center md:justify-between">
          <div className="mb-4 flex flex-col md:w-115 xl:w-125">
            <h3 className="text-blue1 sm:text-center md:text-ss lg:text-base font-hairline capitalize">
              marriage counselling
            </h3>
            <p className=" text-black text-sx md:text-sm xl:text-ss font-thin mt-2 md:mt-6 sm:text-justify">
              At our firm, we specialize in providing marriage counselling
              services to couples. Our team of experienced and licensed
              therapists use evidence-based techniques and approaches to help
              couples improve communication, resolve conflicts, and strengthen
              their bond.
            </p>
            <Link
              href="/bookings"
              className="text-sx md:text-sm mt-4 md:mt-10 self-center md:self-start text-white bg-blue2 w-3/5 text-center p-4 rounded-xl hover:border-green hover:shadow-3xl hover:scale-105 duration-300">
              Book Session
            </Link>
          </div>
          <Image
            src={servicea}
            alt=""
            className="sm:w-125 xl:w-125 md:w-115 xl:h-120"></Image>
        </div>
        <div className="flex  flex-col md:flex-row-reverse justify-between">
          <div className="mb-4 flex flex-col md:w-115 xl:w-125">
            <h3 className="text-blue1 sm:text-center md:text-ss lg:text-base font-hairline capitalize">
              mental health counselling
            </h3>
            <p className=" text-black text-sx md:text-sm xl:text-ss font-thin mt-2 md:mt-6 sm:text-justify">
              We provide comprehensive mental health counselling services to
              individuals, couples, and families. Our team of experienced and
              licensed therapists specialize in addressing a wide range of
              mental health issues such as anxiety, depression, stress, and
              relationship problems.
            </p>
            <Link
              href="/bookings"
              className="text-sx md:text-sm mt-4 md:mt-10 self-center md:self-start text-white bg-blue2 w-3/5 text-center p-4 rounded-xl hover:border-green hover:shadow-3xl hover:scale-105 duration-300">
              Book Session
            </Link>
          </div>
          <Image
            src={serviceb}
            alt=""
            className="sm:w-125 xl:w-125 md:w-115 xl:h-120"></Image>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between">
          <div className="mb-4 flex flex-col md:w-115 xl:w-125">
            <h3 className="text-blue1 sm:text-center md:text-ss lg:text-base font-hairline capitalize">
              addiction recovery
            </h3>
            <p className=" text-black text-sx md:text-sm xl:text-ss font-thin mt-2 md:mt-6 sm:text-justify">
              At our firm, we specialize in providing drug addiction recovery
              services to individuals struggling with substance abuse. Our team
              of experienced and licensed therapists utilize evidence-based
              techniques and approaches to help clients overcome their addiction
              and achieve a drug-free life.
            </p>
            <Link
              href="/bookings"
              className="text-sx md:text-sm mt-4 md:mt-10 self-center md:self-start text-white bg-blue2 w-3/5 text-center p-4 rounded-xl hover:border-green hover:shadow-3xl hover:scale-105 duration-300">
              Book Session
            </Link>
          </div>
          <Image
            src={servicec}
            alt=""
            className="sm:w-125 xl:w-125 md:w-115 xl:h-120"></Image>
        </div>
      </div>
    </>
  );
};

export default Services;
