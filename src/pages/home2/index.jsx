/* eslint-disable @next/next/no-img-element */
import React from "react";
import AboutUs2 from "../../components/About-Us2";
import Services2 from "../../components/Services2";
import Portfolio2 from "../../components/Portfolio2";
import Testimonials1 from "../../components/Testimonials1";
import Team1 from "../../components/Team1";
import Blogs2 from "../../components/Blogs2";
import IntroWithVertical from "../../components/Intro-with-vertical";
import Process from "../../components/Process";
import Brands from "../../components/Brands";
import LightLayout from "../../layouts/light";

const Home1 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  return (
    <LightLayout>
      <IntroWithVertical />
      <Services2 />
      <AboutUs2 />
      <Portfolio2 />
      <Process />
      <Team1 />
      <Testimonials1 withBg />
      <Brands />
      <Blogs2 />
    </LightLayout>
  );
};

export default Home1;
