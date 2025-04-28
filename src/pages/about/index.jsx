import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import AboutUs9 from "../../components/About-Us9";
import AboutUs7 from "../../components/About-Us7";
import AboutUs10 from "../../components/About-Us10";
import Services3 from "../../components/Services3";
import Skills2 from "../../components/Skills2";
import Testimonials1 from "../../components/Testimonials1";
import Team2 from "../../components/Team2";
import LightLayout from "../../layouts/light";

const About = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  return (
    <LightLayout>
      <PageHeader
        title="About Us"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "about us", url: "/about" },
        ]}
      />
      {/* <AboutUs7 /> */}
      <AboutUs10 />
      {/* <Services3 bigTitle grid />
      <Testimonials1 bigTitle />
      <Team2 />
      <Skills2 /> */}
    </LightLayout>
  );
};

export default About;
