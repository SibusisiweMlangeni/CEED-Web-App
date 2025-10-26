
import CourseOverview from "../components/CourseOverview";
import KeyDetails from "../components/KeyDetails";
import RequirementsSection from "../components/RequirementsSection";
import PotentialCareers from "../components/PotentialCareers";
import HowToApply from "../components/HowToApply";
import CourseHighlights from "../components/CourseHighlights";

export default function CourseTest() {
  const course = {
    title: "Bachelor of Computer Science",
    shortDescription: "Learn software development, AI, and data science from the ground up.",
    tags: ["Technology", "Undergraduate", "Full-Time"],
  };

  const details = {
    QualificationType: "Bachelor’s Degree",
    Duration: "3 Years",
    NQFLevel: "7",
    StudyMode: "Full-Time",
    MinimumAPS: "26",
    EntryRequirements: "Matric with Mathematics and English",
  };

  const requirements = {
    subjects: ["Mathematics", "Physical Science", "English"],
    grades: [
      "Minimum 50% in Mathematics",
      "Minimum 50% in English",
      "Overall APS of 26 or higher",
    ],
  };

  const careers = [
    "Software Developer",
    "Data Analyst",
    "Systems Architect",
    "AI Engineer",
    "Database Administrator",
    "Web Developer",
  ];

  const applySteps = [
    "Visit the university’s online application portal.",
    "Complete the online application form and upload all required documents.",
    "Pay the non-refundable application fee.",
    "Submit your application before the closing date.",
    "Wait for confirmation via email or SMS with further instructions.",
  ];

  const highlights = [
    "Gain practical coding experience through hands-on projects.",
    "Learn from experienced industry professionals.",
    "Access to cutting-edge software tools and labs.",
    "Opportunities for internships and job placement.",
    "Globally recognized qualification.",
    "Flexible learning paths and elective modules.",
  ];

  return (
    <div className="max-w-5xl mx-auto p-8">
      <CourseOverview course={course} />
      <KeyDetails details={details} />
      <RequirementsSection requirements={requirements} />
      <PotentialCareers careers={careers} />
      <HowToApply steps={applySteps} />
      <CourseHighlights highlights={highlights} />
    </div>
  );
}
