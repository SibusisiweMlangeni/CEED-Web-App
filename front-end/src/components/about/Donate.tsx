'use client';

import { useState, useRef } from 'react';

const Donate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your donation! We’ll contact you shortly.');
    closeModal();
  };

  return (
    <div className="subscribe-area ptb-100">
      <div className="container">
        <div className="section-title" data-aos="fade-up" data-aos-delay="100">
          <div className="sub-title">
            <i className="bx bxs-graduation"></i>
            <p>Donate to our cause</p>
          </div>
          <h2>Your contribution will help us open doors to education and create brighter futures for every student.</h2>
        </div>

        <div className="subscribe-btn text-center" data-aos="fade-up" data-aos-delay="100">
          <button type="button" className="default-btn" onClick={openModal}>
            Donate Now
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="modal fade show"
          style={{
            display: 'block',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 1050,
          }}
          onClick={handleClickOutside}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            role="document"
            ref={modalRef}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Support Our Mission</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="amount" className="form-label">Donation Amount (R)</label>
                    <input
                      type="number"
                      className="form-control"
                      id="amount"
                      min="1"
                      step="any"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message (Optional)</label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows={3}
                    ></textarea>
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="default-btn">Submit Donation</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donate;