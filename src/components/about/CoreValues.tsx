import {
  Heart,
  Handshake,
  Lightbulb,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

const coreValues = [
  {
    icon: Star,
    number: "01",
    title: "Excellence",
    description:
      "We encourage every learner to pursue their best through dedication, continuous improvement and a commitment to quality.",
  },
  {
    icon: Heart,
    number: "02",
    title: "Integrity",
    description:
      "We nurture honesty, responsibility and respect, helping students make thoughtful and ethical choices.",
  },
  {
    icon: Lightbulb,
    number: "03",
    title: "Curiosity",
    description:
      "We inspire students to ask questions, explore ideas and develop a lifelong passion for learning.",
  },
  {
    icon: Handshake,
    number: "04",
    title: "Respect",
    description:
      "We value individuality, celebrate differences and create a community built on kindness and understanding.",
  },
  {
    icon: Users,
    number: "05",
    title: "Collaboration",
    description:
      "We believe meaningful learning happens when students work together, share perspectives and support one another.",
  },
  {
    icon: ShieldCheck,
    number: "06",
    title: "Responsibility",
    description:
      "We help students become accountable individuals who contribute positively to their school and wider community.",
  },
];

export default function CoreValues() {
  return (
    <div>
      {/* 06 — Core values */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-14 grid grid-cols-1 gap-6 md:mb-20 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <span className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#B8871E]">
                <span className="h-px w-8 bg-[#D69E27]" />
                What Guides Us
              </span>

              <h2 className="max-w-2xl   text-3xl font-medium leading-tight text-[#172B4D] sm:text-4xl md:text-5xl">
                Values that shape
                <br />
                <span className="text-[#B8871E]"> who we become.</span>
              </h2>
            </div>

            <div className="md:col-span-5 md:pb-1">
              <p className="max-w-lg text-sm leading-7 text-gray-600 md:text-base">
                The principles we practice every day influence how we learn,
                interact and grow together as a school community.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-14">
            {coreValues.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.number}
                  className="group border-t border-slate-200 pt-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-widest text-[#B8871E]">
                      {value.number}
                    </span>

                    <Icon
                      size={23}
                      strokeWidth={1.5}
                      className="text-[#B8871E] transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <h3 className="mt-7   text-2xl text-[#172B4D]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
