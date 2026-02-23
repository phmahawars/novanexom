import React from 'react'

export const About = () => {
  return (
   <section className="about fix">
  <div className="about-container-wrapper style1">
    <div className="about_wrapper section-padding">
      <div className="container">
        <div className="about_content">
          <div className="row align-items-center">

            <div className="col-lg-7">
              <div className="about_content_info">
                <h2
                  className="title"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  Welcome to <span className="theme-color-text">Novanexom  </span>
                </h2>

                <p
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  At Novanexom, we believe in transforming ideas into reality. As a premier IT solutions provider, we specialize in a wide array of services that empower businesses to thrive in the digital age. Our mission is to deliver innovative, tailored solutions that meet the unique needs of each client, driving success and fostering growth.
                </p>

                <div
                  className="counter"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="counter_item">
                    <h3>
                      <span className="counter-number">100</span>%
                    </h3>
                    <p>Scalable, Future-Ready Solutions</p>
                  </div>

                  <div className="counter_item">
                    <h3>
                      <span className="counter-number">3</span>x Faster
                    </h3>
                    <p>Average Deployment Timelines</p>
                  </div>

                  <div className="counter_item">
                    <h3>
                      <span className="counter-number">15</span>+
                    </h3>
                    <p>Industries Served Globally</p>
                  </div>
                </div>

                <div
                  className="btn-wrapper"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <a href="/contact">
                    <span className="theme-btn">
                      Start Now <i className="fa fa-long-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div
                className="client_content_img img-custom-anim-right"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <img
                  src="/assets/images/new/How-We-Measure-Digital.png"
                  alt="client"
                  className="img-fluid"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
