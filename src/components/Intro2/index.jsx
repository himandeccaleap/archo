'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import Link from 'next/link';
import projectsDetails from '../../data/projectsdetails.json';

export default function Slider() {
  return (
    <section className="slider-section w-full">
      <Swiper
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full h-[700px]"
      >
        {projectsDetails.map((slide) => (
          slide.images.map((image, index) => (
            <SwiperSlide key={`${slide.id}-${index}`}>
              <div className="relative w-full h-full">
                <Image
                  src={image}
                  alt={`Slide ${slide.id} - Image ${index + 1}`}
                  width={1920}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))
        ))}
      </Swiper>
    </section>
  );
}
