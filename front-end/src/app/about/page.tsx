import React from "react";

import WhoWeAreSection from "@/components/about/WhoWeAre";
import WhatWeDoSection from "@/components/about/WhatWeDo";
import SectionBanner from "@/components/about/Banner";
import VisionMissionValuesSection from "@/components/about/VisionMissionValues";
import Donate from "@/components/about/Donate";

export default async function AboutPage() { 
  return (
    <div className="mt-[120px]">
         <SectionBanner
            title="About Us"
            description="Clgun University is more than just a place of learning; it's a place where dreams take flight, where ideas flourish, and where you'll find the support and..."
            backgroundImage="/img/section-image-1.png"
        />

        <WhoWeAreSection />

        <WhatWeDoSection />

        <VisionMissionValuesSection />

        <Donate />
    </div>
  );
}