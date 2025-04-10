import Image from "next/image";
import aboutData from "../../data/HomeData.json";

const AboutSection = () => {
  return (
    <div>
      {aboutData.sections.map((section) => (
        <section
          key={section.id}
          className={`no-top no-bottom ${section.bgClass}`}
          aria-label={section.id}
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              {/* About Us Section - Text Only */}
              {section.id === "about-us" && (
                <div className="col-md-12 text-left p-5">
                  <div className="detailcontent">
                    <div className="subheading">{section.subheading}</div>
                    <div className="heading">{section.heading}</div>
                    <div className="textdetail ">{section.text}</div>
                  </div>
                </div>
              )}

              {/* Founder Section */}
              {section.id === "founder" && (
                <>
                  <div className="col-md-6 text-left p-5">
                    <div className="detailcontent">
                      <div className="textdetail text-dark">"{section.quote}"</div>
                      <div className="subheading pt-3 text-dark">-{section.author}-</div>
                      <div className="bold text-dark">{section.designation}</div>
                    </div>
                  </div>
                  <div className="col-md-6 p-0">
                    <Image
                      src={`/${section.image}`}
                      alt={section.alt}
                      className="img-fluid"
                      width={800}
                      height={600}
                    />
                  </div>
                </>
              )}

              {/* Awards Section */}
              {section.id === "awards" && (
                <>
                  <div className="col-md-6 p-0">
                    <Image
                      src={`/${section.image}`}
                      alt={section.alt}
                      className="img-fluid"
                      width={800}
                      height={600}
                    />
                  </div>
                  <div className="col-md-6 text-left p-5">
                    <div className="detailcontent">
                      <div className="subheading">{section.subheading}</div>
                      <div className="heading">{section.heading}</div>
                      <div className="textdetail">{section.text}</div>
                      <div className="btn-content mt-3">
                        <a href={section.buttonLink} className="btn btn-transparent text-light">
                          {section.buttonText}
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default AboutSection;
