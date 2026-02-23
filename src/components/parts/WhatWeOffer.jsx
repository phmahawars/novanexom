import React from 'react'

const WhatWeOffer = () => {
  return (
    <div className="service fix section-padding">
      <div className="container">
        <div className="service-wrapper style3">
          <div className="service-top">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="service-title"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="subtitle">
                    <h6 className="sub-text">What We Offers</h6>
                    <div className="shape"></div>
                  </div>
                  <h2>
                    Book a Free Consultation
                  </h2>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="service-text">
                  <p
                    className="text"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    Ready to embark on your digital transformation? Get in touch with us today to discuss how we can help you achieve your vision!
                  </p>

                  <div className="btn-wrapper">
                    <a
                      className="theme-btn transparent-btn-3"
                      href="/contact/"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      Contact Us <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-0 align-items-center">
            <div className="col-xl-6 col-lg-8">
              <div
                className="service-main-thumb img-custom-anim-top"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <img
                  src="/assets/images/intro/whatwe.avif"
                  alt="Service Thumb"
                />
              </div>
            </div>

            <div className="col-xl-6">
              <div className="service-card-wrapper style3">

                {/* Card 1 */}
                <div
                  className="card-itams style3"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <div className="card-content">
                    <div className="thumb">
                      <img
                        src="/assets/images/services/serviceIcon3_1.png"
                        alt="Our Expertise"
                      />
                    </div>
                    <h3 className="title">
                      <a href="service-details.php">Our Expertise</a>
                    </h3>
                    <ul className='p-0'>
                        <li>
                        With a diverse team of professionals skilled in Custom Software Development, Cloud & DevOps, Web Development, Mobile App Development, we harness the latest technologies and methodologies to provide comprehensive solutions. Whether you need a robust e-commerce platform, a powerful software application, or a dynamic mobile app, we have the expertise to bring your vision to life.
                        </li>
                    </ul>
                  </div>
                </div>

                {/* Card 2 */}
                <div
                  className="card-itams style3"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <div className="card-content">
                    <div className="thumb">
                      <img
                        src="/assets/images/services/serviceIcon3_4.png"
                        alt="Why Choose Us?"
                      />
                    </div>
                    <h3 className="title">
                      <a href="service-details.php">Why Choose Us?</a>
                    </h3>
                    <ul className='p-0'>
                        <li><strong>Customer-Centric Focus:</strong> Your success is our priority. We are dedicated to understanding your needs and delivering solutions that drive results.</li>
                        <li><strong>Innovative Solutions:</strong> Our team thrives on creativity and innovation, leveraging the latest technologies to provide cutting-edge solutions.</li>
                        <li><strong>Proven Track Record:</strong> With a portfolio of successful projects and satisfied clients, we have established a reputation for excellence in the industry.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default WhatWeOffer
