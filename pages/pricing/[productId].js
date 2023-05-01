import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import payment from "/public/assests/payment.png";
import Link from "next/link";
import useModal from "@/hooks/useModal";

const Payment = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const routerA = useRouter();
  const { productId } = routerA.query;
  console.log(productId);

  const [isOpen, toggle] = useModal();

  return (
    <>
      <div className="w-4/5 m-auto flex flex-col md:flex-row md:justify-between ">
        <div className="flex flex-col my-6 w-full md:w-1/2 sm:items-center">
          <Image
            src={payment}
            alt="paymentimg"
            className="w-[90%] my-6 lg:my-12"></Image>
          <form className="w-[90%] sm:mt-6" onSubmit={handleSubmit}>
            <label htmlFor="name" className="sm:text-[1rem] xl:text-ss">
              Credit Card Number
            </label>
            <br></br>
            <input
              type="text"
              id="card"
              name="card"
              required
              placeholder="xxxx-xxxx-xxxx-xxxx"
              onChange={(e) => e.target.value}
              className="w-full h-12 rounded-lg mb-4 px-8 text-black shadow-lg mt-2"></input>
            <br></br>
            <div className=" flex justify-between md:items-center gap-2 sm:flex-col">
              <div className="flex flex-col">
                <label htmlFor="date" className=" sm:text-[1rem] xl:text-ss ">
                  Expiry date:
                </label>
                <input
                  type="text"
                  id="date"
                  name="date"
                  required
                  className="w-full h-12 rounded-lg mb-4 px-8 text-black shadow-lg mt-2"></input>
              </div>
              <div className="flex flex-col">
                <label htmlFor="date" className=" sm:text-[1rem] xl:text-ss ">
                  Cvv:
                </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  required
                  className=" w-full h-12 rounded-lg mb-4 px-8 text-black shadow-lg mt-2"></input>
              </div>
            </div>
            <br></br>
            <label htmlFor="checkbox" className="font-hairline mb-2">
              <input
                className="mr-4 scale-150"
                name="checkbox"
                type="checkbox"
                id="checkbox"
                value="Remember me"
                required
                defaultChecked></input>{" "}
              Remember card for next time
            </label>
            <br></br>
            <button
              type="submit"
              onClick={toggle}
              className="text-center bg-blue2 w-full xl:w-2/5 h-14 md:h-12 rounded-lg border text-white border-white mt-4  mb-2 hover:border-green hover:shadow-3xl hover:scale-105 duration-300 ">
              Subscribe for {productId}
            </button>
          </form>
          {isOpen ? (
            <div className="fixed bg-[#00000080] top-0 right-0 left-0 bottom-0 z-[9999] flex justify-center items-center">
              <div className="bg-[url('../public/assests/popup.png')] text-white m-auto p-6 md:p-8 flex flex-col items-start rounded-3xl my-2 md:my-4 w-4/5 md:w-129 lg:w-127 shadow-xl">
                <h3 className="text-base mb-10">Congratulations!</h3>
                <p>
                  you have successfully subscribed for {productId} counselling,
                  we assure you that happiness and perfection will be with you
                  in no time. Check your next session date, time and place, we
                  are looking forward to having you with us.
                </p>
                <Link href="/bookings" className="bg-blue2 p-2 rounded-lg mt-6">
                  <button>Go to bookings</button>
                </Link>
              </div>
            </div>
          ) : null}
        </div>
        <div className="flex flex-col md:w-1/2 my-6">
          <Link
            href=""
            className=" self-center justify-self-center w-56 border-2 border-blue2 text-center p-2 rounded-lg sm:mb-2 hover:border-green hover:shadow-3xl ">
            <button>Pay with cash transfer</button>
          </Link>
          <h3 className="text-center my-8 md:text-base font-hhairline">
            You are about to pay for the {productId} package
          </h3>
        </div>
      </div>
    </>
  );
};

export default Payment;
