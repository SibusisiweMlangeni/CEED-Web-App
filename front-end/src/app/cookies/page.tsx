'use client';

import Link from 'next/link';
import SectionBanner from '@/components/shared/Banner';
import Donate from '@/components/about/Donate';

const CookiesPolicyPage = () => {
  return (
    <div className="cookies-policy-page">
        <SectionBanner 
            title="Cookie Policy"
            description="Learn how we use cookies to enhance your browsing experience."
            backgroundImage="/img/section-image-1.png"
        />

        <div className="container pt-[50px] mb-30">
            <div className="row justify-content-center">
            <div className="col-lg-10">
                <div className="policy-content" data-aos="fade-up">
                <p className="lead">
                    Last updated: October 29, 2025
                </p>

                <p>
                    This Cookie Policy explains what cookies are, how we use them, and your choices regarding cookies when you visit <strong>CEED</strong> website.
                </p>

                <h3 className="mt-5">1. What Are Cookies?</h3>
                <p>
                    Cookies are small text files stored on your device when you visit a website. They help the site remember your actions and preferences (e.g., login, language, or region) over time.
                </p>

                <h3 className="mt-5">2. How We Use Cookies</h3>
                <p>
                    Clgun University is an <strong>informational and educational website</strong>. We do not collect personal data through cookies for advertising or tracking purposes. However, we use a minimal set of cookies to ensure basic functionality and analytics.
                </p>

                <h4 className="mt-4">Types of Cookies We Use:</h4>
                <ul className="mt-3">
                    <li>
                    <strong>Essential Cookies</strong>: Required for the website to function (e.g., security, load balancing). These cannot be disabled.
                    </li>
                    <li>
                    <strong>Analytics Cookies</strong>: Help us understand how visitors interact with our site (e.g., page views, navigation paths). We use anonymized data only.
                    </li>
                    <li>
                    <strong>Preference Cookies</strong>: Remember your settings (e.g., language, region) to improve your experience.
                    </li>
                    <li>
                    <strong>Third-Party Cookies</strong>: None. We do not embed social media widgets, ads, or external trackers.
                    </li>
                </ul>

                <h3 className="mt-5">3. Your Cookie Choices</h3>
                <p>
                    You can control or disable cookies through your browser settings. Note that disabling essential cookies may affect site functionality.
                </p>

                <div className="bg-light p-4 rounded mt-4">
                    <h5 className="mb-3">Browser Controls</h5>
                    <ul>
                    <li><Link href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary">Google Chrome</Link></li>
                    <li><Link href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-primary">Mozilla Firefox</Link></li>
                    <li><Link href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-primary">Microsoft Edge</Link></li>
                    <li><Link href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary">Safari</Link></li>
                    </ul>
                </div>

                <h3 className="mt-5">4. Changes to This Policy</h3>
                <p>
                    We may update this Cookie Policy occasionally. The “Last updated” date at the top will reflect changes.
                </p>

                <h3 className="mt-5">5. Contact Us</h3>
                <p>
                    If you have questions about our use of cookies, please contact us:
                </p>
                <div className="mt-3 p-4 bg-light rounded">
                    <p className="mb-1"><strong>Email:</strong> <Link href="mailto:privacy@the-ceed.co.za">privacy@the-ceed.co.za</Link></p>
                    <p className="mb-1"><strong>Phone:</strong> (000) 000-0000</p>
                    {/* <p className="mb-0"><strong>Address:</strong> </p> */}
                </div>
                </div>
            </div>
            </div>
        </div>

        <Donate />
    </div>
  );
};

export default CookiesPolicyPage;