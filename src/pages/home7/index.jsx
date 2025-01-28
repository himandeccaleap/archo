import React from "react";
import Team3 from "../../components/Team3";
import MainLayout from "../../layouts/main";
import Video2 from "../../components/Video2";
import Blogs3 from "../../components/Blogs3";
import AboutUs8 from "../../components/About-Us8";
import Services7 from "../../components/Services7";
import Testimonials1 from "../../components/Testimonials1";
import WorkWithoutFilter from "../../components/Work-Without-Filter";
import IntroWithVertical2 from "../../components/Intro-with-vertical2";

const Home7 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  });
  return (
    <MainLayout>
      <IntroWithVertical2 />
      <AboutUs8 />
      <Services7 />
      <WorkWithoutFilter />
      <Video2 />
      <Team3 />
      <Testimonials1 bigTitle />
      <Blogs3 smallTitle />
    </MainLayout>
  );
};

export default Home7;
