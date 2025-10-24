import Hero from "@/components/home/Hero"

export default async function HomePage() {
  // const [carousel, about, vision, mission, videos, footprint, donate, contact, stats] =
  //   await Promise.all([
  //     fetchAPI("/carousel").catch(() => []),
  //     fetchAPI("/about").catch(() => null),
  //     fetchAPI("/vision").catch(() => null),
  //     fetchAPI("/mission").catch(() => null),
  //     fetchAPI("/tutorial-videos").catch(() => []),
  //     fetchAPI("/footprint").catch(() => []),
  //     fetchAPI("/donate").catch(() => null),
  //     fetchAPI("/contact").catch(() => null),
  //     fetchAPI("/statistics").catch(() => []),
  //   ]);
    
  return (
    <>
      <Hero />
      {/* <AboutUs content={about} />
      <Vision vision={vision} />
      <Mission mission={mission} />
      <TutorialVideos videos={videos} preview={true} />
      <SocialFootprint stats={footprint} preview={true} />
      <Donate donateLink={donate?.url} preview={true} />
      <ContactUs contact={contact} />
      <Statistics stats={stats} /> */}
    </>
  );
}
