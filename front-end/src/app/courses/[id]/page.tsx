import { Metadata } from "next";
import CourseDetailsSection from "@/components/courses/CourseDetail";
import { notFound } from 'next/navigation';
import { Courses, FacultiesData } from "@/data/CoursesData";
import { extractAllCourses } from "@/lib/utils";

interface CoursePageProps {
  params: Promise<{ id: string }>;
}


export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const {id} = await params;
  return {
    title: `Course: ${id}`,
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const {id} = await params;
  const idNum = parseInt(id);

  const allCourses = extractAllCourses(FacultiesData);

  const course = allCourses.find((c) => c.id === idNum);

  if (!course?.details) return notFound();

  return (
    <div className="mt-[120px]">
      <CourseDetailsSection details={course.details} />
    </div>
  );
}