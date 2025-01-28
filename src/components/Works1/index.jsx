import React from "react";
import worksData from "../../data/works1.json";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Works1 = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <section className="work-carousel metro section-padding dark">
      <div className="container-fluid">
        <div className="container">
          <div className="section-head text-center">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8 col-sm-10">
                <h6 className="custom-font wow fadeInDown" data-wow-delay=".3s">
                  Best Works
                </h6>
                <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                  Our Portfolio
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 no-padding">
            <div className="swiper-container">
              <Swiper
                className="swiper-wrapper"
                slidesPerView={2}
                centeredSlides={true}
                autoPlay={true}
                loop={true}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                onSwiper={(swiper) => {
                  setTimeout(() => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;

                    swiper.navigation.destroy();
                    swiper.navigation.init();
                    swiper.navigation.update();
                  });
                }}
                speed={1000}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  767: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                  },
                }}
              >
                {worksData.map((slide) => (
                  <SwiperSlide key={slide.id} className="swiper-slide">
                    <div className="content wow fadeInUp" data-wow-delay=".3s">
                      <div
                        className="item-img bg-img wow imago"
                        style={{
                          backgroundImage: `url(${slide.image})`,
                        }}
                      ></div>
                      <div className="cont">
                        <h6>
                          <Link href="/project-detLinkils">{slide.title}</Link>
                        </h6>
                        <h4>
                          <Link href="/project-details">{slide.secTex}</Link>
                        </h4>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div
                ref={navigationNextRef}
                className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
              >
                <i className="ion-ios-arrow-right"></i>
              </div>
              <div
                ref={navigationPrevRef}
                className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
              >
                <i className="ion-ios-arrow-left"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works1;
