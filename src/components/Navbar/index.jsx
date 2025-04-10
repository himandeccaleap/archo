/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import getSiblings from "../../common/getSiblings";

const Navbar = ({ navbarRef, logoRef, logoClass }) => {
  const [logo, setLogo] = useState(appData.lightLogo);
  const [textColor, setTextColor] = useState("text-light");
  const [bgColor, setBgColor] = useState("transparent");

  useEffect(() => {
    const updateNavbarStyle = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 360) {
        // After scrolling 360px, make background white and text dark
        setBgColor("rgba(255, 255, 255, 1)");
        setLogo(appData.darkLogo);
        setTextColor("text-dark");
      } else {
        // Default state: Transparent background with white text
        setBgColor("transparent");
        setLogo(appData.lightLogo);
        setTextColor("text-light");
      }
    };

    updateNavbarStyle();
    window.addEventListener("scroll", updateNavbarStyle);
    return () => window.removeEventListener("scroll", updateNavbarStyle);
  }, []);

  const handleDropdown = (e) => {
    getSiblings(e.target.parentElement)
      .filter((item) => item.classList.contains("show"))
      .forEach((item) => {
        item.classList.remove("show");
        item.childNodes[0]?.setAttribute("aria-expanded", false);
        item.childNodes[1]?.classList.remove("show");
      });

    e.target.parentElement.classList.toggle("show");
    e.target.setAttribute("aria-expanded", true);
    e.target.parentElement.childNodes[1].classList.toggle("show");
  };

  const handleMobileDropdown = () => {
    document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans");
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ${textColor}`}
      ref={navbarRef}
      style={{
        backgroundColor: bgColor,
        transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
        position: "fixed",
        width: "100%",
        zIndex: 1000,
        minHeight: "50px",
      }}
    >
      <div className="container">
        <Link href="/">
          <a className={`logo ${logoClass || ""}`}>
            <img src={logo} alt="logo" ref={logoRef} />
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/work2">
                <a className="nav-link">Portfolio</a>
              </Link>
            </li>
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span className="nav-link dropdown-toggle" data-toggle="dropdown">
                Blog
              </span>
              <div className="dropdown-menu">
                <Link href="/blogs">
                  <a className="dropdown-item">Blogs</a>
                </Link>
                <Link href="/blog-details">
                  <a className="dropdown-item">Post Details</a>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className="nav-link">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
