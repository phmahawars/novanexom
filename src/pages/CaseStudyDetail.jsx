import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Breadcrumb } from "../components/includes/Breadcrumb";
import { getCaseStudy } from "../lib/api";
import { Accordion } from "react-bootstrap";

export const CaseStudyDetail = () => {
  const { slug } = useParams();
  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCaseStudy();
  }, [slug]);

  const fetchCaseStudy = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getCaseStudy(slug);

      if (response.status && response.data) {
        setCaseStudy(response.data);
      }
    } catch (err) {
      setError("Failed to load case study");
      console.error("Error fetching case study:", err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (e) {
      return dateString;
    }
  };

  const renderRating = (rating) => {
    if (!rating) return null;
    
    // Handle rating as number or string
    const ratingValue = typeof rating === "string" ? parseInt(rating) : rating;
    
    if (isNaN(ratingValue)) return null;

    return (
      <>
        {[...Array(5)].map((_, i) => (
          <i
            key={i}
            className="fa-solid fa-star"
            style={{
              color: i < ratingValue ? "#FFD700" : "#ccc",
            }}
          ></i>
        ))}
      </>
    );
  };

  // Parse FAQ if it's a JSON string, otherwise use as array
  const parseFAQ = (faqData) => {
    if (!faqData) return [];
    if (typeof faqData === "string") {
      try {
        return JSON.parse(faqData);
      } catch (e) {
        return [];
      }
    }
    return Array.isArray(faqData) ? faqData : [];
  };

  if (loading) {
    return (
      <>
        <Breadcrumb title={"Case Study Detail"} />
        <div className="project-details">
          <div className="container">
            <div className="text-center py-5">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <p className="mt-3">Loading case study...</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (error || !caseStudy) {
    return (
      <>
        <Breadcrumb title={"Case Study Detail"} />
        <div className="project-details">
          <div className="container">
            <div className="alert alert-danger" role="alert">
              {error || "Case study not found"}
            </div>
            <Link to="/case-studies" className="btn btn-primary mt-3">
              <i className="fa-solid fa-arrow-left"></i> Back to Case Studies
            </Link>
          </div>
        </div>
      </>
    );
  }

  const faqs = parseFAQ(caseStudy.faq);

  return (
    <>
      <Breadcrumb title={caseStudy.title || "Case Study Detail"} />
      <div className="project-details">
        <div className="container">

          {/* Section 1: Hero with Content */}
          <div className="project-details-info">
            <div className="row gx-60 gy-6">
              {/* Featured Image */}
              <div className="col-xl-5">
                <div
                  className="content-thumb img-custom-anim-right mt-0"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  {caseStudy.image_url && (
                    <img
                      src={caseStudy.image_url}
                      alt={caseStudy.title}
                      onError={(e) => {
                        e.target.src = "/assets/images/project/projectThumb1_1.png";
                      }}
                    />
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="col-xl-7">
                <div className="project-details-content">
                  <h2 data-aos="fade-up" data-aos-delay="300">
                    {caseStudy.title}
                  </h2>
                  
                  {caseStudy.content && (
                    <>
                    <div
                      data-aos="fade-up" data-aos-delay="400"
                                dangerouslySetInnerHTML={{
                                  __html: caseStudy.content || 'Case Study description coming soon'
                                }}
                              />
                      
                    </>
                  )}

                  {/* Project Info Content (as list if available) */}
                  
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Project Information */}
          {caseStudy.project_info && (
          <div className="project-details-info">
            <div className="row gx-60 gy-6">
              {/* Project Details */}
              <div className="col-xl-8">
                <div className="project-details-content">
                 
                  
                      <h3 data-aos="fade-up" data-aos-delay="300">
                        Project Information
                      </h3>
                      <div data-aos="fade-up" data-aos-delay="600">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: caseStudy.project_info,
                          }}
                        />
                      </div>
                  

                  <div className="items-wrapper">
                    {/* Category */}
                    {caseStudy.category_name && (
                      <div
                        className="single-items"
                        data-aos="fade-up"
                        data-aos-delay="300"
                      >
                        <h4>
                          Category: <span>{caseStudy.category_name}</span>
                        </h4>
                      </div>
                    )}

                    {/* Customer */}
                    {caseStudy.customer && (
                      <div
                        className="single-items"
                        data-aos="fade-up"
                        data-aos-delay="400"
                      >
                        <h4>
                          Customer: <span>{caseStudy.customer}</span>
                        </h4>
                      </div>
                    )}

                    {/* End Date */}
                    {caseStudy.end_date && (
                      <div
                        className="single-items"
                        data-aos="fade-up"
                        data-aos-delay="600"
                      >
                        <h4>
                          End Date: <span>{formatDate(caseStudy.end_date)}</span>
                        </h4>
                      </div>
                    )}

                    {/* Start Date */}
                    {caseStudy.start_date && (
                      <div
                        className="single-items"
                        data-aos="fade-up"
                        data-aos-delay="800"
                      >
                        <h4>
                          Start Date:{" "}
                          <span>{formatDate(caseStudy.start_date)}</span>
                        </h4>
                      </div>
                    )}

                    {/* Rating */}
                    {caseStudy.rating && (
                      <div
                        className="single-items"
                        data-aos="fade-up"
                        data-aos-delay="600"
                      >
                        <h4>
                          Rating:
                          <span>{renderRating(caseStudy.rating)}</span>
                        </h4>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Image */}
              {caseStudy.project_image && (
                <div className="col-xl-4">
                  <div
                    className="content-thumb img-custom-anim-left"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <img
                      src={caseStudy.project_image}
                      alt={caseStudy.title}
                      
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
          {/* Summary */}
          {caseStudy.project_summary && (
            <div className="project-summery">
              <div className="content" data-aos="fade-up" data-aos-delay="600">
                <h3 className="mb-20">Project Summary</h3>
                <p>{caseStudy.project_summary}</p>
                
              </div>
            </div>
          )}
        </div>
      </div>

      {/* FAQ Section */}
      {faqs && faqs.length > 0 && (
        <div className="faq-sectionn section-padding pt-0 fix">
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
                  IT company providing a seamless and intuitive user experience.
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
  <Accordion alwaysOpen>

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
      )}

      {/* CTA Section */}
      <div className="cta-section section-padding bg-light">
        <div className="container text-center">
          <h3 className="mb-4">Ready to start your project?</h3>
          <p className="mb-4 text-muted">
            Let us help you achieve your business goals with our expert solutions.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Get In Touch <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CaseStudyDetail;
