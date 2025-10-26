import Course from "@/components/Course";

const courseData = {
  overview: { title: "BSc Computer Science", shortDescription: "Learn software development." },
  details: { "Qualification Type": "Bachelor’s", Duration: "3 Years", "NQF Level": "7", "Study Mode": "Full-Time" },
  requirements: { subjects: ["Math", "Science"], grades: ["50% in Math", "50% in English"] },
  careers: ["Software Developer", "Data Analyst"],
  applySteps: ["Apply online", "Upload documents", "Pay fee", "Submit"],
  highlights: ["Hands-on learning", "Industry recognized", "Flexible study paths"]
};

export default function CoursePage() {
  return <Course courseData={courseData} />;
}
