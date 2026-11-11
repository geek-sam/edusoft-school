import { Quote } from "lucide-react";

export default function PrincipalMessage() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-14 lg:gap-20">
          {/* Principal's portrait */}
          <div className="relative mx-auto w-full max-w-md md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#F8F8F6]">
              <img
                src="/images/principal.jpg"
                alt="Principal of the school"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Decorative accent */}
            <div className="absolute -bottom-3 -right-3 -z-0 h-24 w-24 border-b-2 border-r-2 border-[#D69E27]" />
          </div>

          {/* Message content */}
          <div className="relative md:col-span-7">
            <span className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#B8871E]">
              <span className="h-px w-7 bg-[#D69E27]" />A Message from the
              Principal
            </span>

            <Quote
              size={34}
              strokeWidth={1.3}
              className="mb-5 text-[#D69E27]"
            />

            <h2 className="max-w-2xl   text-3xl font-medium leading-tight text-[#172B4D] sm:text-4xl md:text-5xl">
              Education is not just about learning, but about becoming.
            </h2>

            <p className="mt-6 text-sm leading-7 text-gray-600 md:text-base">
              At our school, we believe every child has the potential to achieve
              something extraordinary. Our commitment is to create an
              environment where curiosity is encouraged, values are nurtured and
              every student is empowered to grow with confidence.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base">
              Together with our dedicated educators and supportive community, we
              strive to prepare our students not only for academic success but
              also for a meaningful future.
            </p>

            {/* Principal details */}
            <div className="mt-8 border-t border-gray-200 pt-6">
              <h3 className="  text-xl font-semibold text-[#172B4D]">
                Dr. Nitheen Yadav
              </h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-[#B8871E]">
                Principal
              </p>
            </div>

            {/* <Link
              to="/about/principal"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#172B4D] transition-colors hover:text-[#B8871E]"
            >
              Read Full Message
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}
