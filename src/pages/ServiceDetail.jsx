import React from 'react'
import { Breadcrumb } from '../components/includes/Breadcrumb'

export const ServiceDetail = () => {
  return (
    <>
    <Breadcrumb title={'Service Detail'} />
        <div className="service-details">
            <div className="container">
                <div className="row gx-55 gy-5">

                {/* LEFT SIDEBAR */}
                <div className="col-xl-4">
                    <div
                    className="service-details-info"
                    data-aos="fade-up"
                    data-aos-delay="600"
                    >
                    <div className="content-heading">
                        <h2>Service lists</h2>
                    </div>

                    <div className="items-wrapper">
                        <ul>

                        {[
                            'Tech Consulting',
                            'Path Technologies',
                            'Digital Systems',
                            'Tech Solutions',
                            'Tech Innovations',
                        ].map((item, index) => (
                            <li key={index}>
                            <a href="/service-details">
                                {item}
                                <span>
                                {/* SVG ICON */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M9.7569 1.73054..." fill="#3C2BFF" />
                                    <path d="M8.37133 8.00011..." fill="#3C2BFF" />
                                </svg>
                                </span>
                            </a>
                            </li>
                        ))}

                        </ul>
                    </div>
                    </div>

                    {/* CONTACT CARD */}
                    <div
                    className="single-sidebar-image single-sidebar-content bg-cover background-image"
                    data-aos="fade-up"
                    data-aos-delay="1000"
                    style={{
                        backgroundImage:
                        "url('/assets/images/services/serviceContract1_1.png')",
                    }}
                    >
                    <div className="content-overlay"></div>

                    <div className="contact-text">
                        <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="39" viewBox="0 0 38 39" fill="none">
                            <path d="M29.3379 2V10.649" stroke="#3C2BFF" strokeWidth="2.65831" strokeLinecap="round" />
                            <path d="M36.2559 2V10.649" stroke="#3C2BFF" strokeWidth="2.65831" strokeLinecap="round" />
                            <path d="M30.8745 25.4796..." stroke="#3C2BFF" strokeWidth="2.65831" strokeLinecap="round" />
                        </svg>
                        </div>

                        <h4>
                        <a href="tel:+444005410555">+(44)4-00-5410-555</a>
                        </h4>
                        <h5>Call us now</h5>
                    </div>
                    </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="col-xl-8">
                    <div className="service-details-news">
                    <div className="service-details-content">

                        <h2 data-aos="fade-up" data-aos-delay="300">
                        Service overview
                        </h2>

                        <p data-aos="fade-up" data-aos-delay="600">
                        Technology refers to the application of scientific knowledge for
                        practical purposes, particularly in industry and everyday life.
                        </p>

                        <p
                        className="hilight"
                        data-aos="fade-up"
                        data-aos-delay="800"
                        >
                        Involves providing expert advice and guidance to businesses to
                        improve operations, increase efficiency, and achieve goals.
                        </p>

                        <ul data-aos="fade-up" data-aos-delay="800">
                        <li>Involves the development of new ways</li>
                        <li>These technologies are creating immersive</li>
                        <li>Technology has transformed industries</li>
                        <li>It has led to significant advancements</li>
                        <li>The rapid advancement of technology</li>
                        <li>Originally developed for cryptocurrencies</li>
                        </ul>

                        <div
                        className="card"
                        data-aos="fade-up"
                        data-aos-delay="600"
                        >
                        <div className="card-icon">
                            <img
                            src="/assets/images/services/serviceCard4_1.png"
                            alt="icon"
                            />
                        </div>

                        <div className="card-content">
                            <h3>cybersecurity</h3>
                            <p>
                            IT company that provides a seamless and intuitive experience
                            for users. The design will focus on clear navigation.
                            </p>
                        </div>
                        </div>

                        <p data-aos="fade-up" data-aos-delay="600">
                        Involves providing expert advice and guidance to businesses to
                        improve efficiency and optimize performance.
                        </p>

                    </div>
                    </div>
                </div>

                </div>
            </div>
            </div>
        <section className="faq-sectionn section-padding pt-0 fix">
  <div className="faq-container-wrapper">
    <div className="container">

      <div className="section-title style3">
        <h2
          className="title mb-20"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Empower your <span>growth</span> with technology
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="600"
        >
          IT company that provides a seamless and intuitive experience for users.
          The design will focus on clear navigation, easy access to information
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
            <div className="faq-accordion">
              <div className="accordion" id="accordion">

                {/* FAQ 1 */}
                <div
                  className="accordion-item mb-3"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <h5 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq1"
                      aria-expanded="false"
                      aria-controls="faq1"
                    >
                      How can Innovate digital future?
                    </button>
                  </h5>

                  <div
                    id="faq1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      There are many variations of passages of Lorem Ipsum available,
                      but the majority have suffered alteration in some form.
                    </div>
                  </div>
                </div>

                {/* FAQ 2 */}
                <div
                  className="accordion-item mb-3"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <h5 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq2"
                      aria-expanded="false"
                      aria-controls="faq2"
                    >
                      What is business technology?
                    </button>
                  </h5>

                  <div
                    id="faq2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      There are many variations of passages of Lorem Ipsum available,
                      but the majority have suffered alteration in some form.
                    </div>
                  </div>
                </div>

                {/* FAQ 3 */}
                <div
                  className="accordion-item mb-3"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <h5 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq3"
                      aria-expanded="false"
                      aria-controls="faq3"
                    >
                      How is cutting-edge solutions?
                    </button>
                  </h5>

                  <div
                    id="faq3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      There are many variations of passages of Lorem Ipsum available,
                      but the majority have suffered alteration in some form.
                    </div>
                  </div>
                </div>

                {/* FAQ 4 */}
                <div
                  className="accordion-item"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <h5 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq4"
                      aria-expanded="false"
                      aria-controls="faq4"
                    >
                      What innovation technology?
                    </button>
                  </h5>

                  <div
                    id="faq4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      There are many variations of passages of Lorem Ipsum available,
                      but the majority have suffered alteration in some form.
                    </div>
                  </div>
                </div>

              </div>
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
