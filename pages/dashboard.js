import React, { useContext } from "react";
import { auth } from "@/firebase/config";
import Image from "next/image";
import { AuthContext } from "@/context/Authcontext";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import profileimg from "../public/assests/profileimg.png";
import dashboard from "../public/assests/dashbord.png";
import Link from "next/link";
import Head from "next/head";

const Profile = () => {
  const appUser = useContext(AuthContext);
  const user = auth.currentUser;
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      window.alert(error);
    }
  };

  if (!user) {
    return (
      <p className="w-4/5 m-auto text-base text-center mt-20">
        You are not authorized to view this page. Please{" "}
        <span>
          <Link href="/login" className="underline text-blue2">
            Sign In
          </Link>
        </span>
      </p>
    );
  }
  return (
    <>
      <Head>
        <title>Macbeth | Dashboard</title>
        <meta name="description" content="Your relationship expert" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Image
          src={dashboard}
          alt="public"
          className="h-[6rem] md:h-[10rem]"></Image>
        <div className="w-4/5 m-auto flex sm:flex-col justify-between gap-8">
          <div className="flex flex-col md:w-1/2">
            <div className="flex flex-col xl:flex-row justify-between items-center ">
              <Image
                src={user.photoURL ? user.photoURL : profileimg}
                alt="image"
                className="-mt-8 w-[8rem] lg:w-[13rem] rounded-full"
                width={50}
                height={50}
                unoptimized></Image>
              <div className="dlex flex-col text-center">
                <p className="text-ss md:text-base font-hairline">
                  Welcome, {user.displayName}
                </p>
                <p className="font-hairline">{user.email}</p>
                <div className="flex gap-6 text-white mt-4 text-sm">
                  <button
                    onClick={handleSignOut}
                    className="w-20 bg-blue2 rounded-xl p-2 hover:border-green hover:shadow-3xl hover:scale-105 duration-300 ">
                    Sign out
                  </button>
                  <button className="w-25 bg-blue2 rounded-xl p-2 hover:border-green hover:shadow-3xl hover:scale-105 duration-300 ">
                    Edit profile
                  </button>
                </div>
              </div>
            </div>
            <div className=" font-hairline text-sm bg-background2 h-100 p-4 rounded-lg my-6 flex flex-col md:grid md:grid-cols-2 md:items-center justify-evenly">
              <p>Country:</p>
              <p>Gender:</p>
              <p>Marital Status:</p>
              <p>City of residence:</p>
              <p>Occupation:</p>
            </div>
          </div>
          <div className="bg-background3 md:w-1/2 text-center sm:mb-4">
            <p className="my-4 text-base font-hairline">Subscription:</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
