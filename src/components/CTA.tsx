import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28">
      <div className="relative mx-auto max-w-6xl rounded-3xl p-15 overflow-hidden bg-[#172B4D] text-center sm:px-8">
        <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-12 -top-20 h-72 w-72 rounded-full border border-white/10" />
        <Sparkles
          size={25}
          className="mx-auto mb-7 text-[#E9C779]"
          strokeWidth={1.5}
        />

        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E9C779]">
          Your Journey Starts Here
        </span>

        <h2 className="mt-5 mx-auto max-w-3xl  text-4xl leading-[1.1] text-white sm:text-4xl lg:text-5xl">
          Be part of a community that inspires possibility.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
          Discover an environment where learning has purpose, individuality is
          valued and every student is encouraged to move towards a brighter
          future.
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
            className="inline-flex items-center justify-center gap-3 border border-white/30 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#E9C779] hover:text-[#E9C779]"
          >
            Contact Us
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
