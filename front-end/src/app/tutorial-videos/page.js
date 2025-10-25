import TutorialVideos from "@/components/TutorialVideos";
import { fetchAPI } from "@/lib/api";

export default async function TutorialVideosPage() {
  const videos = await fetchAPI("/tutorial-videos").catch(() => []);

  return (
    <main className="p-8  text-center">
      <h1 className="text-3xl font-bold mb-6">Tutorial Videos</h1>
      <TutorialVideos videos={videos} preview={false} />
    </main>
  );
}
