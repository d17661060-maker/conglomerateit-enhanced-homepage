import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  label?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  breadcrumbs?: Breadcrumb[];
}

export default function PageHero({
  label,
  title,
  titleHighlight,
  description,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#f6f9fc] pb-20 pt-32 text-[#0a2540]">
      <div className="absolute inset-x-0 top-0 h-[420px] bg-[linear-gradient(118deg,#fff_0%,#eef4ff_42%,#f4ecff_70%,#fff5f0_100%)]" />
      <div className="absolute left-0 right-0 top-[380px] h-28 skew-y-[-6deg] bg-[#f6f9fc]" />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav className="mb-7 flex items-center gap-1.5 text-[13px] font-medium text-[#697386]">
            <Link href="/" className="transition-colors hover:text-[#635bff]">
              Home
            </Link>
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3" />
                {b.href ? (
                  <Link href={b.href} className="transition-colors hover:text-[#635bff]">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-[#0a2540]">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {label && (
          <p className="mb-4 text-[15px] font-semibold text-[#635bff]">{label}</p>
        )}

        <h1 className="mb-5 max-w-4xl text-[48px] font-bold leading-[1.04] text-[#0a2540] md:text-[72px]">
          {titleHighlight ? (
            <>
              {title}{" "}
              <span className="text-[#635bff]">{titleHighlight}</span>
            </>
          ) : (
            title
          )}
        </h1>

        {description && (
          <p className="max-w-2xl text-[18px] leading-8 text-[#425466]">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
