import SectionBanner from "@/components/shared/Banner";

import DonationsPage from "@/components/donate/DonatePage";

export default async function DonatePage() {
  return (
    <div className="p-8 text-center mt-[120px]">
      <SectionBanner 
        title="Donate"
        description="Discover courses that build your skills, boost your career, and fuel your passions—there’s something here for every learner."
        backgroundImage="/img/section-image-1.png"
      />      
      <DonationsPage />
    </div>
  );
}
