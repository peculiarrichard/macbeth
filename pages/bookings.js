import React, { useContext, useState } from "react";
import { AuthContext } from "@/context/Authcontext";
import Image from "next/image";
import couple from "../public/assests/couplebookings.png";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Head from "next/head";

const Bookings = () => {
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();

  const [data, setData] = useState({});
  const [submitCount, setSubmitCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
    console.log(name);
    setSubmitCount((prevCount) => prevCount + 1);
    if (currentUser) {
      return router.push("/pricing");
    } else {
      toast.error(
        "only registered users can book a session. sign up to continue"
      );
    }
  };
  return (
    <>
      <Head>
        <title>Macbeth | Bookings</title>
        <meta name="description" content="Your relationship expert" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-4/5 m-auto my-10">
        {currentUser ? (
          <div>
            <p className="text-base text-blue2 font-hairline mb-2">
              Active bookings
            </p>
            <p className="font-hairline">Reviving my marraige</p>
            <div className='w-full bg-[url("../public/assests/bookingsimg.png")] bg-no-repeat h-full sm:bg-[length:100vh_100%] flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 items-center p-6 place-items-center gap-6 my-6'>
              <div className="bg-white flex flex-col rounded-xl w-[12rem] h-[6rem] py-4 px-2">
                <p className="text-blue2 font-hairline mb-2">
                  Sessions booked:
                </p>
                <p className="text-black text-base">{submitCount}</p>
              </div>
              <div className="bg-white flex flex-col rounded-xl w-[12rem] h-[6rem] py-4 px-2">
                <p className="text-blue2 font-hairline mb-2">Sessions left</p>
                <p className="text-black text-base">0</p>
              </div>
              <div className="bg-white flex flex-col rounded-xl w-[12rem] h-[6rem] py-4 px-2">
                <p className="text-blue2 font-hairline mb-2">Session's venue</p>
                <p className="text-black text-base">Google meet</p>
              </div>
              <div className="bg-white flex flex-col rounded-xl w-[12rem] h-[6rem] py-4 px-2">
                <p className="text-blue2 font-hairline mb-2">
                  Appointment duration
                </p>
                <p className="text-black text-base">Ihr</p>
              </div>
              <div className="bg-white flex flex-col rounded-xl w-[12rem] h-[6rem] py-4 px-2">
                <p className="text-blue2 font-hairline mb-2">
                  Next session time:
                </p>
                {data.time && (
                  <p className="text-black text-base">{data.time}</p>
                )}
              </div>
              <div className="bg-white flex flex-col rounded-xl w-[12rem] h-[6rem] py-4 px-2">
                <p className="text-blue2 font-hairline mb-2">
                  Next session date:
                </p>
                {data.date && (
                  <p className="text-black text-base">{data.date}</p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <p className="text-base text-blue2 font-hairline mb-2">
            Sign in to see your active bookings
          </p>
        )}
        <div className="mt-10">
          {currentUser ? (
            <p className="text-base text-blue2 font-hairline mb-2">
              Book another session
            </p>
          ) : (
            <p className="text-base text-blue2 font-hairline mb-2">
              Book a session
            </p>
          )}
          <div className="flex flex-col md:flex-row justify-between items-start my-6 md:gap-10 xl:gap-4">
            <Image
              src={couple}
              alt=""
              unoptimized
              className=" w-[19rem] md:w-[16rem] lg:w-[23rem] sm:m-auto "></Image>
            <form
              className="md:w-1/2 sm:mt-6 sm:m-auto"
              onSubmit={handleSubmit}>
              <label htmlFor="name" className="sm:text-[1rem] xl:text-ss">
                Full Name
              </label>
              <br></br>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your full name"
                onChange={(e) => e.target.value}
                className="w-full xl:w-[90%] h-12 rounded-lg mb-4 px-8 text-black shadow-lg mt-2"></input>
              <br></br>
              <label htmlFor="email" className=" sm:text-[1rem] xl:text-ss">
                Email
              </label>
              <br></br>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email address"
                className=" w-full xl:w-[90%] h-12 rounded-lg mb-4 px-8 text-black shadow-lg mt-2"></input>
              <br></br>

              <label htmlFor="date" className=" sm:text-[1rem] xl:text-ss ">
                When would you like the session to start?
              </label>
              <br></br>
              <div className="flex sm:flex-col w-full xl:w-[90%] justify-between md:gap-6">
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  className="h-12 rounded-lg mb-4 px-8 text-black shadow-lg mt-2"></input>
                <input
                  type="time"
                  id="time"
                  name="time"
                  required
                  className="h-12 rounded-lg mb-4 px-8 text-black shadow-lg mt-2"></input>
              </div>
              <br></br>
              <label htmlFor="message" className="sm:text-[1rem] xl:text-ss">
                Tell us a little about the situation
              </label>
              <br></br>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Enter your message"
                className="w-full xl:w-[90%] sm:h-28 lg:h-32 rounded-lg mb-4 px-8 text-black shadow-lg mt-2"></textarea>
              <br></br>
              <button
                type="submit"
                className="text-center bg-blue2 w-full lg:w-2/5 h-14 md:h-12 rounded-lg border text-white border-white mb-2 hover:border-green hover:shadow-3xl hover:scale-105 duration-300 ">
                Book Session
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookings;
