/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Footer = ({ classText }) => {
  return (
    <footer className={`${classText ? classText : ""}`}>
      <div className="container">
        <div className="row">

          {/* Contact Us Section */}
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Official Address</h6>
                    <p>C1/403, Chinar, Silver Oak Society, Kalyani Nagar, Pune, 411014, India</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>designers@vismaya.co.in</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>+91 8793058081</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="col-lg-4">
            <div className="item md-mb50 quick-links">
              <div className="title">
                <h5>Quick Links</h5>
              </div>
              <ul>
                <li>
                  <Link href="/about"><a>About Us</a></Link>
                </li>
                <li>
                  <Link href="/services"><a>Services</a></Link>
                </li>
                <li>
                  <Link href="/portfolio"><a>Portfolio</a></Link>
                </li>
                <li>
                  <Link href="/contact"><a>Contact</a></Link>
                </li>
                <li>
                  <Link href="/blogs"><a>Blog</a></Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Logo & Social Section */}
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src="/assets/img/logo-light.png" alt="Vismaya Logo" />
              </div>
              <div className="social">
                <Link href="#"><a><i className="fab fa-facebook-f"></i></a></Link>
                <Link href="#"><a><i className="fab fa-twitter"></i></a></Link>
                <Link href="#"><a><i className="fab fa-instagram"></i></a></Link>
                <Link href="#"><a><i className="fab fa-youtube"></i></a></Link>
              </div>
              <div className="copy-right">
                <p>
                  © 2025, vismaya. Made with passion by <Link href="#"><a>vismaya</a></Link>.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
