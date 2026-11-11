import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  ChevronDown,
  Compass,
  Lightbulb,
  Microscope,
  MoveRight,
  PencilRuler,
  Users,
} from "lucide-react";
import { HashLink } from "react-router-hash-link";
import Breadcrumb from "../components/Breadcrumb";
import CTA from "../components/CTA";

const academicStages = [
  {
    id: "pre-primary",
    tab: "Pre-Primary",
    classes: "Nursery - UKG",
    tagline: "A joyful beginning to lifelong learning.",
    title: "Little steps. Big discoveries.",
    description:
      "The early years are an important foundation for a child's development. Our Pre-Primary programme encourages children to explore, communicate, create and learn through play and meaningful everyday experiences.",
    image: "/images/academics-pre-primary.png",
    focus: [
      "Language and communication",
      "Early numeracy and logical thinking",
      "Creative expression and imagination",
      "Social skills and emotional development",
      "Physical coordination and movement",
    ],
    methods: [
      "Play-based learning",
      "Stories, music and creative activities",
      "Hands-on exploration",
      "Guided group interaction",
    ],
    outcome:
      "Children develop confidence, curiosity, communication skills and readiness for a structured primary learning environment.",
  },
  {
    id: "primary",
    tab: "Primary",
    classes: "Classes I - V",
    tagline: "Building strong foundations.",
    title: "Discover the joy of learning.",
    description:
      "The Primary years help students develop essential knowledge and skills across core subjects. We encourage active participation, curiosity and a growing sense of independence through engaging learning experiences.",
    image: "/images/academics-primary.png",
    focus: [
      "English language and communication",
      "Mathematics and logical reasoning",
      "Environmental studies and science",
      "Languages and social awareness",
      "Art, physical education and creative learning",
    ],
    methods: [
      "Activity-based classroom learning",
      "Collaborative projects",
      "Reading and communication activities",
      "Practical demonstrations",
    ],
    outcome:
      "Students build strong academic foundations, develop independent learning habits and become more confident in expressing ideas.",
  },
  {
    id: "middle",
    tab: "Middle School",
    classes: "Classes VI - VIII",
    tagline: "Encouraging curiosity and independent thinking.",
    title: "Explore ideas. Think independently.",
    description:
      "Middle School introduces students to more structured subject learning while encouraging them to question, analyse and connect ideas. Students begin taking greater ownership of their learning and personal development.",
    image: "/images/academics-middle.png",
    focus: [
      "Advanced language and communication",
      "Mathematics and analytical thinking",
      "Science and practical investigation",
      "Social sciences and global awareness",
      "Technology and creative problem-solving",
    ],
    methods: [
      "Inquiry-based learning",
      "Experiments and practical activities",
      "Group projects and presentations",
      "Research and critical thinking",
    ],
    outcome:
      "Students strengthen subject understanding, develop problem-solving abilities and prepare for the academic demands of secondary education.",
  },
  {
    id: "secondary",
    tab: "Secondary",
    classes: "Classes IX - X",
    tagline: "Developing knowledge and academic confidence.",
    title: "Prepare with purpose.",
    description:
      "The Secondary stage focuses on deeper subject understanding, consistent academic practice and preparation for board examinations. Students are guided to develop discipline, analytical skills and confidence.",
    image: "/images/academics-secondary.png",
    focus: [
      "In-depth subject knowledge",
      "Conceptual understanding and application",
      "Analytical and critical thinking",
      "Structured examination preparation",
      "Time management and study skills",
    ],
    methods: [
      "Concept-focused teaching",
      "Regular assignments and practice",
      "Subject-based discussions",
      "Formative and summative assessments",
    ],
    outcome:
      "Students develop a strong understanding of core subjects and gain the confidence and preparation needed for the next academic stage.",
  },
  {
    id: "senior-secondary",
    tab: "Senior Secondary",
    classes: "Classes XI - XII",
    tagline: "Preparing for higher education and beyond.",
    title: "Find your direction. Shape your future.",
    description:
      "Senior Secondary education helps students pursue their academic interests in greater depth. With focused subject learning and guidance, students prepare for higher education, professional pathways and future opportunities.",
    image: "/images/academics-senior-secondary.png",
    focus: [
      "Advanced subject specialisation",
      "Deeper conceptual and practical learning",
      "Research and analytical abilities",
      "Higher education preparation",
      "Career awareness and decision-making",
    ],
    methods: [
      "Subject-specific instruction",
      "Practical and project-based learning",
      "Regular academic assessments",
      "Guidance for future study pathways",
    ],
    outcome:
      "Students build subject expertise, academic independence and the skills to make informed decisions about their future.",
  },
];

const teachingPillars = [
  {
    icon: Lightbulb,
    title: "Learning by Exploring",
    description:
      "Students are encouraged to ask questions, investigate ideas and learn through meaningful experiences.",
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description:
      "Group activities and discussions help students share perspectives and learn from one another.",
  },
  {
    icon: Brain,
    title: "Critical Thinking",
    description:
      "We encourage students to analyse information, solve problems and develop independent thinking.",
  },
  {
    icon: PencilRuler,
    title: "Practical Application",
    description:
      "Classroom concepts are connected to activities, projects and real-world situations.",
  },
];

const assessmentPoints = [
  {
    title: "Continuous Assessment",
    description:
      "Regular classroom activities, assignments and observations help teachers understand student progress.",
  },
  {
    title: "Periodic Evaluations",
    description:
      "Structured assessments help identify learning strengths and areas that need further attention.",
  },
  {
    title: "Feedback & Improvement",
    description:
      "Constructive feedback helps students understand their progress and work towards improvement.",
  },
];

const supportPoints = [
  "Guidance based on individual learning needs",
  "Encouragement to ask questions and seek help",
  "Regular communication between educators and families",
  "Opportunities to build confidence and independence",
];

const faqs = [
  {
    question: "Which academic stages does the school offer?",
    answer:
      "The academic structure presented here covers Pre-Primary, Primary, Middle, Secondary and Senior Secondary stages. Please contact the school to confirm the currently available classes.",
  },
  {
    question: "Which curriculum or board does the school follow?",
    answer:
      "Please contact the school administration for confirmation of the affiliated board, curriculum framework and current academic guidelines.",
  },
  {
    question: "How can parents understand their child's academic progress?",
    answer:
      "Parents can stay informed through the school's assessment process, teacher communication and scheduled parent-teacher interactions.",
  },
  {
    question:
      "Does the school provide support for students who need additional guidance?",
    answer:
      "The school aims to provide appropriate academic guidance and support. Contact the academic team to understand the support currently available.",
  },
];

export default function Academics() {
  const [activeStage, setActiveStage] = useState("pre-primary");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const selectedStage =
    academicStages.find((stage) => stage.id === activeStage) ??
    academicStages[0];

  return (
    <main className="overflow-hidden bg-white text-[#172B4D]">
      {/* 01. Page Hero */}
      <section
        className="relative bg-[url('../images/campus.jpg')] bg-cover bg-center bg-no-repeat"
        // style={{ backgroundImage: "url('../campus.png')" }}
      >
        <div className="absolute inset-0 bg-[#000]/65" />
        <div className="z-10 relative mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8 lg:px-12 lg:pb-24">
          <Breadcrumb items={[{ label: "Academics" }]} className="mb-16" />

          <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <span className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#B8871E]">
                <span className="h-px w-8 bg-[#B8871E]" />
                Academic Excellence
              </span>

              <h1 className="max-w-3xl font-medium text-5xl leading-[1.08] text-[#ffffff] sm:text-5xl lg:text-6xl">
                Learning for <br />
                <span className="text-[#B8871E]">every stage of life.</span>
              </h1>
            </div>

            <div className="max-w-md pb-2 lg:ml-auto">
              <p className="text-base leading-8 text-gray-400">
                Every stage of education brings new opportunities to discover,
                understand and grow. Explore our academic programmes designed to
                support students throughout their learning journey.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <HashLink
                  smooth
                  to="/about#our-story"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-[#ffffff] transition-colors hover:text-[#B8871E]"
                >
                  Explore Academic Stages
                  <MoveRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </HashLink>

                {/* <span className="text-xs font-medium tracking-wide text-gray-400">
                  Learning. Character. Growth.
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Academic Programmes / Tabs */}
      <section
        id="academic-programmes"
        className="scroll-mt-24 py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B8871E]">
              Academic Programmes
            </span>

            <h2 className="mt-5   text-4xl leading-tight sm:text-5xl">
              A learning journey at every stage.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
              From the first classroom experiences to advanced subject learning,
              explore how each stage supports students as they grow.
            </p>
          </div>

          {/* Tabs */}
          <div
            className="mt-12 overflow-x-auto border-b border-slate-200"
            role="tablist"
            aria-label="Academic stages"
          >
            <div className="flex min-w-max gap-7 sm:gap-10">
              {academicStages.map((stage) => (
                <button
                  key={stage.id}
                  type="button"
                  role="tab"
                  id={`tab-${stage.id}`}
                  aria-selected={activeStage === stage.id}
                  aria-controls={`panel-${stage.id}`}
                  onClick={() => setActiveStage(stage.id)}
                  className={`relative whitespace-nowrap pb-5 text-sm font-medium transition ${
                    activeStage === stage.id
                      ? "text-[#172B4D]"
                      : "text-slate-400 hover:text-[#172B4D]"
                  }`}
                >
                  {stage.tab}

                  {activeStage === stage.id && (
                    <span className="absolute bottom-0 left-0 h-[3px] w-full bg-[#D69E27]" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Active tab content */}
          <div
            key={selectedStage.id}
            id={`panel-${selectedStage.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${selectedStage.id}`}
            className="grid gap-10 pt-10 lg:grid-cols-[1fr_1fr] lg:gap-16"
          >
            <div className="overflow-hidden bg-slate-100">
              <img
                src={selectedStage.image}
                alt={`${selectedStage.tab} students`}
                className="aspect-[5/4] h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-[#F8F8F6] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#B8871E]">
                  {selectedStage.classes}
                </span>
                <span className="text-xs text-slate-400">
                  {selectedStage.tagline}
                </span>
              </div>

              <h3 className="mt-6   text-3xl leading-tight sm:text-4xl">
                {selectedStage.title}
              </h3>

              <p className="mt-5 text-sm leading-8 text-slate-600">
                {selectedStage.description}
              </p>

              <div className="mt-8">
                <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#172B4D]">
                  Learning Focus
                </h4>

                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {selectedStage.focus.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-[#B8871E]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-slate-200 pt-6">
                <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#172B4D]">
                  Our Approach
                </h4>

                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedStage.methods.map((method) => (
                    <span
                      key={method}
                      className="border border-slate-200 px-3 py-2 text-xs text-slate-500"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-l-2 border-[#D69E27] pl-5">
                <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#172B4D]">
                  Learning Outcome
                </h4>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {selectedStage.outcome}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Academic Approach */}
      <section className="bg-[#F8F8F6] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B8871E]">
                How We Teach
              </span>

              <h2 className="mt-5   text-4xl leading-tight sm:text-5xl">
                Learning that makes a difference.
              </h2>

              <p className="mt-6 text-sm leading-8 text-slate-600 sm:text-base">
                We believe meaningful education happens when students actively
                participate in the learning process. Our approach encourages
                exploration, discussion and the practical application of
                knowledge.
              </p>

              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-3 text-sm font-semibold transition hover:text-[#B8871E]"
              >
                Learn About Our School
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {teachingPillars.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <div
                    key={pillar.title}
                    className="border-t border-slate-200 pt-6"
                  >
                    <div className="flex h-11 w-11 items-center justify-center bg-white text-[#B8871E]">
                      <Icon size={21} strokeWidth={1.5} />
                    </div>

                    <h3 className="mt-5   text-xl">{pillar.title}</h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 04. Learning Beyond Textbooks */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div className="relative">
            <img
              src="/images/academics-learning.png"
              alt="Students participating in a practical learning activity"
              loading="lazy"
              className="aspect-[5/4] w-full object-cover"
            />
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B8871E]">
              Beyond Textbooks
            </span>

            <h2 className="mt-5   text-4xl leading-tight sm:text-5xl">
              Education is more than what happens in a classroom.
            </h2>

            <p className="mt-6 text-sm leading-8 text-slate-600 sm:text-base">
              Students need opportunities to apply their knowledge, discover
              their interests and develop skills beyond academic subjects. We
              value experiences that encourage creativity, teamwork and personal
              growth.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-5">
              <div className="border-t border-slate-200 pt-5">
                <Microscope className="text-[#B8871E]" size={22} />
                <h3 className="mt-4   text-lg">Practical Learning</h3>
                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Exploring concepts through activities and experiments.
                </p>
              </div>

              <div className="border-t border-slate-200 pt-5">
                <Compass className="text-[#B8871E]" size={22} />
                <h3 className="mt-4   text-lg">Skill Development</h3>
                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Building confidence, communication and collaboration.
                </p>
              </div>
            </div>

            <Link
              to="/student-life"
              className="mt-8 inline-flex items-center gap-3 text-sm font-semibold transition hover:text-[#B8871E]"
            >
              Explore Student Life
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 05. Assessment */}
      <section className="bg-[#F8F8F6] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B8871E]">
              Measuring Progress
            </span>

            <h2 className="mt-5   text-4xl leading-tight sm:text-5xl">
              Every step forward matters.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
              Assessment helps us understand student learning, recognise
              progress and identify opportunities for further development.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {assessmentPoints.map((point, index) => (
              <div key={point.title} className="border-t border-slate-200 pt-7">
                <span className="text-xs font-semibold tracking-widest text-[#B8871E]">
                  0{index + 1}
                </span>

                <h3 className="mt-5   text-2xl">{point.title}</h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. Student Support */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B8871E]">
              Supporting Every Learner
            </span>

            <h2 className="mt-5   text-4xl leading-tight sm:text-5xl">
              Every student deserves the opportunity to succeed.
            </h2>

            <p className="mt-6 text-sm leading-8 text-slate-600 sm:text-base">
              Students learn and develop in different ways. We believe that
              understanding individual needs and providing appropriate guidance
              helps create a more supportive learning experience.
            </p>

            <ul className="mt-8 space-y-4">
              {supportPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                >
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0 text-[#B8871E]"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <img
            src="/images/academics-student-support.png"
            alt="Teacher supporting a student with classroom learning"
            loading="lazy"
            className="aspect-[5/4] w-full object-cover"
          />
        </div>
      </section>

      {/* 07. Academic FAQs */}
      <section className="bg-[#F8F8F6] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B8871E]">
              Frequently Asked Questions
            </span>

            <h2 className="mt-5   text-4xl leading-tight sm:text-5xl">
              Academics, explained.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Find answers to common questions about our academic programmes and
              learning approach.
            </p>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold hover:text-[#B8871E]"
            >
              Ask us a question
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="border-t border-slate-200">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="border-b border-slate-200">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                  className="flex w-full items-center justify-between gap-5 py-6 text-left"
                >
                  <span className="  text-lg sm:text-xl">{faq.question}</span>

                  <ChevronDown
                    size={19}
                    className={`shrink-0 text-[#B8871E] transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFaq === index && (
                  <p className="max-w-2xl pb-6 pr-8 text-sm leading-7 text-slate-500">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08. Final CTA */}
      <CTA />
    </main>
  );
}
