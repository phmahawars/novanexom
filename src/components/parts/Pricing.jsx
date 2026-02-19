import React from 'react'

export const Pricing = () => {
  return (
    <section className="pricing section-padding fix">
  <div className="pricing-container-wrapper style1">
    <div className="container">
      <div className="pricing_content">

        <div className="pricing_content_title">
          <div className="pricing_content_title_left">
            <h2
              className="title"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Build Your  <br />
              <span className="theme-color-text">Digital Foundation</span>
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="300"
            >
             Get the right IT setup to power productivity, engage users, and grow without limits. Leverage technology to improve accuracy and focus on high-value work.
            </p>
          </div>

          {/* <div className="pricing_content_title_right">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  id="monthly-tab"
                  data-bs-toggle="tab"
                  href="#monthly"
                  role="tab"
                  aria-controls="monthly"
                  aria-selected="true"
                >
                  Monthly
                </a>
              </li>
             
            </ul>
          </div> */}
        </div>

        <div className="tab-content" id="myTabContent">
          {/* Monthly */}
          <div
            className="tab-pane fade show active"
            id="monthly"
            role="tabpanel"
            aria-labelledby="monthly-tab"
          >
            <div className="pricing_content_info">

              {/* Card 1 */}
              <div className="pricing_card style1" data-aos="fade-up" data-aos-delay="300">
                <div className="pricing_card_content">
                  <div className="pricing_card_content_top card_1">
                    <h3 className="title">IT Consultation</h3>
                    {/* <div className="price">
                      <h3>$250</h3>
                      <p>/month</p>
                    </div> */}
                  </div>

                  <div className="pricing_card_content_middle">
                    <p>Get expert guidance before you invest further – it is best to get clarity and direction, to make your technology-related decisions.</p>
                    <ul>
                      <li><i className="fa fa-check"></i> Expert review of your current systems</li>
                      <li><i className="fa fa-check"></i> Clear recommendations for expansion and scaling</li>
                      <li><i className="fa fa-check"></i> Guidance on tools, architecture, and next steps</li>
                      <li><i className="fa fa-check"></i> Risk identification before issues impact growth</li>
                      <li><i className="fa fa-check"></i> Direct access to experienced IT professionals</li>
                    </ul>
                  </div>

                  <div className="pricing_card_content_bottom">
                    <div className="btn-wrapper">
                      <a href="/contact">
                        <span className="theme-btn-2 w-100">
                          Book a Consultation <i className="fa fa-long-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="pricing_card style1" data-aos="fade-up" data-aos-delay="500">
                <div className="pricing_card_content">
                  <div className="pricing_card_content_top card_2">
                    <h3 className="title">IT Outsourcing</h3>
                    {/* <div className="price">
                      <h3>$25</h3>
                      <p>/month</p>
                    </div> */}
                  </div>

                  <div className="pricing_card_content_middle">
                    <p>Everything you need to get started online. It is ideal for startups and small enterprises for building reliable digital platforms.</p>
                    <ul>
                      <li><i className="fa fa-check"></i> Website support and basic maintenance</li>
                      <li><i className="fa fa-check"></i> Performance and uptime monitoring</li>
                      <li><i className="fa fa-check"></i> Advanced security and access controls</li>
                      <li><i className="fa fa-check"></i> Minor updates and technical fixes</li>
                      <li><i className="fa fa-check"></i> Friendly ongoing technical support</li>
                    </ul>
                  </div>

                  <div className="pricing_card_content_bottom">
                    <div className="btn-wrapper">
                      <a href="/contact">
                        <span className="theme-btn-2 w-100">
                          Get Started Today <i className="fa fa-long-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="pricing_card style1" data-aos="fade-up" data-aos-delay="700">
                <div className="pricing_card_content">
                  <div className="pricing_card_content_top card_3">
                    <h3 className="title">Digital Solutions</h3>
                    {/* <div className="price">
                      <h3>$250</h3>
                      <p>/month</p>
                    </div> */}
                  </div>

                  <div className="pricing_card_content_middle">
                    <p>Built for businesses ready to scale and growing companies that need dependable systems and proactive IT support.</p>
                    <ul>
                      <li><i className="fa fa-check"></i> Complete website and application development</li>
                      <li><i className="fa fa-check"></i> Cloud integration & AI automation for operations.</li>
                      <li><i className="fa fa-check"></i> UI/UX, with advanced product designs and services.</li>
                      <li><i className="fa fa-check"></i> Data services to make clear business decisions.</li>
                      <li><i className="fa fa-check"></i> Advanced tech tools to streamline operations.</li>
                    </ul>
                  </div>

                  <div className="pricing_card_content_bottom">
                    <div className="btn-wrapper">
                      <a href="/contact">
                        <span className="theme-btn-2 w-100">
                          Start Working Today! <i className="fa fa-long-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Yearly */}
          <div
            className="tab-pane fade"
            id="yearly"
            role="tabpanel"
            aria-labelledby="yearly-tab"
          >
            <div className="pricing_content_info">
              {/* Same cards – only /yearly text changed */}
              {/* (structure intentionally same as monthly) */}
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</section>
  )
}
