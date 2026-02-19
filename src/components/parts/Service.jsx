"use client";
import React, { useState } from 'react'

export const Service = () => {
    const [activeIndex, setActiveIndex] = useState(1);
  return (
    <section className="service style1 section-padding fix">
  <div className="service-container-wrapper style1">
    <div className="container">
       <div className="service_content">
        <div className="service_content_title">
          <h2
            className="title"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            MOVE FORWARD WITH  <br />
            <span className="theme-color-text">CONFIDENCE</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Get IT services that work as hard as you do and turn your business goals into real results. We build enterprise-ready IT foundations that don’t crack as you scale and work optimally without extra complexity.
          </p>
        </div>
              {/* First Row */}
              <div className="service_content_info mb-30">
                <div
                  className={`service_content_info_item style1 ${activeIndex === 0 ? 'active' : ''}`}
            onMouseEnter={() => setActiveIndex(0)}
                 
                >
                  <h2>01</h2>
                  <img
                    src="/assets/images/icon/serviceIcon1_1.svg"
                    alt="icon"
                  />
                  <h3>
                    <a href="/service-details">AI & Automation</a>
                  </h3>
                  <div className="content">
                    <p>
                      IT company that provides a seamless and intuitive
                      experience for users. The design will focus on clear
                      navigation IT company that provides a seamless and
                      intuitive experience for users. The design will focus on
                      clear navigation
                    </p>
                  </div>
                </div>

                <div
                  className={`service_content_info_item style1 ${activeIndex === 1 ? 'active' : ''}`}
            onMouseEnter={() => setActiveIndex(1)}
                 
                >
                  <h2>02</h2>
                  <img
                    src="/assets/images/icon/serviceIcon1_2.svg"
                    alt="icon"
                  />
                  <h3>
                    <a href="/service-details">Application Development</a>
                  </h3>
                  <div className="content">
                    <p>
                      IT company that provides a seamless and intuitive
                      experience for users. The design will focus on clear
                      navigation IT company that provides a seamless and
                      intuitive experience for users. The design will focus on
                      clear navigation
                    </p>
                  </div>
                </div>

                <div
                  className={`service_content_info_item style1 ${activeIndex === 2 ? 'active' : ''}`}
            onMouseEnter={() => setActiveIndex(2)}
                  
                >
                  <h2>03</h2>
                  <img
                    src="/assets/images/icon/serviceIcon1_3.svg"
                    alt="icon"
                  />
                  <h3>
                    <a href="/service-details">Software development</a>
                  </h3>
                  <div className="content">
                    <p>
                      IT company that provides a seamless and intuitive
                      experience for users. The design will focus on clear
                      navigation IT company that provides a seamless and
                      intuitive experience for users. The design will focus on
                      clear navigation
                    </p>
                  </div>
                </div>
              </div>

              {/* Second Row */}
              <div className="service_content_info">
                <div
                  className={`service_content_info_item style1 ${activeIndex === 3 ? 'active' : ''}`}
            onMouseEnter={() => setActiveIndex(3)}
                  
                >
                  <h2>04</h2>
                  <img
                    src="/assets/images/icon/serviceIcon1_4.svg"
                    alt="icon"
                  />
                  <h3>
                    <a href="/service-details">IT outsourcing</a>
                  </h3>
                  <div className="content">
                    <p>
                      IT company that provides a seamless and intuitive
                      experience for users. The design will focus on clear
                      navigation IT company.
                    </p>
                  </div>
                </div>

                <div
                  className={`service_content_info_item style1 ${activeIndex === 4 ? 'active' : ''}`}
            onMouseEnter={() => setActiveIndex(4)}
                  
                >
                  <h2>05</h2>
                  <img
                    src="/assets/images/icon/serviceIcon1_5.svg"
                    alt="icon"
                  />
                  <h3>
                    <a href="/service-details">Product Design</a>
                  </h3>
                  <div className="content">
                    <p>
                      IT company that provides a seamless and intuitive
                      experience for users. The design will focus on clear
                      navigation IT company.
                    </p>
                  </div>
                </div>

                <div
                  className={`service_content_info_item style1 ${activeIndex === 5 ? 'active' : ''}`}
            onMouseEnter={() => setActiveIndex(5)}
                  
                >
                  <h2>06</h2>
                  <img
                    src="/assets/images/icon/serviceIcon1_6.svg"
                    alt="icon"
                  />
                  <h3>
                    <a href="/service-details">Data services</a>
                  </h3>
                  <div className="content">
                    <p>
                      IT company that provides a seamless and intuitive
                      experience for users. The design will focus on clear
                      navigation IT company.
                    </p>
                  </div>
                </div>

                
              </div>
            </div>
    </div>
  </div>
</section>
  )
}
