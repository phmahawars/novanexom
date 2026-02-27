import { Breadcrumb } from "../components/includes/Breadcrumb";
import { useState, useEffect } from "react";
import { submitContactForm } from "../lib/api";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [contactInfo, setContactInfo] = useState(null);

  // Optional: Fetch contact info from API if endpoint exists
  useEffect(() => {
    fetchContactInfo();
  }, []);

  const fetchContactInfo = async () => {
    try {
      // This is optional - only if you have a contact info endpoint
      // const response = await fetch('/api/v1/contact-info');
      // const data = await response.json();
      // setContactInfo(data);
      
      // For now, using hardcoded data
      setContactInfo({
        emails: [
          "info@novanexom.com"
        ],
        phones: [
          { number: "+91 7905706350", label: "Main" },
        ],
        locations: [
          "B-23 Second Floor, Sector 63, Noida, UP - 201301",
        ]
      });
    } catch (err) {
      console.error("Error fetching contact info:", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Validate form
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error("Please fill in all required fields");
      }

      // Email regex validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error("Please enter a valid email address");
      }

      // Submit form
      const response = await submitContactForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        subject: "Contact Form Submission",
      });

      if (response.status || response.success) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      } else {
        throw new Error(response.message || "Failed to send message");
      }
    } catch (err) {
      setError(err.message || "Failed to send message. Please try again.");
      console.error("Error submitting form:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Breadcrumb title={"Contact Us"} />
      <div className="contact-section">
        <div className="container">
          <div className="row gx-30 gy-5">

            {/* Left Info */}
            <div className="col-xl-5">
              <div className="contact-left-items">
                <div className="title-area">
                  <h2 className="title">Contact Us</h2>
                </div>

                {/* Email */}
                {contactInfo?.emails && contactInfo.emails.length > 0 && (
                  <div className="contact-info-items">
                    <div className="icon">
                      <i className="fa-solid fa-paper-plane"></i>
                    </div>
                    <div className="content">
                      <h4>Email</h4>
                      {contactInfo.emails.map((email, index) => (
                        <a key={index} href={`mailto:${email}`}>
                          {email}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Phone */}
                {contactInfo?.phones && contactInfo.phones.length > 0 && (
                  <div className="contact-info-items">
                    <div className="icon">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="content">
                      <h4>Contact</h4>
                      {contactInfo.phones.map((phone, index) => (
                        <a key={index} href={`tel:${phone.number.replace(/\D/g, '')}`}>
                          {phone.number}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Location */}
                {contactInfo?.locations && contactInfo.locations.length > 0 && (
                  <div className="contact-info-items">
                    <div className="icon">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="content">
                      <h4>Location</h4>
                      {contactInfo.locations.map((location, index) => (
                        <span key={index}>{location}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Form */}
            <div className="col-xl-7">
              <div className="contact-right-items">
                <div className="title-area">
                  <h2 className="title">Send Your Free Message</h2>
                </div>

                <div className="contact-content">
                  {/* Success Message */}
                  {success && (
                    <div
                      className="alert alert-success alert-dismissible fade show mb-4"
                      role="alert"
                    >
                      <i className="fa-solid fa-check-circle me-2"></i>
                      <strong>Success!</strong> Your message has been sent successfully. We'll get back to you soon!
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                      ></button>
                    </div>
                  )}

                  {/* Error Message */}
                  {error && (
                    <div
                      className="alert alert-danger alert-dismissible fade show mb-4"
                      role="alert"
                    >
                      <i className="fa-solid fa-exclamation-circle me-2"></i>
                      <strong>Error!</strong> {error}
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                      ></button>
                    </div>
                  )}

                  <form className="contact-form-items" onSubmit={handleSubmit}>
                    <div className="row">

                      {/* Name Field */}
                      <div className="col-lg-12">
                        <div className="form-clt">
                          <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            disabled={loading}
                          />
                        </div>
                      </div>

                      {/* Email Field */}
                      <div className="col-lg-6">
                        <div className="form-clt">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={loading}
                          />
                        </div>
                      </div>

                      {/* Phone Field */}
                      <div className="col-lg-6">
                        <div className="form-clt">
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            disabled={loading}
                          />
                        </div>
                      </div>

                      {/* Message Field */}
                      <div className="col-lg-12">
                        <div className="form-clt">
                          <textarea
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            disabled={loading}
                            rows="5"
                          ></textarea>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="col-lg-12">
                        <button
                          type="submit"
                          className="gt-btn"
                          disabled={loading}
                          style={{
                            opacity: loading ? 0.6 : 1,
                            cursor: loading ? "not-allowed" : "pointer",
                          }}
                        >
                          {loading ? (
                            <>
                              <span
                                className="spinner-border spinner-border-sm me-2"
                                role="status"
                                aria-hidden="true"
                              ></span>
                              Sending...
                            </>
                          ) : (
                            "Send Message"
                          )}
                        </button>
                      </div>

                    </div>
                  </form>

                  {/* Form Help Text */}
                  <p
                    style={{
                      marginTop: "20px",
                      fontSize: "14px",
                      color: "#666",
                    }}
                  >
                    <i className="fa-solid fa-lock me-2"></i>
                    Your message is secure and encrypted. We'll respond within 24 hours.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}