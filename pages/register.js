import React, { useState, useContext } from "react";
import Head from "next/head";
import { auth, googleProvider, facebookProvider } from "@/firebase/config";
import {
  signInWithPopup,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import Image from "next/image";
import register from "../public/assests/register.png";
import {
  BsEye,
  BsGoogle,
  BsTwitter,
  BsFacebook,
  BsEyeSlash,
} from "react-icons/bs";
import Link from "next/link";
import { toast } from "react-toastify";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const router = useRouter();

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.success("account created successfully");
      await updateProfile(userCredential.user, {
        displayName: name,
      });
      return router.push("login");
    } catch (error) {
      const { code, message } = error;
      if (code === "auth/email-already-in-use") {
        toast.error("Your email address is already in use");
      }
      console.error(code, message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      await updateProfile(user, {
        displayName: user.displayName,
        photoURL: user.photoURL,
      });
      console.log(user, accessToken);
      return router.push("dashboard");
    } catch (error) {
      const { code, message, email, credential } = error;
      console.error(code, message, email, credential);
      toast.error("signin failed");
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const user = result.user;
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      console.log(user, accessToken);
      return router.push("dashboard");
    } catch (error) {
      const { code, message, email, credential } = error;
      console.error(code, message, email, credential);
      toast.error("signin failed");
    }
  };

  const togglePassword = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <>
      <Head>
        <title>Macbeth | Register</title>
        <meta name="description" content="Your relationship expert" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col md:flex-row w-4/5 m-auto justify-between my-10">
        <div className="flex flex-col md:w-2/5">
          <div className="flex items-center justify-evenly mb-10">
            <button onClick={handleGoogleLogin}>
              <BsGoogle
                size={45}
                color="red"
                className="shadow-lg p-2 rounded-lg hover:scale-110"></BsGoogle>
            </button>
            <button onClick={() => toast.info("not functional yet")}>
              <BsTwitter
                size={45}
                color="blue"
                className="shadow-lg p-2 rounded-lg hover:scale-110"></BsTwitter>
            </button>
            <button onClick={handleFacebookLogin}>
              <BsFacebook
                size={45}
                color="blue"
                className="shadow-lg p-2 rounded-lg hover:scale-110"></BsFacebook>
            </button>
          </div>
          <div className="flex items-center py-4">
            <div className="flex-grow h-px bg-gray"></div>
            <span className="flex-shrink text-lg text-gray px-4 italic font-light">
              or
            </span>
            <div className="flex-grow h-px bg-gray"></div>
          </div>
          <form onSubmit={handleRegister} className="flex flex-col w-full">
            <label htmlFor="name" className="font-hairline">
              Name: <br></br>
              <input
                className="w-full shadow-lg h-10 mt-2 text-center text-black rounded-lg mb-6"
                name="name"
                type="text"
                id="name"
                placeholder="John Doe"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}></input>
            </label>
            <label htmlFor="email" className="font-hairline">
              Email Address: <br></br>
              <input
                className="w-full shadow-lg h-10 mt-2 text-center text-black rounded-lg mb-6"
                name="email"
                type="email"
                id="email"
                placeholder="example@email.com"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}></input>
            </label>
            <div className="relative">
              <label htmlFor="password" className="font-hairline">
                Password: <br></br>
                <input
                  className="w-full shadow-lg h-10 mt-2 text-center text-black rounded-lg mb-6"
                  name="password"
                  type={passwordShown ? "text" : "password"}
                  id="password"
                  placeholder=""
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}></input>
                <button
                  onClick={togglePassword}
                  className="absolute top-11 right-7 ">
                  {passwordShown ? <BsEye></BsEye> : <BsEyeSlash></BsEyeSlash>}
                </button>
              </label>
            </div>
            <button
              type="submit"
              className="bg-blue2 text-white p-2 rounded-lg hover:border-green hover:shadow-3xl hover:scale-105 duration-300 ">
              Register
            </button>
          </form>
          <p className="mt-10 text-center">
            {" "}
            Do you already have an account?{" "}
            <span>
              <Link
                href="/login"
                className="text-blue2 font-hairline underline">
                Login
              </Link>
            </span>
          </p>
        </div>
        <Image
          src={register}
          alt="registerimg"
          className="md:w-2/5 md:h-125"
          unoptimized></Image>
      </div>
    </>
  );
};

export default Register;
