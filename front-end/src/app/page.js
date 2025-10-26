import Link from "next/link";
import Course from "@/components/Course";
import HomeCarousel from "@/components/HomeCarousel";
import AboutUs from "@/components/About";
import Vision from "@/components/Vision";
import Mission from "@/components/Mission";
import TutorialVideos from "@/components/TutorialVideos";
import SocialFootprint from "@/components/SocialFootprint";
import Donate from "@/components/Donate";
import ContactUs from "@/components/ContactUs";
import Statistics from "@/components/Statistics";

import { fetchAPI } from "@/lib/api";

export default async function HomePage() {
  const [carousel, about, vision, mission, videos, footprint, donate, contact, stats] =
    await Promise.all([
      fetchAPI("/carousel").catch(() => []),
      fetchAPI("/about").catch(() => null),
      fetchAPI("/vision").catch(() => null),
      fetchAPI("/mission").catch(() => null),
      fetchAPI("/tutorial-videos").catch(() => []),
      fetchAPI("/footprint").catch(() => []),
      fetchAPI("/donate").catch(() => null),
      fetchAPI("/contact").catch(() => null),
      fetchAPI("/statistics").catch(() => []),
    ]);
    
  const courseData = {
  overview: { title: "BSc Computer Science", shortDescription: "Learn software development." },
  details: {
    "Qualification Type": "Bachelor’s",
    Duration: "3 Years",
    "NQF Level": "7",
    "Study Mode": "Full-Time",
    "Minimum APS": "24",
    "Entry Requirements": "Grade 12"
  },
  requirements: { subjects: ["Math", "Science"], grades: ["50% in Math", "50% in English"] },
  careers: ["Software Developer", "Data Analyst"],
  applySteps: ["Apply online", "Upload documents", "Pay fee", "Submit"],
  highlights: ["Hands-on learning", "Industry recognized", "Flexible study paths"]
};

    return (
  <>
    <HomeCarousel slides={carousel} />
    <AboutUs content={about} />
    <Vision vision={vision} />
    <Mission mission={mission} />
    <TutorialVideos videos={videos} preview={true} />
    <SocialFootprint stats={footprint} preview={true} />
    <Donate donateLink={donate?.url} preview={true} />
    <ContactUs contact={contact} />
    <Statistics stats={stats} />
  </>
);
}