import { Metadata } from "next";
import CourseDetailsSection from "@/components/courses/CourseDetail";
import { notFound } from 'next/navigation';
import { Courses } from "@/data/CoursesData";

interface CoursePageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  return {
    title: `Course: ${params.id}`,
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const id = parseInt(params.id);
  const course = Courses.find((c) => c.id === id);

  if (!course) return notFound();

  return (
    <div className="mt-[120px]">
      <CourseDetailsSection {...course.details} />
    </div>
  );
}