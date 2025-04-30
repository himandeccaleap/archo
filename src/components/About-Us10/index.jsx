'use client'
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import homeData from "../../data/HomeData.json"

const AboutCompany = () => {
  const { about, founder, awards } = homeData;

  return (
    <>
      {/* About Section */}
      <section className="section-full mobile-page-padding mt-10 p-t80 p-b80  about-section">
        <div className="container">
          <div className="row align-items-center">
            {/* YouTube Video Section */}
 

            {/* Text Section */}
            <motion.div 
              className="col-md-12 col-xl-12 col-sm-12 d-flex align-items-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="about-home-2 p-4">
                <h3 className="m-t0 sx-title">{about.heading}</h3>
                <p>{about.text}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-full mobile-page-padding mt-100 p-t80 p-b80 bg-light founder-section">
        <div className="container">
          <div className="row align-items-center flex-md-row-reverse" style={{ minHeight: "700px" }}>
            {/* Image */}
            <motion.div 
              className="col-md-6 col-xl-6 col-sm-12 mb-4 mb-md-0"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div 
                className="founder-section-image bg-bottom-left bg-no-repeat bg-cover w-100 h-100" 
                style={{ backgroundImage: `url(${founder.image})`, minHeight: "700px" }}
              ></div>
            </motion.div>

            {/* Text */}
            <motion.div 
              className="col-md-6 col-xl-6 col-sm-12 d-flex align-items-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="about-home-2 p-4">
                <h3 className="m-t0 sx-title">{founder.heading}</h3>
                <p>{founder.text}</p>
                <blockquote className="founder-quote">"{founder.quote}"</blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Awards Section */}
      <section className="section-full mobile-page-padding p-t80 p-b80  awards-section">
        <div className="container">
          <div className="row align-items-center">
            {/* Image */}
            <motion.div 
              className="col-md-8 col-xl-8 col-sm-12 mb-4 mb-md-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div 
                className="awards-section-image bg-bottom-left bg-no-repeat bg-cover w-100 h-100" 
                style={{ backgroundImage: `url(${awards.image})` }}
              ></div>
            </motion.div>

            {/* Text */}
            <motion.div 
              className="col-md-4 col-xl-4 col-sm-4 d-flex align-items-center p-0"  // Add p-0 to remove padding
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="about-home-2 p-4" style={{ margin: 0 }}>  {/* Removing extra padding */}
                <h3 className="m-t0 sx-title">{awards.heading}</h3>
                <p>{awards.text}</p>

                {/* Ordered List for Awards */}
                <motion.ol
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  style={{ marginBottom: '10px' }} // Reduces space between lists
                >
                  <li>Club Amida – IIID Anchor Awards 2012 Runner Up (Hospitality Category)</li>
                  <li>Exhibition Stall - A&I 2013 Winner of Best Product Exhibit Display</li>
                </motion.ol>

                {/* Ordered List for Publishing */}
                <motion.ol
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  style={{ marginTop: '0', marginBottom: '0' }} // Reduces space between lists
                >
                  <li>Better Interior – 2009</li>
                  <li>Inside – 2013</li>
                  <li>Society Interior – November 2015</li>
                  <li>A&I Digest – January 2015</li>
                  <li>Kitchen Desire – February 2016</li>
                </motion.ol>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutCompany;
