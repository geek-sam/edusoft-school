// import { Award, GraduationCap, Users, Trophy, ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// const trustIndicators = [
//   {
//     id: 1,
//     value: "CBSE",
//     label: "Affiliated School",
//     detail: "Affiliation No. XXXXXXX",
//     icon: Award,
//   },
//   {
//     id: 2,
//     value: "25+",
//     label: "Years of Excellence",
//     detail: "A legacy of learning",
//     icon: GraduationCap,
//   },
//   {
//     id: 3,
//     value: "1:25",
//     label: "Teacher-Student Ratio",
//     detail: "Personalised attention",
//     icon: Users,
//   },
//   {
//     id: 4,
//     value: "98%",
//     label: "Board Examination Pass",
//     detail: "Academic achievement",
//     icon: Trophy,
//   },
//   {
//     id: 5,
//     value: "24/7",
//     label: "CCTV-Secured Campus",
//     detail: "A focus on student safety",
//     icon: ShieldCheck,
//   },
// ];

const statistics = [
  { value: 15, suffix: "+", label: "Years of Excellence" },
  { value: 10000, suffix: "+", label: "Happy Students" },
  { value: 80, suffix: "+", label: "Expert Educators" },
  { value: 20, suffix: "+", label: "Academic Programs & Activities" },
];

// Animated statistics hook
const useCountUp = (target: number, active: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let animationFrame = 0;
    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easedProgress = 1 - Math.pow(1 - progress, 4);

      setCount(Math.round(target * easedProgress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [target, active]);

  return count;
};

const StatItem = ({
  value,
  suffix,
  label,
  active,
}: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
}) => {
  const count = useCountUp(value, active);

  return (
    <div className="border-l border-white/20 pl-5 sm:pl-7">
      <p className="  text-4xl font-medium text-white sm:text-5xl">
        {count.toLocaleString("en-IN")}
        <span className="text-[#D69E27]">{suffix}</span>
      </p>

      <p className="mt-3 text-xs leading-5 text-white/60 sm:text-sm">{label}</p>
    </div>
  );
};

export default function TrustStrip() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const element = statsRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);
  return (
    <section className="relative border-y border-[#E9C779]/30 bg-[#172B4D] py-8 md:py-10">
      {/* <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 gap-y-8 md:grid-cols-3 lg:grid-cols-5 lg:gap-0">
          {trustIndicators.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className={`group flex flex-col items-center justify-center px-3 text-center ${
                  index !== 0 ? "lg:border-l lg:border-white/15" : ""
                } ${index === 4 ? "col-span-2 md:col-span-1" : ""}`}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#E9C779]/30 text-[#E9C779] transition-all duration-300 group-hover:border-[#E9C779] group-hover:bg-[#E9C779] group-hover:text-[#172B4D]">
                  <Icon size={19} strokeWidth={1.7} />
                </div>

                <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {item.value}
                </h3>

                <p className="mt-1 text-xs font-semibold text-[#E9C779] sm:text-sm">
                  {item.label}
                </p>

                <p className="mt-1.5 text-[10px] text-white/55 sm:text-xs">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div> */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Statistics */}
        <div ref={statsRef} className="">
          {/* <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E9C779]">
                Our Impact in Numbers
              </span>

              <h3 className="mt-3   text-3xl font-medium text-white sm:text-4xl">
                Growing Together.
              </h3>
            </div>

            <p className="max-w-sm text-sm leading-6 text-white/50">
              A glimpse of our journey, community, and commitment to educational
              excellence.
            </p>
          </div> */}

          <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4">
            {statistics.map((stat) => (
              <StatItem key={stat.label} {...stat} active={statsVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
