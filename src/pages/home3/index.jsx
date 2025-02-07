/* eslint-disable @next/next/no-img-element */
import React from "react";
import AboutUs6 from "../../components/About-Us6";
import AfterBefore from "../../components/After-Before";
import Blogs2 from "../../components/Blogs2";
import Intro3 from "../../components/Intro3";
import Numbers from "../../components/Numbers";
import Services3 from "../../components/Services3";
import Team1 from "../../components/Team1";
import Testimonials1 from "../../components/Testimonials1";
import VideoWithTestimonials from "../../components/Video-with-testimonials"; 
import Works4 from "../../components/Work-Four-Column";

import SkillsCircle2 from "../../components/Skills-Circle2";
import LightLayout from "../../layouts/light";
const Home3 = () => {
 React.useEffect(() => {
   document.querySelector("body").classList.add("homepage");
 }, []);
  return (
    <LightLayout>
      <Intro3 />
      <AboutUs6/>
      <Services3/>
      {/* <Numbers /> */}
      {/* <Team1 /> */}
      {/* <AfterBefore /> */}
      <Works4 />
      <Testimonials1 />
      <Blogs2 />
    </LightLayout>
  );
};

export default Home3;
