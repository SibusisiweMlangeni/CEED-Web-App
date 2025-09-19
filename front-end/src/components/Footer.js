export default function Footer({ data }) {
  return (
    <footer className="p-6 bg-gray-900 text-white text-center">
      <p>{data && data.text || "© 2025 CEED"}</p>
      {data ? 
        <div className="flex justify-center gap-4 mt-2">
          {data.socials?.length > 0 ? (
            data.socials.map((s) => (
              <a key={s.id} href={s.url || "#"} target="_blank" rel="noreferrer">
                {s.platform || "Social"}
              </a>
            ))
          ) : (
            <span>No social links</span>
          )}
        </div>
      : <p>No footer links</p>}
    </footer>
  );
}
