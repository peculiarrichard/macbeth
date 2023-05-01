import React, { useRef } from "react";
import Image from "next/image";
import reviews from "@/data/reviews";

const Reviews = () => {
  const ref = useRef(null);
  return (
    <>
      <p className="text-center mt-8 md:mt-16 xl:mt-20 xl:mb-10 capitalize md:text-base">
        some reviews from our subscribers
      </p>
      <div className="flex bg-[url('../public/assests/dark-bg.png')] h-129 place-items-center mt-6 md:mt-8">
        <div className="flex w-4/5 m-auto justify-between sm:grid sm:grid-cols-2 sm:gap-4">
          {reviews.map((review) => {
            return (
              <div
                key={review.id}
                ref={ref}
                className=" flex flex-col items-center">
                <Image
                  src={review.img}
                  alt="img"
                  className=" w-[4rem] md:w-[5rem] xl:w-[6rem] absolute"></Image>
                <div className=" w-[8rem] md:w-[9rem] lg:w-[12rem] xl:w-[15rem] bg-[#D9D9D9] h-[12rem] md:h-[13rem] xl:h-[16rem] p-2 lg:p-6 flex flex-col justify-center items-center mt-10 md:mt-12 xl:mt-14 rounded-3xl">
                  <h3 className="mt-6 text-sx md:text-sm xl:text-ss font-hairline mb-2">
                    {review.name}
                  </h3>
                  <p className="text-center h-[7rem] xl:h-[10rem] border-b text-sx xl:text-sm font-thin">
                    {review.details}
                  </p>
                  <p className="self-end text-sx font-thin xl:font-hairline">
                    {review.date}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Reviews;
