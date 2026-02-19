import React from "react";
import { Breadcrumb } from "../components/includes/Breadcrumb";

export const CaseStudies = () => {
  return (
    <>
      <Breadcrumb title={"Case Studies"} />
      <section className="project-section">
        <div className="project-container-wrapper style2 section-padding pt-0 fix">
          <div className="container">
            <div className="project-wrapper style1">
              <div className="row g-4">
                <div className="col-xl-6 col-md-6">
                  <div
                    className="project-card style1"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="project-thumb">
                      <img
                        src="/assets/images/project/projectCardThumb1_1.png"
                        alt="thumb"
                      />
                    </div>
                    <div className="project-content">
                      <div className="title-wrap">
                        <div className="subtitle">E-commerce</div>
                        <h3 className="title">
                          <a href="/case-study-details">Streamlined Deliveries with InstaExpress</a>
                        </h3>
                      </div>
                      <a className="arrow-btn" href="/case-study-details">
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-md-6">
                  <div
                    className="project-card style1"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <div className="project-thumb">
                      <img
                        src="/assets/images/project/projectCardThumb1_2.png"
                        alt="thumb"
                      />
                    </div>
                    <div className="project-content">
                      <div className="title-wrap">
                        <div className="subtitle">Transport & Logistics</div>
                        <h3 className="title">
                          <a href="/case-study-details">Viapool, smart bus pooling solution</a>
                        </h3>
                      </div>
                      <a className="arrow-btn" href="/case-study-details">
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-md-6">
                  <div
                    className="project-card style1"
                    data-aos="fade-up"
                    data-aos-delay="800"
                  >
                    <div className="project-thumb">
                      <img
                        src="/assets/images/project/projectCardThumb1_3.png"
                        alt="thumb"
                      />
                    </div>
                    <div className="project-content">
                      <div className="title-wrap">
                        <div className="subtitle"> E-commerce</div>
                        <h3 className="title">
                          <a href="/case-study-details">Personalized E-commerce Shopping Solution</a>
                        </h3>
                      </div>
                      <a className="arrow-btn" href="/case-study-details">
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-md-6">
                  <div
                    className="project-card style1"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="project-thumb">
                      <img
                        src="/assets/images/project/projectCardThumb1_3.png"
                        alt="thumb"
                      />
                    </div>
                    <div className="project-content style2">
                      <div className="title-wrap">
                        <div className="subtitle">Real Estate</div>
                        <h3 className="title">
                          <a href="/case-study-details">A Trust-Building Platform for Legacy & Property Management</a>
                        </h3>
                      </div>
                      <a className="arrow-btn" href="/case-study-details">
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </a>
                    </div>
                  </div>
                </div>

                

                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
