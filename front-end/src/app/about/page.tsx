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
            description="At the Centre for Everything Education, we are dedicated to empowering students from all backgrounds by bridging the gap between them and the opportunities in higher education."
            backgroundImage="/img/section-image-1.png"
        />

        <WhoWeAreSection />

        <WhatWeDoSection />

        <VisionMissionValuesSection />

        <Donate />
    </div>
  );
}