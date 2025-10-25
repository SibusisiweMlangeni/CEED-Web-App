
export default function ContactUs({ contact }) {

  return (
    <section className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p>Email: {contact && contact.email || "Not available"}</p>
      <p>Phone: {contact && contact.phone || "Not available"}</p>
      <p>Address: {contact && contact.address || "Not available"}</p>
    </section>
  );
}
