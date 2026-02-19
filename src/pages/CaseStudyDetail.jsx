import React from "react";
import { Breadcrumb } from "../components/includes/Breadcrumb";

export const CaseStudyDetail = () => {
  return (
    <>
      <Breadcrumb title={"Case Study Detail"} />
      <div className="project-details">
        <div className="container">

          {/* Section 1 */}
          <div className="project-details-info">
            <div className="row gx-60 gy-6">
              <div className="col-xl-5">
                <div
                  className="content-thumb img-custom-anim-right mt-0"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <img
                    src="/assets/images/project/projectThumb1_1.png"
                    alt="project"
                  />
                </div>
              </div>

              <div className="col-xl-7">
                <div className="project-details-content">
                  <h2 data-aos="fade-up" data-aos-delay="300">
                    Building Excellence Every Step of the Way
                  </h2>
                  <p data-aos="fade-up" data-aos-delay="400">
                    Technology refers to the application of scientific knowledge
                    for practical purposes, particularly in industry and everyday life.
                  </p>
                  <ul data-aos="fade-up" data-aos-delay="600">
                    <li>Push for sustainable technology</li>
                    <li>Green energy solutions and waste reduction</li>
                    <li>Intuitive interfaces and wearable technology</li>
                    <li>Technology shaping every aspect of life</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="project-details-info">
            <div className="row gx-60 gy-6">
              <div className="col-xl-8">
                <div className="project-details-content">
                  <h3 data-aos="fade-up" data-aos-delay="300">
                    Project Information
                  </h3>
                  <p data-aos="fade-up" data-aos-delay="600">
                    Technology encompasses tools, machines, systems, and processes
                    designed to solve problems.
                  </p>

                  <div className="items-wrapper">
                    <div className="single-items" data-aos="fade-up" data-aos-delay="300">
                      <h4>Category: <span>Business Consulting</span></h4>
                    </div>
                    <div className="single-items" data-aos="fade-up" data-aos-delay="400">
                      <h4>Customer: <span>Starline Shimlasi</span></h4>
                    </div>
                    <div className="single-items" data-aos="fade-up" data-aos-delay="600">
                      <h4>End Date: <span>28 September 2025</span></h4>
                    </div>
                    <div className="single-items" data-aos="fade-up" data-aos-delay="800">
                      <h4>Start Date: <span>21 February 2024</span></h4>
                    </div>
                    <div className="single-items" data-aos="fade-up" data-aos-delay="600">
                      <h4>
                        Rating:
                        <span>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4">
                <div
                  className="content-thumb img-custom-anim-left"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <img
                    src="/assets/images/project/projectThumb1_2.png"
                    alt="project"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="project-summery">
            <div className="content" data-aos="fade-up" data-aos-delay="600">
              <h2 className="mb-30">Project Summary</h2>
              <p>
                Technology refers to the application of scientific knowledge
                for practical purposes.
              </p>
              <p className="hilight">
                Business consulting helps organizations improve efficiency,
                optimize performance, and achieve goals.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-sectionn section-padding pt-0 fix">
        <div className="faq-container-wrapper">
          <div className="container">

            <div className="section-title style3">
              <h2 className="title mb-20" data-aos="fade-up" data-aos-delay="300">
                Empower your <span>growth</span> with technology
              </h2>
              <p data-aos="fade-up" data-aos-delay="600">
                IT company providing a seamless and intuitive user experience.
              </p>
            </div>

            <div className="row gy-5">
              <div className="col-xl-5">
                <div className="content-thumb text-center">
                  <img
                    src="/assets/images/faq/faqThumb.png"
                    alt="faq"
                  />
                </div>
              </div>

              <div className="col-xl-7">
                <div className="faq-content">
                  <div className="accordion" id="accordion">

                    {[1, 2, 3, 4].map((item) => (
                      <div
                        className="accordion-item mb-3"
                        key={item}
                        data-aos="fade-up"
                        data-aos-delay={item * 200}
                      >
                        <h5 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#faq${item}`}
                          >
                            FAQ Question {item}
                          </button>
                        </h5>
                        <div
                          id={`faq${item}`}
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration.
                          </div>
                        </div>
                      </div>
                    ))}

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
