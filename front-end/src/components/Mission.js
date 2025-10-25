
export default function Mission({ mission }) {

  return (
    <section className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
      <p>{mission || "Mission statement coming soon..."}</p>
    </section>
  );
}
