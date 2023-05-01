import React from "react";
import macbeth from "../public/assests/macbeth.png";
import Image from "next/image";
import Contact from "@/components/Contact";
import Head from "next/head";

const about = () => {
  return (
    <>
      <Head>
        <title>Macbeth | About</title>
        <meta name="description" content="Your relationship expert" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" w-[90vw] md:w-3/4 m-auto">
        <p className="text-justify mt-4 md:mt-10 text-sx md:text-sm xl:text-ss p-6">
          Macbeth21 is dedicated to helping couples build strong and fulfilling
          relationships. With a team of highly trained and experienced marriage
          counsellors, we offer a wide range of services to support couples at
          every stage of their relationship. From premarital counselling to
          relationship coaching and therapy, we are committed to providing the
          highest level of care and expertise to help couples achieve their
          goals. Whether you're looking to improve communication, resolve
          conflicts, or strengthen your bond, our team of dedicated
          professionals is here to help. With a proven track record of success
          and a commitment to ongoing education and professional development,
          you can trust that our firm is competent and excellent in our field.
        </p>
      </div>
      <div className=" w-4/5 m-auto flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start mb-6 xl:mb-20">
        <div className="flex flex-col md:w-1/2 capitalize font-hairline text-sx xl:text-ss sm:text-center">
          <Image
            src={macbeth}
            alt=""
            className=" w-full md:w-115 xl:w-125"></Image>
          <p className="text-blue2 mt-2">nwachukwu ikenna mac-Anthony</p>
          <p className="text-black md:mt-2 mb-2">(The Love Doctor)</p>
        </div>
        <p className="md:w-1/2 text-justify text-sx md:text-sm xl:text-ss ">
          Macbeth21 was created on a foundation of the love of happiness and the
          need for happiness in relationships. The journey to positively touch 1
          billion marriages started on the basis of excellence trust and rapid
          growth. The gospel of happiness in marriages, and in live generally
          started on the day everyone is brought into the earth, but Macbeth21
          has taken it as a mandate and has implemented that mandate from date
          one oh her inception. The founder{" "}
          <strong>(Nwanchukwu Mac-Anthony Ikenna) </strong>is certified by
          various institutions on consultancy and the business of happiness. His
          exploit went around nageria and he was nicknamed{" "}
          <strong>The Love Doctor.</strong> This firm grows by the hour and most
          importantly brings happiness to the world every second. Our blog is
          open for all, where free write ups and E-books are available for
          everyone.{" "}
        </p>
      </div>
      <Contact></Contact>
    </>
  );
};

export default about;
