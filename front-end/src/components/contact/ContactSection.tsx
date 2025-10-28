'use client';

import { useState } from 'react';
import Image from 'next/image';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryType: 'Admission',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        inquiryType: 'Admission',
        message: '',
      });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="contact-content">
              <div className="header-content">
                <h2>We’d Love To Hear From You</h2>
                <p>
                  The Centre for Everything Education (CEED) provides comprehensive support for students, helping them navigate university applications, bursary opportunities, and other higher education resources. CEED empowers learners from all backgrounds to access the information and guidance they need to succeed.
                </p>
                <p>
                  For verifications, please email{' '}
                  <a href="mailto:info@the-ceed.co.za">
                    info@the-ceed.co.za
                  </a>
                  .
                </p>
              </div>

              <div className="contact-form">
                <form id="contactForm" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          className="form-control"
                          id="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          placeholder=""
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          className="form-control"
                          id="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          placeholder=""
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder=""
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                          id="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder=""
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label htmlFor="inquiryType">Inquiry Type</label>
                        <select
                          className="form-select"
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleChange}
                          aria-label="Inquiry type"
                        >
                          <option value="Admission">Admission</option>
                          <option value="One">One</option>
                          <option value="Two">Two</option>
                          <option value="Three">Three</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label htmlFor="inquiryType">How would you like us to respond</label>
                        <select
                          className="form-select"
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleChange}
                          aria-label="Inquiry type"
                        >
                          <option value="Admission">Email</option>
                          <option value="One">One</option>
                          <option value="Two">Two</option>
                          <option value="Three">Three</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">Inquiry</label>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          cols={30}
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder=""
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <button
                        type="submit"
                        className="default-btn"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Submit Now'}
                      </button>
                      {submitStatus === 'success' && (
                        <div className="h3 text-center mt-3 text-success">
                          Message sent successfully!
                        </div>
                      )}
                      {submitStatus === 'error' && (
                        <div className="h3 text-center mt-3 text-danger">
                          Something went wrong. Please try again.
                        </div>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Info + Map */}
          <div className="col-lg-4">
            <div className="contact-info">
              {/* Map */}
              <div id="map" className="map-pd">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598093!2d-73.99185268459418!3d40.74117737932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3f81d549f%3A0xb2a39bb5cacc7da0!2s175%205th%20Ave%2C%20New%20York%2C%20NY%2010010%2C%20USA!5e0!3m2!1sen!2sbd!4v1588746137032!5m2!1sen!2sbd"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Contact Details */}
              <div className="info-details">
                <ul>
                  <li>
                    <i className="bx bxs-map"></i> Our address, Gautent, South Africa, 0000
                  </li>
                  <li>
                    <i className="bx bxs-envelope"></i>
                    <a
                      className="info-mail"
                      href="mailto:registrar@clgununiversity.edu"
                    >
                      info@the-ceed.co.za
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;