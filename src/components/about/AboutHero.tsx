import { MoveRight } from "lucide-react";
import Breadcrumb from "../Breadcrumb";
import { HashLink } from "react-router-hash-link";

export default function AboutHero() {
  return (
    <section className="overflow-hidden bg-[#F8F8F6]">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8 md:pb-24 lg:px-10 lg:pt-10">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[{ label: "About Us" }]}
          className="mb-12 md:mb-16"
        />

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left content */}
          <div className="relative z-10 lg:col-span-6">
            <span className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#B8871E]">
              <span className="h-px w-8 bg-[#D69E27]" />
              The Story Behind Our School
            </span>

            <h1 className="max-w-2xl   text-5xl font-medium leading-[1.08] tracking-tight text-[#172B4D] sm:text-6xl lg:text-[76px]">
              Every Child.
              <br />
              Every Dream.
              <br />
              <span className="text-[#B8871E]">Every Possibility.</span>
            </h1>

            <p className="mt-7 max-w-lg text-sm leading-7 text-gray-600 md:text-base md:leading-8">
              We believe education is about discovering potential, building
              character and creating opportunities. At Edusoft, every child is
              encouraged to learn, explore and become the best version of
              themselves.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-6">
              <HashLink
                smooth
                to="/about#our-story"
                className="group inline-flex items-center gap-3 bg-[#172B4D] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#D69E27]"
              >
                Discover Our Story
                <MoveRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </HashLink>

              <span className="text-xs font-medium tracking-wide text-gray-500">
                Learning. Character. Growth.
              </span>
            </div>
          </div>

          {/* Right image composition */}
          <div className="relative mx-auto w-full max-w-xl lg:col-span-6 lg:ml-auto">
            {/* Main image */}
            <div className="relative ml-5 aspect-[5/4] max-h-[480px] overflow-hidden sm:ml-10">
              <img
                src="/images/campus2.jpg"
                alt="School campus"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Secondary overlapping image */}
            <div className="absolute -bottom-8 left-0 w-[42%] border-[7px] border-[#F8F8F6] sm:-bottom-10">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/student-life-featured.png"
                  alt="Students learning together"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Decorative gold accent */}
            <div className="absolute -right-2 top-8 h-24 w-24 border-r border-t border-[#D69E27] sm:-right-5 sm:h-32 sm:w-32" />

            {/* Image caption */}
            <div className="absolute -bottom-8 right-0 max-w-[55%] bg-white px-4 py-4 shadow-sm sm:-bottom-10 sm:px-6 sm:py-5">
              <p className="  text-base font-semibold text-[#172B4D] sm:text-lg">
                A community that inspires.
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[#B8871E]">
                A place to belong
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      {/* <div className="h-1 w-full bg-gradient-to-r from-[#172B4D] via-[#D69E27] to-[#172B4D]" /> */}
    </section>
  );
}
