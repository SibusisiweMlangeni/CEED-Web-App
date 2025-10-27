'use client';

import Image from 'next/image';
import Link from 'next/link';

const DonationsPage = () => {
  return (
    <div className="donations-page">
      <div className="container">
        {/* Banner / Header */}
        <div className="section-banner bg-1 mb-5">
          <div className="banner-spacing text-center">
            <h1 data-aos="fade-up">Support Our Mission</h1>
            <p data-aos="fade-up" data-aos-delay="100">
              Your generosity helps us shape the future of education, innovation, and community impact.
            </p>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="text-content" data-aos="fade-up">
              <div className="sub-title">
                <i className="bx bxs-heart"></i>
                <p>Why Donate?</p>
              </div>
              <h2 className="title-anim">Transform Lives Through Education</h2>
              <p className="title-anim">
                At CEED, we are committed to ensuring that every student has access to quality education, regardless of their background or financial circumstances. Your donation directly supports our programs, helping students navigate university applications, access bursaries, and achieve their academic goals.
              </p>
              <ul className="lists mt-4">
                <li>
                  <div className="icon">
                    <i className="bx bx-check"></i>
                  </div>
                  <p>Scholarships for underrepresented students</p>
                </li>
                <li>
                  <div className="icon">
                    <i className="bx bx-check"></i>
                  </div>
                  <p>State-of-the-art research labs and learning tools</p>
                </li>
                <li>
                  <div className="icon">
                    <i className="bx bx-check"></i>
                  </div>
                  <p>Mental health and career support services</p>
                </li>
                <li>
                  <div className="icon">
                    <i className="bx bx-check"></i>
                  </div>
                  <p>Community outreach and sustainability initiatives</p>
                </li>
              </ul>
              <p className="mt-3">
                Last year, over 1,200 students received financial aid thanks to donors like you. Together, we’re building a more inclusive and innovative future.
              </p>
            </div>
          </div>

          {/* Right: Visual + Donate CTA */}
          <div className="col-lg-5">
            <div className="row justify-content-center">
              <div className="col-12 mb-4">
                <div className="content" data-aos="fade-left">
                  <Image
                    src="/assets/img/all-img/bg-image.png"
                    alt="Students learning"
                    width={400}
                    height={300}
                    className="img-fluid rounded"
                  />
                </div>
              </div>
              {/* <div className="col-12">
                <div className="notice-content bg-light p-4 rounded" data-aos="fade-left" data-aos-delay="100">
                  <i className="bx bxs-quote-left text-primary"></i>
                  <h4 className="title-anim">"Education is the most powerful weapon which you can use to change the world."</h4>
                  <p className="title-anim mb-3">— Nelson Mandela</p>
                  <div className="text-center">
                    <Link href="#" className="default-btn">
                      Donate Now
                    </Link>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="row mt-70 text-center" data-aos="fade-up">
          <div className="col-md-4">
            <div className="counter-item">
              <h3>1,200+</h3>
              <p>Students Supported Annually</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="counter-item">
              <h3>R2.5K</h3>
              <p>Raised for Scholarships</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="counter-item">
              <h3>94%</h3>
              <p>Graduation Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationsPage;