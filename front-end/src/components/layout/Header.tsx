"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks } from "../../data/HeaderLinks";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { contactInfo, socialMediaLinks } from "../../data/ContactInfoData";
import { FaEnvelope, FaClock } from "react-icons/fa6";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${scrolled ? "bg-white text-black shadow-md": "bg-transparent text-white"} fixed top-0 z-50 w-full`}>
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
        {scrolled ? (
          <Image
            src="/logo/ceed-logo.svg"
            alt="CEED Logo"
            width={70}
            height={70}
            priority
          />
        ) : (
          <Image
            src="/logo/ceed-logo-white.svg"
            alt="CEED Logo"
            width={70}
            height={70}
            priority
          />
        )}
          
          <h1 className="text-2xl font-bold">CEED</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) =>
            link.submenu ? (
              <div key={link.title} className="relative group">
                <button
                  onClick={() => toggleDropdown(link.title)}
                  className="flex items-center gap-1 text-base font-medium hover:text-primary transition"
                >
                  {link.title}
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      activeDropdown === link.title ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown */}
                <ul className="absolute left-0 top-full mt-2 hidden min-w-[180px] flex-col bg-white text-gray-800 shadow-lg group-hover:flex rounded-md">
                  {link.submenu.map((sub) => (
                    <li key={sub.title}>
                      <Link
                        href={sub.href}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {sub.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link
                key={link.title}
                href={link.href || "#"}
                className="text-base font-medium hover:text-primary transition"
              >
                {link.title}
              </Link>
            )
          )}
        </nav>

        {/* Contact + Search */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-primary px-5 py-2 text-white font-medium hover:bg-foreground transition"
          >
            Contact Us
          </Link>
          <button className="text-white hover:text-[#f5d36e] transition">
            <i className="bx bx-search text-2xl"></i>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="block lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/70 bg-opacity-50 z-40">
          <div className="fixed right-0 top-0 h-full w-3/4 max-w-sm bg-white text-gray-900 p-7 overflow-y-auto z-50">
            <div className="flex justify-between items-center border-b pb-5">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/CEED-Logo.png"
                  alt="CEED logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <h1 className="text-2xl font-bold">CEED</h1>
              </Link>

              <button onClick={() => setMobileOpen(false)}>
                <X size={26} />
              </button>
            </div>

            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.title}>
                  {link.submenu ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(link.title)}
                        className="w-full flex justify-between items-center py-2 text-sm font-medium"
                      >
                        {link.title}
                        <ChevronDown
                          size={14}
                          className={`transition-transform ${
                            activeDropdown === link.title ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {activeDropdown === link.title && (
                        <ul className="pl-4 py-1 flex flex-col text-sm font-medium">
                          {link.submenu.map((sub) => (
                            <li key={sub.title}>
                              <Link
                                href={sub.href}
                                onClick={() => setMobileOpen(false)}
                                className="block py-3 text-gray-700 hover:text-primary"
                              >
                                {sub.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href || "#"}
                      onClick={() => setMobileOpen(false)}
                      className="w-full flex justify-between items-center py-2 text-sm font-medium"
                    >
                      {link.title}
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${
                          activeDropdown === link.title ? "rotate-180" : ""
                        }`}
                      />
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-7 pt-7 border-t">
              <h4 className="text-xl mb-6 font-semibold text-foreground">
                Contact Info
              </h4>
              <ul className="mt-2.5 mb-5 flex flex-col gap-3 font-medium">
                <li className="flex items-center gap-2">
                  <FaEnvelope className="text-primary" />
                  <a href={`mailto:${contactInfo.email}`}>
                    {contactInfo.email}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FaClock className="text-primary" />
                  <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                </li>
              </ul>
              <ul className="my-7 flex items-center gap-3">
                {socialMediaLinks.map((social, index) => (
                  <li key={index}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-8 h-8 bg-secondary rounded-sm"
                    >
                      <social.icon className="text-primary" />
                    </a>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center bg-primary text-white py-2 rounded-full font-medium hover:bg-foreground"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
