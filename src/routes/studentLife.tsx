import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Palette,
  Trophy,
  Users,
  CalendarDays,
  Lightbulb,
  Heart,
  GraduationCap,
  Handshake,
} from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";

const studentExperiences = [
  {
    number: "01",
    title: "Creative & Cultural Activities",
    description:
      "Students explore their interests and express their creativity through art, music, dance, drama and other cultural activities. These experiences encourage imagination, confidence and self-expression.",
    image: "/images/academics-pre-primary.png",
    alt: "Students participating in creative activities",
    highlights: [
      "Art and craft activities",
      "Music and dance",
      "Drama and performances",
      "Creative workshops",
    ],
    icon: Palette,
  },
  {
    number: "02",
    title: "Sports & Recreation",
    description:
      "Sports and physical activities help students develop discipline, teamwork and resilience. Participation encourages healthy habits while giving students opportunities to discover their sporting interests.",
    image: "/images/student-life-featured.png",
    alt: "Students participating in outdoor sports",
    highlights: [
      "Outdoor games and sports",
      "Physical education",
      "Team-based activities",
      "Sports competitions",
    ],
    icon: Trophy,
  },
  {
    number: "03",
    title: "Clubs & Societies",
    description:
      "Clubs provide opportunities for students to explore subjects and interests beyond the regular curriculum. Through shared activities, students develop new skills, collaborate and learn from one another.",
    image: "/images/academics-senior-secondary.png",
    alt: "Students working together in a school club",
    highlights: [
      "Science and innovation",
      "Literary and reading activities",
      "Arts and creative clubs",
      "Environment and social initiatives",
    ],
    icon: Users,
  },
  {
    number: "04",
    title: "Events & Celebrations",
    description:
      "School events bring the community together and create opportunities to celebrate talent, culture, achievements and important occasions throughout the academic year.",
    image: "/images/event-celebration.png",
    alt: "Students participating in a school event",
    highlights: [
      "Annual day celebrations",
      "Cultural festivals",
      "Special assemblies",
      "Inter-house competitions",
    ],
    icon: CalendarDays,
  },
];

const developmentAreas = [
  {
    icon: Lightbulb,
    title: "Creativity",
    description:
      "Exploring ideas, discovering interests and expressing individuality.",
  },
  {
    icon: Handshake,
    title: "Teamwork",
    description: "Learning collaboration, communication and mutual respect.",
  },
  {
    icon: Heart,
    title: "Confidence",
    description:
      "Developing self-belief through participation and new experiences.",
  },
  {
    icon: GraduationCap,
    title: "Leadership",
    description:
      "Taking responsibility, making decisions and supporting others.",
  },
];

const galleryImages = [
  {
    src: "/images/academics-pre-primary.png",
    alt: "Students participating in a school activity",
  },
  {
    src: "/images/event-celebration.png",
    alt: "Students enjoying a school event",
  },
  {
    src: "/images/student-life-featured.png",
    alt: "Students participating in sports",
  },
  {
    src: "/images/academics-senior-secondary.png",
    alt: "Students performing on stage",
  },
];

export default function StudentLife() {
  return (
    <main className="overflow-hidden bg-white text-[#172B4D]">
      {/* 01. Page Hero */}

      <section className="relative bg-[url('../images/campus.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-[#000]/65" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8 md:pb-20 lg:px-10 lg:pt-10">
          <Breadcrumb
            items={[{ label: "Student Life" }]}
            className="mb-12 md:mb-16"
          />

          <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-8">
              <span className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#B8871E]">
                <span className="h-px w-8 bg-[#B8871E]" />
                Life Beyond Academics
              </span>

              <h1 className="max-w-3xl   text-4xl font-medium leading-[1.1] text-[#ffffff] sm:text-5xl md:text-6xl lg:text-7xl">
                Learn, explore
                <br />
                <span className="text-[#B8871E]">and experience.</span>
              </h1>
            </div>

            <div className="max-w-md md:col-span-4 md:pb-2">
              <p className="text-sm leading-7 text-gray-400 md:text-base">
                School life is about more than lessons and textbooks. It is
                about discovering interests, building friendships, developing
                confidence and creating memories that last a lifetime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Introduction */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B8871E]">
              The School Experience
            </span>

            <h2 className="mt-5   text-4xl leading-tight sm:text-5xl">
              Making every school day meaningful.
            </h2>
          </div>

          <div>
            <p className="text-sm leading-8 text-slate-600 sm:text-base">
              We believe that some of the most valuable learning experiences
              happen outside the classroom. Participation in activities, sports,
              clubs and school events helps students discover what they enjoy
              and develop abilities that support their personal growth.
            </p>

            <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
              Our approach to student life encourages participation, creativity,
              collaboration and a strong sense of community. Every opportunity
              is a chance to learn something new.
            </p>
          </div>
        </div>
      </section>

      {/* 03. Student Experiences */}
      <section
        id="student-experiences"
        className="scroll-mt-24 bg-[#F8F8F6] py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B8871E]">
              Explore Experiences
            </span>

            <h2 className="mt-5   text-4xl leading-tight sm:text-5xl">
              There is something for everyone.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
              Discover the different ways students can participate, explore
              their interests and make the most of school life.
            </p>
          </div>

          <div className="mt-14 space-y-20 sm:space-y-24">
            {studentExperiences.map((experience, index) => {
              const Icon = experience.icon;
              const reversed = index % 2 !== 0;

              return (
                <article
                  key={experience.number}
                  id={
                    index === 0
                      ? "activities"
                      : index === 1
                        ? "sports-recreation"
                        : index === 2
                          ? "clubs-societies"
                          : "events-celebrations"
                  }
                  className="grid scroll-mt-24 items-center gap-10 lg:grid-cols-2 lg:gap-20"
                >
                  <div className={reversed ? "lg:order-2" : ""}>
                    <div className="relative overflow-hidden bg-slate-200">
                      <img
                        src={experience.image}
                        alt={experience.alt}
                        loading="lazy"
                        className="aspect-[5/4] w-full object-cover transition duration-700 hover:scale-105"
                      />

                      <span className="absolute left-5 top-5 bg-white px-4 py-2 text-xs font-semibold tracking-widest text-[#B8871E]">
                        {experience.number}
                      </span>
                    </div>
                  </div>

                  <div className={reversed ? "lg:order-1" : ""}>
                    <div className="flex h-12 w-12 items-center justify-center bg-white text-[#B8871E] shadow-sm">
                      <Icon size={23} strokeWidth={1.5} />
                    </div>

                    <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-[#B8871E]">
                      {"Student Experience"}
                    </p>

                    <h3 className="mt-3   text-3xl leading-tight sm:text-4xl">
                      {experience.title}
                    </h3>

                    <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
                      {experience.description}
                    </p>

                    <div className="mt-7 border-t border-slate-200 pt-6">
                      <h4 className="text-xs font-semibold uppercase tracking-[0.16em]">
                        Explore Activities
                      </h4>

                      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                        {experience.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-3 text-sm text-slate-500"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D69E27]" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04. Student Leadership */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div>
            <img
              src="/images/leadership.png"
              alt="Students participating in a leadership activity"
              loading="lazy"
              className="aspect-[5/4] w-full object-cover"
            />
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B8871E]">
              Student Leadership
            </span>

            <h2 className="mt-5   text-4xl leading-tight sm:text-5xl">
              Encouraging students to take the lead.
            </h2>

            <p className="mt-6 text-sm leading-8 text-slate-600 sm:text-base">
              Leadership opportunities help students develop responsibility,
              decision-making and communication skills. Taking part in school
              activities and group initiatives allows students to understand the
              value of teamwork and positive contribution.
            </p>

            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              Through appropriate student leadership opportunities, learners can
              develop confidence and become active contributors to their school
              community.
            </p>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-3 text-sm font-semibold transition hover:text-[#B8871E]"
            >
              Learn About Our School
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* 05. What Student Life Builds */}
      <section className="bg-[#F8F8F6] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B8871E]">
              Beyond Participation
            </span>

            <h2 className="mt-5   text-4xl leading-tight sm:text-5xl">
              Experiences that help shape individuals.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
              Every activity creates opportunities to develop important skills,
              discover strengths and grow through shared experiences.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {developmentAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="border-t border-slate-200 pt-7"
                >
                  <Icon
                    size={25}
                    strokeWidth={1.5}
                    className="text-[#B8871E]"
                  />

                  <h3 className="mt-6   text-2xl">{area.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 06. Student Life Gallery */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B8871E]">
                Moments & Memories
              </span>

              <h2 className="mt-5   text-4xl leading-tight sm:text-5xl">
                A glimpse into student life.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
                A collection of moments that reflect the energy, creativity and
                experiences of our school community.
              </p>
            </div>

            <Link
              to="/gallery"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold transition hover:text-[#B8871E]"
            >
              View Full Gallery
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {galleryImages.map((image, index) => (
              <div
                key={image.src}
                className={`overflow-hidden bg-slate-100 ${
                  index === 1 ? "lg:mt-10" : ""
                } ${index === 3 ? "lg:mt-10" : ""}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07. Final CTA */}
      <section className="bg-[#172B4D] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E9C779]">
            Make Every Moment Count
          </span>

          <h2 className="mt-6   text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Discover a school experience beyond the classroom.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
            Explore a community where students are encouraged to participate,
            discover their interests and create meaningful experiences.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center gap-3 bg-[#D69E27] px-7 py-4 text-sm font-semibold text-[#172B4D] transition hover:bg-[#E9B94D]"
            >
              Explore Admissions
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center border border-white/30 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#E9C779] hover:text-[#E9C779]"
            >
              Contact Our School
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
