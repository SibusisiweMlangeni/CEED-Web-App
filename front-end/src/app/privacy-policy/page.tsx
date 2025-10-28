'use client';

import Link from 'next/link';
import SectionBanner from '@/components/shared/Banner';
import Donate from '@/components/about/Donate';

const PrivacyPolicyPage = () => {
  return (
    <div className="privacy-policy-page pb-100 mt-[120px]">
      <SectionBanner 
        title="Privacy Policy"
        description="Your privacy is important to us. Read how we collect, use, and protect your information."
        backgroundImage="/img/section-image-1.png"
      />

      <div className="container mb-30">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="policy-content pt-20" data-aos="fade-up">
              <p className="lead">
                Last updated: October 29, 2025
              </p>

              <p>
                This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
              </p>

              <h3 className="mt-5">1. Introduction</h3>
              <p>
                Welcome to CEED — the Centralised Education Enrollment Directory. We are committed to protecting your personal information and respecting your privacy as you apply to universities through our platform. If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us at <Link href="mailto:privacy@the-ceed.co.za" className="text-primary">privacy@the-ceed.co.za</Link>.
              </p>

              <h3 className="mt-5">2. Information We Collect</h3>
              <p>
                We collect personal information that you voluntarily provide to us when you register, express interest in our services, or participate in activities on our platform.
              </p>
              <ul className="mt-3">
                <li>Name and contact details (email, phone, address)</li>
                <li>Academic and professional background</li>
                <li>Payment information (for paid courses or services)</li>
                <li>Device and usage data (IP address, browser type, pages visited)</li>
              </ul>

              <h3 className="mt-5">3. How We Use Your Information</h3>
              <p>We use your information to:</p>
              <ul className="mt-3">
                <li>Provide, operate, and maintain our educational services</li>
                <li>Process transactions and send related information</li>
                <li>Communicate with you about updates, offers, and support</li>
                <li>Improve user experience and website functionality</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h3 className="mt-5">4. Sharing Your Information</h3>
              <p>
                We do not sell or rent your personal data. We may share your information with:
              </p>
              <ul className="mt-3">
                <li>Service providers (e.g., payment processors, cloud hosting)</li>
                <li>Academic partners (with your consent)</li>
                <li>Legal authorities, if required by law</li>
              </ul>

              <h3 className="mt-5">5. Data Security</h3>
              <p>
                We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>

              <h3 className="mt-5">6. Your Rights</h3>
              <p>Depending on your location, you may have the right to:</p>
              <ul className="mt-3">
                <li>Access, correct, or delete your personal data</li>
                <li>Restrict or object to processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the details below.
              </p>

              <h3 className="mt-5">7. Cookies and Tracking Technologies</h3>
              <p>
                We use cookies to enhance your experience, analyze traffic, and personalize content. You can manage your preferences via your browser settings.
              </p>

              <h3 className="mt-5">8. Changes to This Policy</h3>
              <p>
                We may update this Privacy Policy from time to time. The updated version will be posted on this page with a new “Last updated” date.
              </p>

              <h3 className="mt-5">9. Contact Us</h3>
              <p>
                If you have questions about this Privacy Policy, please reach out to our Data Protection Officer:
              </p>
              <div className="mt-3 p-4 bg-light rounded">
                <p className="mb-1"><strong>Email:</strong> <Link href="mailto:privacy@the-ceed.co.za">privacy@the-ceed.co.za</Link></p>
                <p className="mb-1"><strong>Phone:</strong> (000) 000-0000</p>
                {/* <p className="mb-0"><strong>Address:</strong> Our address, our city, our province, 0000</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Donate />
    </div>
  );
};

export default PrivacyPolicyPage;