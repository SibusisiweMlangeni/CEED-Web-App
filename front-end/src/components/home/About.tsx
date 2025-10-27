import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import Image from 'next/image';
import aboutImg from '@/images/about/about-image.webp';

const About = () => {
  return (
    <div className='container mx-auto px-4'>
        <SectionTitle 
            title="About CEED"
            subtitle="The Centre for Everything Education (CEED) exists to make applying
            for your future simpler, faster, and more informed."
        />

        {/* Content */}
        <div className="relative flex flex-col lg:flex-row">
          {/* Image */}
          <div className="w-full lg:w-[65%]">
            <div className="relative md:rounded-[5px] overflow-hidden">
              <Image
                src={aboutImg}
                alt="Students walking together"
                className="object-cover w-full h-full md:rounded-[5px]"
                priority
              />
            </div>
          </div>

          {/* Content Card */}
          <div className="lg:absolute lg:right-0 lg:top-[10%] bg-secondary-background rounded-[5px] shadow-sm py-10 px-5 md:p-[50px] max-w-[580px]">
            <span className="uppercase text-base text-paragraph-secondary block mb-2.5">
              Empowering Learners
            </span>
            <h2 className="text-xl lg:text-[30px] font-bold text-gray-900 mb-4 leading-snug">
              One Platform. Endless Possibilities.
            </h2>
            <p className="text-sm text-paragraph leading-[1.8] mb-7">
              CEED helps learners apply to multiple institutions in one place and explore study options that match their goals - making education accessible for everyone ready to take the next step.
            </p>
            <a
              href="/about"
              className="inline-block bg-primary text-white font-medium px-8 py-3 rounded-full transition"
            >
              Learn More About CEED
            </a>
          </div>
        </div>
    </div>
  )
}

export default About