import Image from "next/image";
import aboutData from "../../data/HomeData.json";
import blogData from "../../data/blogData.json";

const AboutSection = () => {
  return (
    <div className="about-sections">

      {aboutData.sections.map((section) => (
        <section
          key={section.id}
          className={`section-block ${section.bgClass}`}
          aria-label={section.id}
        >
          <div className="container-fluid">

            {/* About Us Section */}
            {section.id === "about-us" && (
              <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                  <div className="about-content">
                    <h5 className="subheading">{section.subheading}</h5>
                    <h2 className="heading">{section.heading}</h2>
                    <p className="textdetail">{section.text}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Founder Section */}
            {section.id === "founder" && (
              <div className="row align-items-center">
                <div className="col-lg-6 p-5">
                  <div className="founder-content">
                    <blockquote className="founder-quote">"{section.quote}"</blockquote>
                    <h5 className="founder-author">-{section.author}-</h5>
                    <p className="founder-designation">{section.designation}</p>
                  </div>
                </div>
                <div className="col-lg-6 p-0">
                  <div className="founder-image">
                    <Image
                      src={`/${section.image}`}
                      alt={section.alt}
                      width={800}
                      height={600}
                      className="img-fluid object-fit-cover"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Awards Section */}
            {section.id === "awards" && (
              <div className="row align-items-center">
                <div className="col-lg-6 p-0">
                  <div className="awards-image">
                    <Image
                      src={`/${section.image}`}
                      alt={section.alt}
                      width={800}
                      height={600}
                      className="img-fluid object-fit-cover"
                    />
                  </div>
                </div>
                <div className="col-lg-6 p-5">
                  <div className="awards-content">
                    <h5 className="subheading">{section.subheading}</h5>
                    <h2 className="heading">{section.heading}</h2>
                    <p className="textdetail">{section.text}</p>
                    <div className="btn-content mt-4">
                      <a
                        href={section.buttonLink}
                        className="btn btn-primary"
                      >
                        {section.buttonText}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </section>
      ))}

    </div>
  );
};

export default AboutSection;
