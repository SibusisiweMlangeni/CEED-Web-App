import HomeCarousel from "@/components/HomeCarousel";
import AboutUs from "@/components/About";
import Vision from "@/components/Vision";
import Mission from "@/components/Mission";
import TutorialVideos from "@/components/TutorialVideos";
import SocialFootprint from "@/components/SocialFootprint";
import Donate from "@/components/Donate";
import ContactUs from "@/components/ContactUs";
import Statistics from "@/components/Statistics";

import { fetchAPI } from "@/lib/api";

export default async function HomePage() {
  const [carousel, about, vision, mission, videos, footprint, donate, contact, stats] =
    await Promise.all([
      fetchAPI("/carousel").catch(() => []),
      fetchAPI("/about").catch(() => null),
      fetchAPI("/vision").catch(() => null),
      fetchAPI("/mission").catch(() => null),
      fetchAPI("/tutorial-videos").catch(() => []),
      fetchAPI("/footprint").catch(() => []),
      fetchAPI("/donate").catch(() => null),
      fetchAPI("/contact").catch(() => null),
      fetchAPI("/statistics").catch(() => []),
    ]);
    
  return (
    <>
      <HomeCarousel slides={carousel} />
      <AboutUs content={about} />
      <Vision vision={vision} />
      <Mission mission={mission} />
      <TutorialVideos videos={videos} preview={true} />
      <SocialFootprint stats={footprint} preview={true} />
      <Donate donateLink={donate?.url} preview={true} />
      <ContactUs contact={contact} />
      <Statistics stats={stats} />
    </>
  );
}
