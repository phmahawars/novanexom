import React, { useState, useEffect } from 'react'
import { Breadcrumb } from '../components/includes/Breadcrumb'
import { Link } from 'react-router-dom'
import { getServices } from '../lib/api'

export const ServicePage = () => {
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
        setServices(response.data)
        setActiveIndex(0)
      }
    } catch (err) {
      setError('Failed to load services')
      console.error('Error fetching services:', err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <>
        <Breadcrumb title={"Services"} />
        <section className="service style1 section-padding pt-0">
          <div className="service-container-wrapper style1">
            <div className="container">
              <div className="text-center py-5">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <p className="mt-3">Loading services...</p>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  if (error) {
    return (
      <>
        <Breadcrumb title={"Services"} />
        <section className="service style1 section-padding pt-0">
          <div className="service-container-wrapper style1">
            <div className="container">
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  if (services.length === 0) {
    return (
      <>
        <Breadcrumb title={"Services"} />
        <section className="service style1 section-padding pt-0">
          <div className="service-container-wrapper style1">
            <div className="container">
              <div className="text-center py-5">
                <p className="text-muted">No services available at the moment.</p>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  const getServiceNumber = (index) => {
    return String(index + 1).padStart(2, '0')
  }

  return (
    <>
      <Breadcrumb title={"Services"} />
      <section className="service style1 section-padding pt-0 onListingPage">
        <div className="service-container-wrapper style1">
          <div className="container">
            <div className="service_content">
              {/* Render all services */}
              <div className="service_content_info">
                {services.map((service, index) => (
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
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicePage