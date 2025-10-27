import Image from "next/image";
import Link from 'next/link';

export interface WhoWeAreSectionProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  quoteTitle: string;
  quoteText: string;
  authorName: string;
  authorRole: string;
}

const WhoWeAreSection = () => {
  return (
    <div className="about-us-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12">
            <div className="text-content" data-aos="fade-up" data-aos-delay="100">
              {/* <div className="sub-title">
                <i className="bx bxs-graduation"></i>
                <p>Who we are</p>
              </div> */}
              <h2 className="title-anim">Who we are</h2>
              <p className="title-anim">
                The Centre for Everything Education began its journey in 2021 as Rich and Dissent Student Crib. Driven by the belief that every student deserves the chance to succeed, regardless of their background, we evolved in 2025 into a registered non-profit company (NPC) with an expanded mandate and a new name. We chose the name “Centre for Everything Education” to reflect our comprehensive, one-stop support system for students. Our core mission is to bridge the information and resources gap between institutions of higher learning and young people, especially from disadvantaged communities, by providing crucial assistance with university applications, bursary opportunities, and other related processes.
              </p>
              {/* <Link href="/schedule-tour" className="default-btn">
                Schedule A Tour
              </Link> */}
            </div>
          </div>
          <div className="col-lg-7">
            <div className="row justify-content-end">
              <div className="col-lg-6 col-sm-6 col-md-6">
                <div className="content" data-aos="fade-right" data-aos-delay="100">
                  <Image
                    src="/assets/img/all-img/about-image.png"
                    alt="About University"
                    width={300}
                    height={300}
                    className="img-fluid"
                  />
                </div>
              </div>
              {/* <div className="col-lg-6 col-sm-6 col-md-6">
                <div className="notice-content" data-aos="fade-right" data-aos-delay="200">
                  <i className="bx bxs-quote-left"></i>
                  <h4 className="title-anim">Incididunt Ut Labore</h4>
                  <p className="title-anim">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                  <div className="author-info">
                    <span>John Michael</span>
                    <h5>John Michael</h5>
                    <p>Founder</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreSection;