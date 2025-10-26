
// ComponentsRequirementsSection.jsx
export default function RequirementsSection({ requirements }) {
  return (
    <section className="content border-b border-gray-300 pt-10">
      <div className="content-pra mb-12">
        {/* Section Title */}
        <div className="title relative mb-8">
          <h3 className="text-2xl font-lexend font-semibold">Requirements</h3>
          <div className="absolute bottom-[-15px] left-0 w-16 h-[2px] bg-mainColor"></div>
        </div>

        {/* Requirements Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Minimum Subjects */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-800">Minimum Subjects</h4>
            <ul className="space-y-4">
              {requirements.subjects.map((subject, index) => (
                <li key={index} className="flex items-center">
                  <div className="icon relative text-mainColor text-xl mr-4 after:content-[''] after:absolute after:top-0 after:left-[-5px] after:h-7 after:w-7 after:rounded-full after:border after:border-gray-300"></div>
                  <span className="text-gray-700">{subject}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Grade Requirements */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-800">Grade Requirements</h4>
            <ul className="space-y-4">
              {requirements.grades.map((grade, index) => (
                <li key={index} className="flex items-center">
                  <div className="icon relative text-mainColor text-xl mr-4 after:content-[''] after:absolute after:top-0 after:left-[-5px] after:h-7 after:w-7 after:rounded-full after:border after:border-gray-300"></div>
                  <span className="text-gray-700">{grade}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
