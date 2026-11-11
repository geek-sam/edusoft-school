import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  GraduationCap,
  Users,
  Trophy,
  //   BookOpen,
  Lightbulb,
  ShieldCheck,
  //   HeartHandshake,
  Star,
} from "lucide-react";

const differentiators = [
  {
    icon: GraduationCap,
    title: "Quality Education",
    description:
      "A well-structured academic approach that builds strong foundations and encourages lifelong learning.",
  },
  {
    icon: Users,
    title: "Experienced Faculty",
    description:
      "Dedicated educators who inspire, guide, and support every student's individual learning journey.",
  },
  {
    icon: Lightbulb,
    title: "Holistic Development",
    description:
      "A balanced focus on academics, creativity, sports, leadership, and personal growth.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Learning Environment",
    description:
      "A supportive and inclusive campus where students feel secure, valued, and encouraged.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="overflow-hidden bg-[#172B4D] px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D69E27]" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E9C779]">
                Why Choose Our School
              </span>
            </div>

            <h2 className="max-w-2xl text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl lg:text-[56px]">
              More Than Education.
              <br />A Foundation for Life.
            </h2>
          </div>

          <div className="lg:pl-10">
            <p className="max-w-lg text-sm leading-7 text-white/65 sm:text-base">
              We believe education is about shaping individuals, discovering
              potential, and creating opportunities. Our commitment goes beyond
              classrooms to prepare students for a meaningful future.
            </p>
          </div>
        </div>

        {/* Key Differentiators */}
        <div className="mt-16 grid grid-cols-1 gap-0 border-y border-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`group py-9 sm:px-6 lg:px-7 ${
                  index % 2 === 0 ? "sm:border-r sm:border-white/15" : ""
                } lg:border-r lg:border-white/15 lg:last:border-r-0`}
              >
                <div className="flex items-left justify-between">
                  <div className="flex h-12 w-12 items-center justify-center border border-white/20 text-[#E9C779] transition-all duration-300 group-hover:border-[#D69E27] group-hover:bg-[#D69E27] group-hover:text-[#172B4D]">
                    <Icon size={23} strokeWidth={1.6} />
                  </div>
                  <span className="mt-6 block text-xs font-medium tracking-widest text-[#D69E27]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-medium text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

{
  /* Achievements */
}
// <div className="mt-16 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

//   {/* Achievement Image */}
//   <div className="relative min-h-[350px] overflow-hidden sm:min-h-[430px]">

//     <img
//       src="/images/school-achievements.jpg"
//       alt="Students celebrating school achievements"
//       loading="lazy"
//       className="absolute inset-0 h-full w-full object-cover"
//     />

//     <div className="absolute inset-0 bg-gradient-to-t from-[#101F37]/90 via-transparent to-transparent" />

//     <div className="absolute bottom-7 left-7 right-7">
//       <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E9C779]">
//         Celebrating Excellence
//       </span>

//       <h3 className="mt-3 max-w-md   text-3xl font-medium text-white sm:text-4xl">
//         Every Achievement Tells a Story.
//       </h3>
//     </div>

//   </div>

//   {/* Achievement Content */}
//   <div>

//     <div className="mb-5 flex items-center gap-3">
//       <Trophy size={20} className="text-[#D69E27]" />

//       <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E9C779]">
//         Our Achievements
//       </span>
//     </div>

//     <h3 className="  text-3xl font-medium text-white sm:text-4xl">
//       A Journey of
//       <br />
//       Progress & Excellence.
//     </h3>

//     <p className="mt-5 text-sm leading-7 text-white/60">
//       We take pride in celebrating the achievements of our
//       students and educators. Every milestone reflects our
//       commitment to learning, dedication, and continuous growth.
//     </p>

//     {/* Achievement Highlights */}
//     <div className="mt-8 space-y-5">

//       {[
//         {
//           title: "Academic Excellence",
//           description:
//             "Recognizing outstanding academic performance and progress.",
//         },
//         {
//           title: "Sports & Competitions",
//           description:
//             "Encouraging teamwork, discipline, and sporting achievements.",
//         },
//         {
//           title: "Creative & Cultural Activities",
//           description:
//             "Celebrating talent, creativity, and student participation.",
//         },
//       ].map((achievement) => (
//         <div
//           key={achievement.title}
//           className="flex items-start gap-4 border-b border-white/15 pb-5"
//         >
//           <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center border border-[#D69E27]/50 text-[#D69E27]">
//             <Star size={15} />
//           </div>

//           <div>
//             <h4 className="text-sm font-semibold text-white">
//               {achievement.title}
//             </h4>

//             <p className="mt-1 text-xs leading-6 text-white/50">
//               {achievement.description}
//             </p>
//           </div>
//         </div>
//       ))}

//     </div>

//     <Link
//       to="/about/achievements"
//       className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#E9C779] transition hover:text-white"
//     >
//       Explore Our Achievements

//       <ArrowUpRight
//         size={17}
//         className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
//       />
//     </Link>

//   </div>

// </div>
