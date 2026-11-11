import { BookOpen, HeartHandshake, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: BookOpen,
    title: "Meaningful Learning",
    description:
      "Building strong foundations through engaging and purposeful education.",
  },
  {
    icon: Lightbulb,
    title: "Curiosity & Discovery",
    description:
      "Encouraging students to question, explore and think independently.",
  },
  {
    icon: HeartHandshake,
    title: "Values & Character",
    description:
      "Nurturing empathy, integrity, confidence and respect for others.",
  },
];

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: Section introduction */}
          <div className="lg:col-span-5">
            <span className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#B8871E]">
              <span className="h-px w-8 bg-[#D69E27]" />
              Who We Are
            </span>

            <h2 className="text-3xl font-medium leading-[1.15] text-[#172B4D] sm:text-4xl md:text-5xl">
              Education That Goes
              <span className="text-[#B8871E]"> Beyond Books.</span>
            </h2>

            <p className="mt-7 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
              At Edusoft, we believe every child deserves an environment where
              learning feels meaningful, possibilities feel limitless and
              individuality is valued.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
              We are a learning community committed to developing knowledgeable,
              confident and compassionate individuals. Through a balanced
              approach to academics, creativity, practical experiences and
              personal development, we help students discover their strengths
              and prepare for the opportunities ahead.
            </p>

            {/* <Link
              to="/about/our-story"
              className="group mt-8 inline-flex items-center gap-3 border-b border-[#D69E27] pb-2 text-sm font-semibold text-[#172B4D] transition-colors hover:text-[#B8871E]"
            >
              Discover Our Journey
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link> */}
          </div>

          {/* Right: Image and highlights */}
          <div className="lg:col-span-7">
            {/* Image */}
            <div className="relative aspect-[16/9] overflow-hidden bg-[#F8F8F6]">
              <img
                src="/images/academics-primary.png"
                alt="Students learning and interacting at school"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />

              <div className="absolute bottom-0 left-0 bg-[#172B4D] px-5 py-4 sm:px-7 sm:py-5">
                <p className="text-lg text-white sm:text-xl">
                  Learning with purpose.
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[#E9C779]">
                  Growing with confidence
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-5">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="group">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center border border-[#E9C779]/60 text-[#B8871E] transition-colors group-hover:bg-[#172B4D] group-hover:text-white">
                      <Icon size={19} strokeWidth={1.6} />
                    </div>

                    <h3 className="text-base font-semibold text-[#172B4D]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-gray-500">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
