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
        {/* Row 1: Reversed on desktop */}
        <div className="row g-0 align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6">
            <div className="content" data-aos="fade-up" data-aos-delay="100">
              {/* <div className="sub-title">
                <i className="bx bxs-graduation"></i>
                <p>Our Vision</p>
              </div> */}
              <h2>Our Vision</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tem incid idunt ut labore et magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tem incid idunt ut labore et dolore magna aliqua. Ut enim ad minim iam quis nostrud xerci tation ulla mco laboris nisi ut
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image cp-bg-1" data-aos="fade-zoom-in" data-aos-delay="100"></div>
          </div>
        </div>

        {/* Row 2: Normal order */}
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tem incid idunt ut labore et magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tem incid idunt ut labore et dolore magna aliqua. Ut enim ad minim iam quis nostrud xerci tation ulla mco laboris nisi ut
              </p>
            </div>
          </div>
        </div>

        {/* Row 3: Reversed on desktop */}
        <div className="row g-0 align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6">
            <div className="content" data-aos="fade-up" data-aos-delay="100">
              {/* <div className="sub-title">
                <i className="bx bxs-graduation"></i>
                <p>Our Values</p>
              </div> */}
              <h2>Our Values</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tem incid idunt ut labore et magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tem incid idunt ut labore et dolore magna aliqua. Ut enim ad minim iam quis nostrud xerci tation ulla mco laboris nisi ut
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