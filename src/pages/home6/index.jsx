import React from "react";
import Blogs5 from "../../components/Blogs5";
import Intro5 from "../../components/Intro5";
import MainSkin from "../../layouts/main-skin";
import Process2 from "../../components/Process2";
import AboutUs7 from "../../components/About-Us7";
import Services6 from "../../components/Services6";
import Portfolio3 from "../../components/Portfolio3";
import SkillsCircle2 from "../../components/Skills-Circle2";
import VideoWithTestimonials from "../../components/Video-with-testimonials";

const Home6 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index2");
  }, []);
  return (
    <MainSkin>
      <Intro5 />
      <AboutUs7 />
      <Portfolio3 />
      <Process2 />
      <Services6 />
      <VideoWithTestimonials />
      <SkillsCircle2 />
      <Blogs5 />
    </MainSkin>
  );
};

export default Home6;
