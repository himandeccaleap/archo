import React from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const ProjectVideo = () => {
  React.useEffect(() => {
    console.clear();
  }, []);
  const [isOpen, setOpen] = React.useState(false);
  return (
    <section>
      <div className="container-fluid">
        <div
          className="video-wrapper section-padding bg-img parallaxie valign"
          style={{
            backgroundImage: "url(/assets/img/portfolio/project1/vid.jpg)",
          }}
          data-overlay-dark="4"
        >
          <div className="full-width text-center">
            {typeof window !== "undefined" && (
              <ModalVideo
                autoplay
                isOpen={isOpen}
                videoId="AzwC6umvd1s"
                onClose={() => setOpen(false)}
              />
            )}
            <a
              className="vid"
              onClick={(e) => {
                e.preventDefault();
                setOpen(true);
              }}
              href="https://vimeo.com/127203262"
            >
              <div className="vid-butn">
                <span className="icon">
                  <i className="fas fa-play"></i>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectVideo;
