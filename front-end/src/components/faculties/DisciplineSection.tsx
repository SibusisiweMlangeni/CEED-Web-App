'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Course } from "@/data/CoursesData";
import { HandlePageChange } from '@/lib/utils';

interface DisciplineSectionProps {
  courses: Course[];
}

export default function DisciplineSection ({courses}: DisciplineSectionProps) {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const coursesPerPage = 6;

    const totalPages = Math.ceil(courses.length / coursesPerPage);
    const paginatedCourses = courses.slice(
        (currentPage - 1) * coursesPerPage,
        currentPage * coursesPerPage
    );

    const handlePageChange = (page: number) => {
        HandlePageChange(page, totalPages, setCurrentPage);
    };

    return (
        <div className="courses-section pt-100 pb-70">
            <div className="container">
            <div className="row">
                <div className="grid-sorting">
                    <div className="row align-items-center">
                    <div className="col-lg-7 col-md-6">
                        <div className="title">
                        <p>
                            We found {courses.length} course{courses.length !== 1 ? 's' : ''} available for you
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
                        <div key={course.id} className="col-lg-4 col-sm-6 col-md-6">
                        <div className="course-item">
                            <Link href={`/courses/${course.id}`}>
                                <div className="image">
                                <Image
                                    // src={course.imageUrl}
                                    src="/assets/img/all-img/courses-image-1.png"
                                    alt={course.title}
                                    width={370}
                                    height={250}
                                    className="img-fluid"
                                />
                                </div>
                            </Link>
                            <div className="content">
                            <span>{course.date}</span>
                            <h2>
                                <Link href={`/courses/${course.id}`}>{course.title}</Link>
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
        </div>
    </div>
    )

}