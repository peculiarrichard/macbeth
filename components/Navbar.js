import React from "react";
import Image from "next/image";
import logo from "../public/assests/Group.png";
import Link from "next/link";
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "@/context/Authcontext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  const router = useRouter();
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const closeNavbar = () => {
    setActive(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="flex md:h-32 sm:pb-2 md:px-4 sticky w-full justify-evenly items-center lg:gap-32 md:gap-16 xl:text-ss md:text-sm sm:block rounded-b-3xl shadow-xl">
        <div className="flex justify-between my-2 mx-4">
          <Link href="/" className="">
            <Image
              src={logo}
              alt="logo"
              className="w-16 md:flex sm:mt-2"></Image>
          </Link>
          <button className="md:hidden" onClick={handleClick}>
            {active ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="black"
                class="bi bi-x"
                viewBox="0 0 16 16">
                {" "}
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />{" "}
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="black"
                stroke="black"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`${
            active
              ? "flex h-screen text-center justify-start text-sm w-full flex-col mt-6"
              : "hidden"
          } md:flex sm:gap-8 lg:gap-8 md:gap-4`}>
          <Link
            href="/"
            onClick={closeNavbar}
            className={` ${
              router.pathname == "/"
                ? "text-blue2 md:border-b-2 font-hairline"
                : ""
            }`}>
            Home
          </Link>
          <Link
            href="/services"
            onClick={closeNavbar}
            className={
              router.pathname == "/services"
                ? "text-blue2 md:border-b-2 font-hairline"
                : ""
            }>
            Our Services
          </Link>
          <Link
            href="/bookings"
            onClick={closeNavbar}
            className={
              router.pathname == "/bookings"
                ? "text-blue2 md:border-b-2 font-hairline"
                : ""
            }>
            Bookings
          </Link>
          <Link
            href="/blog"
            onClick={closeNavbar}
            className={
              router.pathname == "/blog"
                ? "text-blue2 md:border-b-2 font-hairline"
                : ""
            }>
            Blog
          </Link>
          <Link
            href="/about"
            onClick={closeNavbar}
            className={
              router.pathname == "/about"
                ? "text-blue2 md:border-b-2 font-hairline"
                : ""
            }>
            About Us
          </Link>

          <Link
            href={currentUser ? "/dashboard" : "/login"}
            onClick={closeNavbar}>
            <button className="border-blue2 border-2 w-1/2 p-4 rounded-3xl font-hairline md:hidden hover:border-green hover:shadow-3xl hover:scale-105 duration-300">
              {currentUser ? "View profile" : "Sign In"}
            </button>
          </Link>
        </div>
        <Link href={currentUser ? "/dashboard" : "/login"}>
          <button className="lg:w-32 w-20 bg-blue2 xl:h-16 h-12 text-white rounded-2xl border-none sm:hidden hover:border-green hover:shadow-3xl hover:scale-105 duration-300">
            {currentUser ? "View profile" : "Sign In"}
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
