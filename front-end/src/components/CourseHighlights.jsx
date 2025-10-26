
// components/CourseHighlights.jsx
export default function CourseHighlights({ highlights }) {
  return (
    <section className="content pt-10">
      <div className="content-pra mb-12">
        {/* Section Title */}
        <div className="title relative mb-8">
          <h3 className="text-2xl font-lexend font-semibold">Course Highlights</h3>
          <div className="absolute bottom-[-15px] left-0 w-16 h-[2px] bg-mainColor"></div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex items-start bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="icon relative text-mainColor text-xl mr-4 mt-1 after:content-[''] after:absolute after:top-0 after:left-[-5px] after:h-7 after:w-7 after:rounded-full after:border after:border-gray-300"></div>
              <p className="text-gray-700 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
