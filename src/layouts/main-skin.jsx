/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

const MainSkin = ({ children }) => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    const navbar = navbarRef.current;
    const logo = logoRef.current;

    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
        logo.setAttribute("src", "/assets/img/logo-dark.png"); // Changed to dark
      } else {
        navbar.classList.remove("nav-scroll");
        logo.setAttribute("src", "/assets/img/logo-light.png"); // Light when at top
      }
    };

    // Initial check on mount
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/skin-green.css" />
      </Head>
      <Navbar navbarRef={navbarRef} logoRef={logoRef} />
      {children}
      <Footer />
    </>
  );
};

export default MainSkin;
