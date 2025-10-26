'use client';

import Image from 'next/image';
import Link from 'next/link';

interface WhatWeDoItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  delay: number;
  active?: boolean;
}

const WhatWeDoSection = () => {
  const whatWeDoItems: WhatWeDoItem[] = [
    {
      id: 1,
      title: "Education Services",
      description: "There are many variations of passages Lorem Ipsum avaiable but the majority hav suffered alteration in some form",
      imageUrl: "/assets/img/icon/education-1.png",
      link: "/the-campus-experience",
      delay: 100,
    },
    {
      id: 2,
      title: "International Hubs",
      description: "There are many variations of passages Lorem Ipsum avaiable but the majority hav suffered alteration in some form",
      imageUrl: "/assets/img/icon/education-2.png",
      link: "/the-campus-experience",
      delay: 200,
      active: true,
    },
    {
      id: 3,
      title: "Bachelor’s and Master’s",
      description: "There are many variations of passages Lorem Ipsum avaiable but the majority hav suffered alteration in some form",
      imageUrl: "/assets/img/icon/education-3.png",
      link: "/the-campus-experience",
      delay: 300,
    },
  ];

  return (
    <div className="academics-area bg-color-1 ptb-100">
      <div className="container">
        <div className="section-title" data-aos="fade-up" data-aos-delay="100">
          {/* <div className="sub-title">
            <i className="bx bxs-graduation"></i>
            <p>Academics</p>
          </div> */}
          <h2>What We Do</h2>
        </div>

        <div className="row justify-content-center">
          {whatWeDoItems.map((item) => (
            <div
              key={item.id}
              className="col-lg-4 col-sm-6 col-md-6"
            >
              <div
                className={`academics-item ${item.active ? 'active' : ''}`}
                data-aos="fade-up"
                data-aos-delay={item.delay}
              >
                <Image
                  src={item.imageUrl}
                  alt="icon"
                  width={60}
                  height={60}
                  className="img-fluid"
                />
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <Link href={item.link}>
                  Learn More <i className="bx bx-right-arrow-alt"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoSection;