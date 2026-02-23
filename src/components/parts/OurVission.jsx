import React from 'react'

const OurVission = () => {
  return (
    <div className="about fix lime-bg py-5">
      <div className="container style3 ">
        <div className="container">
          <div className="about-main-content">
            <div className="row align-items-center">
              
              {/* Left Content */}
              <div className="col-lg-7">
                <div
                  className="about-content"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <h3 >
                    Our Approach
                  </h3>
                    <div className="about-text mb-4">
                      <p className="text">
                        At NovaNexom, we prioritize collaboration and communication. We work closely with our clients to understand their goals and challenges, crafting customized strategies that align with their objectives. Our agile approach allows us to respond swiftly to changing market conditions, ensuring that we deliver results that exceed expectations.
                      </p>                      
                    </div>
                    <h3>
                    Our Vision
                  </h3>
                    <div className="about-text mb-4">
                      <p className="text">
                        We envision a future where technology seamlessly integrates into every aspect of business, enhancing productivity and creating opportunities for growth. Our commitment to excellence inspires us to continuously adapt and evolve, ensuring that we remain at the forefront of industry advancements.
                      </p>                      
                    </div>
                  <div className="about-clint-box">                    
                    <div className="btn-wrapper">
                        <a
                          className="theme-btn style5 position-relative"
                          href="/contact"
                          data-aos="fade-up"
                          data-aos-delay="300"
                        >
                          Contact Us <i className="fa fa-arrow-right"></i>
                        </a>
                      </div>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="col-lg-5 col-md-8">
                <div
                  className="about-thumb img-custom-anim-top"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <img
                    className='rounded'
                    src="/assets/images/intro/aboutThunb3.png"
                    alt="About Thumb"
                  />
                </div>
              </div>

            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default OurVission
