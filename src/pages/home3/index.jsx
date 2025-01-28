/* eslint-disable @next/next/no-img-element */
import React from "react";
import AboutUs8 from "../../components/About-Us8";
import AfterBefore from "../../components/After-Before";
import Blogs2 from "../../components/Blogs2";
import Intro3 from "../../components/Intro3";
import Numbers from "../../components/Numbers";
import Services5 from "../../components/Services6";
import Team1 from "../../components/Team1";
import Testimonials1 from "../../components/Testimonials1";
import VideoWithTestimonials from "../../components/Video-with-testimonials"; 
import Works1 from "../../components/Works1";

import SkillsCircle2 from "../../components/Skills-Circle2";
import LightLayout from "../../layouts/light";
const Home3 = () => {
 React.useEffect(() => {
   document.querySelector("body").classList.add("homepage");
 }, []);
  return (
    <LightLayout>
      <Intro3 />
      <AboutUs8/>
      <Services5/>
      <Team1 />
      {/* <AboutUs3 /> */}
      <AfterBefore />
      <Numbers />
      <Testimonials1 />
      <Works1 />
      <Blogs2 />
    </LightLayout>
  );
};

export default Home3;
