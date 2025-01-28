import React from "react";
import Link from 'next/link'

const PricingTable = () => {
  return (
    <section className="price section-padding bg-blc">
      <div className="container">
        <div className="main-header text-center">
          <h3>Pricing Table.</h3>
          <div className="tex-bg">Pricing</div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div
              className="item text-center wow fadeInUp md-mb50"
              data-wow-delay=".3s"
            >
              <div className="type">
                <h5 className="">Basic Plan</h5>
              </div>
              <div className="amount">
                <h2>
                  <span>$</span> 10
                </h2>
              </div>
              <div className="feat">
                <p>
                  Morbi bibendum nislid porttitor ultrices odio elit vestibulum
                  metus, ac semper velit quam sed nulla aenean eu hendreritt.
                </p>
              </div>
              <div className="order">
                <Link href="#" className="btn-curve btn-lit">
                  <a><span>Purchase Now</span></a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="item active text-center wow fadeInUp md-mb50"
              data-wow-delay=".5s"
            >
              <div className="type">
                <h5 className="">Business Plan</h5>
              </div>
              <div className="amount">
                <h2>
                  <span>$</span> 50
                </h2>
              </div>
              <div className="feat">
                <p>
                  Morbi bibendum nisl id porttitor ultrices odio elit vestibulum
                  metus, ac semper velit quam sed nulla aenean eu hendreritt.
                </p>
              </div>
              <div className="order">
                <Link href="#" className="btn-curve btn-wit">
                  <a><span>Purchase Now</span></a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item text-center wow fadeInUp" data-wow-delay=".7s">
              <div className="type">
                <h5 className="">Enterprice Plan</h5>
              </div>
              <div className="amount">
                <h2>
                  <span>$</span> 120
                </h2>
              </div>
              <div className="feat">
                <p>
                  Morbi bibendum nisl id porttitor ultrices odio elit vestibulum
                  metus, ac semper velit quam sed nulla aenean eu hendreritt.
                </p>
              </div>
              <div className="order">
                <Link href="#" className="btn-curve btn-lit">
                  <a><span>Purchase Now</span></a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
