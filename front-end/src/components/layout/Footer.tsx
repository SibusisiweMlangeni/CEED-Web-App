import Link from "next/link";
import { socialMediaLinks } from "@/data/ContactInfoData";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-primary pt-10 pb-6 text-white">
      <div className="container mx-auto px-4">
        {/* Footer logo positioned above the section */}
        <div className="absolute -top-[50%] left-0 right-0 flex justify-center">
          <div className="bg-white rounded-full w-24 h-24">
            <Image
              src="/logo/ceed-logo.svg"
              alt="CEED logo"
              className="w-[180px] h-auto"
              width={180}
              height={180}
              priority
            />
          </div>
        </div>

        {/* Main footer content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Left side — copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm md:text-base">
              © {currentYear}{" "}
              <Link
                href="/"
                className="font-semibold underline-offset-2 hover:underline"
              >
                CEED
              </Link>
              . All rights reserved.
            </p>
          </div>

          {/* Right side — links + social */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            {/* Policy links */}
            <ul className="flex gap-5 text-sm md:text-base font-medium">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:underline underline-offset-2"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="hover:underline underline-offset-2"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>

            {/* Social icons */}
            <ul className="flex gap-3">
              {socialMediaLinks.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black rounded-[2px] w-10 h-10 flex items-center justify-center text-xl hover:text-primary transition"
                  >
                    <social.icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
