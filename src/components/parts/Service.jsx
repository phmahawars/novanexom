"use client";
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getServices } from '../../lib/api';

export const Service = () => {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await getServices()

      if (response.status && response.data && Array.isArray(response.data)) {
        // Limit to 6 services for home page
        setServices(response.data.slice(0, 6))
        setActiveIndex(0)
      }
    } catch (err) {
      setError('Failed to load services')
      console.error('Error fetching services:', err)
    } finally {
      setLoading(false)
    }
  }

  const getServiceNumber = (index) => {
    return String(index + 1).padStart(2, '0')
  }

  // Group services into rows (3 per row)
  const firstRow = services.slice(0, 3)
  const secondRow = services.slice(3, 6)

  return (
    <section className="service style1 section-padding fix">
      <div className="service-container-wrapper style1">
        <div className="container">
          <div className="service_content">
            {/* Title Section */}
            <div className="service_content_title">
              <h2
                className="title"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                MOVE FORWARD WITH <br />
                <span className="theme-color-text">CONFIDENCE</span>
              </h2>

              <p
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Get IT services that work as hard as you do and turn your business goals into real results. We build enterprise-ready IT foundations that don't crack as you scale and work optimally without extra complexity.
              </p>
            </div>

            {/* Loading State */}
            {loading && (
              <div className="text-center py-5">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <p className="mt-3">Loading services...</p>
              </div>
            )}

            {/* Error State */}
            {error && !loading && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}

            {/* First Row */}
            {!loading && firstRow.length > 0 && (
              <div className="service_content_info mb-30">
                {firstRow.map((service, index) => (
                  <div
                    key={service.id}
                    className={`service_content_info_item style1 ${activeIndex === index ? 'active' : ''}`}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <h2>{getServiceNumber(index)}</h2>
                    
                    {/* Service Icon */}
                    {service.service_icon && (
                      <img
                        src={service.service_icon}
                        alt={service.title}
                        onError={(e) => {
                          e.target.style.display = 'none'
                        }}
                      />
                    )}
                    
                    {/* Service Title */}
                    <h3>
                      <Link to={`/service/${service.slug}`}>
                        {service.title}
                      </Link>
                    </h3>
                    
                    {/* Service Description */}
                    <div className="content">
                      <div
                          dangerouslySetInnerHTML={{
                            __html: service.expect || 'Service description coming soon'
                          }}
                        />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Second Row */}
            {!loading && secondRow.length > 0 && (
              <div className="service_content_info">
                {secondRow.map((service, index) => (
                  <div
                    key={service.id}
                    className={`service_content_info_item style1 ${activeIndex === (index + 3) ? 'active' : ''}`}
                    onMouseEnter={() => setActiveIndex(index + 3)}
                  >
                    <h2>{getServiceNumber(index + 3)}</h2>
                    
                    {/* Service Icon */}
                    {service.service_icon && (
                      <img
                        src={service.service_icon}
                        alt={service.title}
                        onError={(e) => {
                          e.target.style.display = 'none'
                        }}
                      />
                    )}
                    
                    {/* Service Title */}
                    <h3>
                      <Link to={`/service/${service.slug}`}>
                        {service.title}
                      </Link>
                    </h3>
                    
                    {/* Service Description */}
                    <div className="content">
                      <p>
                        {service.expect || 'Service description coming soon'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* No Services State */}
            {!loading && services.length === 0 && !error && (
              <div className="text-center py-5">
                <p className="text-muted">Services will be available soon.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service