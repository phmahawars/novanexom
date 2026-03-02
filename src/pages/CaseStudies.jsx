import React, { useEffect, useState } from "react";
import { Breadcrumb } from "../components/includes/Breadcrumb";
import { getCaseStudies } from "../lib/api";
import { Link } from "react-router-dom";

export const CaseStudies = () => {
  const [caseStudy, setCaseStudy] = useState([])
      const [loading, setLoading] = useState(true)
      const [error, setError] = useState(null)
      const [activeIndex, setActiveIndex] = useState(0)
      console.log('caseStudy', caseStudy);
      
      useEffect(() => {
        fetchCaseStudy()
      }, [])
    
      const fetchCaseStudy = async () => {
        setLoading(true)
        setError(null)
        try {
          const response = await getCaseStudies()
          if (response.status && response.data) {
            // Limit to 6 case study for home page
            setCaseStudy(response.data.data)
            setActiveIndex(0)
          }
        } catch (err) {
          setError('Failed to load Case study')
          console.error('Error fetching services:', err)
        } finally {
          setLoading(false)
        }
      }

   if (loading) {
      return (
        <>
          <Breadcrumb title={"Case Studies"} />
          <section className="service style1 section-padding pt-0">
            <div className="service-container-wrapper style1">
              <div className="container">
                <div className="text-center py-5">
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                  <p className="mt-3">Loading Case Studies...</p>
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
            <Breadcrumb title={"Case Studies"} />
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
  if (caseStudy.length === 0) {
     return (
       <>
         <Breadcrumb title={"Case Studies"} />
         <section className="service style1 section-padding pt-0">
           <div className="service-container-wrapper style1">
             <div className="container">
               <div className="text-center py-5">
                 <p className="text-muted">No Case Studies available at the moment.</p>
               </div>
             </div>
           </div>
         </section>
       </>
     )
   }

  return (
    <>
      <Breadcrumb title={"Case Studies"} />
      <section className="project-section">
        <div className="project-container-wrapper style2 section-padding pt-0 fix">
          <div className="container">
            <div className="project-wrapper style1">
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
              <div className="row g-4">
                {caseStudy.map((caseStudy, index) => (
                  <div className="col-xl-6 col-md-6">
                    <div
                      className="project-card style1"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <div className="project-thumb">
                        <img
                              src={caseStudy.image_url}
                              alt={caseStudy.title}
                              onError={(e) => {
                                e.target.style.display = 'none'
                              }}
                            />
                      </div>
                      <div className="project-content">
                        <div className="title-wrap">
                          <div className="subtitle">{caseStudy.category_name}</div>
                          <h3 className="title">
                            <Link to={`/case-study/${caseStudy.slug}`}>{caseStudy.title}</Link>
                          </h3>
                        </div>
                        <Link className="arrow-btn" to={`/case-study/${caseStudy.slug}`}>
                          <i className="fa-solid fa-arrow-right-long"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}

                

                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
