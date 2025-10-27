import React from "react";
import ContactSection from "@/components/contact/ContactSection";
import SectionBanner from "@/components/shared/Banner";

export default async function ContactPage() {
    return (
        <div className="mt-[120px]">
            <SectionBanner 
                title="Contact Us"
                description="We’d love to hear from you! Whether you have questions, need guidance, or want to partner with us, reach out and our team will get back to you promptly."
                backgroundImage="/img/section-image-1.png"
            />

            <ContactSection />
        </div>
    )
}