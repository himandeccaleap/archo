/* eslint-disable @next/next/no-css-tags */
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import appData from "../data/app.json";

const LightLayout = ({ children, footerClass }) => {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const [logo, setLogo] = useState(appData.lightLogo); // Default logo

  useEffect(() => {
    const updateNavbarStyle = () => {
      if (!navbarRef.current || !logoRef.current) return;

      const navbar = navbarRef.current;
      const logoElement = logoRef.current;

      // Get the computed background color of the body
      const bodyBg = window.getComputedStyle(document.body).backgroundColor;
      const isDarkBackground = (color) => {
        const rgb = color.match(/\d+/g);
        if (!rgb) return false;
        const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
        return brightness < 128;
      };

      if (window.pageYOffset > 300 || isDarkBackground(bodyBg)) {
        navbar.classList.add("nav-scroll");
        setLogo(appData.darkLogo); // Dark logo when scrolling or dark background
      } else {
        navbar.classList.remove("nav-scroll");
        setLogo(appData.lightLogo); // Light logo for bright background
      }
    };

    updateNavbarStyle();
    window.addEventListener("scroll", updateNavbarStyle);
    window.addEventListener("resize", updateNavbarStyle);

    return () => {
      window.removeEventListener("scroll", updateNavbarStyle);
      window.removeEventListener("resize", updateNavbarStyle);
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/css/style-light.css" />
      </Head>
      <Navbar navbarRef={navbarRef} logoRef={logoRef} logo={logo} />
      {children}
      <Footer classText={footerClass} />
    </>
  );
};

export default LightLayout;
