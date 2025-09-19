
export default function Vision({ vision }) {

  return (
    <section className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
      <p>{vision || "Vision statement coming soon..."}</p>
    </section>
  );
}
