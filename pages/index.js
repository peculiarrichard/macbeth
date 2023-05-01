import Head from "next/head";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ChooseUs from "@/components/ChooseUs";
import Offer from "@/components/Offer";
import Blog from "@/components/Blog";
import Pricing from "./pricing";
import Reviews from "@/components/Reviews";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <Head>
        <title>Macbeth</title>
        <meta name="description" content="Your relationship expert" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero></Hero>
      <Stats></Stats>
      <ChooseUs></ChooseUs>
      <Offer></Offer>
      <Blog></Blog>
      <Pricing></Pricing>
      <Reviews></Reviews>
      <Newsletter></Newsletter>
    </>
  );
}
