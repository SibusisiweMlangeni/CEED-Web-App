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
      title: "",
      description: "Guide students through application processes online and in-person. We do this through digital platforms like WhatsApp and by visiting schools",
      imageUrl: "/assets/img/icon/education-3.png",
      link: "/the-campus-experience",
      delay: 100,
      active: true,
    },
    {
      id: 2,
      title: "",
      description: "Share resources like prospectuses, bursary info, and deadlines.",
      imageUrl: "/assets/img/icon/education-3.png",
      link: "/the-campus-experience",
      delay: 200,
      active: true,
    },
    {
      id: 3,
      title: "",
      description: "Work with volunteers, schools, and partners to expand opportunities.",
      imageUrl: "/assets/img/icon/education-3.png",
      link: "/the-campus-experience",
      delay: 300,
      active: true,
    },
    {
      id: 4,
      title: "",
      description: "Promote education as a tool for transformation in our communities.",
      imageUrl: "/assets/img/icon/education-3.png",
      link: "/the-campus-experience",
      delay: 300,
      active: true,
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
              className="col-lg-3 col-sm-6 col-md-6"
            >
              <div
                className={`academics-item justify-center ${item.active ? 'active' : ''}`}
                data-aos="fade-up"
                data-aos-delay={item.delay}
              >
                {/* <Image
                  src={item.imageUrl}
                  alt="icon"
                  width={60}
                  height={60}
                  className="img-fluid"
                /> */}
                {/* <h4>{item.title}</h4> */}
                <p>{item.description}</p>
                {/* <Link href={item.link}>
                  Learn More <i className="bx bx-right-arrow-alt"></i>
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoSection;