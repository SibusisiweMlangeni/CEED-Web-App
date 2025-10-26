
// components/CourseOverview.jsx
export default function CourseOverview({ course }) {
  return (
    <section className="courses-details">
      {/* Header */}
      <div className="header-title pb-10 border-b border-gray-300">
        {/* Breadcrumb */}
        <ul className="flex space-x-16 mb-10">
          <li className="relative pr-8">
            <a href="/" className="font-medium text-black">Home</a>
            <span className="absolute right-0 top-0 h-9 w-px bg-gray-300"></span>
          </li>
          <li className="relative pr-8">
            <a href="/courses" className="font-medium text-black">Courses</a>
            <span className="absolute right-0 top-0 h-9 w-px bg-gray-300"></span>
          </li>
          <li>
            <a className="font-medium text-black">{course.title}</a>
          </li>
        </ul>

        {/* Title */}
        <h2 className="text-4xl font-lexend mb-8">{course.title}</h2>

        {/* Short description */}
        <p className="text-gray-600 mb-10">{course.shortDescription}</p>

        {/* Tags / categories */}
        {course.tags && (
          <div className="flex space-x-4">
            {course.tags.map((tag, idx) => (
              <span key={idx} className="font-semibold text-gray-700">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
