import Slider from "react-slick";
import Image from "next/image";
import projectsData from "../../data/projectsdetails.json";

const ProjectSlider = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: true
  };

  return (
    <section className="slider-section">
      <div className="container">
        {projectsData.map((project) => (
          <div key={project.id} className="project-slide">
            <Slider {...sliderSettings}>
              {project.images.map((img, index) => (
                <div key={index} className="slider-item">
                  <Image
                    src={img}
                    alt={`Project ${project.id} - Slide ${index + 1}`}
                    width={1920}
                    height={900}
                    className="slider-image"
                  />
                </div>
              ))}
            </Slider>
            <div className="slider-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} className="btn btn-primary">
                Details <i className="fa fa-angle-right"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSlider;
