import React from "react";
import hero from "@/images/banner/home/hero.webp";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";

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
            className="text-base mb-[15px] block md:text-[28px] md:mb-0"
          >
            Centre for Everything Education
          </span>

          {/* Heading */}
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-[38px] md:text-[90px] font-bold leading-[1.1]"
          >
            Empowering Learners for What Comes Next
          </h1>

          {/* Description */}
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-sm md:text-xl text-white w-[70%] mx-auto mb-10 md:mb-[30px]"
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
            <Link
              href="/application-form"
              className="bg-primary text-white text-sm font-semibold px-5 py-3 rounded-full transition md:text-base md:px-12 md:py-5"
            >
              Apply to CEED
            </Link>
            {/* <a
              href="/contact-us"
              className="bg-white text-black font-semibold px-12 py-5 rounded-full hover:bg-gray-100 transition"
            >
              Chat with Us
            </a> */}
          </div>

          {/* Scroll Down Icon */}
          <div
            className="mt-10 flex justify-center"
          >
            <Link
              href="#about"
              className="inline-flex items-center justify-center text-[30px] md:text-[50px] bg-white/10 text-white transition rounded-md h-[55px] w-[75px]"
            >
              <FaChevronDown />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
