import Link from "next/link";

export default function Donate({ donateLink, preview = false }) {

  return (
    <section className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Support Our Cause</h2>

      {!preview ? (
        // Full Donate Page (more details)
        <>
          <p className="mb-4 max-w-2xl mx-auto">
            Your donations help us achieve our mission and vision. Every
            contribution makes a difference!
          </p>
          <a
            href={donateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700"
          >
            Donate Now
          </a>
        </>
      ) : (
        <>
          <div className="mt-4">
            <Link
              href="/donate"
              className="inline-block px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Donate Now
            </Link>
          </div>
        </>
      )}
    </section>
  );
}
