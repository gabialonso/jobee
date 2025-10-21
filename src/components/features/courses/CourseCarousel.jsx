import { useState } from "react";
import CourseCard from "./CourseCard.jsx";

const CARDS_PER_SLIDE = 3;

function chunkCourses(list) {
  const chunks = [];
  for (let index = 0; index < list.length; index += CARDS_PER_SLIDE) {
    chunks.push(list.slice(index, index + CARDS_PER_SLIDE));
  }
  return chunks;
}

export default function CourseCarousel({ courses = [] }) {
  const slides = chunkCourses(courses);
  const [slide, setSlide] = useState(0);
  const total = slides.length;

  if (total === 0) {
    return null;
  }

  const move = (next) => {
    if (next < 0 || next >= total) return;
    setSlide(next);
  };

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-3xl bg-[#FFF8E7]">
        <div
          className="flex transition-all duration-500"
          style={{ transform: `translateX(-${slide * 100}%)` }}
        >
          {slides.map((chunk, index) => (
            <div
              key={index}
              className="grid min-w-full gap-6 px-6 py-6 sm:grid-cols-2 md:grid-cols-3"
            >
              {chunk.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {total > 1 ? (
        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => move(slide - 1)}
            className="rounded-xl border-b-4 border-[#E69C00] bg-white px-4 py-2 text-sm font-semibold text-[#1F2937] transition hover:bg-[#FFF0C2] disabled:opacity-40"
            disabled={slide === 0}
          >
            Atrás
          </button>

          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`h-3 w-3 rounded-full ${index === slide ? "bg-[#E69C00]" : "bg-[#E5E7EB]"
                  }`}
                onClick={() => move(index)}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => move(slide + 1)}
            className="rounded-xl border-b-4 border-[#E69C00] bg-white px-4 py-2 text-sm font-semibold text-[#1F2937] transition hover:bg-[#FFF0C2] disabled:opacity-40"
            disabled={slide === total - 1}
          >
            Siguiente
          </button>
        </div>
      ) : null}
    </div>
  );
}
