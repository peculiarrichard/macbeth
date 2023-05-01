import React, { useState } from "react";
import { toast } from "react-toastify";
const Newsletter = () => {
  const [email, setEmail] = useState("");

  const newsletter = (e) => {
    e.preventDefault();
    toast.success("you have successfuly subscribed to our newsletter!");
    setEmail("");
  };
  return (
    <>
      <div className="flex flex-col m-auto items-center mt-8 md:mt-16 xl:mt-20 xl:mb-10 ">
        <p className=" mb-4 md:mb-10 capitalize md:text-base text-center sm:p-2">
          stay updated with rich valued information on our newsletter{" "}
        </p>
        <form
          className="flex sm:flex-col h-[5rem] mb-10 w-4/5"
          onSubmit={newsletter}>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email Address"
            className="sm:h-[5rem] sm:m-auto w-4/5 text-center text-sm border-2 border-blue2 md:-mr-2 sm:mb-2"></input>
          <button className=" w-3/5 sm:h-[5rem] sm:m-auto xl:w-1/5 bg-blue2 text-white rounded-lg hover:border-green hover:shadow-3xl hover:scale-105 duration-300">
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
};

export default Newsletter;
