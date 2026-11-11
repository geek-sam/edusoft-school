import { useState } from "react";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const navigation = [
  {
    label: "About Us",
    href: "/about",
    children: [
      // { label: "School Overview", href: "/about" },
      // { label: "Principal's Message", href: "/about/principal-message" },
      // { label: "Vision & Mission", href: "/about/vision-mission" },
      // { label: "Management", href: "/about/management" },
      // { label: "Faculty & Staff", href: "/about/faculty" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      // { label: "Academic Overview", href: "/academics" },
      // { label: "Pre-Primary", href: "/academics/pre-primary" },
      // { label: "Primary School", href: "/academics/primary" },
      // { label: "Middle School", href: "/academics/middle" },
      // { label: "Secondary School", href: "/academics/secondary" },
      // { label: "Senior Secondary", href: "/academics/senior-secondary" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      // { label: "Admission Overview", href: "/admissions" },
      // { label: "Admission Process", href: "/admissions/process" },
      // { label: "Eligibility Criteria", href: "/admissions/eligibility" },
      // { label: "Fee Structure", href: "/admissions/fees" },
      // { label: "FAQs", href: "/admissions/faqs" },
    ],
  },
  {
    label: "Facilities",
    href: "/facilities",
    children: [
      // { label: "Campus & Infrastructure", href: "/facilities" },
      // { label: "Smart Classrooms", href: "/facilities/classrooms" },
      // { label: "Library", href: "/facilities/library" },
      // { label: "Laboratories", href: "/facilities/labs" },
      // { label: "Sports", href: "/facilities/sports" },
      // { label: "Transportation", href: "/facilities/transport" },
    ],
  },
  {
    label: "Student Life",
    href: "/student-life",
    children: [
      // { label: "Activities", href: "/student-life/activities" },
      // { label: "Sports & Recreation", href: "/student-life/sports" },
      // { label: "Clubs & Societies", href: "/student-life/clubs" },
      // { label: "Events", href: "/student-life/events" },
    ],
  },
  { label: "News & Events", href: "/news-events", children: [] },
  { label: "Gallery", href: "/gallery", children: [] },
  { label: "Contact", href: "/contact", children: [] },
];

const MainHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <div className="flex min-h-[88px] items-center justify-between gap-6">
          {/* Logo and Brand */}
          <Link to="/" className="flex shrink-0 items-center gap-3">
            {/* <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-[#172B4D] text-white">
              <GraduationCap size={27} strokeWidth={1.8} />
            </div> */}

            <div>
              <h1 className="text-lg font-bold leading-tight tracking-tight text-[#172B4D]">
                EDUSOFT PUBLIC SCHOOL
              </h1>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-gray-500">
                Learn • Lead • Inspire
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-5 xl:flex">
            {navigation.map((item) => (
              <div key={item.label} className="group relative">
                <Link
                  to={item.href}
                  className="flex items-center gap-1 py-8 text-[13px] font-semibold text-gray-700 transition hover:text-[#D69E27]"
                >
                  {item.label}
                  {item.children?.length > 0 ? (
                    <ChevronDown
                      size={14}
                      className="transition-transform group-hover:rotate-180"
                    />
                  ) : null}
                </Link>

                {/* {item.children?.length > 0 && (
                  <div className="invisible absolute left-0 top-[75%] w-60 translate-y-2 rounded-xl border border-gray-100 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block rounded-lg px-4 py-2.5 text-sm text-gray-600 transition hover:bg-amber-50 hover:text-[#172B4D]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )} */}
              </div>
            ))}
          </nav>

          {/* Apply Now CTA */}
          <Link
            to="/contact"
            className="hidden shrink-0 items-center gap-2 rounded-lg bg-[#D69E27] px-5 py-3 text-sm font-semibold text-[#172B4D] transition hover:bg-[#E9B94D] xl:flex"
          >
            Apply Now
            <ArrowUpRight size={16} />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-gray-200 text-[#172B4D] xl:hidden"
          >
            {mobileOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="border-t border-gray-100 py-4 xl:hidden">
            <nav className="flex flex-col">
              {navigation.map((item) => (
                <div key={item.label} className="border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="py-3 text-sm font-semibold text-[#172B4D]"
                    >
                      {item.label}
                    </Link>

                    {item.children?.length > 0 && (
                      <button
                        type="button"
                        aria-label={`Toggle ${item.label} submenu`}
                        aria-expanded={activeDropdown === item.label}
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === item.label ? null : item.label,
                          )
                        }
                        className="p-3 text-gray-600"
                      >
                        <ChevronDown
                          size={18}
                          className={`transition-transform ${
                            activeDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* {activeDropdown === item.label && (
                    <div className="mb-3 ml-3 border-l-2 border-amber-400 pl-4">
                      {item.children.map((child) => (
                        <Link
                          // key={child.label}
                          to={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-sm text-gray-600 hover:text-[#172B4D]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )} */}
                </div>
              ))}

              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#D69E27] px-5 py-3 text-sm font-semibold text-[#172B4D]"
              >
                Apply Now
                <ArrowUpRight size={16} />
              </Link>

              <div className="mt-4 flex flex-col gap-3 border-t border-gray-100 pt-4">
                <Link to="/parent-portal" className="text-sm text-gray-600">
                  Parent Portal
                </Link>
                <Link
                  to="/mandatory-disclosure"
                  className="text-sm text-gray-600"
                >
                  Mandatory Disclosure
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default MainHeader;
