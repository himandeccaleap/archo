import React from "react";
import PageHeader from "../../components/Page-header";
import ContactInfo from "../../components/Contact-info";
import ContactWithMap from "../../components/Contact-with-map";
import LightLayout from "../../layouts/light";

const Contact = () => {
   React.useEffect(() => {
     document.querySelector("body").classList.add("index3");
   }, []);
  return (
    <LightLayout>
      <PageHeader
        title="Contact Us"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "contact us", url: "/contact" },
        ]}
        image="/assets/img/pg2.jpg"
      />
      <section className="contact">
        <ContactInfo />
        <ContactWithMap />
      </section>
    </LightLayout>
  );
};

export default Contact;
