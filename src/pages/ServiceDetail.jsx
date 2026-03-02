/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Breadcrumb } from '../components/includes/Breadcrumb'
import { getServiceById, getServices } from '../lib/api'
import { Accordion } from 'react-bootstrap'

export const ServiceDetail = () => {
  const { slug } = useParams()
  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [allServices, setAllServices] = useState([])

  useEffect(() => {
    fetchServiceDetail()
    fetchAllServices()
  }, [slug])

  const fetchServiceDetail = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await getServiceById(slug)

      if (response.status && response.data) {
        setService(response.data)
      }
    } catch (err) {
      setError('Failed to load service details')
      console.error('Error fetching service:', err)
    } finally {
      setLoading(false)
    }
  }

  const fetchAllServices = async () => {
    try {
      const response = await getServices()
      if (response.status && response.data && Array.isArray(response.data)) {
        setAllServices(response.data)
      }
    } catch (err) {
      console.error('Error fetching services:', err)
    }
  }

  if (loading) {
    return (
      <>
        <Breadcrumb title={'Service Detail'} />
        <div className="service-details">
          <div className="container">
            <div className="text-center py-5">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <p className="mt-3">Loading service...</p>
            </div>
          </div>
        </div>
      </>
    )
  }

  if (error || !service) {
    return (
      <>
        <Breadcrumb title={'Service Detail'} />
        <div className="service-details">
          <div className="container">
            <div className="alert alert-danger" role="alert">
              {error || 'Service not found'}
            </div>
            <Link to="/services" className="btn btn-primary mt-3">
              <i className="fa-solid fa-arrow-left"></i> Back to Services
            </Link>
          </div>
        </div>
      </>
    )
  }

  // Parse FAQ if it's a JSON string, otherwise use as array
  const parseFAQ = (faqData) => {
    if (!faqData) return []
    if (typeof faqData === 'string') {
      try {
        return JSON.parse(faqData)
      } catch (e) {
        return []
      }
    }
    return Array.isArray(faqData) ? faqData : []
  }

  const faqs = parseFAQ(service.faq)

  return (
    <>
      <Breadcrumb title={service.title || 'Service Detail'} />
      <div className="service-details">
        <div className="container">
          <div className="row gx-55 gy-5">

            

            {/* RIGHT CONTENT */}
            <div className="col-xl-8">
              <div className="service-details-news">
                <div className="service-details-content">

                  {/* Service Image */}
                  {service.image && (
                    <div className="service-image mb-4">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-100"
                        style={{
                          borderRadius: '8px',
                          maxHeight: '400px',
                          objectFit: 'cover'
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none'
                        }}
                      />
                    </div>
                  )}

                  {/* Overview Content */}
                  {service.overview_content && (
                    <>
                      <h2 data-aos="fade-up" data-aos-delay="300">
                        Service overview
                      </h2>

                      <div data-aos="fade-up" data-aos-delay="600">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: service.overview_content
                          }}
                        />
                      </div>
                    </>
                  )}

                  {/* Expect/Highlight */}
                  {service.expect && (
                    <div
                          dangerouslySetInnerHTML={{
                            __html: service.expect
                          }}
                        />
                  )}

                  {/* Service Content */}
                  {service.service_content && (
                    <div
                      data-aos="fade-up"
                      data-aos-delay="800"
                      dangerouslySetInnerHTML={{
                        __html: service.service_content
                      }}
                    />
                  )}

                  

                  {/* CTA Button */}
                  <div style={{ marginTop: '30px' }}>
                    <Link to="/contact" className="btn btn-primary btn-lg">
                      Get Started <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>

                </div>
              </div>
            </div>
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
                    {allServices.length > 0 ? (
                      allServices.map((item) => (
                        <li key={item.id}>
                          <Link to={`/service/${item.id}`}>
                            {item.title}
                            <span>
                              {/* SVG ICON */}
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M9.7569 1.73054..." fill="#3C2BFF" />
                                <path d="M8.37133 8.00011..." fill="#3C2BFF" />
                              </svg>
                            </span>
                          </Link>
                        </li>
                      ))
                    ) : (
                      <li>
                        <a href="#" className="disabled">
                          No services available
                        </a>
                      </li>
                    )}
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
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      {faqs && faqs.length > 0 && (
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

        <p data-aos="fade-up" data-aos-delay="600">
          IT company that provides a seamless and intuitive experience for users.
          The design will focus on clear navigation, easy access to information
        </p>
      </div>

      <div className="row gy-5">

        {/* Left Image */}
        <div className="col-xl-5">
          <div className="content-thumb text-center">
            <img
              src="/assets/images/faq/faqThumb.png"
              alt="faq"
            />
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="col-xl-7">
          <div className="faq-content">
            <div className="faq-accordion">

              <Accordion>

                {faqs.map((faq, index) => {
                  const delay = String(300 + index * 200);

                  return (
                    <Accordion.Item
                      eventKey={index.toString()}
                      key={index}
                      className="mb-3"
                      data-aos="fade-up"
                      data-aos-delay={delay}
                    >
                      <Accordion.Header>
                        {faq.question || `Question ${index + 1}`}
                      </Accordion.Header>

                      <Accordion.Body>
                        {faq.answer || "Answer coming soon"}
                      </Accordion.Body>
                    </Accordion.Item>
                  );
                })}

              </Accordion>

            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
      )}
    </>
  )
}

export default ServiceDetail
