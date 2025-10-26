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
        url: "https://www.tiktok.com/@ceed.za?_t=ZS-8ze9yHsvYhh&_r=1",
        icon: FaFacebookF,
    },
    {
        url: "https://www.instagram.com/ceed.za?igsh=cHJtd2RhNGl2amxh&utm_source=qr",
        icon: FaInstagram,
    },
    {
        url: "https://www.tiktok.com/@ceed.za?_t=ZS-8ze9yHsvYhh&_r=1",
        icon: FaTiktok,
    },
]