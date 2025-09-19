
export default function AboutUs({ content }) {

  return (
    <section className="p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="max-w-2xl mx-auto">{content || "Content coming soon..."}</p>
    </section>
  );
}
