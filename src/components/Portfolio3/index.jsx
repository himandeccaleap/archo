/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import portfolio3Data from '../../data/portfolio3.json'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

SwiperCore.use([Navigation, Pagination]);

const Portfolio3 = () => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    });
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);

  return (
    <section className="portfolio curs section-padding pt-0">
      <div className="container">
        <div className="section-head">
          <h3>Works</h3>
        </div>
        <div className="swiper-container work-curs">
          {!load ? (
            <Swiper
              speed={1000}
              slidesPerView="auto"
              spaceBetween={30}
              breakpoints={{
                500: {
                  slidesPerView: 1,
                },
                700: {
                  slidesPerView: 1.5,
                },
              }}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              pagination={{
                type: "fraction",
                clickable: true,
                el: paginationRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
                swiper.params.pagination.el = paginationRef.current;
              }}
              onSwiper={(swiper) => {
                setTimeout(() => {
                  for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].childNodes[0].setAttribute(
                      "data-swiper-parallax",
                      0.75 * swiper.width
                    );
                  }

                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;

                  swiper.params.pagination.el = paginationRef.current;

                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();

                  swiper.pagination.destroy();
                  swiper.pagination.init();
                  swiper.pagination.update();
                });
              }}
              className="swiper-wrapper"
            >
              {portfolio3Data.map((slide) => (
                <SwiperSlide key={slide.id} className="swiper-slide">
                  <div className="item">
                    <div className="img">
                      <img src={slide.image} alt="" />
                    </div>
                    <div className="cont">
                      <h5>
                        <Link href="/project-details">{slide.title}</Link>
                      </h5>
                      {slide.tags.map((tag) => (
                        <span key={tag.id}>{tag.name}</span>
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : null}
        </div>

        <div className="controls">
          <div
            className="swiper-button-prev swiper-nav-ctrl prev-ctrl"
            ref={navigationPrevRef}
          >
            <i className="fas fa-chevron-left"></i>
          </div>
          <div
            className="swiper-button-next swiper-nav-ctrl next-ctrl"
            ref={navigationNextRef}
          >
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio3;
