import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex flex-wrap items-center gap-2 text-xs text-gray-400 ${className}`}
    >
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 transition-colors hover:text-[#B8871E]"
      >
        <Home size={13} strokeWidth={1.8} />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span
            key={`${item.label}-${index}`}
            className="inline-flex items-center gap-2"
          >
            <ChevronRight size={13} className="shrink-0 text-gray-400" />

            {item.href && !isLast ? (
              <Link
                to={item.href}
                className="transition-colors hover:text-[#B8871E]"
              >
                {item.label}
              </Link>
            ) : (
              <span
                aria-current={isLast ? "page" : undefined}
                className={
                  isLast ? "font-medium text-gray-200" : "text-gray-400"
                }
              >
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
