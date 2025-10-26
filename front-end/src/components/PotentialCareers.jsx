
// components/PotentialCareers.jsx
export default function PotentialCareers({ careers }) {
  return (
    <section className="content border-b border-gray-300 pt-10">
      <div className="content-pra mb-12">
        {/* Section Title */}
        <div className="title relative mb-8">
          <h3 className="text-2xl font-lexend font-semibold">Potential Careers</h3>
          <div className="absolute bottom-[-15px] left-0 w-16 h-[2px] bg-mainColor"></div>
        </div>

        {/* Careers List */}
        <ul className="lists grid md:grid-cols-2 gap-6">
          {careers.map((career, index) => (
            <li key={index} className="flex items-center">
              <div className="icon relative text-mainColor text-xl mr-5 after:content-[''] after:absolute after:top-0 after:left-[-5px] after:h-7 after:w-7 after:rounded-full after:border after:border-gray-300"></div>
              <span className="text-gray-700 font-medium">{career}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
