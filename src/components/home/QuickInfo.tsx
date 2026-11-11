import { Link } from "react-router-dom";
import {
  GraduationCap,
  BookOpen,
  Building2,
  Users,
  ArrowUpRight,
} from "lucide-react";

const informationCards = [
  {
    title: "Admissions",
    description: "Take the first step towards your child's bright future.",
    link: "/admissions",
    icon: GraduationCap,
    label: "Explore Admissions",
  },
  {
    title: "Academics",
    description: "Discover our curriculum and learning programs.",
    link: "/academics",
    icon: BookOpen,
    label: "Explore Academics",
  },
  {
    title: "Facilities",
    description: "Explore the spaces that inspire learning and growth.",
    link: "/facilities",
    icon: Building2,
    label: "View Facilities",
  },
  {
    title: "Parent Portal",
    description: "Stay connected with your child's school journey.",
    link: "/parent-portal",
    icon: Users,
    label: "Access Portal",
  },
];

const QuickInformation = () => {
  return (
    <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        {/* <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#D69E27]">
              Quick Access
            </p>

            <h2 className="text-3xl font-medium text-[#172B4D] sm:text-4xl md:text-[40px]">
              Everything You Need,
              <br className="hidden sm:block" /> Just a Click Away.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-gray-500">
            Find essential information and access important school resources
            with ease.
          </p>
        </div> */}

        {/* Information Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {informationCards.map((card, index) => {
            return (
              <Link
                key={card.title}
                to={card.link}
                className="group relative flex min-h-[200px] flex-col justify-between overflow-hidden border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D69E27] hover:shadow-xl sm:p-7"
              >
                {/* Top Section */}
                <div>
                  <div className="flex items-center justify-between">
                    {/* <div className="flex h-12 w-12 items-center justify-center bg-[#172B4D] text-white transition-colors duration-300 group-hover:bg-[#D69E27] group-hover:text-[#172B4D]">
                      <Icon size={23} strokeWidth={1.7} />
                    </div> */}

                    <span className="text-xs font-medium tracking-wider text-gray-300">
                      0{index + 1}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center border border-gray-200 text-[#172B4D] transition-all duration-300 group-hover:border-[#D69E27] group-hover:bg-[#D69E27]">
                      <ArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                  </div>

                  <h3 className="mt-7 text-2xl font-medium text-[#172B4D]">
                    {card.title}
                  </h3>

                  <p className="mt-3 max-w-[250px] text-sm leading-6 text-gray-500">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Section */}
                {/* <div className="mt-7 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#172B4D] transition-colors group-hover:text-[#B8871E]">
                    {card.label}
                  </span>
                </div> */}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickInformation;
