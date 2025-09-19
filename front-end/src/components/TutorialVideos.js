import Link from "next/link";

export default function TutorialVideos({ videos, preview = false }) {
  // If preview mode, limit to first 3 videos
  const displayedVideos = preview ? videos.slice(0, 3) : videos;

  return (
    <section className="p-8 text-center">
      {!preview && (
        <h2 className="text-2xl font-bold mb-4">Application process videos</h2>
      )}

      {videos && videos.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedVideos.map((vid) => (
            <div key={vid.id} className="aspect-video">
              {vid.url ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={vid.url}
                  title={vid.title || "Tutorial Video"}
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="bg-gray-300 flex items-center justify-center h-full">
                  Missing Video
                </div>
              )}
              <p className="mt-2">{vid.title || "Untitled Video"}</p>
            </div>
          ))}
        </div>
      )}

      {/* Show "See More" only in preview mode */}
      {preview && (
        <div className="mt-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Tutorial Videos</h2>
          <div className="p-8 text-center">No videos available</div>
          <Link
            href="/tutorial-videos"
            className="inline-block px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            See More
          </Link>
        </div>
      )}
    </section>
  );
}
