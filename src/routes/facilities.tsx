import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Bus,
  Building2,
  FlaskConical,
  GraduationCap,
  Monitor,
  ShieldCheck,
  Trophy,
  Users,
} from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";

const facilities = [
  {
    number: "01",
    title: "Campus & Infrastructure",
    subtitle: "A space designed for learning and growth.",
    description:
      "Our campus is envisioned as a welcoming environment where students can learn, explore and develop. Thoughtfully organised spaces, comfortable classrooms and dedicated activity areas support an engaging school experience.",
    image: "/images/campus2.jpg",
    imageAlt: "School campus and infrastructure",
    features: [
      "Spacious learning areas",
      "Well-maintained classrooms",
      "Dedicated activity spaces",
      "Clean and organised campus",
    ],
  },
  {
    number: "02",
    title: "Smart Classrooms",
    subtitle: "Making learning more interactive.",
    description:
      "Technology can make classroom learning more engaging and accessible. Smart learning environments support visual explanations, interactive lessons and the use of digital resources to help students understand concepts.",
    image: "/images/classroom.png",
    imageAlt: "Digital smart classroom",
    features: [
      "Digital teaching resources",
      "Audio-visual learning support",
      "Interactive classroom activities",
      "Technology-assisted lessons",
    ],
  },
  {
    number: "03",
    title: "Library",
    subtitle: "Where curiosity finds its next chapter.",
    description:
      "A library creates opportunities to explore ideas beyond textbooks. We believe access to reading materials and a comfortable reading environment helps students develop language skills, imagination and independent learning habits.",
    image: "/images/library.png",
    imageAlt: "School library with bookshelves",
    features: [
      "Academic reference materials",
      "Fiction and non-fiction books",
      "Reading and study spaces",
      "A culture of independent reading",
    ],
  },
  {
    number: "04",
    title: "Laboratories",
    subtitle: "Learning through discovery and experimentation.",
    description:
      "Practical learning helps students connect classroom concepts with real-world observations. Dedicated laboratory spaces provide opportunities to investigate, experiment and develop scientific and technical understanding.",
    image: "/images/labs.png",
    imageAlt: "Students conducting a science experiment",
    features: [
      "Science learning facilities",
      "Practical experiments and activities",
      "Hands-on concept exploration",
      "Guided laboratory learning",
    ],
  },
  {
    number: "05",
    title: "Sports & Recreation",
    subtitle: "Building confidence beyond the classroom.",
    description:
      "Physical activity plays an important role in the development of growing minds and bodies. Sports and recreational activities encourage teamwork, discipline, resilience and healthy habits.",
    image: "/images/sports.png",
    imageAlt: "Students participating in school sports",
    features: [
      "Outdoor sports activities",
      "Physical education",
      "Team games and recreation",
      "Opportunities for participation",
    ],
  },
  {
    number: "06",
    title: "Transportation",
    subtitle: "Supporting a convenient school journey.",
    description:
      "School transportation can help students and families access the campus more conveniently. Our transport arrangements should prioritise responsible operations, clear communication and student safety throughout the journey.",
    image: "/images/transportation.png",
    imageAlt: "School transportation bus",
    features: [
      "School bus transportation",
      "Defined pickup and drop-off routes",
      "Transport coordination",
      "Student travel safety procedures",
    ],
  },
];

const facilityHighlights = [
  {
    icon: Building2,
    title: "Campus & Infrastructure",
    description: "Spaces that support everyday learning.",
  },
  {
    icon: Monitor,
    title: "Smart Classrooms",
    description: "Technology-supported education.",
  },
  {
    icon: BookOpen,
    title: "Library",
    description: "A space for reading and discovery.",
  },
  {
    icon: FlaskConical,
    title: "Laboratories",
    description: "Practical and experiential learning.",
  },
  {
    icon: Trophy,
    title: "Sports",
    description: "Physical activity and teamwork.",
  },
  {
    icon: Bus,
    title: "Transportation",
    description: "Convenient school travel arrangements.",
  },
];

export default function Facilities() {
  return (
    <main className="overflow-hidden bg-white text-[#172B4D]">
      {/* 01. Page Hero */}
      <section className="relative bg-[url('../images/campus.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-[#000]/65" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8 md:pb-20 lg:px-10 lg:pt-10">
          <Breadcrumb
            items={[{ label: "Facilities" }]}
            className="mb-12 md:mb-16"
          />

          <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-8">
              <span className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#B8871E]">
                <span className="h-px w-8 bg-[#D69E27]" />
                Our Facilities
              </span>

              <h1 className="max-w-3xl text-4xl font-medium leading-[1.1] text-[#ffffff] sm:text-5xl md:text-5xl lg:text-6xl">
                Spaces that
                <br />
                <span className="text-[#B8871E]">inspire learning.</span>
              </h1>
            </div>

            <div className="max-w-md md:col-span-4 md:pb-2">
              <p className="text-sm leading-7 text-gray-400 md:text-base">
                A meaningful learning experience extends beyond the classroom.
                Discover the spaces, resources and facilities that support
                students in their everyday learning journey.
              </p>
              <a
                href="#our-facilities"
                className="mt-5 group inline-flex items-center gap-2 text-sm font-semibold text-[#ffffff] transition-colors hover:text-[#B8871E]"
              >
                Explore Our Facilities
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Facility Overview */}
      <section className="border-b border-slate-100 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-3 lg:grid-cols-6">
            {facilityHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  href={`#${item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className="group"
                >
                  <Icon
                    size={23}
                    strokeWidth={1.5}
                    className="text-[#B8871E] transition-transform group-hover:-translate-y-1"
                  />

                  <h2 className="mt-4 text-sm font-semibold text-[#172B4D]">
                    {item.title}
                  </h2>

                  <p className="mt-2 text-xs leading-6 text-slate-500">
                    {item.description}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* 03. Facilities Introduction */}
      <section
        id="our-facilities"
        className="scroll-mt-24 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B8871E]">
              Explore Our Campus
            </span>

            <h2 className="mt-5   text-4xl leading-tight sm:text-5xl">
              Everything students need to learn and grow.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
              From well-planned learning spaces to practical resources and
              recreational opportunities, each facility contributes to the
              overall student experience.
            </p>
          </div>
        </div>
      </section>

      {/* 04. Individual Facility Sections */}
      {facilities.map((facility, index) => {
        const isReversed = index % 2 !== 0;
        const sectionId = facility.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-");

        return (
          <section
            key={facility.number}
            id={sectionId}
            className={`scroll-mt-24 py-14 sm:py-20 lg:py-24 ${
              index % 2 === 0 ? "bg-white" : "bg-[#F8F8F6]"
            }`}
          >
            <div
              className={`mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12`}
            >
              <div className={isReversed ? "lg:order-2" : ""}>
                <div className="relative overflow-hidden bg-slate-100">
                  <img
                    src={facility.image}
                    alt={facility.imageAlt}
                    loading="lazy"
                    className="aspect-[5/4] w-full object-cover transition duration-700 hover:scale-[1.03]"
                  />

                  <span className="absolute left-5 top-5 bg-white px-4 py-2 text-xs font-semibold tracking-widest text-[#B8871E]">
                    {facility.number}
                  </span>
                </div>
              </div>

              <div className={isReversed ? "lg:order-1" : ""}>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8871E]">
                  {facility.subtitle}
                </span>

                <h2 className="mt-5   text-4xl leading-tight sm:text-5xl">
                  {facility.title}
                </h2>

                <p className="mt-6 text-sm leading-8 text-slate-600 sm:text-base">
                  {facility.description}
                </p>

                <div className="mt-8 border-t border-slate-200 pt-6">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.16em]">
                    Key Features
                  </h3>

                  <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                    {facility.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-500"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D69E27]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* 05. Facilities & Student Development */}
      <section className="bg-[#172B4D] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E9C779]">
              More Than Facilities
            </span>

            <h2 className="mt-5   text-4xl leading-tight text-white sm:text-5xl">
              Creating opportunities beyond the classroom.
            </h2>

            <p className="mt-6 text-sm leading-8 text-slate-300 sm:text-base">
              The right environment gives students opportunities to discover
              their interests, develop practical skills and build meaningful
              relationships. Our facilities support a broader educational
              experience that values academic learning alongside personal
              development.
            </p>

            <Link
              to="/student-life"
              className="mt-9 inline-flex items-center gap-3 text-sm font-semibold text-[#E9C779] transition hover:text-white"
            >
              Explore Student Life
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden">
              <img
                src="/images/student-life-featured.png"
                alt="Students participating in activities"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <div className="mt-10 overflow-hidden">
              <img
                src="/images/academics-primary.png"
                alt="Students learning together"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 06. Safety & Wellbeing */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B8871E]">
              Student Wellbeing
            </span>

            <h2 className="mt-5   text-4xl leading-tight sm:text-5xl">
              A comfortable and supportive environment.
            </h2>

            <p className="mt-6 text-sm leading-8 text-slate-600 sm:text-base">
              A positive school environment considers students' comfort,
              wellbeing and sense of belonging. We believe that organised spaces
              and responsible facility management contribute to a better
              everyday experience.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 text-sm font-semibold transition hover:text-[#B8871E]"
            >
              Contact Our School
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="border border-slate-200 p-7">
              <ShieldCheck
                size={25}
                className="text-[#B8871E]"
                strokeWidth={1.5}
              />
              <h3 className="mt-5   text-xl">Safety & Care</h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                Responsible campus management and student wellbeing practices.
              </p>
            </div>

            <div className="border border-slate-200 p-7">
              <Users size={25} className="text-[#B8871E]" strokeWidth={1.5} />
              <h3 className="mt-5   text-xl">Inclusive Spaces</h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                Learning environments that encourage participation and a sense
                of belonging.
              </p>
            </div>

            <div className="border border-slate-200 p-7">
              <GraduationCap
                size={25}
                className="text-[#B8871E]"
                strokeWidth={1.5}
              />
              <h3 className="mt-5   text-xl">Learning Support</h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                Resources and spaces that support academic activities and
                development.
              </p>
            </div>

            <div className="border border-slate-200 p-7">
              <Building2
                size={25}
                className="text-[#B8871E]"
                strokeWidth={1.5}
              />
              <h3 className="mt-5   text-xl">Campus Care</h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                Attention to the upkeep and organisation of school facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 07. Final CTA */}
      <section className="bg-[#F8F8F6] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B8871E]">
            Experience Our Campus
          </span>

          <h2 className="mt-6 mx-auto max-w-2xl text-4xl font-semibold leading-[64px] sm:text-5xl lg:text-6xl">
            See where learning comes to life.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-500 sm:text-base">
            Get in touch with our team to learn more about our facilities or
            arrange a visit to the school campus.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 bg-[#172B4D] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#D69E27]"
            >
              Plan a Campus Visit
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/admissions"
              className="inline-flex items-center justify-center gap-3 border border-[#172B4D]/20 px-7 py-4 text-sm font-semibold text-[#172B4D] transition hover:border-[#D69E27] hover:text-[#B8871E]"
            >
              Explore Admissions
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
