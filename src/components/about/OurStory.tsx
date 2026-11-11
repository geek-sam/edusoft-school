import { ArrowRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

const milestones = [
  {
    year: "2011",
    title: "The Beginning",
    description:
      "Our journey began with a vision to create a learning environment where every child could discover their potential and build a strong foundation for the future.",
  },
  {
    year: "2016",
    title: "Growing Together",
    description:
      "As our school community grew, we continued to strengthen our academic approach, learning experiences and opportunities for student development.",
  },
  {
    year: "2020",
    title: "Expanding Possibilities",
    description:
      "With evolving educational needs, we embraced new learning practices, improved facilities and opportunities that support the holistic development of students.",
  },
  {
    year: "Today",
    title: "Continuing the Journey",
    description:
      "We remain committed to nurturing curious minds, responsible individuals and confident learners who are prepared to make a positive difference.",
  },
];

export default function OurStory() {
  return (
    <section
      id="our-story"
      className="overflow-hidden bg-[#F8F8F6] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mb-14 grid grid-cols-1 gap-6 md:mb-20 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <span className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#B8871E]">
              <span className="h-px w-8 bg-[#D69E27]" />
              Our Story
            </span>

            <h2 className="max-w-2xl   text-3xl font-medium leading-tight text-[#172B4D] sm:text-4xl md:text-5xl">
              Built on a Vision.
              <br />
              <span className="text-[#B8871E]">Growing with Purpose.</span>
            </h2>
          </div>

          <div className="md:col-span-5 md:pb-1">
            <p className="max-w-lg text-sm leading-7 text-gray-600 md:text-base">
              Every institution has a story. Ours is a journey shaped by a
              commitment to education, a belief in every child's potential and a
              vision for a better tomorrow.
            </p>
          </div>
        </div>

        {/* Story layout */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Left: Featured image */}
          <div className="lg:sticky lg:top-28 lg:col-span-5">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden bg-[#E9E5DC]">
                <img
                  src="/images/campus3.jpg"
                  alt="School campus and its learning community"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="absolute -bottom-5 -right-3 bg-[#172B4D] px-6 py-5 text-white sm:-right-5 sm:px-8 sm:py-6">
                <p className="  text-3xl font-semibold text-[#E9C779]">[15+]</p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-white/80">
                  Years of Learning
                </p>
              </div>
            </div>

            <p className="mt-10 max-w-sm text-xs leading-6 text-gray-500">
              A journey made possible by the dedication of our educators, the
              trust of our parents and the enthusiasm of our students.
            </p>
          </div>

          {/* Right: Timeline */}
          <div className="lg:col-span-7">
            <div className="mb-8">
              <h3 className="  text-2xl font-medium text-[#172B4D] sm:text-3xl">
                The Journey So Far
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Milestones that have shaped who we are today.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute bottom-8 left-[7px] top-2 w-px bg-[#DCCDAA]" />

              <div className="space-y-10">
                {milestones.map((milestone, index) => (
                  <article
                    key={`${milestone.year}-${index}`}
                    className="relative pl-10"
                  >
                    {/* Timeline marker */}
                    <span className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-[#D69E27] bg-[#F8F8F6]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#172B4D]" />
                    </span>

                    <div className="flex items-center gap-2 text-xs font-bold tracking-[0.15em] text-[#B8871E]">
                      <CalendarDays size={14} />
                      {milestone.year}
                    </div>

                    <h4 className="mt-3   text-xl font-semibold text-[#172B4D] sm:text-2xl">
                      {milestone.title}
                    </h4>

                    <p className="mt-3 max-w-xl text-sm leading-7 text-gray-600">
                      {milestone.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            {/* <div className="mt-12 border-t border-gray-200 pt-7">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#172B4D] transition-colors hover:text-[#B8871E]"
              >
                Discover What Defines Us
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
