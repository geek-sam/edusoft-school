import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
  Megaphone,
  Search,
  Pin,
  Bell,
} from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";

type AnnouncementCategory =
  | "All"
  | "Admissions"
  | "Academics"
  | "Examinations"
  | "General";

type Announcement = {
  id: number;
  category: Exclude<AnnouncementCategory, "All">;
  date: string;
  title: string;
  description: string;
  important?: boolean;
  href: string;
};

type SchoolEvent = {
  id: number;
  day: string;
  month: string;
  year: string;
  category: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  href: string;
};

const announcements: Announcement[] = [
  {
    id: 1,
    category: "Admissions",
    date: "10 November 2026",
    title: "Admissions Open for Academic Session 2027–28",
    description:
      "Applications and admission enquiries are invited for the upcoming academic session. Parents can explore the admission process, eligibility requirements and important information.",
    important: true,
    href: "/admissions",
  },
  {
    id: 2,
    category: "Examinations",
    date: "08 November 2026",
    title: "Mid-Term Examination Schedule",
    description:
      "The examination schedule and related instructions are available for students and parents. Please refer to the academic communication shared by the school.",
    important: true,
    href: "/downloads",
  },
  {
    id: 3,
    category: "Academics",
    date: "05 November 2026",
    title: "Parent-Teacher Meeting – Important Information",
    description:
      "Parents are encouraged to participate in the upcoming interaction to discuss student progress, learning goals and academic development.",
    href: "/news-events",
  },
  {
    id: 4,
    category: "General",
    date: "02 November 2026",
    title: "Updated School Timings and Guidelines",
    description:
      "Please refer to the latest school communication for information regarding daily timings and campus guidelines.",
    href: "/news-events",
  },
  {
    id: 5,
    category: "Academics",
    date: "29 October 2026",
    title: "Inter-School Competition Registration",
    description:
      "Interested students can coordinate with their respective teachers for participation details and registration information.",
    href: "/news-events",
  },
  {
    id: 6,
    category: "General",
    date: "25 October 2026",
    title: "School Holiday Notice",
    description:
      "Parents and students are requested to refer to the official school calendar for the applicable holiday schedule.",
    href: "/downloads",
  },
];

const upcomingEvents: SchoolEvent[] = [
  {
    id: 1,
    day: "14",
    month: "NOV",
    year: "2026",
    category: "Celebration",
    title: "Children's Day Celebration",
    date: "Saturday, 14 November 2026",
    time: "9:00 AM – 12:30 PM",
    location: "School Auditorium",
    description:
      "A special celebration dedicated to our students, featuring performances, activities and memorable moments.",
    href: "/student-life/events",
  },
  {
    id: 2,
    day: "21",
    month: "NOV",
    year: "2026",
    category: "Sports",
    title: "Annual Sports Meet",
    date: "Saturday, 21 November 2026",
    time: "8:30 AM – 3:00 PM",
    location: "School Sports Ground",
    description:
      "A day of sporting activities celebrating teamwork, participation and the spirit of healthy competition.",
    href: "/student-life/sports",
  },
  {
    id: 3,
    day: "05",
    month: "DEC",
    year: "2026",
    category: "Academic",
    title: "Annual Science Exhibition",
    date: "Saturday, 05 December 2026",
    time: "10:00 AM – 2:00 PM",
    location: "School Campus",
    description:
      "Students showcase their scientific ideas, experiments, models and creative problem-solving projects.",
    href: "/student-life/events",
  },
  {
    id: 4,
    day: "19",
    month: "DEC",
    year: "2026",
    category: "Cultural",
    title: "Annual Cultural Programme",
    date: "Saturday, 19 December 2026",
    time: "10:00 AM – 1:00 PM",
    location: "School Auditorium",
    description:
      "An opportunity for students to celebrate creativity and culture through music, dance and performances.",
    href: "/student-life/cultural",
  },
];

const announcementCategories: AnnouncementCategory[] = [
  "All",
  "Admissions",
  "Academics",
  "Examinations",
  "General",
];

export default function NewsEvents() {
  const [activeCategory, setActiveCategory] =
    useState<AnnouncementCategory>("All");

  const [searchQuery, setSearchQuery] = useState("");

  const filteredAnnouncements = announcements.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;

    const query = searchQuery.toLowerCase();

    const matchesSearch =
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  const featuredAnnouncement = announcements[0];

  return (
    <main className="bg-white">
      {/* =========================================
          PAGE HERO
      ========================================= */}
      <section className="relative bg-[url('../images/campus.jpg')] bg-cover bg-center bg-no-repeat">
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
                Stay Connected
              </span>

              <h1 className="max-w-3xl text-4xl font-medium leading-[1.1] text-[#ffffff] sm:text-5xl md:text-5xl lg:text-6xl">
                What's Happening
                <br />
                <span className="text-[#B8871E]">at Our School.</span>
              </h1>
            </div>

            <div className="max-w-md md:col-span-4 md:pb-2">
              <p className="text-sm leading-7 text-gray-400 md:text-base">
                Stay updated with school announcements, important notices,
                upcoming celebrations and events from our school community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          FEATURED ANNOUNCEMENT
      ========================================= */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-7 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center bg-[#172B4D] text-[#E9C779]">
              <Pin size={17} />
            </span>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#B8871E]">
                Important Update
              </span>
              <h2 className="  text-xl font-semibold text-[#172B4D]">
                Featured Announcement
              </h2>
            </div>
          </div>

          <article className="grid grid-cols-1 overflow-hidden bg-[#172B4D] md:grid-cols-12">
            <div className="flex flex-col justify-center p-7 sm:p-10 md:col-span-8 md:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-[#D69E27] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#172B4D]">
                  {featuredAnnouncement.category}
                </span>

                <span className="text-xs text-white/60">
                  {featuredAnnouncement.date}
                </span>
              </div>

              <h3 className="mt-6 max-w-2xl   text-2xl font-medium leading-snug text-white sm:text-3xl md:text-4xl">
                {featuredAnnouncement.title}
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/70">
                {featuredAnnouncement.description}
              </p>

              <Link
                to={featuredAnnouncement.href}
                className="group mt-8 inline-flex w-fit items-center gap-3 border-b border-[#E9C779] pb-2 text-sm font-semibold text-white transition-colors hover:text-[#E9C779]"
              >
                Explore Admission Details
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="relative min-h-[220px] bg-[#263D60] md:col-span-4 md:min-h-full">
              <img
                src="/images/middle.png"
                alt="Students at school"
                className="absolute inset-0 h-full w-full object-cover opacity-70"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#172B4D]/70 to-transparent" />

              <div className="absolute bottom-6 left-6 flex items-center gap-2 text-white">
                <Bell size={17} className="text-[#E9C779]" />
                <span className="text-xs font-semibold tracking-wide">
                  School Notice Board
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* =========================================
          LATEST ANNOUNCEMENTS
      ========================================= */}
      <section id="announcements" className="bg-[#F8F8F6] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#B8871E]">
                <span className="h-px w-8 bg-[#D69E27]" />
                School Notice Board
              </span>

              <h2 className="  text-3xl font-medium text-[#172B4D] sm:text-4xl">
                Latest Announcements
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-gray-600">
                Important information and updates for students and parents.
              </p>
            </div>

            <span className="text-xs text-gray-500">
              {filteredAnnouncements.length} announcements
            </span>
          </div>

          {/* Search */}
          <div className="mt-9 flex flex-col gap-5 border-b border-gray-200 pb-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex gap-2 overflow-x-auto pb-1">
              {announcementCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 px-4 py-2.5 text-xs font-semibold transition-all ${
                    activeCategory === category
                      ? "bg-[#172B4D] text-white"
                      : "border border-gray-200 bg-white text-gray-600 hover:border-[#D69E27] hover:text-[#172B4D]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:max-w-xs">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search announcements..."
                aria-label="Search announcements"
                className="h-11 w-full border border-gray-200 bg-white pl-11 pr-4 text-sm text-[#172B4D] outline-none transition-colors placeholder:text-gray-400 focus:border-[#D69E27]"
              />
            </div>
          </div>

          {/* Announcement list */}
          <div className="mt-3 divide-y divide-gray-200">
            {filteredAnnouncements.map((item) => (
              <article
                key={item.id}
                className="group grid grid-cols-1 gap-4 py-7 sm:grid-cols-12 sm:gap-8"
              >
                <div className="flex flex-wrap items-center gap-3 sm:col-span-3 sm:flex-col sm:items-start">
                  <span className="bg-[#F1E8D3] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#8B671C]">
                    {item.category}
                  </span>

                  <span className="text-xs text-gray-500">{item.date}</span>

                  {item.important && (
                    <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-[#B8871E]">
                      <Pin size={11} />
                      Important
                    </span>
                  )}
                </div>

                <div className="sm:col-span-7">
                  <h3 className="  text-xl font-semibold leading-snug text-[#172B4D] transition-colors group-hover:text-[#B8871E] sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center sm:col-span-2 sm:justify-end">
                  <Link
                    to={item.href}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#172B4D] transition-colors hover:text-[#B8871E]"
                  >
                    View Details
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </article>
            ))}

            {filteredAnnouncements.length === 0 && (
              <div className="py-16 text-center">
                <Megaphone size={30} className="mx-auto text-gray-300" />
                <h3 className="mt-4   text-xl text-[#172B4D]">
                  No announcements found
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Try another category or search term.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory("All");
                    setSearchQuery("");
                  }}
                  className="mt-5 text-xs font-semibold text-[#B8871E] hover:underline"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================
          UPCOMING EVENTS
      ========================================= */}
      <section id="upcoming-events" className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#B8871E]">
                <span className="h-px w-8 bg-[#D69E27]" />
                Mark Your Calendar
              </span>

              <h2 className="  text-3xl font-medium text-[#172B4D] sm:text-4xl">
                Upcoming Events
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-gray-600">
                Discover the activities, celebrations and experiences happening
                across our school community.
              </p>
            </div>

            <Link
              to="/student-life/events"
              className="group inline-flex w-fit items-center gap-2 border-b border-[#D69E27] pb-2 text-sm font-semibold text-[#172B4D] transition-colors hover:text-[#B8871E]"
            >
              Explore Student Life
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* Event cards */}
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {upcomingEvents.map((event) => (
              <article
                key={event.id}
                className="group flex flex-col gap-5 border border-gray-200 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D69E27]/60 hover:shadow-lg sm:flex-row sm:gap-6 sm:p-6"
              >
                {/* Date block */}
                <div className="flex h-[90px] w-full shrink-0 flex-row items-center justify-center gap-3 bg-[#172B4D] text-white transition-colors group-hover:bg-[#D69E27] sm:h-[110px] sm:w-[100px] sm:flex-col sm:gap-0">
                  <span className="  text-4xl font-semibold leading-none">
                    {event.day}
                  </span>

                  <span className="text-xs font-bold tracking-[0.15em] sm:mt-2">
                    {event.month} {event.year}
                  </span>
                </div>

                {/* Event details */}
                <div className="flex min-w-0 flex-1 flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#B8871E]">
                    {event.category}
                  </span>

                  <h3 className="mt-2   text-xl font-semibold text-[#172B4D] transition-colors group-hover:text-[#B8871E]">
                    {event.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-gray-500">
                    {event.description}
                  </p>

                  <div className="mt-4 flex flex-col gap-2 text-xs text-gray-500">
                    <span className="flex items-center gap-2">
                      <CalendarDays size={14} className="text-[#B8871E]" />
                      {event.date}
                    </span>

                    <span className="flex items-center gap-2">
                      <Clock3 size={14} className="text-[#B8871E]" />
                      {event.time}
                    </span>

                    <span className="flex items-center gap-2">
                      <MapPin size={14} className="text-[#B8871E]" />
                      {event.location}
                    </span>
                  </div>

                  <Link
                    to={event.href}
                    className="mt-5 inline-flex w-fit items-center gap-2 text-xs font-semibold text-[#172B4D] transition-colors hover:text-[#B8871E]"
                  >
                    Event Details
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SCHOOL CALENDAR CTA
      ========================================= */}
      <section className="bg-[#F8F8F6] py-14 md:py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 sm:px-8 md:flex-row md:items-center lg:px-10">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#172B4D] text-[#E9C779]">
              <CalendarDays size={21} />
            </div>

            <div>
              <h2 className="  text-xl font-semibold text-[#172B4D] sm:text-2xl">
                Stay Updated With Our School Calendar
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-gray-600">
                Keep track of important academic dates, holidays, celebrations
                and school activities.
              </p>
            </div>
          </div>

          <Link
            to="/downloads"
            className="inline-flex shrink-0 items-center gap-3 border border-[#172B4D] px-6 py-3.5 text-sm font-semibold text-[#172B4D] transition-colors hover:bg-[#172B4D] hover:text-white"
          >
            View School Calendar
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* =========================================
          ADMISSION CTA
      ========================================= */}
      <section className="bg-[#172B4D] py-16 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 sm:px-8 md:flex-row md:items-center lg:px-10">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E9C779]">
              Become Part of Our Community
            </span>

            <h2 className="mt-4   text-3xl font-medium leading-tight text-white sm:text-4xl">
              Give Your Child a Place to Learn, Explore and Grow.
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/65">
              Discover an environment that encourages learning, builds character
              and inspires every student.
            </p>
          </div>

          <Link
            to="/admissions"
            className="inline-flex shrink-0 items-center gap-3 bg-[#D69E27] px-6 py-4 text-sm font-semibold text-[#172B4D] transition-colors hover:bg-[#E9B94D]"
          >
            Explore Admissions
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
