import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Images,
  X,
} from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";

type GalleryCategory =
  | "All"
  | "Campus"
  | "Classrooms"
  | "Activities"
  | "Sports"
  | "Events";

type GalleryImage = {
  id: number;
  src: string;
  title: string;
  category: Exclude<GalleryCategory, "All">;
  description: string;
  layout: string;
};

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/images/campus3.jpg",
    title: "Our School Campus",
    category: "Campus",
    description: "A welcoming environment for learning and growth.",
    layout: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    src: "/images/classroom.png",
    title: "Learning Together",
    category: "Classrooms",
    description: "Engaging classroom experiences.",
    layout: "",
  },
  {
    id: 3,
    src: "/images/academics-pre-primary.png",
    title: "Creative Exploration",
    category: "Activities",
    description: "Encouraging creativity and self-expression.",
    layout: "",
  },
  {
    id: 4,
    src: "/images/sports.png",
    title: "Beyond the Classroom",
    category: "Sports",
    description: "Building teamwork through sports.",
    layout: "",
  },
  {
    id: 5,
    src: "/images/event-celebration.png",
    title: "Celebrating Together",
    category: "Events",
    description: "Memorable moments from school celebrations.",
    layout: "md:col-span-2",
  },
  {
    id: 6,
    src: "/images/campus2.jpg",
    title: "Spaces to Discover",
    category: "Campus",
    description: "A closer look at our school facilities.",
    layout: "",
  },
  {
    id: 7,
    src: "/images/leadership.png",
    title: "Learning by Doing",
    category: "Activities",
    description: "Students exploring ideas through activities.",
    layout: "",
  },
  {
    id: 8,
    src: "/images/academics-senior-secondary.png",
    title: "Team Spirit",
    category: "Sports",
    description: "Developing confidence and sportsmanship.",
    layout: "",
  },
  {
    id: 9,
    src: "/images/academics-learning.png",
    title: "Curiosity in Action",
    category: "Classrooms",
    description: "An environment that inspires discovery.",
    layout: "",
  },
  {
    id: 10,
    src: "/images/student-cultural.png",
    title: "Special School Moments",
    category: "Events",
    description: "Celebrating our school community.",
    layout: "md:col-span-2",
  },
  {
    id: 11,
    src: "/images/student-life-featured.png",
    title: "Growing Through Experiences",
    category: "Activities",
    description: "Opportunities to learn beyond textbooks.",
    layout: "",
  },
  {
    id: 12,
    src: "/images/campus1.jpg",
    title: "A Place to Belong",
    category: "Campus",
    description: "The spaces that bring our community together.",
    layout: "",
  },
];

const categories: GalleryCategory[] = [
  "All",
  "Campus",
  "Classrooms",
  "Activities",
  "Sports",
  "Events",
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");

  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory);

  const currentIndex = selectedImage
    ? filteredImages.findIndex((image) => image.id === selectedImage.id)
    : -1;

  const showPrevious = () => {
    if (currentIndex === -1) return;

    const previousIndex =
      (currentIndex - 1 + filteredImages.length) % filteredImages.length;

    setSelectedImage(filteredImages[previousIndex]);
  };

  const showNext = () => {
    if (currentIndex === -1) return;

    const nextIndex = (currentIndex + 1) % filteredImages.length;

    setSelectedImage(filteredImages[nextIndex]);
  };

  const closeLightbox = () => setSelectedImage(null);

  const changeCategory = (category: GalleryCategory) => {
    setActiveCategory(category);
    closeLightbox();
  };

  // Keyboard navigation for the lightbox
  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage, currentIndex, filteredImages]);

  return (
    <>
      <main className="bg-white">
        {/* Page Hero */}
        <section className="relative bg-[url('../images/academics-senior-secondary.png')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-[#000]/75" />
          <div className="relative z-10 mx-auto max-w-7xl px-5 pb-14 pt-8 sm:px-8 md:pb-20 lg:px-10 lg:pt-10">
            <Breadcrumb
              items={[{ label: "Gallery" }]}
              className="mb-12 md:mb-16"
            />

            <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-8">
                <span className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#B8871E]">
                  <span className="h-px w-8 bg-[#B8871E]" />
                  Moments & Memories
                </span>

                <h1 className="max-w-3xl   text-4xl font-medium leading-[1.1] text-[#ffffff] sm:text-5xl md:text-6xl lg:text-7xl">
                  A Glimpse Into
                  <br />
                  <span className="text-[#B8871E]">Life at Our School.</span>
                </h1>
              </div>

              <div className="md:col-span-4 md:pb-2">
                <p className="max-w-md text-sm leading-7 text-gray-400 md:text-base">
                  Every photograph tells a story. Explore the experiences,
                  achievements and everyday moments that make our school
                  community special.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Content */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            {/* Gallery heading and count */}
            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#B8871E]">
                  <Images size={15} />
                  Photo Collection
                </span>

                <h2 className="  text-2xl font-medium text-[#172B4D] sm:text-3xl">
                  Explore Our Moments
                </h2>
              </div>

              <p className="text-xs text-gray-500">
                Showing {filteredImages.length} photographs
              </p>
            </div>

            {/* Category filters */}
            <div className="mb-9 flex gap-2 overflow-x-auto border-b border-gray-200 pb-5">
              {categories.map((category) => {
                const count =
                  category === "All"
                    ? galleryImages.length
                    : galleryImages.filter(
                        (image) => image.category === category,
                      ).length;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => changeCategory(category)}
                    className={`flex shrink-0 items-center gap-2 px-4 py-2.5 text-xs font-semibold transition-all duration-300 ${
                      activeCategory === category
                        ? "bg-[#172B4D] text-white"
                        : "border border-gray-200 text-gray-600 hover:border-[#D69E27] hover:text-[#172B4D]"
                    }`}
                  >
                    {category}
                    <span
                      className={`text-[10px] ${
                        activeCategory === category
                          ? "text-[#E9C779]"
                          : "text-gray-400"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Gallery grid */}
            {filteredImages.length > 0 ? (
              <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 md:grid-cols-3 lg:auto-rows-[240px] lg:grid-cols-4">
                {filteredImages.map((image) => (
                  <button
                    key={image.id}
                    type="button"
                    onClick={() => setSelectedImage(image)}
                    className={`group relative min-h-0 overflow-hidden bg-[#F1F0EC] text-left ${activeCategory === "All" ? image.layout : ""}`}
                    aria-label={`View ${image.title}`}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101E35]/80 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Image information */}
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#E9C779] sm:text-[10px]">
                          {image.category}
                        </span>

                        <h3 className="mt-1   text-base font-medium text-white sm:text-lg">
                          {image.title}
                        </h3>

                        <p className="mt-1 hidden text-xs text-white/75 sm:block">
                          {image.description}
                        </p>
                      </div>

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-white/20 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                        <ArrowUpRight size={17} />
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <Images size={32} className="mx-auto text-gray-300" />
                <h3 className="mt-4   text-xl text-[#172B4D]">
                  No photographs found
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  There are currently no images in this category.
                </p>
              </div>
            )}

            {/* Gallery bottom note */}
            <div className="mt-12 flex flex-col justify-between gap-4 border-t border-gray-200 pt-6 sm:flex-row sm:items-center">
              <p className="text-xs leading-6 text-gray-500">
                A collection of moments, experiences and memories from our
                school community.
              </p>

              <Link
                to="/student-life"
                className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#172B4D] transition-colors hover:text-[#B8871E]"
              >
                Explore Student Life
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#172B4D] py-16 md:py-20">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 sm:px-8 md:flex-row md:items-center lg:px-10">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E9C779]">
                Be Part of Our Story
              </span>

              <h2 className="mt-4   text-3xl font-medium leading-tight text-white sm:text-4xl">
                Every great journey begins with a new opportunity.
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/65">
                Discover a learning community where every student is encouraged
                to explore, learn and grow.
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

      {/* Full-screen Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B1424]/95 p-4 sm:p-8"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image preview"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close image preview"
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X size={22} />
          </button>

          {/* Previous button */}
          {filteredImages.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6 sm:h-12 sm:w-12"
            >
              <ChevronLeft size={25} />
            </button>
          )}

          {/* Selected image */}
          <div
            className="flex max-h-full w-full max-w-5xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[72vh] max-w-full object-contain"
            />

            <div className="mt-6 text-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E9C779]">
                {selectedImage.category}
              </span>

              <h3 className="mt-2   text-xl text-white sm:text-2xl">
                {selectedImage.title}
              </h3>

              <p className="mt-2 text-sm text-white/60">
                {selectedImage.description}
              </p>

              <p className="mt-3 text-xs text-white/40">
                {currentIndex + 1} / {filteredImages.length}
              </p>
            </div>
          </div>

          {/* Next button */}
          {filteredImages.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6 sm:h-12 sm:w-12"
            >
              <ChevronRight size={25} />
            </button>
          )}
        </div>
      )}
    </>
  );
}
