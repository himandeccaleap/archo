/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Link from "next/link";

const Brands2 = () => {
  return (
    <section className="clients-brand pb-80">
      <div className="container">
        <div className="brands-crs row">
          <div className="brands col-lg-2 col-4">
            <div className="item mb-40" data-wow-delay=".3s">
              <div className="img">
                <img src="/assets/img/clients/brands/01.png" alt="" />
              </div>
              <Split>
                <Link href="#" data-splitting>
                  <a className="link words chars splitting">www.Arch.com</a>
                </Link>
              </Split>
            </div>
          </div>
          <div className="brands col-lg-2 col-4">
            <div className="item mb-40" data-wow-delay=".6s">
              <div className="img">
                <img src="/assets/img/clients/brands/02.png" alt="" />
              </div>
              <Split>
                <Link href="#" data-splitting>
                  <a className="link words chars splitting">www.Arch.com</a>
                </Link>
              </Split>
            </div>
          </div>
          <div className="brands col-lg-2 col-4">
            <div className="item mb-40" data-wow-delay=".8s">
              <div className="img">
                <img src="/assets/img/clients/brands/03.png" alt="" />
              </div>
              <Split>
                <Link href="#" data-splitting>
                  <a className="link words chars splitting">www.Arch.com</a>
                </Link>
              </Split>
            </div>
          </div>
          <div className="brands col-lg-2 col-4">
            <div className="item mb-40" data-wow-delay=".3s">
              <div className="img">
                <img src="/assets/img/clients/brands/04.png" alt="" />
              </div>
              <Split>
                <Link href="#" data-splitting>
                  <a className="link words chars splitting">www.Arch.com</a>
                </Link>
              </Split>
            </div>
          </div>
          <div className="brands col-lg-2 col-4">
            <div className="item mb-40" data-wow-delay=".4s">
              <div className="img">
                <img src="/assets/img/clients/brands/05.png" alt="" />
              </div>
              <Split>
                <Link href="#" data-splitting>
                  <a className="link words chars splitting">www.Arch.com</a>
                </Link>
              </Split>
            </div>
          </div>
          <div className="brands col-lg-2 col-4">
            <div className="item mb-40" data-wow-delay=".7s">
              <div className="img">
                <img src="/assets/img/clients/brands/06.png" alt="" />
              </div>
              <Split>
                <Link href="#" data-splitting>
                  <a className="link words chars splitting">www.Arch.com</a>
                </Link>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands2;
