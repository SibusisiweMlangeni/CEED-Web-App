'use client';
import Link from 'next/link';

interface SectionItem {
  id: number;
  title: string;
  description1: string;
  description2: string;
  imageClass: string;
  reverseOnDesktop?: boolean;
}


const VisionMissionValuesSection = () => {
  return (
    <div className="campus-tour">
      <div className="container-fluid p-0">        
        <div className="row g-0 align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6">
            <div className="content" data-aos="fade-up" data-aos-delay="100">
              {/* <div className="sub-title">
                <i className="bx bxs-graduation"></i>
                <p>Our Vision</p>
              </div> */}
              <h2>Our Vision</h2>
              <p>
                Our vision is to create a future where no student is left behind due to lack of access to information and/or resources. We aim to build a generation of empowered learners who can make informed choices, unlock their potential, and step confidently into higher education and beyond.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image cp-bg-1" data-aos="fade-zoom-in" data-aos-delay="100"></div>
          </div>
        </div>

        <div className="row g-0 align-items-center">
          <div className="col-lg-6">
            <div className="image cp-bg-2" data-aos="fade-zoom-in" data-aos-delay="100"></div>
          </div>
          <div className="col-lg-6">
            <div className="content" data-aos="fade-up" data-aos-delay="100">
              {/* <div className="sub-title">
                <i className="bx bxs-graduation"></i>
                <p>Our Mission</p>
              </div> */}
              <h2>Our Mission</h2>
              <p>
                Our mission is to bridge the information and resources gap between potential students and institutions of higher learning. We are committed to ensuring that every student has equitable access to the guidance, tools, and support they need to pursue qualifications in higher education.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-0 align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6">
            <div className="content" data-aos="fade-up" data-aos-delay="100">
              {/* <div className="sub-title">
                <i className="bx bxs-graduation"></i>
                <p>Our Values</p>
              </div> */}
              <h2>Our Values</h2>
              <p>
                <ul style={{ listStyleType: "circle", marginLeft: "1.5rem" }}>
                    <li>
                        <strong>Equity and fairness</strong> – Every student deserves an equal
                        chance at higher education, regardless of background or circumstances.
                    </li>
                    <li>
                        <strong>Integrity</strong> – We act with honesty, transparency, and
                        accountability in all we do with students, partners and one another.
                    </li>
                    <li>
                        <strong>Collaboration</strong> – We work together as a team, with schools,
                        institutions, and communities, because collective efforts create greater
                        impact.
                    </li>
                    <li>
                        <strong>Innovation</strong> – We embrace creativity and technology to
                        simplify processes and expand opportunities for students.
                    </li>
                    <li>
                        <strong>Excellence</strong> – We commit to doing our work thoroughly,
                        reliably, and with the highest standards of professionalism.
                    </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image cp-bg-3" data-aos="fade-zoom-in" data-aos-delay="100"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionValuesSection;