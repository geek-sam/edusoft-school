import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Monitor,
  FlaskConical,
  BookOpen,
  Trophy,
  Building2,
} from "lucide-react";

const facilities = [
  {
    number: "01",
    title: "Smart Classrooms",
    description:
      "Modern learning spaces equipped with interactive technology and comfortable environments.",
    image: "/images/classroom.png",
    link: "/facilities/classrooms",
    icon: Monitor,
  },
  {
    number: "02",
    title: "Science & Computer Labs",
    description:
      "Hands-on learning environments that encourage experimentation and innovation.",
    image: "/images/labs.png",
    link: "/facilities/labs",
    icon: FlaskConical,
  },
  {
    number: "03",
    title: "School Library",
    description:
      "A welcoming space filled with resources that inspire curiosity and lifelong learning.",
    image: "/images/library.png",
    link: "/facilities/library",
    icon: BookOpen,
  },
  {
    number: "04",
    title: "Sports & Recreation",
    description:
      "Dedicated spaces for physical development, teamwork, and sporting excellence.",
    image: "/images/sports.png",
    link: "/facilities/sports",
    icon: Trophy,
  },
];

const FacilitiesSection = () => {
  return (
    <section className="bg-[#F8F8F6] px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D69E27]" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8871E]">
                Our Facilities
              </span>
            </div>

            <h2 className="text-4xl font-medium leading-tight tracking-tight text-[#172B4D] sm:text-5xl lg:text-[54px]">
              Spaces That Inspire
              <br />
              <span className="italic">Learning & Growth.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm leading-7 text-gray-500 sm:text-base">
              We provide thoughtfully designed learning spaces and modern
              facilities that support academic excellence, creativity, and
              overall development.
            </p>

            <Link
              to="/facilities"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#172B4D] transition hover:text-[#B8871E]"
            >
              Explore All Facilities
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>

        {/* Facilities Layout */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Featured Campus Card */}
          <Link
            to="/facilities"
            className="group relative min-h-[450px] overflow-hidden bg-[#172B4D] sm:min-h-[550px]"
          >
            <img
              src="/images/campus.jpg"
              alt="School campus and infrastructure"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#101F37]/95 via-[#101F37]/20 to-transparent" />

            {/* Top Label */}
            <div className="absolute left-6 top-6 flex items-center gap-2 bg-white px-4 py-2">
              <Building2 size={16} className="text-[#172B4D]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#172B4D]">
                Our Campus
              </span>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#E9C779]">
                01 / Campus & Infrastructure
              </span>

              <h3 className="mt-3 text-3xl font-medium text-white sm:text-4xl">
                A Place to Learn,
                <br />
                Explore & Grow.
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-white/75">
                Discover a thoughtfully designed campus that provides a safe,
                inspiring, and engaging environment for every student.
              </p>

              <div className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-white">
                Explore Our Campus
                <span className="flex h-10 w-10 items-center justify-center border border-white/40 transition-all group-hover:border-[#D69E27] group-hover:bg-[#D69E27] group-hover:text-[#172B4D]">
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </div>
          </Link>

          {/* Four Facility Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {facilities.map((facility) => {
              const Icon = facility.icon;

              return (
                <Link
                  key={facility.number}
                  to={facility.link}
                  className="group flex flex-col overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#D69E27] hover:shadow-lg"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center bg-white text-xs font-semibold text-[#172B4D]">
                      {Number(facility.number) + 1}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-2">
                      <Icon size={17} className="text-[#B8871E]" />

                      <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                        School Facilities
                      </span>
                    </div>

                    <h3 className="mt-3 text-xl font-semibold text-[#172B4D]">
                      {facility.title}
                    </h3>

                    <p className="mt-2 flex-1 text-xs leading-6 text-gray-500">
                      {facility.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                      <span className="text-xs font-semibold text-[#172B4D] transition group-hover:text-[#B8871E]">
                        Discover More
                      </span>

                      <ArrowRight
                        size={17}
                        className="text-[#172B4D] transition-transform group-hover:translate-x-1 group-hover:text-[#B8871E]"
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
