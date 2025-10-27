'use client';

import Image from 'next/image';
import Link from 'next/link';

// Types
interface Instructor {
  name: string;
  rating: number;
  totalReviews: number;
  students: number;
  views: string; // e.g., "1.2k"
  bioLink: string;
  avatar: string;
}

interface CourseDetailProps {
  category: string;
  title: string;
  instructor: Instructor;
  date: string;
  enrolledCount: number;
  about: string;
  description: string;
  tags: string[];
  objectives: string[];
  materials: string[];
  requirements: string[];
  audience: string[];
  videoThumbnail: string;
  videoUrl: string;
  price: string; // e.g., "$0", "$120"
  level: string;
  duration: string;
  subject: string;
  language: string;
}

const CourseDetailsSection = ({
  category,
  title,
  instructor,
  date,
  enrolledCount,
  about,
  description,
  tags,
  objectives,
  materials,
  requirements,
  audience,
  videoThumbnail,
  videoUrl,
  price,
  level,
  duration,
  subject,
  language,
}: CourseDetailProps) => {
  return (
    <div className="courses-details-section pt-100 pb-70">
      <div className="container">
        <div className="row">
          {/* Main Content */}
          <div className="col-lg-8">
            <div className="courses-details">
              {/* Header */}
              <div className="header-title">
                <span>{category}</span>
                <h2>{title}</h2>
                <ul>
                  <li>
                    <Image
                      src={instructor.avatar}
                      alt={instructor.name}
                      width={40}
                      height={40}
                      className="avater"
                    />
                    <p>
                      With <Link href={instructor.bioLink}>{instructor.name}</Link>
                    </p>
                  </li>
                  <li>
                    <p>{date}</p>
                  </li>
                </ul>
                <div className="enrolls-count">
                  <Image
                    src="/assets/img/icon/reading-2.png"
                    alt="Enrolled"
                    width={20}
                    height={20}
                    className="ikon"
                  />
                  <p>{enrolledCount} already enrolled</p>
                </div>
              </div>

              {/* Course Content */}
              <div className="content">
                {/* About This Course */}
                <div className="content-pra">
                  <div className="title">
                    <h3>About This Course</h3>
                  </div>
                  <p>{about}</p>
                  <p>{description}</p>

                  <div className="tag">
                    <span>Tag:</span>
                    <ul>
                      {tags.map((tag, i) => (
                        <li key={i}>
                          <Link href="#">{tag}{i < tags.length - 1 ? ',' : ''}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Learning Objectives */}
                <div className="content-pra">
                  <div className="title">
                    <h3>Learning Objectives</h3>
                  </div>
                  <ul className="lists">
                    {objectives.map((obj, i) => (
                      <li key={i}>
                        <div className="icon">
                          <i className="bx bx-check"></i>
                        </div>
                        <p>{obj}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Material Includes */}
                <div className="content-pra">
                  <div className="title">
                    <h3>Material Includes</h3>
                  </div>
                  <ul className="lists">
                    {materials.map((item, i) => (
                      <li key={i}>
                        <div className="icon">
                          <i className="bx bx-check"></i>
                        </div>
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div className="content-pra">
                  <div className="title">
                    <h3>Requirements</h3>
                  </div>
                  <ul className="lists">
                    {requirements.map((req, i) => (
                      <li key={i}>
                        <div className="icon">
                          <i className="bx bx-check"></i>
                        </div>
                        <p>{req}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Target Audience */}
                <div className="content-pra">
                  <div className="title">
                    <h3>Target Audience</h3>
                  </div>
                  <ul className="lists">
                    {audience.map((item, i) => (
                      <li key={i}>
                        <div className="icon">
                          <i className="bx bx-check"></i>
                        </div>
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Instructor Card */}
              <div className="instructor-card">
                <div className="title">
                  <h3>Your Instructors</h3>
                </div>
                <div className="row align-items-center">
                  <div className="col-lg-5 col-sm-6 col-md-5">
                    <div className="image">
                      <Image
                        src={instructor.avatar}
                        alt={instructor.name}
                        width={200}
                        height={200}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 col-sm-6 col-md-7">
                    <div className="content">
                      <h3>{instructor.name}</h3>
                      <div className="review">
                        <div className="left">
                          <ul>
                            {Array.from({ length: 5 }).map((_, i) => (
                              <li key={i}>
                                <i
                                  className={`bx ${
                                    i < Math.floor(instructor.rating)
                                      ? 'bxs-star'
                                      : 'bx-star'
                                  }`}
                                ></i>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="rights">
                          <p>Review {instructor.rating}/5</p>
                        </div>
                      </div>
                      <ul>
                        <li>
                          <div className="image-circle">
                            <Image
                              src="/assets/img/icon/icon-1.png"
                              alt="Students"
                              width={16}
                              height={16}
                            />
                          </div>
                          <span>{instructor.students}</span>
                        </li>
                        <li>
                          <div className="image-circle">
                            <Image
                              src="/assets/img/icon/icon-2.png"
                              alt="Views"
                              width={16}
                              height={16}
                            />
                          </div>
                          <span>{instructor.views}</span>
                        </li>
                        <li>
                          <div className="image-circle">
                            <Image
                              src="/assets/img/icon/icon-3.png"
                              alt="Rating"
                              width={16}
                              height={16}
                            />
                          </div>
                          <span>{instructor.rating.toFixed(1)}</span>
                        </li>
                      </ul>
                      <Link href={instructor.bioLink}>See more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Widget */}
          <div className="col-lg-4">
            <div className="course-widget-area">
              <div className="image">
                <Image
                  src={videoThumbnail}
                  alt="Course video"
                  width={370}
                  height={250}
                  className="img-fluid"
                />
                <div className="play-btn">
                  <a
                    href={videoUrl}
                    className="popup-youtube"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bx bx-play"></i>
                  </a>
                </div>
              </div>
              <div className="content">
                <div className="pricing">
                  <h4>{price}</h4>
                </div>
                <ul>
                  <li>
                    <span>Level</span>
                    <p>{level}</p>
                  </li>
                  <li>
                    <span>Duration</span>
                    <p>{duration}</p>
                  </li>
                  <li>
                    <span>Subject</span>
                    <p>{subject}</p>
                  </li>
                  <li>
                    <span>Language</span>
                    <p>{language}</p>
                  </li>
                </ul>
                <Link href="#" className="enroll-btn">
                  Enroll Now
                </Link>
                <Link href="#" className="wish-btn">
                  Add to wishlist
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsSection;