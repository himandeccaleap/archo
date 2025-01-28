import React from "react";
import Team2 from "../../components/Team2";
import Video from "../../components/Video";
import MainLayout from "../../layouts/main";
import Blogs3 from "../../components/Blogs3";
import Brands2 from "../../components/Brands2";
import AboutUs5 from "../../components/About-Us5";
import Services5 from "../../components/Services5";
import PricingTable from "../../components/Pricing-Table";
import Testimonials2 from "../../components/Testimonials2";
import WorkWithoutFilter from "../../components/Work-Without-Filter";
import IntroWithHorizontal2 from "../../components/Intro-with-horizontal2";

const Home4 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index4");
  }, []);
  return (
    <MainLayout logoClassText="dis">
      <IntroWithHorizontal2 />
      <div className="main-content">
        <AboutUs5 />
        <Services5 />
        <WorkWithoutFilter vis />
        <Testimonials2 />
        <PricingTable />
        <Team2 />
        <Video />
        <Blogs3 />
        <Brands2 />
      </div>
    </MainLayout>
  );
};

export default Home4;
