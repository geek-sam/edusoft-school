import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const programs = [
  {
    number: "01",
    title: "Pre-Primary",
    grades: "Nursery – UKG",
    description:
      "Building curiosity, creativity, and foundational skills through playful learning experiences.",
    image: "/images/pre-primary.png",
    link: "/academics/pre-primary",
  },
  {
    number: "02",
    title: "Primary",
    grades: "Classes I – V",
    description:
      "Developing strong academic foundations, independent thinking, and essential life skills.",
    image: "/images/primary.png",
    link: "/academics/primary",
  },
  {
    number: "03",
    title: "Middle School",
    grades: "Classes VI – VIII",
    description:
      "Encouraging exploration, critical thinking, and deeper understanding across subjects.",
    image: "/images/middle.png",
    link: "/academics/middle",
  },
  {
    number: "04",
    title: "Secondary",
    grades: "Classes IX – X",
    description:
      "Preparing students for academic excellence through focused learning and practical knowledge.",
    image: "/images/secondary.png",
    link: "/academics/secondary",
  },
  {
    number: "05",
    title: "Senior Secondary",
    grades: "Classes XI – XII",
    description:
      "Empowering students with advanced knowledge and the confidence to pursue their ambitions.",
    image: "/images/senior-secondary.png",
    link: "/academics/senior-secondary",
  },
];

const AcademicPrograms = () => {
  return (
    <section className="bg-white px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D69E27]" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8871E]">
                Academic Programs
              </span>
            </div>

            <h2 className="text-3xl font-medium leading-tight tracking-tight text-[#172B4D] sm:text-4xl lg:text-[40px]">
              Learning at Every
              <br />
              Stage of Life.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm leading-7 text-gray-500 sm:text-base">
              Every stage of education brings new opportunities. Our structured
              academic programs nurture students at every step of their learning
              journey.
            </p>

            <Link
              to="/academics"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#172B4D] transition hover:text-[#B8871E]"
            >
              Explore Our Academics
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>

        {/* Academic Program Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {programs.map((program) => (
            <Link
              key={program.number}
              to={program.link}
              className="group flex flex-col border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#D69E27] hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-[4/4.5] overflow-hidden bg-gray-100">
                <img
                  src={program.image}
                  alt={`${program.title} students`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#172B4D]/60 via-transparent to-transparent opacity-70" />

                {/* Program Number */}
                <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center bg-white text-xs font-semibold text-[#172B4D]">
                  {program.number}
                </span>

                {/* Grade Badge */}
                <span className="absolute bottom-4 left-4 bg-[#D69E27] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#172B4D]">
                  {program.grades}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                {/* <div className="flex items-center gap-2">
                  <BookOpen size={15} className="text-[#B8871E]" />

                  <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                    Academic Level
                  </span>
                </div> */}

                <h3 className="mt-3   text-xl font-semibold leading-tight text-[#172B4D]">
                  {program.title}
                </h3>

                {/* <p className="mt-3 flex-1 text-xs leading-6 text-gray-500">
                  {program.description}
                </p> */}

                {/* Card Footer */}
                <div className="flex items-center justify-between border-gray-100 pt-4">
                  <span className="text-xs font-semibold text-[#172B4D] transition-colors group-hover:text-[#B8871E]">
                    Learn More
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center border border-gray-200 transition-all group-hover:border-[#D69E27] group-hover:bg-[#D69E27]">
                    <ArrowUpRight
                      size={16}
                      className="text-[#172B4D] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicPrograms;
