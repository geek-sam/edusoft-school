import React from "react";

const SchoolHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F3]">
      {/* Navbar */}

      {/* Hero */}
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 pt-12 lg:grid-cols-2 lg:px-10 lg:pb-24 lg:pt-16">
        {/* Content */}
        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-semibold tracking-wide text-[#E76B2F]">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            NURTURING FUTURE LEADERS SINCE 2005
          </div>

          <h1 className="max-w-xl text-5xl font-bold leading-[1.12] tracking-tight text-[#172D50] sm:text-6xl lg:text-[68px]">
            Where Young
            <span className="text-[#F47735]"> Minds </span>
            Grow Into
            <span className="block">Bright Futures.</span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-gray-600 sm:text-lg">
            More than just a school, we're a place where curiosity meets
            opportunity. Building knowledge, character, and confidence for a
            world full of possibilities.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#admissions"
              className="rounded-full bg-[#172D50] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-950/10 transition hover:-translate-y-1 hover:bg-[#243f68]"
            >
              Explore Admissions ↗
            </a>

            <a
              href="#about"
              className="flex items-center gap-3 text-sm font-semibold text-[#172D50]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white">
                ▶
              </span>
              Discover Our School
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 grid max-w-lg grid-cols-3 gap-4 border-t border-gray-200 pt-8">
            <div>
              <h3 className="text-3xl font-bold text-[#172D50]">20+</h3>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Years of Excellence
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#172D50]">2.5K+</h3>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Happy Students
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#172D50]">100+</h3>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Expert Teachers
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
          {/* Decorative background */}
          <div className="absolute -right-5 -top-5 h-40 w-40 rounded-full bg-[#F47735]/10" />

          <div className="relative overflow-hidden rounded-[32px] rounded-bl-[100px] shadow-2xl shadow-blue-950/10">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&auto=format&fit=crop&q=85"
              alt="Students learning together in a classroom"
              className="h-[420px] w-full object-cover sm:h-[540px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#172D50]/50 via-transparent to-transparent" />

            <div className="absolute bottom-7 left-7 right-7 text-white">
              <p className="text-xs font-semibold tracking-[3px] text-orange-300">
                LEARN. EXPLORE. ACHIEVE.
              </p>
              <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
                Every Child Has a Story to Tell.
              </h3>
            </div>
          </div>

          {/* Floating achievement card */}
          <div className="absolute -bottom-7 -left-3 flex items-center gap-4 rounded-2xl bg-white p-4 shadow-xl sm:-left-10 sm:p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-2xl">
              🏆
            </div>
            <div>
              <p className="text-sm font-bold text-[#172D50]">
                Excellence in Education
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Shaping tomorrow's leaders
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      {/* <div className="border-t border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 py-5 text-xs font-semibold tracking-wider text-gray-500 sm:justify-between lg:px-10">
          <span>ACADEMIC EXCELLENCE</span>
          <span>HOLISTIC DEVELOPMENT</span>
          <span>VALUES & DISCIPLINE</span>
          <span>FUTURE READY LEARNING</span>
        </div>
      </div> */}
    </section>
  );
};

export default SchoolHero;
