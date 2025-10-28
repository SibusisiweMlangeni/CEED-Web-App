'use client';

import Image from 'next/image';
import Link from 'next/link';

import { CourseDetailProps } from '@/data/CoursesData';

const CourseDetailsSection = ({ details }: { details: CourseDetailProps }) => {
  const {
    category,
    title,
    date = 'Not specified',
    about,
    description,
    tags = [],
    objectives = [],
    materials = [],
    requirements = [],
    audience = [],
    enrolledCount = 0,
    videoThumbnail,
    videoUrl,
    level = 'Not specified',
    duration = 'Not specified',
    subject,
    language = 'English',
    mode = 'Online',
    credits = 'N/A',
    instructor,
    price = 'Free',
  } = details;

  const {
    name: instructorName = 'Instructor',
    rating: instructorRating = 0,
    students: instructorStudents = 0,
    views: instructorViews = '0',
    bioLink = '#',
    avatar = '/assets/img/all-img/teacher-img.png',
  } = instructor ? instructor : {};

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <li key={i}>
        <i
          className={`bx ${
            i < Math.ceil(rating) ? 'bxs-star active' : 'bx-star'
          }`}
        ></i>
      </li>
    ));
  };

  return (
    <div className="courses-details-section pt-100 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="courses-details">
              <div className="header-title">
                <span>{category}</span>
                <h2>{title}</h2>
                <ul>
                  <li>
                    <Image
                      // src={avatar}
                      src="/assets/img/all-img/teacher-img.png"
                      alt={instructorName}
                      width={40}
                      height={40}
                      className="avater"
                    />
                    <p>
                      With <Link href={bioLink}>{instructorName}</Link>
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
                  <p>
                    {enrolledCount > 0
                      ? `${enrolledCount} already enrolled`
                      : 'Be the first to enroll!'}
                  </p>
                </div>
              </div>

              <div className="content">
                <div className="content-pra">
                  <div className="title">
                    <h3>About This Course</h3>
                  </div>
                  <p>{about}</p>
                  <p>{description}</p>

                  {tags.length > 0 && (
                    <div className="tag">
                      <span>Tag:</span>
                      <ul>
                        {tags.map((tag, i) => (
                          <li key={i}>
                            <Link href="#">{tag}</Link>
                            {i < tags.length - 1 && ','}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {objectives.length > 0 && (
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
                )}

                {materials.length > 0 && (
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
                )}

                {requirements.length > 0 && (
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
                )}

                {audience.length > 0 && (
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
                )}
              </div>

              <div className="instructor-card">
                <div className="title">
                  <h3>Your Instructor</h3>
                </div>
                <div className="row align-items-center">
                  <div className="col-lg-5 col-sm-6 col-md-5">
                    <div className="image">
                      <Image
                        // src={avatar}
                        src="/assets/img/all-img/teacher-img.png"
                        alt={instructorName}
                        width={200}
                        height={200}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 col-sm-6 col-md-7">
                    <div className="content">
                      <h3>{instructorName}</h3>
                      <div className="review">
                        <div className="left">
                          <ul>{renderStars(instructorRating)}</ul>
                        </div>
                        <div className="rights">
                          <p>Review {instructorRating}/5</p>
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
                          <span>{instructorStudents}</span>
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
                          <span>{instructorViews}</span>
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
                          <span>{instructorRating.toFixed(1)}</span>
                        </li>
                      </ul>
                      <Link href={bioLink}>See more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="course-widget-area">
              <div className="image">
                <Image
                  // src={videoThumbnail ? videoThumbnail : ""}
                  src="/assets/img/all-img/course-video.png"
                  alt="Course preview"
                  width={370}
                  height={250}
                  className="img-fluid"
                />
                <div className="play-btn">
                  <a
                    href={videoUrl?.trim()}
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
                  <h4>{typeof price === 'number' ? `$${price}` : price}</h4>
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
                  <li>
                    <span>Mode</span>
                    <p>{mode}</p>
                  </li>
                  <li>
                    <span>Credits</span>
                    <p>{credits}</p>
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