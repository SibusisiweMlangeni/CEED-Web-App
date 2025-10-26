import CourseOverview from "./CourseOverview";
import KeyDetails from "./KeyDetails";
import RequirementsSection from "./RequirementsSection";
import PotentialCareers from "./PotentialCareers";
import HowToApply from "./HowToApply";
import CourseHighlights from "./CourseHighlights";

export default function Course({ courseData }) {
  return (
    <div className="max-w-5xl mx-auto p-8 space-y-12">
      <CourseOverview course={courseData.overview} />
      <KeyDetails details={courseData.details} />
      <RequirementsSection requirements={courseData.requirements} />
      <PotentialCareers careers={courseData.careers} />
      <HowToApply steps={courseData.applySteps} />
      <CourseHighlights highlights={courseData.highlights} />
    </div>
  );
}
