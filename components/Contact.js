import React, { useState, useRef } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore/lite";
import { firestore } from "@/firebase/config";
import { toast } from "react-toastify";

export const sendContactForm = async ({ name, email, comment }) => {
  try {
    const ref = collection(firestore, "contact");
    await addDoc(ref, {
      name,
      email,
      comment,
      sentAt: Timestamp.now().toDate(),
    });
    return 0;
  } catch (err) {
    console.log(err);
    return -1;
  }
};

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const formRef = useRef();
  const submitContact = async (e) => {
    e.preventDefault();
    console.log(e);
    const res = await sendContactForm({
      name: e.target[0].value,
      email: e.target[1].value,
      comment: e.target[2].value,
    });
    if (res == 0) {
      setMessage("We have recieved your message and will be in touch");
      formRef.current.reset();
    } else {
      setMessage("Something went wrong! Please try again");
    }
  };

  const newsletter = (e) => {
    e.preventDefault();
    toast.success("you have successfuly subscribed to our newsletter!");
    setEmail("");
  };

  return (
    <>
      <div className='bg-[url("../public/assests/contact.png")] md:h-[35rem]'>
        <div className="flex flex-col md:flex-row w-4/5 justify-between items-start m-auto text-white pt-10">
          <div className="flex flex-col gap-4 md:gap-8 xl:gap-12 p-2 sm:mb-4">
            <h3 className=" text-ss xl:text-base font-hairline">Contact Us</h3>
            <div className="flex flex-col text-sx md:text-[0.8rem] xl:text-sm">
              <div className="flex gap-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 9.625q-.2 0-.4-.075t-.35-.2Q7.6 18.125 5.8 15.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.4-1.8 5.163t-5.45 5.987q-.15.125-.35.2t-.4.075Z"
                  />
                </svg>
                <p className="capitalize">
                  18 burma road, apapa, lagos, nigeria
                </p>
              </div>
              <div className="flex gap-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2z"
                  />
                </svg>
                <p>+234 8134 567 8345</p>
              </div>
              <div className="flex gap-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"
                  />
                </svg>
                <p>macbeth21@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-col ">
              <p className=" sm:text-[0.8rem] mb-4 md:mb-6 capitalize xl:text-ss xl:text-center">
                stay updated with our newsletter{" "}
              </p>
              <form className="flex sm:flex-col" onSubmit={newsletter}>
                <label htmlFor="email"></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email Address"
                  className="sm:h-[2rem] h-12 text-center text-black text-sx md:-mr-2 sm:mb-2 w-40 xl:w-56"></input>
                <button
                  type="submit"
                  className=" w-20 text-sx sm:h-[2rem] h-12 xl:w-24 bg-blue2 text-white rounded-r-lg hover:border-green hover:shadow-3xl hover:scale-105 duration-300">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className=" flex flex-col  md:w-1/2 xl:w-128 md:gap-8">
            <h3 className="text-ss xl:text-base font-hairline ">
              Get in touch
            </h3>
            <form className="" ref={formRef} onSubmit={submitContact}>
              <label htmlFor="name" className="sm:text-[0.8rem] xl:text-ss">
                Name
              </label>
              <br></br>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                className="w-[90%] h-12 rounded-lg mb-4 px-8 text-black"></input>
              <br></br>
              <label htmlFor="email" className=" sm:text-[0.8rem] xl:text-ss">
                Email
              </label>
              <br></br>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="w-[90%] h-12 rounded-lg mb-4 px-8 text-black"></input>
              <br></br>
              <label htmlFor="message" className="sm:text-[0.8rem] xl:text-ss">
                Message
              </label>
              <br></br>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                className="w-[90%] h-20 rounded-lg mb-4 px-8 text-black"></textarea>
              <br></br>
              <button
                type="submit"
                className="text-center bg-blue2 w-2/5 h-10 rounded-lg border border-white mb-2 hover:border-green hover:shadow-3xl hover:scale-105 duration-300 ">
                Submit
              </button>
            </form>
            <div className="sm: text-sx">
              {message}
              <span onClick={() => setMessage("")}>&times;</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
