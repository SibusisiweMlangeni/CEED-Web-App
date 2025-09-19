"use client";

import { useState } from "react";

export default function HomeCarousel({ slides }) {
  if (!slides || slides.length === 0) {
    return <div className="p-8 text-center">No slides available</div>;
  }

  const [index, setIndex] = useState(0);
  const nextSlide = () => setIndex((index + 1) % slides.length);
  const prevSlide = () => setIndex((index - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full h-[400px] overflow-hidden">
      <img
        src={slides[index]?.image || "/placeholder.jpg"}
        alt={slides[index]?.title || "Slide"}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">
        <h2 className="text-xl">{slides[index]?.title || "Untitled Slide"}</h2>
        <p>{slides[index]?.caption || ""}</p>
      </div>
      <button onClick={prevSlide} className="absolute left-2 top-1/2">⬅</button>
      <button onClick={nextSlide} className="absolute right-2 top-1/2">➡</button>
    </section>
  );
}
