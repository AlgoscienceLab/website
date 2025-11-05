import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaUser, FaBuilding } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if form was successfully submitted (redirect from FormSubmit)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setFormStatus('success');
      // Clear the URL parameter after 5 seconds
      setTimeout(() => {
        window.history.replaceState({}, document.title, window.location.pathname);
        setFormStatus('');
      }, 5000);
    }
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('');

    try {
      // FormSubmit.co will handle the actual submission
      // The form will automatically redirect after submission
      // No additional code needed as the form action handles it
      setFormStatus('success');
    } catch (error) {
      setFormStatus('error');
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Visit Us',
      details: ['Chittagong 4217', 'Bangladesh', 'Design Office']
    },
    {
      icon: <FaPhone />,
      title: 'Call Us',
      details: ['+880 1859 492439', 'WhatsApp Available', 'Mon-Sat 9AM-6PM']
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Us',
      details: ['algoscienceacademy@gmail.com', 'Quick Response', 'Professional Support']
    }
  ];

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content fade-in-up">
            <h1 className="contact-title">
              Get in <span className="gold-text">Touch</span>
            </h1>
            <p className="contact-subtitle">
              Let's discuss your semiconductor design needs - from RTL to tape-out
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="contact-info-card glass glass-hover fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="info-icon">{info.icon}</div>
                <h3 className="info-title">{info.title}</h3>
                <div className="info-details">
                  {info.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-grid">
            <div className="form-info fade-in">
              <h2 className="section-title">
                Send Us a <span className="gold-text">Message</span>
              </h2>
              <p className="form-description">
                Fill out the form and our team will get back to you within 24-48 hours.
              </p>
              <div className="form-features">
                <div className="form-feature">
                  <div className="feature-check">✓</div>
                  <span>Free Consultation</span>
                </div>
                <div className="form-feature">
                  <div className="feature-check">✓</div>
                  <span>Quick Response</span>
                </div>
                <div className="form-feature">
                  <div className="feature-check">✓</div>
                  <span>Professional Support</span>
                </div>
                <div className="form-feature">
                  <div className="feature-check">✓</div>
                  <span>Quality Service</span>
                </div>
              </div>
            </div>

            <form 
              className="contact-form glass fade-in-up" 
              action="https://formsubmit.co/shahrearhossain@gmail.com"
              method="POST"
            >
              {/* FormSubmit.co Configuration */}
              <input type="hidden" name="_subject" value="New Contact Form Submission - Algo Science Lab" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value={`${window.location.origin}/contact?success=true`} />
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    <FaUser /> Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <FaEnvelope /> Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">
                    <FaBuilding /> Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="e.g., RTL Design, IC Packaging"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us about your chip design requirements..."
                ></textarea>
              </div>

              {formStatus === 'success' && (
                <div className="form-success">
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              )}

              {formStatus === 'error' && (
                <div className="form-error">
                  ✗ Something went wrong. Please try again.
                </div>
              )}

              <button type="submit" className="btn-gold submit-btn" disabled={isSubmitting}>
                <FaPaperPlane /> {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="map-container glass fade-in-up">
            <div className="map-placeholder">
              <FaMapMarkerAlt className="map-icon" />
              <p>Map Integration</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
