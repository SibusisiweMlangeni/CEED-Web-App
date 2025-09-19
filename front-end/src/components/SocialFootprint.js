import Link from "next/link";

export default function SocialFootprint({ stats, preview = false }) {
  // if (!stats || stats.length === 0 ) {
  //   return <div className="p-8 text-center">No social stats available</div>;
  // }

  // Show only first 3 in preview
  const displayedStats = preview ? stats.slice(0, 3) : stats;

  return (
    <section className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Our Social Footprint</h2>
      {stats && stats.length  > 0 && (
        <div className="flex justify-center gap-8 flex-wrap">
          {displayedStats.map((item) => (
            <div key={item.id}>
              <p className="text-3xl font-bold">{item.value || "0"}</p>
              <p>{item.label || "Unknown"}</p>
            </div>
          ))}
        </div>
      )}

      {preview && (
        <div className="mt-6">
          <div className="p-8 text-center">No social stats available</div>
          <Link
            href="/social-footprint"
            className="inline-block px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            See More
          </Link>
        </div>
      )}
    </section>
  );
}
