import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Megaphone,
  Pin,
} from "lucide-react";

const announcements = [
  {
    id: 1,
    category: "Admissions",
    date: "06 Nov 2026",
    title: "Admissions Open for the Academic Session 2027–28",
    description:
      "Registration enquiries are now invited for the upcoming academic session. Explore the admission process and important dates.",
    pinned: true,
    href: "/admissions",
  },
  {
    id: 2,
    category: "Academics",
    date: "03 Nov 2026",
    title: "Mid-Term Examination Schedule Announced",
    description:
      "Students and parents can refer to the examination timetable and important instructions for the upcoming assessments.",
    pinned: false,
    href: "/news-events",
  },
  //   {
  //     id: 3,
  //     category: "General Notice",
  //     date: "29 Oct 2026",
  //     title: "School Timings and Holiday Schedule Update",
  //     description:
  //       "Please review the updated school timings and holiday schedule for the current academic term.",
  //     pinned: false,
  //     href: "/news-events",
  //   },
];

const upcomingEvents = [
  {
    id: 1,
    day: "14",
    month: "NOV",
    category: "Cultural",
    title: "Children's Day Celebration",
    time: "9:00 AM – 12:30 PM",
    location: "School Auditorium",
    href: "/student-life/events",
  },
  {
    id: 2,
    day: "21",
    month: "NOV",
    category: "Sports",
    title: "Annual Sports Meet",
    time: "8:30 AM – 3:00 PM",
    location: "School Sports Ground",
    href: "/student-life/sports",
  },
  //   {
  //     id: 3,
  //     day: "05",
  //     month: "DEC",
  //     category: "Academic",
  //     title: "Annual Science Exhibition",
  //     time: "10:00 AM – 2:00 PM",
  //     location: "School Campus",
  //     href: "/student-life/events",
  //   },
];

export default function NewsEvents() {
  return (
    <section className="bg-[#F8F8F6] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#B8871E]">
              <span className="h-px w-7 bg-[#D69E27]" />
              Stay Connected
            </span>

            <h2 className="  text-3xl font-medium leading-tight text-[#172B4D] sm:text-4xl md:text-5xl">
              News & Events
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600 md:text-base">
              Stay informed about the latest school announcements, important
              updates and upcoming activities.
            </p>
          </div>

          <Link
            to="/news-events"
            className="group inline-flex w-fit items-center gap-2 border-b border-[#D69E27] pb-2 text-sm font-semibold text-[#172B4D] transition-colors hover:text-[#B8871E]"
          >
            View All Updates
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Latest announcements */}
          <div className="lg:col-span-7">
            <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#172B4D] text-[#E9C779]">
                  <Megaphone size={19} />
                </div>
                <div>
                  <h3 className="  text-xl font-semibold text-[#172B4D]">
                    Latest Announcements
                  </h3>
                  <p className="mt-0.5 text-xs text-gray-500">
                    Important notices & updates
                  </p>
                </div>
              </div>

              <span className="hidden text-xs font-medium text-gray-400 sm:block">
                RECENT UPDATES
              </span>
            </div>

            <div className="divide-y divide-gray-200">
              {announcements.map((item) => (
                <article key={item.id} className="group py-6 first:pt-2">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="bg-[#F1E8D3] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8B671C]">
                      {item.category}
                    </span>

                    <span className="flex items-center gap-1.5 text-xs text-gray-500">
                      <CalendarDays size={13} />
                      {item.date}
                    </span>

                    {item.pinned && (
                      <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-[#B8871E]">
                        <Pin size={12} />
                        Important
                      </span>
                    )}
                  </div>

                  <Link to={item.href} className="block">
                    <h4 className="max-w-xl   text-lg font-semibold leading-snug text-[#172B4D] transition-colors group-hover:text-[#B8871E] sm:text-xl">
                      {item.title}
                    </h4>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#172B4D] transition-all group-hover:gap-3">
                      Read Announcement
                      <ArrowRight size={14} />
                    </span>
                  </Link>
                </article>
              ))}
            </div>

            <Link
              to="/news-events"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#172B4D] transition-colors hover:text-[#B8871E]"
            >
              Explore All Announcements
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Upcoming events */}
          <div className="lg:col-span-5 bg-[#172B4D12] p-6 rounded-lg">
            <div className="mb-6 flex items-center gap-3 border-b border-gray-200 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D69E27] text-white">
                <CalendarDays size={19} />
              </div>
              <div>
                <h3 className="  text-xl font-semibold text-[#172B4D]">
                  Upcoming Events
                </h3>
                <p className="mt-0.5 text-xs text-gray-500">
                  Mark your calendar
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <article
                  key={event.id}
                  className="group flex gap-4 border border-gray-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#D69E27]/50 hover:shadow-lg sm:p-5"
                >
                  {/* Event date */}
                  <div className="flex h-[76px] w-[68px] shrink-0 flex-col items-center justify-center bg-[#172B4D] text-white transition-colors group-hover:bg-[#D69E27]">
                    <span className="  text-3xl font-semibold leading-none">
                      {event.day}
                    </span>
                    <span className="mt-1 text-[10px] font-bold tracking-[0.15em]">
                      {event.month}
                    </span>
                  </div>

                  {/* Event details */}
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#B8871E]">
                      {event.category}
                    </span>

                    <Link to={event.href}>
                      <h4 className="mt-1   text-base font-semibold leading-snug text-[#172B4D] transition-colors group-hover:text-[#B8871E] sm:text-lg">
                        {event.title}
                      </h4>
                    </Link>

                    <div className="mt-3 flex flex-col gap-1.5 text-xs text-gray-500">
                      <span className="flex items-center gap-2">
                        <Clock3 size={13} className="text-[#B8871E]" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-2">
                        <Pin size={13} className="text-[#B8871E]" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <Link
              to="/student-life/events"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#172B4D] transition-colors hover:text-[#B8871E]"
            >
              View Event Calendar
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-16 flex flex-col items-start justify-between gap-5 border-t border-gray-200 pt-8 sm:flex-row sm:items-center">
          <div>
            <h3 className="  text-xl font-semibold text-[#172B4D]">
              Be a part of every school moment.
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Explore activities, celebrations and achievements from our campus.
            </p>
          </div>

          <Link
            to="/student-life"
            className="inline-flex shrink-0 items-center gap-3 bg-[#172B4D] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#D69E27]"
          >
            Explore Student Life
            <ArrowRight size={16} />
          </Link>
        </div> */}
      </div>
    </section>
  );
}
