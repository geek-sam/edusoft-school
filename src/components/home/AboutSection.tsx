import { Link } from "react-router-dom";
import { ArrowUpRight, GraduationCap } from "lucide-react";

const AboutSection = ({ isHomePage }: { isHomePage: boolean }) => {
  return (
    <section className="overflow-hidden bg-[#F8F8F6] px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left: School Image */}
          <div className="relative z-10">
            {/* Section Label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D69E27]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8871E]">
                Edusoft at a glance
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="max-w-xl text-3xl font-medium leading-[1.15] tracking-tight text-[#172B4D] sm:text-4xl lg:text-[48px]">
              Nurturing Minds,
              <br />
              Shaping Futures.
            </h2>

            {/* Introduction */}
            <div className="mt-7">
              <p className="text-base leading-8 text-gray-600">
                We believe every child has the potential to achieve
                extraordinary things. Our school provides a supportive and
                inspiring environment where students develop knowledge,
                creativity, confidence, and the values needed to succeed in
                life.
              </p>

              <p className="mt-4 text-base leading-8 text-gray-600">
                Through a balanced approach to academics, extracurricular
                activities, and personal development, we prepare students to
                become responsible individuals and future leaders.
              </p>
            </div>

            {/* Vision & Mission */}
            {!isHomePage && (
              <div className="mt-9 grid grid-cols-1 gap-7 sm:grid-cols-2">
                <div className="border-l-2 border-[#D69E27] pl-5">
                  <div className="mb-3 flex items-center gap-2">
                    <h3 className=" text-xl font-semibold text-[#172B4D]">
                      Our Vision
                    </h3>
                  </div>

                  <p className="text-sm leading-7 text-gray-500">
                    To nurture confident, compassionate, and innovative
                    individuals who contribute positively to society and make a
                    meaningful difference.
                  </p>
                </div>

                <div className="border-l-2 border-[#D69E27] pl-5">
                  <div className="mb-3 flex items-center gap-2">
                    <h3 className=" text-xl font-semibold text-[#172B4D]">
                      Our Mission
                    </h3>
                  </div>

                  <p className="text-sm leading-7 text-gray-500">
                    To deliver holistic education through quality teaching,
                    meaningful experiences, and an inclusive environment that
                    inspires lifelong learning.
                  </p>
                </div>
              </div>
            )}

            {/* Learn More CTA */}
            {isHomePage && (
              <div className="mt-10">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-4 bg-[#172B4D] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#D69E27] hover:text-[#172B4D]"
                >
                  Learn More About Us
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            )}
          </div>

          {/* Right: About Content */}
          <div className="relative">
            <div className="relative h-[420px] overflow-hidden sm:h-[540px]">
              <img
                src="/images/school-about.jpg"
                alt="Students learning and interacting at school"
                className="h-full w-full object-cover"
                loading="lazy"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#172B4D]/30 to-transparent" />

              {/* Image Label */}
              <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-white px-5 py-4 shadow-lg">
                <div className="flex h-11 w-11 items-center justify-center bg-[#172B4D] text-white">
                  <GraduationCap size={24} />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#172B4D]">
                    Learning Beyond Limits
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Building a brighter future
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-5 -left-5 -z-0 h-32 w-32 border-b-2 border-l-2 border-[#D69E27]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
