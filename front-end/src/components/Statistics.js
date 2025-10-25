
export default function Statistics({ stats }) {
  if (!stats || stats.length === 0) {
    return <div className="p-8 text-center">No statistics available</div>;
  }

  return (
    <section className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Statistics</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div key={item.id}>
            <p className="text-3xl font-bold">{item.value || "0"}</p>
            <p>{item.label || "Unknown"}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
