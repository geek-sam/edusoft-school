import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ArrowUpRight,
  Send,
  CheckCircle2,
  ChevronDown,
  Building2,
  GraduationCap,
  MessageCircle,
} from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";

type ContactForm = {
  name: string;
  email: string;
  phone: string;
  enquiryType: string;
  subject: string;
  message: string;
};

const initialForm: ContactForm = {
  name: "",
  email: "",
  phone: "",
  enquiryType: "",
  subject: "",
  message: "",
};

const contactDetails = [
  {
    icon: MapPin,
    label: "Visit Our Campus",
    value: "Bangarapet, Kolar, 563101",
    note: "Visit us during school office hours.",
    href: "",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 99723 73620",
    note: "Monday – Saturday, 9:00 AM – 4:00 PM",
    href: "tel:+919972373620",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@edusoft.com",
    note: "We usually respond within 1–2 working days.",
    href: "mailto:info@edusoft.com",
  },
];

const departments = [
  {
    icon: GraduationCap,
    title: "Admissions Enquiry",
    description:
      "Questions about admission procedures, eligibility, applications and school visits.",
    contact: "+91 XXXXX XXXXX",
    email: "admissions@edusoft.com",
    phoneLink: "tel:+91XXXXXXXXXX",
    emailLink: "mailto:admissions@edusoft.com",
  },
  {
    icon: Building2,
    title: "Administration",
    description:
      "For general information, documentation, office assistance and administrative matters.",
    contact: "+91 XXXXX XXXXX",
    email: "admin@edusoft.com",
    phoneLink: "tel:+91XXXXXXXXXX",
    emailLink: "mailto:admin@edusoft.com",
  },
  {
    icon: MessageCircle,
    title: "Academic Enquiries",
    description:
      "For curriculum, academics, examinations, student support and academic programmes.",
    contact: "+91 XXXXX XXXXX",
    email: "academics@edusoft.com",
    phoneLink: "tel:+91XXXXXXXXXX",
    emailLink: "mailto:academics@edusoft.com",
  },
];

const faqs = [
  {
    question: "How can I enquire about admission?",
    answer:
      "You can submit an enquiry through our contact form by selecting Admissions Enquiry. Our admissions team will get in touch with you regarding the next steps.",
  },
  {
    question: "Can I schedule a visit to the school?",
    answer:
      "Yes. Contact our admissions office to arrange a campus visit. Our team can help you find a suitable date and time.",
  },
  {
    question: "What are the school's office hours?",
    answer:
      "The school office is open Monday to Saturday, from 9:00 AM to 4:00 PM. Please confirm holiday schedules before visiting.",
  },
  {
    question: "How long does it take to receive a response?",
    answer:
      "Our team aims to respond to enquiries within one to two working days. Response times may vary during holidays and admission periods.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.22em] text-[#B8871E]">
        {eyebrow}
      </span>
      <h2 className="  text-3xl leading-tight text-[#172B4D] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const updateField = (field: keyof ContactForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
    setSubmitted(false);
  };

  const validateForm = () => {
    const newErrors: Partial<ContactForm> = {};

    if (!form.name.trim()) newErrors.name = "Please enter your name.";

    if (!form.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[+]?[\d\s()-]{8,16}$/.test(form.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!form.enquiryType) {
      newErrors.enquiryType = "Please select an enquiry type.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Please enter your message.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = async (
    event,
  ) => {
    event.preventDefault();

    if (!validateForm()) return;

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
        ...form,
        from_name: form.name,
        subject: form.subject || `School Enquiry - ${form.enquiryType}`,
      }),
    });

    const result = await response.json();

    if (result.success) {
      setSubmitted(true);
      setForm(initialForm);
    } else {
      alert("Unable to submit your enquiry. Please try again.");
    }
  };

  const inputClass =
    "mt-2 w-full rounded-none border border-slate-200 bg-white px-4 py-3.5 text-sm text-[#172B4D] outline-none transition placeholder:text-slate-400 focus:border-[#D69E27] focus:ring-1 focus:ring-[#D69E27]";

  return (
    <main className="overflow-hidden bg-white">
      {/* Hero */}
      <section className="relative bg-[url('../images/campus.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-[#000]/65" />
        <div className="mx-auto relative z-10 max-w-7xl px-5 pb-16 pt-8 sm:px-8 lg:px-12 lg:pb-24">
          <Breadcrumb items={[{ label: "Contact Us" }]} className="mb-16" />

          <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <span className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#B8871E]">
                <span className="h-px w-8 bg-[#B8871E]" />
                Get In Touch
              </span>

              <h1 className="max-w-3xl text-5xl leading-[1.08] text-[#ffffff] sm:text-6xl lg:text-7xl">
                Let's Start a
                <br />
                <span className="text-[#B8871E]">Conversation.</span>
              </h1>
            </div>

            <div className="max-w-md pb-2 lg:ml-auto">
              <p className="text-base leading-8 text-gray-400">
                Whether you're exploring admissions, looking for more
                information or simply want to connect, we're here to help. Reach
                out to our team and we'll be happy to assist.
              </p>
              <div className="mt-7 flex items-center gap-3 text-sm font-medium text-[#B8871E]">
                <span className="h-px w-10 bg-[#B8871E]" />
                We'd love to hear from you
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact details */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Reach Out"
              title="We're easy to find."
              description="Connect with the right team or visit our campus. Here are the different ways to reach us."
            />
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {contactDetails.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="group border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#D69E27] hover:shadow-xl hover:shadow-slate-200/40 sm:p-9"
                >
                  <div className="mb-8 flex h-12 w-12 items-center justify-center bg-[#F8F8F6] text-[#B8871E] transition group-hover:bg-[#172B4D] group-hover:text-white">
                    <Icon size={21} strokeWidth={1.6} />
                  </div>

                  <h3 className="  text-2xl text-[#172B4D]">{item.label}</h3>

                  <p className="mt-4 break-words text-sm font-medium leading-6 text-[#172B4D]">
                    {item.href ? (
                      <a href={item.href} className="hover:text-[#B8871E]">
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </p>

                  <p className="mt-2 text-xs leading-6 text-slate-500">
                    {item.note}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form and office hours */}
      <section className="bg-[#F8F8F6] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
          <div>
            <SectionHeading
              eyebrow="Send An Enquiry"
              title="How can we help you?"
              description="Share your question or request with us. Please provide your contact details so the appropriate team can get back to you."
            />

            <div className="mt-12 border-t border-slate-200 pt-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-white text-[#B8871E]">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#172B4D]">
                    School Office Hours
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    Monday – Saturday
                    <br />
                    9:00 AM – 4:00 PM
                    <br />
                    Sunday & public holidays: Closed
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-start gap-4 border-t border-slate-200 pt-8">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-white text-[#B8871E]">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#172B4D]">
                    Plan Your Visit
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    We welcome prospective parents and visitors to explore our
                    campus. Contact us to schedule a visit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 shadow-sm sm:p-9 lg:p-11">
            {submitted ? (
              <div className="flex min-h-[480px] flex-col items-center justify-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="  text-3xl text-[#172B4D]">Enquiry received!</h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-slate-500">
                  Thank you for reaching out. Your message has been submitted
                  successfully.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#172B4D] hover:text-[#B8871E]"
                >
                  Send another enquiry <ArrowRight size={16} />
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8871E]">
                    Contact Form
                  </span>
                  <h3 className="mt-3   text-3xl text-[#172B4D]">
                    Write to us.
                  </h3>
                  <p className="mt-3 text-sm text-slate-500">
                    Fields marked with * are required.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-semibold text-[#172B4D]">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        placeholder="Enter your name"
                        className={inputClass}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#172B4D]">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        placeholder="you@example.com"
                        className={inputClass}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#172B4D]">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                        className={inputClass}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#172B4D]">
                        Enquiry Type *
                      </label>
                      <div className="relative">
                        <select
                          value={form.enquiryType}
                          onChange={(e) =>
                            updateField("enquiryType", e.target.value)
                          }
                          className={`${inputClass} appearance-none pr-10`}
                        >
                          <option value="">Select enquiry type</option>
                          <option value="Admissions">Admissions</option>
                          <option value="Academics">Academics</option>
                          <option value="General Information">
                            General Information
                          </option>
                          <option value="Campus Visit">Campus Visit</option>
                          <option value="Other">Other</option>
                        </select>
                        <ChevronDown
                          size={16}
                          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                      </div>
                      {errors.enquiryType && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.enquiryType}
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <label className="text-xs font-semibold text-[#172B4D]">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={form.subject}
                        onChange={(e) => updateField("subject", e.target.value)}
                        placeholder="What is your enquiry about?"
                        className={inputClass}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="text-xs font-semibold text-[#172B4D]">
                        Your Message *
                      </label>
                      <textarea
                        rows={5}
                        value={form.message}
                        onChange={(e) => updateField("message", e.target.value)}
                        placeholder="Write your message here..."
                        className={`${inputClass} resize-none`}
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-7 inline-flex w-full items-center justify-center gap-3 bg-[#172B4D] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#D69E27] sm:w-auto"
                  >
                    Submit Enquiry
                    <Send size={16} />
                  </button>

                  <p className="mt-5 text-xs leading-6 text-slate-400">
                    Your information will only be used to respond to your
                    enquiry.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Department contacts */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="The Right Team"
            title="Connect with the right department."
            description="For a faster response, contact the department that best matches your enquiry."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {departments.map((department) => {
              const Icon = department.icon;

              return (
                <div
                  key={department.title}
                  className="border border-slate-200 p-7 transition hover:border-[#D69E27] hover:shadow-lg sm:p-8"
                >
                  <Icon
                    className="text-[#B8871E]"
                    size={26}
                    strokeWidth={1.5}
                  />
                  <h3 className="mt-6   text-2xl text-[#172B4D]">
                    {department.title}
                  </h3>
                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500">
                    {department.description}
                  </p>

                  <div className="mt-6 space-y-3 border-t border-slate-100 pt-5">
                    <a
                      href={department.phoneLink}
                      className="flex items-center gap-3 text-sm text-[#172B4D] hover:text-[#B8871E]"
                    >
                      <Phone size={15} />
                      {department.contact}
                    </a>
                    <a
                      href={department.emailLink}
                      className="flex items-center gap-3 break-all text-sm text-[#172B4D] hover:text-[#B8871E]"
                    >
                      <Mail size={15} />
                      {department.email}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-[#F8F8F6] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Find Us"
              title="Come visit our campus."
              description="We welcome families and visitors to experience our learning environment in person."
            />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Your+School+Address"
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#172B4D] transition hover:text-[#B8871E]"
            >
              Get Directions <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="relative h-[350px] overflow-hidden bg-slate-200 sm:h-[450px]">
            <iframe
              title="School location on Google Maps"
              src="https://www.google.com/maps?q=India&output=embed"
              className="h-full w-full border-0 grayscale-[35%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="mt-5 flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <span>Bangarapet, Kolar, 563101</span>
            {/* <span>Replace the map with your school's exact location.</span> */}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
          <SectionHeading
            eyebrow="Common Questions"
            title="Need a little more information?"
            description="Here are answers to some common questions. If you need further assistance, our team is available to help."
          />

          <div className="border-t border-slate-200">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="border-b border-slate-200">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                  className="flex w-full items-center justify-between gap-5 py-6 text-left"
                >
                  <span className="  text-lg text-[#172B4D] sm:text-xl">
                    {faq.question}
                  </span>
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

      {/* Admissions CTA */}
      <section className="bg-[#172B4D] py-16 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 sm:px-8 md:flex-row md:items-center lg:px-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E9C779]">
              Begin Your Journey
            </span>
            <h2 className="mt-4   text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
              Looking for the right school for your child?
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
              Explore our admissions process and take the first step towards an
              enriching educational experience.
            </p>
          </div>

          <Link
            to="/admissions"
            className="inline-flex shrink-0 items-center gap-3 bg-[#D69E27] px-7 py-4 text-sm font-semibold text-[#172B4D] transition hover:bg-[#E9B94D]"
          >
            Explore Admissions <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
