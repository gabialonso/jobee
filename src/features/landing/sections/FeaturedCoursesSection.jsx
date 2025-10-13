import CourseCarousel from "../../../components/courses/CourseCarousel.jsx";

export default function FeaturedCoursesSection({
  id = "cursos",
  eyebrow,
  title,
  description,
  courses = [],
}) {
  if (!courses.length) return null;

  return (
    <section id={id} className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 text-left">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-wide text-[#9B1756]">
            {eyebrow}
          </p>
        ) : null}
        {title ? (
          <h2 className="text-2xl font-bold text-[#1F2937] md:text-3xl">{title}</h2>
        ) : null}
        {description ? (
          <p className="max-w-3xl text-sm text-[#4B5563] md:text-base">{description}</p>
        ) : null}
      </div>
      <CourseCarousel courses={courses} />
    </section>
  );
}
