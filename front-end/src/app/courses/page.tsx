import React from "react";
import SectionBanner from "@/components/shared/Banner";
import CoursesSection from "@/components/courses/CourseSection";
import { Courses } from "../../data/CoursesData";

export default async function CoursesPage() {
    return (
        <div className="mt-[120px]">
            <SectionBanner 
                title="Courses"
                description="Discover courses that build your skills, boost your career, and fuel your passions—there’s something here for every learner."
                backgroundImage="/img/section-image-1.png"
            />

            <CoursesSection courses={Courses} />
        </div>
    )
}