import React from "react";
import Link from "next/link";

const Offer = () => {
  return (
    <>
      <p className="text-center mt-10 md:mt-16 xl:mt-20 xl:mb-10 capitalize md:text-base">
        What we offer
      </p>
      <div className="pb-10 h-full sm:bg-clip-content bg-background1 bg-[url('../public/assests/Ellipse.png')]  bg-[length:80%] md:bg-[length:40%_60%] lg:bg-[length:40%_80%] bg-right bg-auto bg-no-repeat">
        <div className="flex justify-around lg:m-auto mt-4">
          <div className="flex flex-col items-center md:items-start w-4/5 my-8 ">
            <div className="w-115 bg-white h-full md:w-[23rem] xl:w-127 md:h-120 shadow-2xl p-6 md:p-8 flex flex-col items-start rounded-3xl my-2 md:my-4">
              <h3 className="text-blue1 md:text-ss lg:text-base font-hairline capitalize">
                Marraige counselling
              </h3>
              <p className="text-black text-sx md:text-sm xl:text-ss font-thin mt-2 md:mt-6">
                At our firm, we specialize in providing marriage counselling
                services to couples. Our team of experienced and licensed
                therapists use evidence-based techniques and approaches to help
                couples improve communication, resolve conflicts, and strengthen
                their bond.
              </p>
            </div>
            <div className=" bg-white md:self-center w-115 h-full md:w-[23rem] xl:w-127 md:h-120 shadow-2xl p-6 md:p-8 flex flex-col items-start rounded-3xl my-2 md:my-4">
              <h3 className="text-blue1 md:text-ss lg:text-base font-hairline capitalize">
                Mental health counselling
              </h3>
              <p className="text-black text-sx md:text-sm xl:text-ss font-thin mt-2 md:mt-6">
                We provide comprehensive mental health counselling services to
                individuals, couples, and families. Our team of experienced and
                licensed therapists specialize in addressing a wide range of
                mental health issues such as anxiety, depression, stress, and
                relationship problems.
              </p>
            </div>
            <div className=" bg-white w-115 h-full md:w-[23rem] xl:w-127 md:h-120 shadow-2xl p-6 md:p-8 flex flex-col items-start rounded-3xl my-2 md:my-4">
              <h3 className="text-blue1 md:text-ss lg:text-base font-hairline capitalize">
                Addiction counselling
              </h3>
              <p className="text-black text-sx md:text-sm xl:text-ss font-thin mt-2 md:mt-6">
                At our firm, we specialize in providing drug addiction recovery
                services to individuals struggling with substance abuse. Our
                team of experienced and licensed therapists utilize
                evidence-based techniques and approaches to help clients
                overcome their addiction and achieve a drug-free life.{" "}
              </p>
            </div>
            <Link
              href="/bookings"
              className=" self-center text-sm md:self-end bg-blue2 w-56 xl:w-64 mt-2 md:-mt-24 lg:-mt-12 text-center text-white py-4 rounded-xl hover:border-green hover:shadow-3xl hover:scale-105 duration-300">
              <button>Book a session</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
