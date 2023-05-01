import "@/styles/globals.css";
import { AuthProvider } from "@/context/Authcontext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      delay: 300,
      duration: 1000,
    });
  }, []);
  return (
    <>
      <AuthProvider>
        <Navbar></Navbar>
        <Component {...pageProps} />
        <ToastContainer />
        <Footer></Footer>
      </AuthProvider>
    </>
  );
}
