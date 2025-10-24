import React from "react";
import hero from "@/images/banner/home/hero.webp";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat pt-[250px] pb-[200px]"
      style={{ backgroundImage: `url(${hero.src})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#120f2d]/40" />

      {/* Content */}
      <div className="relative container mx-auto max-w-[1100px] text-center text-white px-4">
        <div className="content space-y-6">
          {/* Tagline */}
          <span
            data-aos="fade-zoom-in"
            data-aos-delay="300"
            className="text-[28px] block"
          >
            Centre for Everything Education
          </span>

          {/* Heading */}
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="font-[myFont,sans-serif] text-[90px] leading-[1.1] max-md:text-[60px] max-sm:text-[42px]"
          >
            Empowering Learners for What Comes Next
          </h1>

          {/* Description */}
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-[20px] text-white w-[70%] mx-auto mb-[30px] max-md:w-[85%]"
          >
            CEED is your digital guide to opportunities beyond the classroom —
            helping South African learners, parents, and schools access real
            information about applications, funding, and career paths. Discover
            what you need to thrive, not just survive.
          </p>

          {/* Buttons */}
          <div
            className="flex justify-center gap-5 mb-[130px]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <a
              href="/application-form"
              className="bg-primary text-white font-semibold px-12 py-5 rounded-full hover:bg-yellow-400 transition"
            >
              Apply to CEED
            </a>
            <a
              href="/contact-us"
              className="bg-white text-black font-semibold px-12 py-5 rounded-full hover:bg-gray-100 transition"
            >
              Chat with Us
            </a>
          </div>

          {/* Scroll Down Icon */}
          <div
            data-aos="fade-down"
            data-aos-delay="100"
            className="mt-10 flex justify-center"
          >
            <a
              href="#about"
              className="inline-flex items-center justify-center text-[50px] bg-white/10 hover:bg-[var(--mainColor,#f5d36e)] text-white transition rounded-md h-[55px] w-[75px]"
            >
              <i className="bx bx-chevron-down" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
