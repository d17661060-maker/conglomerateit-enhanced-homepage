import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
} from "lucide-react";

const footerServices = [
  { label: "What We Do", href: "/services" },
  { label: "QA / QE", href: "/services/qa-qe" },
  { label: "Infrastructure", href: "/services/infrastructure" },
  { label: "Software Development", href: "/services/software-development" },
  { label: "Business Transformation", href: "/services/business-transformation" },
  { label: "Data & Analytics", href: "/services/data-analytics" },
  { label: "AI-First Approach", href: "/services/ai-first" },
  { label: "GCC", href: "/gcc" },
];

const footerPolicies = [
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Terms of Use", href: "/legal/terms-of-use" },
  { label: "Legal Info", href: "/legal/legal-info" },
  { label: "Compliance", href: "/legal/compliance" },
  { label: "Acceptable Use", href: "/legal/acceptable-use" },
];

const brands = [
  { label: "ConglomerateIT", href: "https://conglomerateit.com" },
  { label: "ConglomerateIT Services", href: "https://conglomerateit.org" },
  { label: "Conglomerate Healthcare", href: "https://conglomeratehealthcare.com" },
];

const social = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/conglomerateitsolutions/",
    icon: Linkedin,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/ConglomerateIT/",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/conglomerateit_cgit/",
    icon: Instagram,
  },
  {
    label: "X / Twitter",
    href: "https://x.com/conglomerateit",
    icon: Twitter,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#f6f9fc] text-[#0a2540]">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_0.8fr_0.95fr]">
          <div>
            <Link href="/" className="inline-flex">
              <Image
                src="/images/CGIT_LLC horizontal.png"
                alt="ConglomerateIT"
                width={168}
                height={44}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="mt-5 max-w-sm text-[15px] leading-7 text-[#425466]">
              Transforming businesses with tomorrow&apos;s technology, today.
              Global IT services across 4 countries, 500+ projects, 12 years of
              experience, and 95% client retention.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#425466] shadow-sm ring-1 ring-[#0a2540]/10 transition hover:text-[#635bff]"
                >
                  <item.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Services" items={footerServices} />
          <FooterColumn title="Policies" items={footerPolicies} />

          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#697386]">
              Contact
            </h3>
            <div className="mt-4 space-y-4">
              <a
                href="mailto:info@conglomerateIt.com"
                className="flex gap-3 text-[14px] leading-6 text-[#425466] transition hover:text-[#635bff]"
              >
                <Mail className="mt-1 h-4 w-4 shrink-0" />
                info@conglomerateIt.com
              </a>
              <div className="flex gap-3 text-[14px] leading-6 text-[#425466]">
                <MapPin className="mt-1 h-4 w-4 shrink-0" />
                <span>
                  3721 S Stonebridge Dr, Unit 701, McKinney, TX 75070
                </span>
              </div>
              <div className="flex gap-3 text-[14px] leading-6 text-[#425466]">
                <MapPin className="mt-1 h-4 w-4 shrink-0" />
                <span>
                  5th Floor, A&A Lake Front Building, Madhapur, Hyderabad,
                  Telangana 500081
                </span>
              </div>
            </div>

            <h3 className="mt-8 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#697386]">
              Our brands
            </h3>
            <ul className="mt-4 space-y-2">
              {brands.map((brand) => (
                <li key={brand.href}>
                  <a
                    href={brand.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-[#425466] transition hover:text-[#635bff]"
                  >
                    {brand.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[#e6ebf1] pt-6 text-[13px] text-[#697386] md:flex-row md:items-center md:justify-between">
          <p>
            (c) {new Date().getFullYear()} ConglomerateIT (CGIT LLC). All rights
            reserved.
          </p>
          <p>SOC 2 Compliant | ISO 27001:2013 Certified</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#697386]">
        {title}
      </h3>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-[14px] text-[#425466] transition hover:text-[#635bff]"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
