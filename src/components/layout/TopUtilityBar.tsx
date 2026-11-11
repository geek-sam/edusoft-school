import { Phone, Mail, Clock, ExternalLink } from "lucide-react";

const TopUtilityBar = () => {
  return (
    <div className="hidden md:block bg-[#172B4D] text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex min-h-10 items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-6">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 transition hover:text-amber-300"
            >
              <Phone size={14} />
              +91 98765 43210
            </a>

            <a
              href="mailto:info@schoolname.edu.in"
              className="flex items-center gap-2 transition hover:text-amber-300"
            >
              <Mail size={14} />
              info@schoolname.edu.in
            </a>

            <div className="flex items-center gap-2 text-white/80">
              <Clock size={14} />
              Mon - Sat: 8:00 AM - 3:00 PM
            </div>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="/parent-portal"
              className="transition hover:text-amber-300"
            >
              Parent Portal
            </a>

            <span className="h-4 w-px bg-white/30" />

            <a
              href="/mandatory-disclosure"
              className="flex items-center gap-1.5 transition hover:text-amber-300"
            >
              Mandatory Disclosure
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopUtilityBar;
