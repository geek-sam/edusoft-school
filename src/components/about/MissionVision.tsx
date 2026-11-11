import {
  BookOpen,
  Lightbulb,
  HeartHandshake,
  GraduationCap,
} from "lucide-react";

const missionPoints = [
  {
    icon: BookOpen,
    title: "Quality Education",
    description:
      "Deliver meaningful learning experiences that build strong academic foundations.",
  },
  {
    icon: Lightbulb,
    title: "Independent Thinking",
    description:
      "Encourage curiosity, creativity and the confidence to explore new ideas.",
  },
  {
    icon: HeartHandshake,
    title: "Strong Values",
    description:
      "Develop integrity, empathy, discipline and respect for others.",
  },
  {
    icon: GraduationCap,
    title: "Holistic Growth",
    description:
      "Support intellectual, physical, emotional and social development.",
  },
];

export default function MissionVision() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Vision and Mission cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Vision */}
          <div className="relative overflow-hidden bg-[#172B4D] p-7 text-white sm:p-10 md:p-12">
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10" />
            <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full border border-white/10" />

            <div className="relative z-10">
              {/* <div className="mb-8 flex h-14 w-14 items-center justify-center border border-[#E9C779]/40 text-[#E9C779]">
                <Compass size={27} strokeWidth={1.5} />
              </div> */}
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E9C779]">
                Our Vision
              </span>

              <h3 className="mt-4 max-w-md  text-2xl font-medium leading-snug sm:text-3xl">
                Inspiring Minds to Create a Better Tomorrow.
              </h3>

              <p className="mt-6 max-w-lg text-sm leading-7 text-white/75">
                To inspire a generation of knowledgeable, confident and
                compassionate individuals who think independently, embrace
                lifelong learning and contribute meaningfully to society.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="relative overflow-hidden border border-[#E8E4DA] bg-[#F8F8F6] p-7 sm:p-10 md:p-12">
            <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full border border-[#D69E27]/20" />
            <div className="absolute -bottom-9 -right-9 h-32 w-32 rounded-full border border-[#D69E27]/20" />

            <div className="relative z-10">
              {/* <div className="mb-8 flex h-14 w-14 items-center justify-center border border-[#D69E27]/50 text-[#B8871E]">
                <Target size={27} strokeWidth={1.5} />
              </div> */}

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8871E]">
                Our Mission
              </span>

              <h3 className="mt-4 max-w-md  text-2xl font-medium leading-snug text-[#172B4D] sm:text-3xl">
                Empowering Every Child to Reach Their Potential.
              </h3>

              <p className="mt-6 max-w-lg text-sm leading-7 text-gray-600">
                To provide quality education in a supportive and inclusive
                environment that nurtures curiosity, encourages innovation,
                develops strong values and prepares students for the
                opportunities and responsibilities of tomorrow.
              </p>
            </div>
          </div>
        </div>

        {/* Mission pillars */}
        <div className="mt-16 md:mt-20">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8871E]">
              Our Commitment
            </span>

            <h3 className="mt-3   text-2xl font-medium text-[#172B4D] sm:text-3xl">
              What Guides Our Everyday Actions
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {missionPoints.map((point, index) => {
              const Icon = point.icon;

              return (
                <div
                  key={point.title}
                  className="border-t border-[#DCCDAA] pt-5"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <Icon
                      size={23}
                      strokeWidth={1.5}
                      className="text-[#B8871E]"
                    />

                    <span className="  text-sm text-gray-400">
                      0{index + 1}
                    </span>
                  </div>

                  <h4 className="  text-lg font-semibold text-[#172B4D]">
                    {point.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
