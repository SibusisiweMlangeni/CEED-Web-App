'use client';

import Link from 'next/link';
import SectionBanner from '@/components/shared/Banner';
import Donate from '@/components/about/Donate';

const TermsAndConditionsPage = () => {
  return (
    <div className="terms-conditions-page ">
      <SectionBanner 
        title="Terms and Conditions"
        description="Please read these terms carefully before using CEED's website and services."
        backgroundImage="/img/section-image-1.png"
       />

      <div className="container pt-20 mb-30">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="policy-content" data-aos="fade-up">
              <p className="lead">
                Last updated: October 29, 2025
              </p>

              <p>
                These Terms and Conditions ("Terms") govern your use of the CEED website (<Link href="/" className="text-primary">https://www.the-ceed.co.za</Link>) and related services. By accessing or using our site, you agree to be bound by these Terms.
              </p>

              <h3 className="mt-5">1. Acceptance of Terms</h3>
              <p>
                By using this website, you confirm that you are at least 13 years old and agree to comply with all applicable laws and regulations. If you do not agree with any part of these Terms, you must not use our website.
              </p>

              <h3 className="mt-5">2. Use of Website</h3>
              <p>You agree not to:</p>
              <ul className="mt-3">
                <li>Use the site for any unlawful or unauthorized purpose</li>
                <li>Attempt to gain unauthorized access to any part of the site</li>
                <li>Interfere with the integrity or performance of the website</li>
                <li>Scrape, data-mine, or harvest content without permission</li>
              </ul>

              <h3 className="mt-5">3. Intellectual Property</h3>
              <p>
                All content on this website — including text, graphics, logos, data, and software — is the property of CEED (Centralised Education Enrollment Directory) or its content partners and is protected by copyright and other intellectual property laws. No part of this site may be reproduced, distributed, or adapted without prior written permission from CEED.
              </p>


              <h3 className="mt-5">4. User-Generated Content</h3>
              <p>
                If you submit reviews, comments, or feedback, you grant CEED a non-exclusive, royalty-free license to use, display, reproduce, and modify such content for platform improvement, operational, and promotional purposes.
              </p>

              <h3 className="mt-5">5. Third-Party Links</h3>
              <p>
                Our website may contain links to third-party sites. We do not endorse or assume responsibility for their content, privacy policies, or practices. You access them at your own risk.
              </p>

              <h3 className="mt-5">6. Limitation of Liability</h3>
              <p>
                To the fullest extent permitted by law, Clgun University shall not be liable for any indirect, incidental, or consequential damages arising from your use of the website or reliance on its content.
              </p>

              <h3 className="mt-5">7. Changes to These Terms</h3>
              <p>
                We may update these Terms periodically. The “Last updated” date at the top will reflect changes. Continued use of the site after revisions constitutes your acceptance.
              </p>


              <h3 className="mt-5">8. Contact Us</h3>
              <p>
                If you have questions about these Terms, please contact us:
              </p>
              <div className="mt-3 p-4 bg-light rounded">
                <p className="mb-1"><strong>Email:</strong> <Link href="mailto:privacy@the-ceed.co.za">privacy@the-ceed.co.za</Link></p>
                <p className="mb-1"><strong>Phone:</strong> (000) 000-0000</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Donate />
    </div>
  );
};

export default TermsAndConditionsPage;