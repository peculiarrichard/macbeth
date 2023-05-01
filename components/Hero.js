import React from "react";
import Image from "next/image";
import heroimg from "../public/assests/heroimg.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative flex lg:gap-8 flex-col md:flex-row w-full xl:w-90 xl:m-auto justify-center items-center md:justify-evenly md:items-start md:h-125 xl:h-129 mt-10 xl:mt-20 text-black">
      <div
        className="flex flex-col justify-center sm:items-center"
        data-aos="fade-up-right">
        <h1 className=" text-xl md:text-xxl xl:text-2xl font-hairline capitalize sm:w-full sm:text-center hover:text-green">
          Yes you can be{" "}
          <span>
            <h1 className="text-blue2">always happy</h1>
          </span>
          In your marriage!
        </h1>
        <p className="mt-4 text-sm lg:text-ss xl:text-base sm:text-center">
          We help revive relationships with our expert <br></br>counselling
          services.
        </p>
        <Link href="/bookings">
          <button className="bg-blue2 text-white w-115 lg:w-120 h-16 my-10 md:mt-16 capitalize rounded-2xl hover:border-green hover:shadow-3xl hover:scale-105 duration-300 ">
            Book a session
          </button>
        </Link>
      </div>
      <Image
        src={heroimg}
        alt="hero-img"
        className="w-115 md:w-110 lg:w-125 xl:w-128 lg:h-125 xl:h-129 hover:translate-x-3 hover:translate-y-5 hover:duration-150 hover:shadow-3xl"></Image>
    </div>
  );
};

export default Hero;
