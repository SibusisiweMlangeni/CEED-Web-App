import Image from "next/image";

export default function Header({ data }) {
  return (
    <header className="flex justify-center p-4 shadow-md bg-white">
      <div className="flex justify-between items-center container">
        <div className="flex items-center gap-2">
          <Image
            src="/CEED-Logo.png"
            alt="CEED Logo"
            width={40}
            height={40}
            priority
          />
          <h1 className="text-2xl font-bold">{data?.title || "CEED"}</h1>
        </div>

        <nav className="flex gap-4">
          {data?.links?.length > 0 ? (
            data.links.map((link) => (
              <a
                key={link.id}
                href={link.url || "#"}
                className="hover:underline"
              >
                {link.label || "Link"}
              </a>
            ))
          ) : (
            <span>No links available</span>
          )}
        </nav>
      </div>
    </header>
  );
}
