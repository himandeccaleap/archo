import React from "react";

const WorkHeader = ({ title, content, center }) => {
  return (
    <header
      className="work-header bg-img valign"
      style={{ backgroundImage: "url(/assets/img/patern.png)" }}
    >
      <div className="container">
        <div className={`row ${center ? "justify-content-center" : ""}`}>
          <div className="col-lg-9">
            <div className={`cont ${center ? "text-center" : ""}`}>
              <h2>
                {typeof title == "object" ? (
                  <>
                    {title.first} <br /> {title.second}
                  </>
                ) : (
                  title
                )}
              </h2>

              <p>
                {content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default WorkHeader;
