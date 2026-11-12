import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  FileText,
  GraduationCap,
  CalendarDays,
  ClipboardList,
  Users,
  Wallet,
  MessageCircle,
  CircleHelp,
  ShieldCheck,
  BookOpen,
  Clock3,
} from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";

const admissionSteps = [
  {
    number: "01",
    title: "Submit an Enquiry",
    description:
      "Contact the admissions team or submit an online enquiry to express your interest and receive initial guidance.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Complete the Application",
    description:
      "Collect the admission form, complete the required details and submit it along with the necessary documents.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Interaction & Assessment",
    description:
      "Depending on the grade, the student may be invited for an age-appropriate interaction or academic assessment.",
    icon: Users,
  },
  {
    number: "04",
    title: "Admission Confirmation",
    description:
      "Once the application is reviewed and approved, the school will share the admission decision and next steps.",
    icon: Check,
  },
  {
    number: "05",
    title: "Fee Payment & Enrolment",
    description:
      "Complete the applicable fee payment and enrolment formalities to confirm the student's admission.",
    icon: GraduationCap,
  },
];

const eligibility = [
  {
    level: "Pre-Primary",
    grades: "Nursery – UKG",
    age: "As per the school's age criteria",
    description:
      "Children are considered based on age suitability, readiness and the school's admission guidelines.",
  },
  {
    level: "Primary",
    grades: "Classes I – V",
    age: "As per the applicable grade requirements",
    description:
      "Applicants should have completed the previous class from a recognised school.",
  },
  {
    level: "Middle School",
    grades: "Classes VI – VIII",
    age: "As per the applicable grade requirements",
    description:
      "Admission is based on previous academic records and an age-appropriate assessment, where applicable.",
  },
  {
    level: "Secondary",
    grades: "Classes IX – X",
    age: "As per board and school guidelines",
    description:
      "Applicants must meet the academic and documentation requirements for the respective grade.",
  },
  {
    level: "Senior Secondary",
    grades: "Classes XI – XII",
    age: "As per board and subject requirements",
    description:
      "Admission is subject to stream availability, previous academic performance and applicable board rules.",
  },
];

const requiredDocuments = [
  "Completed admission application form",
  "Recent passport-size photographs of the student",
  "Birth certificate",
  "Previous academic report card (where applicable)",
  "Transfer certificate (where applicable)",
  "Address proof of parent or guardian",
  "Aadhaar or other valid identity document, if required",
  "Caste or category certificate, where applicable",
];

const feeItems = [
  {
    name: "Registration Fee",
    description: "Payable at the time of application, if applicable.",
    amount: "As notified",
  },
  {
    name: "Admission Fee",
    description: "One-time fee payable upon confirmation of admission.",
    amount: "As notified",
  },
  {
    name: "Tuition Fee",
    description: "Recurring academic fee as per the selected grade.",
    amount: "As notified",
  },
  {
    name: "Annual / Development Fee",
    description: "Annual charges towards school facilities and development.",
    amount: "As notified",
  },
  {
    name: "Transport Fee",
    description: "Applicable only to students opting for school transport.",
    amount: "Route-based",
  },
];

const faqs = [
  {
    question: "When do admissions usually open?",
    answer:
      "Admission timelines are announced by the school for each academic session. Contact the admissions office for current availability and application dates.",
  },
  {
    question: "Can I apply for admission in the middle of the academic year?",
    answer:
      "Mid-session admissions may be considered subject to seat availability, grade requirements and school policy. Contact the admissions team to discuss your requirement.",
  },
  {
    question: "Is an entrance test compulsory for every grade?",
    answer:
      "Assessment requirements may differ by grade. Younger students may have an informal interaction, while higher grades may require an academic assessment.",
  },
  {
    question: "Can I visit the campus before applying?",
    answer:
      "Parents can contact the school to enquire about campus visits and available appointment slots.",
  },
  {
    question: "How can I get the exact fee details?",
    answer:
      "The detailed fee schedule can be requested directly from the admissions office. Fees may vary by grade and selected facilities.",
  },
];

export default function Admissions() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <main className="bg-white text-[#172B4D]">
      {/* Hero */}

      <section className="relative bg-[url('../images/admission.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-[#000]/65" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8 md:pb-20 lg:px-10 lg:pt-10">
          <Breadcrumb
            items={[{ label: "News & Events" }]}
            className="mb-12 md:mb-16"
          />

          <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-8">
              <span className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#B8871E]">
                <span className="h-px w-8 bg-[#B8871E]" />
                Admissions
              </span>

              <h1 className="max-w-3xl text-4xl font-medium leading-[1.1] text-[#ffffff] sm:text-5xl md:text-5xl lg:text-6xl">
                Begin a journey of
                <br />
                <span className="text-[#B8871E]">learning and discovery.</span>
              </h1>
            </div>

            <div className="max-w-md md:col-span-4 md:pb-2">
              <p className="text-sm leading-7 text-gray-400 md:text-base">
                We welcome families who believe in nurturing curiosity, building
                confidence and creating meaningful learning experiences.
              </p>
              <div className="mt-5 flex flex-wrap gap-4">
                <a
                  href="#admission-process"
                  className="inline-flex items-center gap-3 bg-[#D69E27] px-6 py-3.5 text-sm font-semibold text-[#172B4D] transition hover:bg-[#E9B94D]"
                >
                  Admission Process
                  <ArrowRight size={17} />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#172B4D]"
                >
                  Contact
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20 lg:py-28">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#B8871E]">
            Admission Overview
          </p>
          <h2 className="  text-3xl leading-tight sm:text-4xl">
            The first step towards
            <span className="text-[#B8871E]"> a brighter future.</span>
          </h2>
          <p className="mt-6 text-sm leading-8 text-[#172B4D]/65">
            Choosing the right school is an important decision for every family.
            Our admission process is designed to be clear, supportive and
            straightforward, helping parents understand each stage before making
            an informed decision.
          </p>
          <p className="mt-4 text-sm leading-8 text-[#172B4D]/65">
            From the first enquiry to the completion of enrolment, our
            admissions team is available to guide families through the
            application process, eligibility requirements and school
            information.
          </p>

          <div className="mt-8 flex items-start gap-4 border-l-2 border-[#D69E27] pl-5">
            <div>
              <p className="  text-xl">Admissions for all stages</p>
              <p className="mt-2 text-sm leading-6 text-[#172B4D]/60">
                Pre-Primary, Primary, Middle, Secondary and Senior Secondary,
                subject to seat availability.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src="/images/academics-senior-secondary.png"
            alt="Students learning together in a classroom"
            className="h-[420px] w-full object-cover sm:h-[500px]"
          />
          <div className="absolute -bottom-5 -left-3 bg-[#D69E27] px-6 py-5 sm:-left-5">
            <p className="  text-2xl text-[#172B4D]">Every child</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-[#172B4D]/75">
              Deserves an opportunity
            </p>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section
        id="admission-process"
        className="scroll-mt-24 bg-[#F8F8F6] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#B8871E]">
              How to Apply
            </p>
            <h2 className="  text-3xl sm:text-4xl">The admission process</h2>
            <p className="mt-5 text-sm leading-7 text-[#172B4D]/60">
              Follow these steps to complete your child's admission application.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {admissionSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="relative">
                  {index !== admissionSteps.length - 1 && (
                    <div className="absolute left-12 top-6 hidden h-px w-[calc(100%-24px)] bg-[#D69E27]/40 lg:block" />
                  )}

                  <div className="relative flex h-12 w-12 items-center justify-center border border-[#D69E27] bg-[#F8F8F6] text-[#B8871E]">
                    <Icon size={20} strokeWidth={1.6} />
                  </div>

                  <p className="mt-6 text-xs font-semibold tracking-widest text-[#B8871E]">
                    STEP {step.number}
                  </p>
                  <h3 className="mt-3   text-xl">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#172B4D]/60">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-[#172B4D] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#243D66]"
            >
              Start Your Enquiry
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#B8871E]">
              Who Can Apply
            </p>
            <h2 className="  text-3xl leading-tight sm:text-4xl">
              Eligibility
              <span className="block text-[#B8871E]">criteria</span>
            </h2>
            <p className="mt-6 text-sm leading-8 text-[#172B4D]/65">
              Admission eligibility depends on the student's age, previous
              academic record and the requirements applicable to the requested
              grade. The following is a general guide.
            </p>
            <div className="mt-8 flex gap-4 border-t border-[#172B4D]/10 pt-6">
              <CalendarDays
                className="mt-1 shrink-0 text-[#B8871E]"
                size={22}
              />
              <div>
                <h3 className="font-semibold">Age requirements</h3>
                <p className="mt-2 text-sm leading-7 text-[#172B4D]/60">
                  Age eligibility is determined according to the school's
                  admission policy and applicable education board guidelines.
                </p>
              </div>
            </div>
            <div className="mt-6 flex gap-4 border-t border-[#172B4D]/10 pt-6">
              <BookOpen className="mt-1 shrink-0 text-[#B8871E]" size={22} />
              <div>
                <h3 className="font-semibold">Academic requirements</h3>
                <p className="mt-2 text-sm leading-7 text-[#172B4D]/60">
                  Previous class completion and academic records may be required
                  for admission to higher grades.
                </p>
              </div>
            </div>
          </div>

          <div className="divide-y divide-[#172B4D]/10 border-y border-[#172B4D]/10">
            {eligibility.map((item, index) => (
              <div
                key={item.level}
                className="grid gap-3 py-6 sm:grid-cols-[150px_1fr] sm:gap-8"
              >
                <div>
                  <p className="text-xs font-semibold tracking-wider text-[#B8871E]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2   text-xl">{item.level}</h3>
                  <p className="mt-1 text-xs text-[#172B4D]/50">
                    {item.grades}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">{item.age}</p>
                  <p className="mt-2 text-sm leading-7 text-[#172B4D]/60">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="bg-[#172B4D] py-20 text-white lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#E9C779]">
              Before You Apply
            </p>
            <h2 className="  text-3xl leading-tight sm:text-4xl">
              Documents required
              <span className="block text-[#E9C779]">for admission.</span>
            </h2>
            <p className="mt-6 text-sm leading-8 text-white/65">
              Keep the relevant documents ready before submitting the
              application. Additional documents may be requested depending on
              the student's grade and admission category.
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm text-[#E9C779]">
              <FileText size={20} />
              <span>Document checklist</span>
            </div>
          </div>

          <div className="border border-white/15 p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              {requiredDocuments.map((document) => (
                <div key={document} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#D69E27] text-[#172B4D]">
                    <Check size={13} strokeWidth={2.5} />
                  </span>
                  <p className="text-sm leading-6 text-white/80">{document}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 border-t border-white/15 pt-5 text-xs leading-6 text-white/45">
              The final document list will be shared by the admissions office.
              Original documents may be required for verification.
            </p>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#B8871E]">
              Fees & Payments
            </p>
            <h2 className="  text-3xl leading-tight sm:text-4xl">
              Understanding the
              <span className="block text-[#B8871E]">fee structure.</span>
            </h2>
            <p className="mt-6 text-sm leading-8 text-[#172B4D]/65">
              The fee structure is designed to provide clarity on the different
              components of school fees. The applicable amount may vary based on
              grade, facilities and payment schedule.
            </p>
            <div className="mt-8 flex gap-4 border-l-2 border-[#D69E27] pl-5">
              <Wallet size={22} className="mt-1 shrink-0 text-[#B8871E]" />
              <div>
                <h3 className="font-semibold">
                  Request the latest fee schedule
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#172B4D]/60">
                  Contact the admissions office for the current academic
                  session's detailed fee structure.
                </p>
                <Link
                  to="/contact"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#B8871E] hover:text-[#172B4D]"
                >
                  Enquire about fees
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between border-b border-[#172B4D]/15 pb-5">
              <h3 className="  text-2xl">Fee components</h3>
              <span className="text-xs text-[#172B4D]/45">
                Indicative categories
              </span>
            </div>

            <div className="divide-y divide-[#172B4D]/10">
              {feeItems.map((item, index) => (
                <div
                  key={item.name}
                  className="grid grid-cols-[1fr_auto] gap-4 py-5"
                >
                  <div className="flex gap-4">
                    <span className="pt-1 text-xs font-semibold text-[#B8871E]">
                      0{index + 1}
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold">{item.name}</h4>
                      <p className="mt-2 text-xs leading-6 text-[#172B4D]/55">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <span className="pt-1 text-right text-xs font-semibold text-[#B8871E]">
                    {item.amount}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 bg-[#F8F8F6] p-5">
              <p className="text-xs leading-6 text-[#172B4D]/60">
                Fee amounts shown here are indicative placeholders, not
                published school fees. Please contact the school for the
                official fee schedule, payment terms, refund policy and any
                applicable concessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="bg-[#F8F8F6] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#B8871E]">
              Important Information
            </p>
            <h2 className="  text-3xl sm:text-4xl">
              Before completing your application
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <div className="border border-[#172B4D]/10 bg-white p-7">
              <Clock3 className="text-[#B8871E]" size={25} />
              <h3 className="mt-5   text-xl">Application timeline</h3>
              <p className="mt-3 text-sm leading-7 text-[#172B4D]/60">
                Apply within the announced admission period. Late applications
                may be considered subject to seat availability.
              </p>
            </div>
            <div className="border border-[#172B4D]/10 bg-white p-7">
              <ShieldCheck className="text-[#B8871E]" size={25} />
              <h3 className="mt-5   text-xl">Verification</h3>
              <p className="mt-3 text-sm leading-7 text-[#172B4D]/60">
                All submitted details and documents are subject to verification
                by the school administration.
              </p>
            </div>
            <div className="border border-[#172B4D]/10 bg-white p-7">
              <CircleHelp className="text-[#B8871E]" size={25} />
              <h3 className="mt-5   text-xl">Seat availability</h3>
              <p className="mt-3 text-sm leading-7 text-[#172B4D]/60">
                Admission is subject to the availability of seats in the
                requested grade and fulfilment of eligibility requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#B8871E]">
            Common Questions
          </p>
          <h2 className="  text-3xl sm:text-4xl">Admission FAQs</h2>
        </div>

        <div className="mt-12 divide-y divide-[#172B4D]/10 border-y border-[#172B4D]/10">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="py-5">
              <button
                type="button"
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                className="flex w-full items-center justify-between gap-5 text-left"
                aria-expanded={activeFaq === index}
              >
                <span className="  text-lg">{faq.question}</span>
                <ChevronDown
                  size={19}
                  className={`shrink-0 text-[#B8871E] transition-transform ${
                    activeFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeFaq === index && (
                <p className="max-w-3xl pt-4 text-sm leading-7 text-[#172B4D]/60">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#172B4D]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:py-20">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#E9C779]">
              Take the Next Step
            </p>
            <h2 className="  text-3xl leading-tight text-white sm:text-4xl">
              Your child's next chapter
              <span className="block text-[#E9C779]">
                starts with a conversation.
              </span>
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/60">
              Connect with our admissions team to understand the process,
              discuss eligibility and plan your next steps.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-[#D69E27] px-6 py-4 text-sm font-semibold text-[#172B4D] transition hover:bg-[#E9B94D]"
            >
              Contact Admissions
              <ArrowRight size={17} />
            </Link>
            <Link
              to="/academics"
              className="inline-flex items-center gap-3 border border-white/30 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#172B4D]"
            >
              Explore Academics
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
