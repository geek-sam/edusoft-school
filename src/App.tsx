import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import SchoolHeader from "./components/layout/SchoolHeader";
import Footer from "./components/layout/Footer";
import Home from "./routes/index";
import Gallery from "./routes/gallery";
import NewsEvents from "./routes/newsEvents";
import Contact from "./routes/contact";
import AboutPage from "./routes/about";
import Academics from "./routes/academics";
import Facilities from "./routes/facilities";
import StudentLife from "./routes/studentLife";
import Admissions from "./routes/admission";

// Scroll to top whenever the route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

// Reusable placeholder for pages under development
interface PageProps {
  title: string;
  description?: string;
}

const Page = ({ title, description }: PageProps) => {
  return (
    <main className="min-h-[60vh] bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-600">
          Edusoft School
        </p>

        <h1 className="text-4xl font-bold text-[#172B4D]">{title}</h1>

        <p className="mt-4 max-w-2xl text-gray-500">
          {description || `Explore ${title} and learn more about our school.`}
        </p>
      </div>
    </main>
  );
};

// 404 Page
const NotFound = () => {
  return (
    <main className="flex min-h-[65vh] items-center justify-center px-6 text-center">
      <div>
        <h1 className="text-8xl font-bold text-[#172B4D]">404</h1>
        <h2 className="mt-4 text-2xl font-bold text-gray-800">
          Page Not Found
        </h2>
        <p className="mt-3 text-gray-500">
          The page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex rounded-lg bg-[#D69E27] px-6 py-3 font-semibold text-[#172B4D]"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
};

// Shared website layout
const WebsiteLayout = () => {
  return (
    <>
      <ScrollToTop />
      <SchoolHeader />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About Us */}
        <Route path="/about" element={<AboutPage />} />

        {/* Academics */}
        <Route path="/academics" element={<Academics />} />
        <Route
          path="/academics/curriculum"
          element={<Page title="Curriculum" />}
        />
        <Route
          path="/academics/teaching-methodology"
          element={<Page title="Teaching Methodology" />}
        />

        {/* Admissions */}
        <Route path="/admissions" element={<Admissions />} />

        {/* Facilities */}
        <Route path="/facilities" element={<Facilities />} />
        <Route
          path="/facilities/safety"
          element={<Page title="Safety & Security" />}
        />

        {/* Student Life */}
        <Route path="/student-life" element={<StudentLife />} />

        {/* News & Events */}
        <Route path="/news-events" element={<NewsEvents />} />
        <Route
          path="/news-events/:slug"
          element={<Page title="News & Event Details" />}
        />
        <Route
          path="/events/calendar"
          element={<Page title="Event Calendar" />}
        />

        {/* Gallery */}
        <Route path="/gallery" element={<Gallery />} />
        <Route
          path="/gallery/photos"
          element={<Page title="Photo Gallery" />}
        />
        <Route
          path="/gallery/videos"
          element={<Page title="Video Gallery" />}
        />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/contact/enquiry"
          element={<Page title="General Enquiry" />}
        />

        {/* Parent & Student Corner */}
        <Route
          path="/parent-student"
          element={<Page title="Parent & Student Corner" />}
        />
        <Route
          path="/parent-student/notices"
          element={<Page title="School Notices" />}
        />
        <Route
          path="/parent-student/calendar"
          element={<Page title="Academic Calendar" />}
        />
        <Route
          path="/parent-student/results"
          element={<Page title="Examination & Results" />}
        />

        {/* Parent Portal */}
        <Route
          path="/parent-portal"
          element={<Page title="Parent Portal Login" />}
        />
        <Route
          path="/parent-portal/dashboard"
          element={<Page title="Parent Dashboard" />}
        />

        {/* Mandatory Disclosure */}
        <Route
          path="/mandatory-disclosure"
          element={<Page title="Mandatory Public Disclosure" />}
        />

        {/* Downloads */}
        <Route path="/downloads" element={<Page title="Downloads" />} />

        {/* Careers */}
        <Route path="/careers" element={<Page title="Careers" />} />

        {/* Legal */}
        <Route
          path="/privacy-policy"
          element={<Page title="Privacy Policy" />}
        />
        <Route path="/terms" element={<Page title="Terms & Conditions" />} />
        <Route path="/disclaimer" element={<Page title="Disclaimer" />} />
        <Route path="/sitemap" element={<Page title="Website Sitemap" />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
};

// Main App
function App() {
  return (
    <BrowserRouter>
      <WebsiteLayout />
    </BrowserRouter>
  );
}

export default App;
