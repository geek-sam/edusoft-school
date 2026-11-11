import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  //   Facebook,
  //   Instagram,
  //   Youtube,
  ArrowUpRight,
  Send,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) return;

    // Connect your newsletter API here.
    setSubscribed(true);
    setEmail("");
  };

  const quickLinks = [
    { label: "About Our School", to: "/about" },
    { label: "Principal's Message", to: "/about/principal-message" },
    { label: "Our Academics", to: "/academics" },
    { label: "Facilities", to: "/facilities" },
    { label: "Student Life", to: "/student-life" },
    { label: "News & Events", to: "/news-events" },
    { label: "Photo Gallery", to: "/gallery" },
    { label: "Contact Us", to: "/contact" },
  ];

  const academicLinks = [
    { label: "Pre-Primary", to: "/academics/pre-primary" },
    { label: "Primary School", to: "/academics/primary" },
    { label: "Middle School", to: "/academics/middle" },
    { label: "Secondary School", to: "/academics/secondary" },
    { label: "Senior Secondary", to: "/academics/senior-secondary" },
    { label: "Admission Process", to: "/admissions/process" },
    { label: "Fee Structure", to: "/admissions/fees" },
    { label: "Apply for Admission", to: "/admissions/apply" },
  ];

  return (
    <footer className="bg-[#172B4D] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* School Information */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-[#172B4D]">
                <GraduationCap size={32} strokeWidth={1.8} />
              </div>

              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  EDUSOFT PUBLIC SCHOOL
                </h2>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/60">
                  Learn • Lead • Inspire
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/65">
              We are committed to providing quality education, nurturing young
              minds, and empowering students with the knowledge, values, and
              skills to build a brighter future.
            </p>

            {/* Social Media */}
            <div className="mt-7">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/80">
                Follow Us
              </p>

              <div className="flex items-center gap-3">
                {[
                  {
                    icon: ArrowUpRight,
                    href: "https://facebook.com",
                    label: "Facebook",
                  },
                  {
                    icon: ArrowUpRight,
                    href: "https://instagram.com",
                    label: "Instagram",
                  },
                  {
                    icon: ArrowUpRight,
                    href: "https://youtube.com",
                    label: "YouTube",
                  },
                ].map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-[#D69E27] hover:bg-[#D69E27] hover:text-[#172B4D]"
                    >
                      <Icon size={17} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="mb-7 text-sm font-bold uppercase tracking-widest">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="group flex items-center gap-2 text-sm text-white/65 transition hover:text-[#D69E27]"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#D69E27] opacity-0 transition group-hover:opacity-100" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics & Admissions */}
          <div className="lg:col-span-2">
            <h3 className="mb-7 text-sm font-bold uppercase tracking-widest">
              Academics
            </h3>

            <ul className="space-y-4">
              {academicLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="group flex items-center gap-2 text-sm text-white/65 transition hover:text-[#D69E27]"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#D69E27] opacity-0 transition group-hover:opacity-100" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-4">
            <h3 className="mb-7 text-sm font-bold uppercase tracking-widest">
              Get In Touch
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin size={19} className="mt-1 shrink-0 text-[#D69E27]" />
                <div>
                  <p className="text-sm font-semibold">Our Campus</p>
                  <p className="mt-1 text-sm leading-6 text-white/60">
                    New Town, Kolkata, West Bengal, 700156, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-1 shrink-0 text-[#D69E27]" />
                <div>
                  <p className="text-sm font-semibold">Phone Number</p>
                  <a
                    href="tel:+919876543210"
                    className="mt-1 block text-sm text-white/60 transition hover:text-[#D69E27]"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-1 shrink-0 text-[#D69E27]" />
                <div>
                  <p className="text-sm font-semibold">Email Address</p>
                  <a
                    href="mailto:info@edusoft.edu.in"
                    className="mt-1 block break-all text-sm text-white/60 transition hover:text-[#D69E27]"
                  >
                    info@edusoft.edu.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={18} className="mt-1 shrink-0 text-[#D69E27]" />
                <div>
                  <p className="text-sm font-semibold">School Hours</p>
                  <p className="mt-1 text-sm text-white/60">
                    Monday – Saturday: 8:00 AM – 3:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 flex flex-col justify-between gap-8 rounded-2xl border border-white/10 bg-white/[0.05] p-6 md:flex-row md:items-center md:p-8">
          <div className="max-w-md">
            <h3 className="text-xl font-bold">Stay Updated With Our School</h3>
            <p className="mt-2 text-sm leading-6 text-white/60">
              Subscribe to receive school announcements, important updates, and
              upcoming event information.
            </p>
          </div>

          <div className="w-full max-w-md">
            {subscribed ? (
              <div
                role="status"
                className="flex items-center gap-2 text-sm text-green-400"
              >
                <CheckCircle2 size={19} />
                Subscription submitted successfully.
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  aria-label="Email address"
                  className="min-w-0 flex-1 rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-[#D69E27]"
                />

                <button
                  type="submit"
                  className="flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#D69E27] px-5 py-3 text-sm font-semibold text-[#172B4D] transition hover:bg-[#E9B94D]"
                >
                  Subscribe
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 py-6 md:flex-row md:items-center">
          <p className="text-center text-xs text-white/50 md:text-left">
            © {new Date().getFullYear()} School Name. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs text-white/55">
            <Link
              to="/mandatory-disclosure"
              className="transition hover:text-[#D69E27]"
            >
              Mandatory Disclosure
            </Link>

            <Link
              to="/privacy-policy"
              className="transition hover:text-[#D69E27]"
            >
              Privacy Policy
            </Link>

            <Link to="/terms" className="transition hover:text-[#D69E27]">
              Terms & Conditions
            </Link>

            <Link
              to="/sitemap"
              className="flex items-center gap-1 transition hover:text-[#D69E27]"
            >
              Sitemap
              <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
