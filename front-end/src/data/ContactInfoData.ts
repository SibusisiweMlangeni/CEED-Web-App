import { IconType } from "react-icons/lib";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";

type ContactInfoData = {
    email: string;
    workingHours: string;
    phone?: string;
}

type  SocialMediaLink = {
    url: string;
    icon: IconType; // This could be a URL to an icon or a class name for an icon font
}

export const contactInfo: ContactInfoData = {
    email: "support@theceed.co.za",
    workingHours: "Mon - Sat: 8:00 - 17:00",
    phone: "023 456 7890"
}

export const socialMediaLinks: SocialMediaLink[] = [
    {
        url: "#",
        icon: FaFacebookF,
    },
    {
        url: "#",
        icon: FaInstagram,
    },
    {
        url: "#",
        icon: FaTiktok,
    },
]