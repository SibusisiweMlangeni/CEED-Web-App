import { IconType } from "react-icons";
import { BiCalculator } from "react-icons/bi";
import { FaUniversity, FaCompass, FaBookOpen } from "react-icons/fa";

export type Offer = {
  icon: IconType;
  title: string;
  description: string;
};

export const OffersData: Offer[] = [
  {
    icon: BiCalculator,
    title: "APS Score Calculator",
    description:
      "Instantly calculate your Admission Point Score and discover which institutions fit your marks.",
  },
  {
    icon: FaUniversity,
    title: "Apply to Multiple Institutions",
    description:
      "Submit one application and reach multiple universities at once.",
  },
  {
    icon: FaCompass,
    title: "Explore Study Paths",
    description:
      "Find study and career options that match your goals and academic strengths.",
  },
  {
    icon: FaBookOpen,
    title: "Resources & Guidance",
    description:
      "Access bursaries, deadlines, and tools to make your application journey easier.",
  },
];
