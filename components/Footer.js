import React from "react";
import logo from "../public/assests/footer-logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className=" bg-[#04062D] sticky">
        <div className=" grid grid-cols-2 justify-items-start md:flex md:gap-4 text-white w-4/5 md:w-[90vw] lg:w-4/5 m-auto md:justify-between items-center h-[20rem] md:h-[19rem] text-[0.65rem] lg:text-[0.8rem]">
          <Image src={logo} className="w-14 md:w-24 xl:w-36" alt="logo"></Image>
          <div className="flex flex-col sm:p-2">
            <div className="flex gap-2">
              <svg
                className="sm:hidden"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 9.625q-.2 0-.4-.075t-.35-.2Q7.6 18.125 5.8 15.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.4-1.8 5.163t-5.45 5.987q-.15.125-.35.2t-.4.075Z"
                />
              </svg>
              <p className="capitalize">18 burma road, apapa, lagos, nigeria</p>
            </div>
            <div className="flex gap-2">
              <svg
                className="sm:hidden"
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
            <div className="flex gap-2">
              <svg
                className="sm:hidden"
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
          <div className="flex flex-col">
            <h3 className="text-[1rem] lg:text-[1.25rem] font-hairline">
              Company
            </h3>
            <Link href="">About us</Link>
            <Link href="">Our team</Link>
            <Link href="">Contact us</Link>
            <Link href="">FAQs</Link>
            <Link href="">Help</Link>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[1rem] lg:text-[1.25rem] font-hairline">
              Products
            </h3>
            <Link href="">Consultancy</Link>
            <Link href="">E-books</Link>
            <Link href="">Self-recovery</Link>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[1rem] lg:text-[1.25rem] font-hairline">
              Let's connect
            </h3>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24">
                <path
                  fill="#0075FF"
                  d="M20 12.05a8 8 0 1 0-9.25 8v-5.67h-2v-2.33h2v-1.77a2.83 2.83 0 0 1 3-3.14a11.92 11.92 0 0 1 1.79.16v2h-1a1.16 1.16 0 0 0-1.3 1.26v1.51h2.22l-.36 2.33h-1.85V20A8 8 0 0 0 20 12.05Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 20 20">
                <path
                  fill="#5B9FEE"
                  d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4zm3.905 7.864c.004.082.005.164.005.244c0 2.5-1.901 5.381-5.379 5.381a5.335 5.335 0 0 1-2.898-.85c.147.018.298.025.451.025c.886 0 1.701-.301 2.348-.809a1.895 1.895 0 0 1-1.766-1.312a1.9 1.9 0 0 0 .853-.033a1.892 1.892 0 0 1-1.517-1.854v-.023c.255.141.547.227.857.237a1.89 1.89 0 0 1-.585-2.526a5.376 5.376 0 0 0 3.897 1.977a1.891 1.891 0 0 1 3.222-1.725a3.797 3.797 0 0 0 1.2-.459a1.9 1.9 0 0 1-.831 1.047a3.799 3.799 0 0 0 1.086-.299a3.834 3.834 0 0 1-.943.979z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24">
                <path
                  fill="#E72222"
                  d="M12 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5Z"
                />
                <path
                  fill="#E72222"
                  fillRule="evenodd"
                  d="M6.77 3.082a47.472 47.472 0 0 1 10.46 0c1.899.212 3.43 1.707 3.653 3.613a45.67 45.67 0 0 1 0 10.61c-.223 1.906-1.754 3.401-3.652 3.614a47.468 47.468 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.672 45.672 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082ZM17 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm-9.75 6a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
