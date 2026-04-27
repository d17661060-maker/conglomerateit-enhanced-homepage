import type { Metadata } from "next";
import ServiceLayout from "@/components/shared/ServiceLayout";
export const metadata: Metadata = { 
  title: "Technology Officers Search",
  description: "ConglomerateIT Technology Officers Search — placing CTO & Technology Leadership with 97% client satisfaction across North America, EMEA, APAC, and India."
};
export default function Page() {
  return (
    <ServiceLayout
      label="Executive Search"
      title="Technology"
      titleHighlight=""
      description="ConglomerateIT places CTO & Technology Leadership candidates that transform organizations — research-led search with global reach and a 97% client satisfaction score."
      breadcrumbs={[{ label: "Executive Hiring", href: "/executive-hiring" }, { label: "Technology Officers Search" }]}
      intro="ConglomerateIT&apos;s Executive Search practice specializes in CTO & Technology Leadership placements. Our research-led methodology combines deep talent market mapping, rigorous competency assessment, and confidential outreach to deliver candidates who not only have the right skills — but the right cultural fit and leadership style for your organization."
      features={["Global Talent Mapping", "Competency-Based Assessment", "Cultural Fit Evaluation", "Confidential Search Process", "Reference Verification", "Offer Management", "Onboarding Support", "12-Month Guarantee"]}
      benefits={[
        { title: "97% Client Satisfaction", description: "Our track record speaks for itself — 97% of clients rate our search delivery as excellent, and 85% return for subsequent searches." },
        { title: "Global Reach", description: "Access to leadership talent across North America, EMEA, APAC, and India — wherever the best person for your role is located." },
        { title: "Speed Without Compromise", description: "Average 8-12 week search timelines without sacrificing quality — our pre-existing talent relationships accelerate delivery." },
        { title: "Assessment Rigour", description: "Structured interviews, psychometric assessment, and 360-degree reference checks for every shortlisted candidate." },
        { title: "Industry Expertise", description: "Sector-specialist consultants who understand the nuances of leadership in your industry — not generalists." },
        { title: "Placement Guarantee", description: "12-month replacement guarantee on all permanent placements — your investment is protected." },
      ]}
      relatedLinks={[{ label: "Executive Hiring Overview", href: "/executive-hiring" }, { label: "Contact Us", href: "/contact" }, { label: "GCC", href: "/gcc" }]}
    />
  );
}
