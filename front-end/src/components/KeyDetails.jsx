
//KeyDetails.jsx
export default function KeyDetails({ details }) {
  return (
    <section className="content border-b border-gray-300 pt-10">
      <div className="content-pra mb-12">
        {/* Section Title */}
        <div className="title relative mb-8">
          <h3 className="text-2xl font-lexend font-semibold">Key Details</h3>
          <div className="absolute bottom-[-15px] left-0 w-16 h-[2px] bg-mainColor"></div>
        </div>

        {/* Detail List */}
        <ul className="lists space-y-6">
          {Object.entries(details).map(([key, value]) => (
            <li key={key} className="flex items-center">
              <div className="icon relative text-mainColor text-xl mr-5 after:content-[''] after:absolute after:top-0 after:left-[-5px] after:h-7 after:w-7 after:rounded-full after:border after:border-gray-300"></div>
              <div>
                <span className="block font-semibold capitalize text-gray-800">{key.replace(/([A-Z])/g, " $1")}</span>
                <p className="text-gray-600">{value}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
