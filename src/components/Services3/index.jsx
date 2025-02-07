import React from "react";
import services3Data from "../../data/services3.json";
import Link from "next/link";

const Services3 = ({ bigTitle, grid }) => {
  return (
    <section
      className={`${!grid ? "services" : "services-grid"} section-padding ${
        !grid ? "bg-gray" : "pt-0"
      } `}
    >
      <div className="container ">
        {!bigTitle ? (
          <div className="section-head text-center ">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8 col-sm-10">
                <h6 className="custom-font wow fadeInDown" data-wow-delay=".3s">
                  Best Features
                </h6>
                <h4 className="playfont wow flipInX text-light" data-wow-delay=".5s">
                  Our Services
                </h4>
              </div>
            </div>
          </div>
        ) : (
          <div className="main-header text-center">
            <h3>Best Features.</h3>
            <div className="tex-bg">Services</div>
          </div>
        )}

        <div className="row">
          {services3Data.map((item, index) => (
            <div className="col-lg-4 mb-25" key={item.id}>
              <div
                className="item-bx bg-img wow fadeInUp mb-20"
                data-wow-delay={index == 0 ? ".3s" : index == 1 ? ".5s" : ".7s"}
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <span className={item.icon}></span>
                <h6 className="mb-20">{item.title}</h6>
                <p>{item.content}</p>
                <Link href="/about">
                  <a className={`more ${!grid ? "custom-font" : ""} mt-30`}>
                    Read More
                  </a>
                </Link>
              </div>
              
            
            </div>
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services3;
