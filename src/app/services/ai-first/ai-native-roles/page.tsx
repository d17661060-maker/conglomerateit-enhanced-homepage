import type { Metadata } from "next";
import ServiceLayout from "@/components/shared/ServiceLayout";
export const metadata: Metadata = { title: "AI Native Roles", description: "Staffing and building AI-native teams with ConglomerateIT — sourcing prompt engineers, ML engineers, AI architects, and data scientists for the AI era." };
export default function AINativeRolesPage() {
  return (
    <ServiceLayout label="AI-First Approach" title="AI Native" titleHighlight="Roles & Teams"
      description="Source, assess, and place AI-native professionals — prompt engineers, ML engineers, AI architects, and data scientists — built for the intelligence era."
      breadcrumbs={[{ label: "Services" }, { label: "AI-First", href: "/services/ai-first" }, { label: "AI Native Roles" }]}
      intro="The AI talent market is unlike any other — moving at the pace of model releases and demanding both technical depth and business acumen. ConglomerateIT's AI Native Roles practice specializes in sourcing, evaluating, and placing AI-specific talent, from individual contributors to full AI center of excellence builds."
      features={["Prompt Engineers", "ML / MLOps Engineers", "AI Architects & Principal Engineers", "Data Scientists (ML-focused)", "LLM Fine-Tuning Specialists", "AI Product Managers", "Responsible AI Officers", "AI Center of Excellence (CoE) Build"]}
      benefits={[
        { title: "AI-Specific Assessment", description: "Custom technical evaluations for AI roles — including prompt engineering challenges, model fine-tuning exercises, and system design scenarios." },
        { title: "Speed to Hire", description: "Pre-screened AI talent pool reduces time-to-offer by 60% compared to traditional recruiting for these niche roles." },
        { title: "Full Team Builds", description: "We structure and staff complete AI CoE teams — not just individual placements — including the leadership, engineering, and governance layers." },
        { title: "Retention Strategies", description: "Compensation benchmarking and engagement strategies specific to AI talent — who are among the most in-demand professionals globally." },
        { title: "Interim & Permanent", description: "Flexible engagement models — interim AI leadership for immediate needs, permanent placements for long-term capability building." },
        { title: "Global Talent Access", description: "AI talent sourced across North America, EMEA, and APAC — leveraging our GCC network for cost-effective AI team builds in India." },
      ]}
      relatedLinks={[{ label: "IT to AI", href: "/services/ai-first/it-to-ai" }, { label: "Gen AI", href: "/services/ai-first/gen-ai" }, { label: "Executive Hiring", href: "/executive-hiring" }]}
    />
  );
}
