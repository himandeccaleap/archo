import React from "react";
import portfolio1Data from "../../data/portfolio1.json";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
const Portfolio1 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <section className="portfolio section-padding">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head text-center">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-10">
                  <h6 className="wow fadeInDown" data-wow-delay=".3s">
                    Best Works
                  </h6>
                  <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                    Our Portfolio
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="filtering text-center col-12 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div
                className="filter bg-img bg-repeat"
                style={{ backgroundImage: "url(/assets/img/line-pattern1.png" }}
              >
                <span data-filter="*" className="active">
                  All
                </span>
                {portfolio1Data.filtersName.map((filter) => (
                  <span data-filter={filter.filterClass} key={filter.id}>
                    {filter.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="gallery twsty full-width">
              {portfolio1Data.portfolio.map((item) => (
                <div
                  key={item.id}
                  className={`items ${item.filterClass} mt-50 wow fadeInUp`}
                  data-wow-delay=".3s"
                >
                  <div
                    className="item-img bg-img wow imago"
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  >
                    <Link href="/project-details">
                      <a>
                        <div className="item-img-overlay valign"></div>
                      </a>
                    </Link>
                  </div>
                  <div className="info mt-10">
                    <h5>{item.title}</h5>
                    <span>{item.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio1;
