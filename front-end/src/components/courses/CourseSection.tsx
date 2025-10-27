'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Courses } from "../../data/CoursesData";

const CoursesSection = () => {
   const courses = Courses;

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [priceFilter, setPriceFilter] = useState<string>("All");
  const [ratingFilter, setRatingFilter] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const coursesPerPage = 6;

  // Filter and paginate
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice =
        priceFilter === "All" ||
        (priceFilter === "Free" && course.price === "Free") ||
        (priceFilter === "Paid" && course.price !== "Free");
      const matchesRating = ratingFilter === null || parseFloat(course.rating) >= ratingFilter;

      return matchesSearch && matchesPrice && matchesRating;
    });
  }, [searchQuery, priceFilter, ratingFilter, courses]);

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * coursesPerPage,
    currentPage * coursesPerPage
  );

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="courses-section pt-100 pb-70">
      <div className="container">
        <div className="row">
          {/* Main Courses List */}
          <div className="col-lg-8">
            <div className="grid-sorting">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-6">
                  <div className="title">
                    <p>
                      We found {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} available for you
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6">
                  
                </div>
              </div>
            </div>

            <div className="row">
              {paginatedCourses.length > 0 ? (
                paginatedCourses.map((course) => (
                  <div key={course.id} className="col-lg-6 col-sm-6 col-md-6">
                    <div className="course-item">
                      <div className="image">
                        <Image
                          src={course.imageUrl}
                          alt={course.title}
                          width={370}
                          height={250}
                          className="img-fluid"
                        />
                      </div>
                      <div className="content">
                        <span>{course.date}</span>
                        <h2>
                          <Link href="#">{course.title}</Link>
                        </h2>
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
                            <span>{course.students}</span>
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
                            <span>{course.views}</span>
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
                            <span>{course.rating}</span>
                          </li>
                        </ul>
                        <div className="teacher-info">
                          <div className="image">
                            <Image
                              src={course.teacherImageUrl}
                              alt="Teacher"
                              width={40}
                              height={40}
                              className="rounded-circle"
                            />
                            <p>
                              With <span>{course.teacher}</span>
                            </p>
                          </div>
                          <div className="price">
                            <p>{course.price}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12 text-center py-5">
                  <p>No courses match your filters.</p>
                </div>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="blog-pagi">
                <ul className="pagination">
                  <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(currentPage - 1)}
                      aria-label="Previous"
                    >
                      <span aria-hidden="true">
                        <i className="bx bx-arrow-back"></i>
                      </span>
                    </button>
                  </li>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <li key={page} className={`page-item`}>
                      <button
                        className={`page-link ${currentPage === page ? 'active' : ''}`}
                        onClick={() => handlePageChange(page)}
                      >
                        {String(page).padStart(2, '0')}
                      </button>
                    </li>
                  ))}

                  <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(currentPage + 1)}
                      aria-label="Next"
                    >
                      <span aria-hidden="true">
                        <i className="bx bx-arrow-back bx-rotate-180"></i>
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar Filters */}
          <div className="col-lg-4">
            <div className="widget-area">
              {/* Search */}
              <div className="widget widget-search">
                <h3 className="widget-title">Search</h3>
                <form className="search-form" onSubmit={handleSearchSubmit}>
                  <label>
                    <span className="screen-reader-text">Search for:</span>
                    <input
                      type="search"
                      className="search-field"
                      placeholder="Search courses..."
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setCurrentPage(1);
                      }}
                    />
                  </label>
                  <button type="submit">
                    <i className="bx bx-search"></i>
                  </button>
                </form>
              </div>

              <div className="widget widget-list price">
                <h3 className="widget-title">Price</h3>
                <ul>
                  {["All", "Free", "Paid"].map((opt) => (
                    <li key={opt}>
                      <div className="radio-from">
                        <input
                          type="radio"
                          id={`price-${opt}`}
                          checked={priceFilter === opt}
                          onChange={() => {
                            setPriceFilter(opt);
                            setCurrentPage(1);
                          }}
                          className="radio-input"
                          name="price"
                        />
                        <label htmlFor={`price-${opt}`} className="radio-label">
                          <span className="radio-border"></span> {opt}
                        </label>
                      </div>
                      <span>
                        {opt === "All"
                          ? courses.length
                          : opt === "Free"
                          ? courses.filter(c => c.price === "Free").length
                          : courses.filter(c => c.price !== "Free").length}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;