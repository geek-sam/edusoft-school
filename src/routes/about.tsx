import { HashLink } from "react-router-hash-link";
import MissionVision from "../components/about/MissionVision";
import OurEducators from "../components/about/OurEducators";
import OurStory from "../components/about/OurStory";
import WhoWeAre from "../components/about/WhoWeAre";
import Breadcrumb from "../components/Breadcrumb";
import { MoveRight } from "lucide-react";
import CoreValues from "../components/about/CoreValues";
import CTA from "../components/CTA";

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Hero */}
      {/* Add bg image in the section */}
      <section className="relative bg-[url('../images/campus.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-[#000]/65" />
        <div className="z-10 relative mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8 lg:px-12 lg:pb-24">
          <Breadcrumb items={[{ label: "About Us" }]} className="mb-16" />

          <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <span className="mb-6 inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#B8871E]">
                <span className="h-px w-8 bg-[#D69E27]" />
                About Edusoft
              </span>

              <h1 className="max-w-3xl font-medium text-5xl leading-[1.08] text-[#ffffff] sm:text-5xl lg:text-6xl">
                Shaping minds.
                <br />
                <span className="text-[#B8871E]">Inspiring futures.</span>
              </h1>
            </div>

            <div className="max-w-md pb-2 lg:ml-auto">
              <p className="text-base leading-7 text-gray-400">
                We believe every child has the potential to achieve something
                extraordinary. Our purpose is to create an environment where
                curiosity grows, character develops and every learner feels
                inspired to move forward.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <HashLink
                  smooth
                  to="/about#our-story"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-[#ffffff] transition-colors hover:text-[#B8871E]"
                >
                  Discover Our Story
                  <MoveRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </HashLink>

                <span className="text-xs font-medium tracking-wide text-gray-400">
                  Learning. Character. Growth.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhoWeAre />
      <MissionVision />
      <OurStory />
      <CoreValues />
      <OurEducators />
      <CTA />
      {/* <GallerySection /> */}
    </main>
  );
}
