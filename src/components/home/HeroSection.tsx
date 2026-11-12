import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroSlides = [
  {
    image: "/images/hero-students-1.jpg",
    alt: "Students interacting on the school campus",
    eyebrow: "WELCOME TO OUR SCHOOL",
    heading: "Where Young",
    highlight: "Minds",
    remaining: "Grow Into Bright Futures.",
    description:
      "Our school provides a dynamic environment that empowers students to explore, learn, and reach new heights.",
    buttonText: "Explore Admissions",
    buttonLink: "/admissions",
  },
  {
    image: "/images/hero-students-2.jpg",
    alt: "Students learning together in a bright environment",
    eyebrow: "LEARNING BEYOND CLASSROOMS",
    heading: "Discover",
    highlight: "Potential",
    remaining: "Through Every Experience.",
    description:
      "We inspire curiosity, encourage creativity, and provide students with the skills they need to succeed in a changing world.",
    buttonText: "Discover Our School",
    buttonLink: "/about",
  },
  {
    image: "/images/hero-students-3.jpg",
    alt: "Students enjoying their school experience",
    eyebrow: "BUILDING TOMORROW'S LEADERS",
    heading: "Creating",
    highlight: "Opportunities",
    remaining: "For A Brighter Tomorrow.",
    description:
      "Every child deserves the opportunity to shine. Together, we nurture confidence, character, and lifelong learning.",
    buttonText: "Explore Academics",
    buttonLink: "/academics",
  },
];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[600px] w-full overflow-hidden bg-[#172B4D] sm:h-[650px] lg:h-[700px]">
      {/* Background Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            activeSlide === index ? "z-10 opacity-100" : "z-0 opacity-0"
          }`}
          aria-hidden={activeSlide !== index}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="h-full w-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#101E35]/90 via-[#101E35]/60 to-[#101E35]/20" />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-10">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute max-w-3xl pr-6 transition-all duration-700 ${
              activeSlide === index
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0 pointer-events-none"
            }`}
            aria-hidden={activeSlide !== index}
          >
            <span className="mb-5 block text-xs font-semibold tracking-[0.25em] text-[#D69E27] sm:text-sm">
              {slide.eyebrow}
            </span>

            <h1 className="text-4xl font-medium leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {slide.heading}{" "}
              <span className="text-[#D69E27]">{slide.highlight}</span>{" "}
              {slide.remaining}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              {slide.description}
            </p>

            <Link
              to={slide.buttonLink}
              tabIndex={activeSlide === index ? 0 : -1}
              className="mt-8 inline-flex min-w-[190px] items-center justify-center bg-[#D69E27] px-8 py-4 text-sm font-semibold text-[#172B4D] transition duration-300 hover:bg-white"
            >
              {slide.buttonText}
            </Link>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 right-6 z-30 flex items-center gap-3 sm:right-10 lg:right-16">
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="flex h-11 w-11 items-center justify-center border border-white/50 text-white transition hover:bg-white hover:text-[#172B4D]"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="flex h-11 w-11 items-center justify-center border border-white/50 text-white transition hover:bg-white hover:text-[#172B4D]"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-6 z-30 flex items-center gap-3 sm:left-10 lg:left-16">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={activeSlide === index ? "true" : undefined}
            className={`h-1 transition-all duration-500 ${
              activeSlide === index
                ? "w-12 bg-[#D69E27]"
                : "w-6 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
