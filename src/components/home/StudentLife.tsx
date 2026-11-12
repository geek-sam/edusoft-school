import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Palette,
  Trophy,
  CalendarDays,
  Music2,
  Sparkles,
} from "lucide-react";

const studentActivities = [
  {
    number: "01",
    title: "Activities",
    subtitle: "Explore Your Interests",
    description:
      "From creative workshops to student clubs, discover opportunities to explore interests and develop new skills.",
    image: "/images/student-activities.png",
    // link: "/student-life/activities",
    icon: Palette,
  },
  {
    number: "02",
    title: "Sports",
    subtitle: "Play. Compete. Achieve.",
    description:
      "Build confidence, teamwork, and discipline through sports, fitness, and friendly competition.",
    image: "/images/sports.png",
    // link: "/student-life/sports",
    icon: Trophy,
  },
  {
    number: "03",
    title: "Events",
    subtitle: "Moments That Matter",
    description:
      "Be part of memorable school celebrations, competitions, exhibitions, and special occasions.",
    image: "/images/event-celebration.png",
    // link: "/student-life/events",
    icon: CalendarDays,
  },
  {
    number: "04",
    title: "Cultural Programs",
    subtitle: "Celebrate Every Expression",
    description:
      "Express creativity and celebrate traditions through music, dance, art, theatre, and performances.",
    image: "/images/student-cultural.png",
    // link: "/student-life/cultural",
    icon: Music2,
  },
];

const StudentLife = () => {
  return (
    <section className="overflow-hidden bg-white px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-12 grid grid-cols-1 gap-7 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D69E27]" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8871E]">
                Life Beyond Classrooms
              </span>
            </div>

            <h2 className="text-4xl font-medium leading-tight tracking-tight text-[#172B4D] sm:text-5xl lg:text-[54px]">
              Discover, Participate
              <br />& Make Memories.
            </h2>
          </div>

          <div className="lg:pl-10">
            <p className="max-w-lg text-sm leading-7 text-gray-500 sm:text-base">
              School life is more than academics. We create opportunities for
              students to explore their passions, discover their talents, build
              friendships, and develop confidence beyond the classroom.
            </p>

            <Link
              to="/student-life"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#172B4D] transition hover:text-[#B8871E]"
            >
              Explore Student Life
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>

        {/* Featured Student Life Banner */}
        <Link
          to="/student-life"
          className="group relative mb-6 block h-[340px] overflow-hidden bg-[#172B4D] sm:h-[430px] lg:h-[480px]"
        >
          <img
            src="/images/student-life-featured.png"
            alt="Students enjoying activities and learning together"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#101F37]/85 via-[#101F37]/35 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-end p-7 sm:p-10 lg:p-14">
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E9C779]">
              <Sparkles size={15} />
              Beyond the Classroom
            </span>

            <h3 className="mt-4 max-w-xl text-3xl font-medium leading-tight text-white sm:text-5xl">
              Every Experience
              <br />
              Shapes Who We Become.
            </h3>

            <p className="mt-4 max-w-md text-sm leading-7 text-white/75">
              Explore a vibrant student community where every interest has a
              place and every student has an opportunity to shine.
            </p>

            <div className="mt-7 flex items-center gap-3 text-sm font-semibold text-white">
              Discover Student Life
              <span className="flex h-10 w-10 items-center justify-center border border-white/50 transition-all group-hover:border-[#D69E27] group-hover:bg-[#D69E27] group-hover:text-[#172B4D]">
                <ArrowUpRight size={18} />
              </span>
            </div>
          </div>
        </Link>

        {/* Activity Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {studentActivities.map((activity) => {
            const Icon = activity.icon;

            return (
              <div
                key={activity.number}
                // to={activity.link}
                className="group flex flex-col overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#D69E27] hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#172B4D]/45 to-transparent opacity-70" />

                  <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center bg-white text-xs font-semibold text-[#172B4D]">
                    {activity.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2">
                    <Icon size={17} className="text-[#B8871E]" />

                    <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                      {activity.subtitle}
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl font-semibold text-[#172B4D]">
                    {activity.title}
                  </h3>

                  <p className="mt-3 flex-1 text-xs leading-6 text-gray-500">
                    {activity.description}
                  </p>

                  {/* <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
                    <span className="text-xs font-semibold text-[#172B4D] transition group-hover:text-[#B8871E]">
                      Explore More
                    </span>

                    <ArrowRight
                      size={17}
                      className="text-[#172B4D] transition-transform group-hover:translate-x-1 group-hover:text-[#B8871E]"
                    />
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StudentLife;
