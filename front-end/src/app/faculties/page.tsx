import React from "react";
import SectionBanner from "@/components/shared/Banner";
import FacultiesSection from "@/components/faculties/FacultiesSection";
import { FacultiesMenuData } from "@/data/CoursesData";

export default async function FacaltiesPage() {
    return (
        <div className="mt-[120px]">
            <SectionBanner 
                title="Facalties"
                description="Facalties intro text will go here..."
                backgroundImage="/img/section-image-1.png"
            />

            <FacultiesSection menuItems={FacultiesMenuData} />
            
        </div>
    )
}