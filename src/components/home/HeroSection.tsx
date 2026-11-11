import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroImages = [
  {
    src: "/images/hero-students-1.jpg",
    alt: "Students interacting on the school campus",
  },
  {
    src: "/images/hero-students-2.jpg",
    alt: "Students learning together in a bright environment",
  },
  {
    src: "/images/hero-students-3.jpg",
    alt: "Students enjoying their school experience",
  },
];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Automatic image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + heroImages.length) % heroImages.length,
    );
  };

  return (
    <section className="w-full overflow-hidden bg-white">
      {/* Hero Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-10">
          {/* Heading */}
          <div className="md:col-span-7">
            <h1 className="max-w-3xl text-5xl font-medium leading-[1.08] tracking-tight text-[#172B4D] sm:text-5xl lg:text-6xl">
              Where Young <br />
              <span className="text-[#D69E27]"> Minds </span>
              Grow Into
              <span className="block">Bright Futures.</span>
            </h1>
          </div>

          {/* Description and CTA */}
          <div className="md:col-span-5 md:pl-4 lg:pl-10">
            <p className="max-w-md text-base leading-7 text-[#344A63] sm:text-lg sm:leading-8">
              Our school provides a dynamic environment that empowers students
              to reach new heights.
            </p>

            <Link
              to="/admissions"
              className="mt-7 inline-flex min-w-[190px] items-center justify-center bg-[#172B4D] px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#D69E27] hover:text-[#172B4D]"
            >
              Explore Admissions
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Image Carousel */}
      <div className="group relative h-[320px] w-full overflow-hidden bg-gray-100 sm:h-[430px] lg:h-[500px] xl:h-[510px]">
        {/* Image Slides */}
        {heroImages.map((image, index) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
              activeSlide === index ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
            loading={index === 0 ? "eager" : "lazy"}
          />
        ))}

        {/* Previous Button */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-5 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-[#172B4D] opacity-0 shadow-md transition hover:bg-white group-hover:opacity-100 sm:left-8 sm:h-12 sm:w-12"
        >
          <ChevronLeft size={23} />
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-5 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-[#172B4D] opacity-0 shadow-md transition hover:bg-white group-hover:opacity-100 sm:right-8 sm:h-12 sm:w-12"
        >
          <ChevronRight size={23} />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2.5">
          {heroImages.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={activeSlide === index ? "true" : undefined}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeSlide === index
                  ? "w-9 bg-white"
                  : "w-4 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
