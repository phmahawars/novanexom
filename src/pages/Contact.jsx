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

  useEffect(() => {
    fetchContactInfo();
  }, []);

  const fetchContactInfo = async () => {
    try {
      setContactInfo({
        emails: ["info@novanexom.com"],
        phones: [{ number: "+91 7905706350", label: "Main" }],
        locations: ["Second Floor, H.IN.KH.NO 293, Khersingh Estate, Westened Marg, Khersingh Estate, Saidulajab, New Delhi"],
      });
    } catch (err) {
      console.error("Error fetching contact info:", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error("Please fill in all required fields");
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error("Please enter a valid email address");
      }

      const response = await submitContactForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        subject: "Contact Form Submission",
      });

      if (response.status || response.success) {
        setSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        throw new Error(response.message || "Failed to send message");
      }
    } catch (err) {
      setError(err.message || "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="contact-page-wrapper pt-5">
        <div className="container">

          {/* ── Hero ── */}
          <div className="contact-hero">
            <div className="eyebrow">Get in touch</div>
            <h1>
              Let's start a <em>conversation</em>
            </h1>
            <p>
              Have a project in mind or just want to say hello? We'd love to
              hear from you. Fill in the form or reach out directly.
            </p>
          </div>

          {/* ── Layout ── */}
          <div className="contact-layout">

            {/* ── Left: Info Cards ── */}
            <div className="contact-info-stack">

              {/* Email */}
              {contactInfo?.emails?.length > 0 && (
                <div className="info-card">
                  <div className="info-card-icon">
                    <i className="fa-regular fa-envelope"></i>
                  </div>
                  <div className="info-card-body">
                    <h4>Email us</h4>
                    {contactInfo.emails.map((email, i) => (
                      <a key={i} href={`mailto:${email}`}>{email}</a>
                    ))}
                  </div>
                </div>
              )}

              {/* Phone */}
              {contactInfo?.phones?.length > 0 && (
                <div className="info-card">
                  <div className="info-card-icon">
                    <i className="fa-regular fa-phone"></i>
                  </div>
                  <div className="info-card-body">
                    <h4>Call us</h4>
                    {contactInfo.phones.map((phone, i) => (
                      <a key={i} href={`tel:${phone.number.replace(/\D/g, "")}`}>
                        {phone.number}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Location */}
              {contactInfo?.locations?.length > 0 && (
                <div className="info-card">
                  <div className="info-card-icon">
                    <i className="fa-regular fa-location-dot"></i>
                  </div>
                  <div className="info-card-body">
                    <h4>Find us</h4>
                    {contactInfo.locations.map((loc, i) => (
                      <span key={i}>{loc}</span>
                    ))}
                  </div>
                </div>
              )}


            </div>

            {/* ── Right: Form ── */}
            <div className="contact-form-wrapper">
              <div className="form-header">
                <h2>Send a message</h2>
                <p>We'll get back to you within 24 hours.</p>
              </div>

              <div className="form-body">
                {/* Alerts */}
                {success && (
                  <div className="contact-alert success">
                    <span className="alert-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </span>
                    <span>
                      Message sent! We'll be in touch shortly.
                    </span>
                  </div>
                )}
                {error && (
                  <div className="contact-alert error">
                    <span className="alert-icon">
                      <i className="fa-solid fa-circle-exclamation"></i>
                    </span>
                    <span>{error}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  {/* Name */}
                  <div className="field-group">
                    <label htmlFor="name">Full name *</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={loading}
                    />
                  </div>

                  {/* Email + Phone */}
                  <div className="field-row">
                    <div className="field-group">
                      <label htmlFor="email">Email address *</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="jane@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={loading}
                      />
                    </div>
                    <div className="field-group">
                      <label htmlFor="phone">Phone number</label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="+91 00000 00000"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={loading}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="field-group">
                    <label htmlFor="message">Your message *</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project or inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={loading}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="btn-spinner" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send message
                        <span className="arrow-icon">
                          <i className="fa-regular fa-arrow-right"></i>
                        </span>
                      </>
                    )}
                  </button>
                </form>

                <div className="form-footer-note">
                  <i className="fa-regular fa-lock"></i>
                  Your information is secure and never shared with third parties.
                </div>
              </div>
            </div>

          </div>
        </div>
        <div>
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d736.9881374876426!2d77.19815598930367!3d28.517885915505786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce157f54360ed%3A0x4718dd3842b1fffa!2sAltiverse%20Adventures!5e0!3m2!1sen!2sin!4v1773721845957!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
        </div>
      </div>
    </>
  );
}
