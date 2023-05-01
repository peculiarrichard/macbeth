import React from "react";

const Stats = () => {
  return (
    <div
      className={`${"gradient"} relative m-auto sm:text-center justify-around mt-14 md:mt-4 lg:mt-32 mb-4 items-center flex border h-32 md:h-44 w-[90vw] md:w-4/5  rounded-3xl text-white`}>
      <div>
        <h3 className=" text-base md:text-xxl xl:text-2xl ">20+</h3>
        <p className="text-sx md:text-sm">Consultants</p>
      </div>
      <div>
        <h3 className="text-base md:text-xxl xl:text-2xl ">1000+</h3>
        <p className="text-sx md:text-sm">Settled cases</p>
      </div>
      <div>
        <h3 className="text-base md:text-xxl xl:text-2xl ">500+</h3>
        <p className="text-sx md:text-sm">Active subscribers</p>
      </div>
    </div>
  );
};

export default Stats;
