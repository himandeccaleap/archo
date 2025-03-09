/* eslint-disable @next/next/no-img-element */
import React from "react";
import AboutUs6 from "../../components/About-Us6";
import AfterBefore from "../../components/After-Before";
import Blogs2 from "../../components/Blogs2";
import Intro3 from "../../components/Intro3";
import Numbers from "../../components/Numbers";
<<<<<<< HEAD
import Services1 from "../../components/Services3";
import Team1 from "../../components/Team1";
import Testimonials1 from "../../components/Testimonials1";
import VideoWithTestimonials from "../../components/Video-with-testimonials"; 
import Works3 from "../../components/Work-Four-Column";
import Video from "../../components/Project-Video";
=======
import Services3 from "../../components/Services3";
import Team1 from "../../components/Team1";
import Testimonials1 from "../../components/Testimonials1";
import VideoWithTestimonials from "../../components/Video-with-testimonials"; 
import Works4 from "../../components/Work-Four-Column";

>>>>>>> fad9ec5b61506183895c2a7f5fda1da59fa7fd5d
import SkillsCircle2 from "../../components/Skills-Circle2";
import Brands2 from "../../components/Brands";
import LightLayout from "../../layouts/light";
const Home3 = () => {
 React.useEffect(() => {
   document.querySelector("body").classList.add("homepage");
 }, []);
  return (
    <LightLayout>
      <Intro3 />
      <AboutUs6/>
<<<<<<< HEAD
      <Services1/>
      <Numbers />
      {/* <Team1 />
      <AfterBefore /> */}
      {/* <Video /> */}
      <Works3 />
=======
      <Services3/>
      {/* <Numbers /> */}
      {/* <Team1 /> */}
      {/* <AfterBefore /> */}
      <Works4 />
>>>>>>> fad9ec5b61506183895c2a7f5fda1da59fa7fd5d
      <Testimonials1 />
      <Blogs2 />
    </LightLayout>
  );
};

export default Home3;
