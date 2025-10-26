export default function HowToApply({ steps }) {
  return (
    <section className="bg-white p-8 rounded-lg shadow-md border-b border-gray-200">
      <h3 className="text-2xl font-semibold mb-6 relative after:block after:w-16 after:h-1 after:bg-orange-600 after:mt-2">
        How to Apply
      </h3>
      <ol className="list-decimal list-inside space-y-2">
        {steps.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ol>
    </section>
  );
}
