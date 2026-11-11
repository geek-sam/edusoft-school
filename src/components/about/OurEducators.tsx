import { useState } from "react";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

type FacultyMember = {
  id: number;
  name: string;
  designation: string;
  department: string;
  experience: string;
  image: string;
};

const facultyMembers: FacultyMember[] = [
  {
    id: 1,
    name: "Dr. Nitheen Yadav",
    designation: "Principal",
    department: "School Leadership",
    experience: "15 Years Experience",
    image: "/images/principal.jpg",
  },
  {
    id: 2,
    name: "Sujata Panda",
    designation: "Senior Teacher",
    department: "Mathematics",
    experience: "[X]+ Years Experience",
    image: "/images/faculty-mathematics.jpg",
  },
  {
    id: 3,
    name: "Meghamala Pati",
    designation: "Senior Teacher",
    department: "Science",
    experience: "[X]+ Years Experience",
    image: "/images/faculty-science.jpg",
  },
  {
    id: 4,
    name: "Kailash Dash",
    designation: "Senior Teacher",
    department: "English",
    experience: "[X]+ Years Experience",
    image: "/images/faculty-english.jpg",
  },
];

export default function OurEducators() {
  const [activeDepartment, setActiveDepartment] = useState("All");

  const departments = [
    "All",
    ...Array.from(new Set(facultyMembers.map((member) => member.department))),
  ];

  const filteredFaculty =
    activeDepartment === "All"
      ? facultyMembers
      : facultyMembers.filter(
          (member) => member.department === activeDepartment,
        );

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#B8871E]">
              <span className="h-px w-8 bg-[#D69E27]" />
              Meet Our Faculty
            </span>

            <h2 className="  text-3xl font-medium leading-tight text-[#172B4D] sm:text-4xl md:text-5xl">
              The People Behind
              <br />
              <span className="text-[#B8871E]">Every Achievement.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 md:text-base">
              Meet the dedicated educators who inspire curiosity, encourage
              learning and guide our students at every step of their journey.
            </p>
          </div>

          <Link
            to="/about/faculty"
            className="group inline-flex w-fit items-center gap-2 border-b border-[#D69E27] pb-2 text-sm font-semibold text-[#172B4D] transition-colors hover:text-[#B8871E]"
          >
            Meet All Faculty
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Department filters */}
        <div className="mt-10 flex flex-wrap gap-2 border-b border-gray-200 pb-5">
          {departments.map((department) => (
            <button
              key={department}
              type="button"
              onClick={() => setActiveDepartment(department)}
              className={`px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                activeDepartment === department
                  ? "bg-[#172B4D] text-white"
                  : "border border-gray-200 text-gray-600 hover:border-[#D69E27] hover:text-[#172B4D]"
              }`}
            >
              {department}
            </button>
          ))}
        </div>

        {/* Faculty cards */}
        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {filteredFaculty.map((member) => (
            <article key={member.id} className="group">
              {/* Faculty image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#F1F0EC]">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#172B4D]/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <span className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center bg-white text-[#172B4D] opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight size={19} />
                </span>
              </div>

              {/* Faculty details */}
              <div className=" pb-5 pt-5">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#B8871E]">
                  {member.department}
                </span>

                <h3 className="mt-2   text-xl font-semibold text-[#172B4D]">
                  {member.name}
                </h3>

                <p className="mt-1 text-sm text-gray-600">
                  {member.designation}
                </p>

                <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                  <BookOpen size={14} className="text-[#B8871E]" />
                  {member.experience}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
