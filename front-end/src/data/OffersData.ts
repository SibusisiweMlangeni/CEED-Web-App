import { StaticImageData } from "next/image";
import { IconType } from "react-icons";
import { BiCalculator } from "react-icons/bi";
import { FaUniversity, FaCompass, FaBookOpen } from "react-icons/fa";
import offer1 from "@/images/offers/offer1.webp";
import offer2 from "@/images/offers/offer2.webp";
import offer3 from "@/images/offers/offer3.webp";
import offer4 from "@/images/offers/offer4.webp";

export type Offer = {
  icon: IconType;
  title: string;
  description: string;
};

export type OfferGridItem = {
  id: number;
  image: StaticImageData;
  title: string;
  link: string;
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

export const offersGridData: OfferGridItem[] = [
  {
    id: 1,
    image: offer1,
    title: "APS Calculator",
    link: "#",
  },
  {
    id: 2,
    image: offer2,
    title: "Apply to Multiple",
    link: "#",
  },
  {
    id: 3,
    image: offer3,
    title: "Explore Study Paths",
    link: "#",
  },
  {
    id: 4,
    image: offer4,
    title: "Bursaries & Guidance",
    link: "#",
  },
];
