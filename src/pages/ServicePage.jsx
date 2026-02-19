import React, { useState } from 'react'
import { Breadcrumb } from '../components/includes/Breadcrumb'

export const ServicePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
    <Breadcrumb title={"Services"} />
      <section className="service style1 section-padding pt-0">
        <div className="service-container-wrapper style1">
          <div className="container">
            <div className="service_content">
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
                    <a href="/service-details">cybersecurity</a>
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
                    <a href="/service-details">cloud solutions</a>
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
                    <a href="/service-details">IT consulting</a>
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
                    <a href="/service-details">Tech Consulting</a>
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
                    <a href="/service-details">Sphere Solutions</a>
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
                    <a href="/service-details">Path Technologies</a>
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
                  className={`service_content_info_item style1 ${activeIndex === 6 ? 'active' : ''}`}
            onMouseEnter={() => setActiveIndex(6)}
                  
                >
                  <h2>07</h2>
                  <img
                    src="/assets/images/icon/serviceIcon1_7.svg"
                    alt="icon"
                  />
                  <h3>
                    <a href="/service-details">Digital Systems</a>
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
    </>
  )
}
