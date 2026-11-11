import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
  Images,
} from "lucide-react";

type GalleryCategory = "All" | "Campus" | "Activities" | "Events" | "Sports";

type GalleryImage = {
  id: number;
  src: string;
  title: string;
  category: Exclude<GalleryCategory, "All">;
};

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/images/gallery-campus-1.jpg",
    title: "Our School Campus",
    category: "Campus",
  },
  {
    id: 2,
    src: "/images/gallery-activities-1.jpg",
    title: "Learning Beyond Classrooms",
    category: "Activities",
  },
  {
    id: 3,
    src: "/images/gallery-events-1.jpg",
    title: "Annual Day Celebration",
    category: "Events",
  },
  {
    id: 4,
    src: "/images/gallery-sports-1.jpg",
    title: "Sports and Recreation",
    category: "Sports",
  },
  {
    id: 5,
    src: "/images/gallery-campus-2.jpg",
    title: "Modern Learning Spaces",
    category: "Campus",
  },
  {
    id: 6,
    src: "/images/gallery-activities-2.jpg",
    title: "Creative Student Activities",
    category: "Activities",
  },
  {
    id: 7,
    src: "/images/gallery-events-2.jpg",
    title: "School Celebrations",
    category: "Events",
  },
  {
    id: 8,
    src: "/images/gallery-sports-2.jpg",
    title: "Teamwork and Sportsmanship",
    category: "Sports",
  },
];

const categories: GalleryCategory[] = [
  "All",
  "Campus",
  "Activities",
  "Events",
  "Sports",
];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");

  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory);

  const showPrevious = () => {
    if (!selectedImage) return;

    const currentIndex = filteredImages.findIndex(
      (image) => image.id === selectedImage.id,
    );

    const previousIndex =
      (currentIndex - 1 + filteredImages.length) % filteredImages.length;

    setSelectedImage(filteredImages[previousIndex]);
  };

  const showNext = () => {
    if (!selectedImage) return;

    const currentIndex = filteredImages.findIndex(
      (image) => image.id === selectedImage.id,
    );

    const nextIndex = (currentIndex + 1) % filteredImages.length;

    setSelectedImage(filteredImages[nextIndex]);
  };

  const handleCategoryChange = (category: GalleryCategory) => {
    setActiveCategory(category);
    setSelectedImage(null);
  };

  return (
    <section className="overflow-hidden bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mb-10 flex flex-col justify-between gap-6 md:mb-12 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#B8871E]">
              <span className="h-px w-7 bg-[#D69E27]" />
              Moments That Matter
            </span>

            <h2 className="  text-3xl font-medium leading-tight text-[#172B4D] sm:text-4xl md:text-5xl">
              Life at Our School
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600 md:text-base">
              A glimpse into our vibrant campus, meaningful learning experiences
              and memorable moments that make school life special.
            </p>
          </div>

          <Link
            to="/gallery"
            className="group inline-flex w-fit items-center gap-2 border-b border-[#D69E27] pb-2 text-sm font-semibold text-[#172B4D] transition-colors hover:text-[#B8871E]"
          >
            Explore Full Gallery
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Featured campus image */}
        {/* <div className="group relative mb-8 h-[280px] overflow-hidden bg-[#172B4D] sm:h-[360px] lg:h-[430px]">
          <img
            src="/images/gallery-featured-campus.jpg"
            alt="School campus and surrounding landscape"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#101E35]/80 via-transparent to-transparent" />

          <div className="absolute bottom-0 left-0 flex w-full flex-col justify-between gap-4 p-6 sm:flex-row sm:items-end sm:p-9">
            <div>
              <span className="mb-3 inline-block bg-[#D69E27] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                Featured Gallery
              </span>

              <h3 className="  text-2xl font-medium text-white sm:text-3xl">
                A Place to Learn, Grow & Belong
              </h3>

              <p className="mt-2 max-w-lg text-sm leading-6 text-white/80">
                Explore the spaces and experiences that bring our school
                community together.
              </p>
            </div>

            <Link
              to="/gallery"
              className="inline-flex w-fit shrink-0 items-center gap-2 border border-white/50 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-[#D69E27] hover:bg-[#D69E27]"
            >
              View Gallery
              <ArrowRight size={16} />
            </Link>
          </div>
        </div> */}

        {/* Gallery filters */}
        <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <Images size={18} className="text-[#B8871E]" />
            <h3 className="  text-xl font-semibold text-[#172B4D]">
              Explore Our Moments
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#172B4D] text-white"
                    : "border border-gray-200 bg-white text-gray-600 hover:border-[#D69E27] hover:text-[#172B4D]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {filteredImages.map((image) => (
            <button
              key={image.id}
              type="button"
              onClick={() => setSelectedImage(image)}
              className="group relative aspect-[4/3] overflow-hidden bg-[#F8F8F6] text-left"
              aria-label={`View ${image.title}`}
            >
              <img
                src={image.src}
                alt={image.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#101E35]/75 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 sm:p-4">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#E9C779] sm:text-[10px]">
                    {image.category}
                  </span>
                  <h4 className="mt-1   text-sm font-medium text-white sm:text-base">
                    {image.title}
                  </h4>
                </div>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Empty state */}
        {filteredImages.length === 0 && (
          <div className="py-16 text-center text-sm text-gray-500">
            No photographs available in this category.
          </div>
        )}

        {/* Bottom CTA */}
        {/* <div className="mt-10 flex justify-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-3 bg-[#172B4D] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#D69E27]"
          >
            View All Photographs
            <ArrowRight size={16} />
          </Link>
        </div> */}
      </div>

      {/* Image lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B1424]/95 p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image preview"
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close image preview"
          >
            <X size={22} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            className="flex max-h-full w-full max-w-5xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[75vh] max-w-full object-contain"
            />

            <div className="mt-5 text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E9C779]">
                {selectedImage.category}
              </span>
              <h3 className="mt-2   text-xl text-white">
                {selectedImage.title}
              </h3>
              <p className="mt-2 text-xs text-white/50">
                {filteredImages.findIndex(
                  (image) => image.id === selectedImage.id,
                ) + 1}{" "}
                / {filteredImages.length}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </section>
  );
}
