import type { Metadata } from "next";
import ServiceLayout from "@/components/shared/ServiceLayout";
export const metadata: Metadata = { title: "Visualize", description: "Business intelligence and dashboard development by ConglomerateIT — Power BI, Tableau, and Looker implementations." };
export default function Page() {
  return (
    <ServiceLayout
      label="Data & Analytics"
      title="Visualize"
      titleHighlight=""
      description="Business intelligence and dashboard development by ConglomerateIT — Power BI, Tableau, and Looker implementations."
      breadcrumbs={[{ label: "Services" }, { label: "Data & Analytics", href: "/services/data-analytics" }, { label: "Visualize" }]}
      intro="ConglomerateIT&apos;s Visualize phase of the data value chain ensures your data investments deliver real business outcomes. Our data engineers and consultants bring deep expertise in modern data platforms, governance frameworks, and analytics tools to help you get maximum value from your data assets."
      features={["Data Strategy & Roadmap", "Modern Data Stack", "Cloud Data Platforms", "Data Quality Management", "Self-Service Analytics", "Governance & Compliance", "Real-Time Capabilities", "Executive Reporting"]}
      benefits={[
        { title: "Business-Aligned Outcomes", description: "Every data initiative tied to a specific business outcome — revenue growth, cost reduction, or risk mitigation." },
        { title: "Modern Platforms", description: "Snowflake, Databricks, BigQuery, Redshift — we work on the platforms that scale with your business." },
        { title: "Data Quality", description: "Automated data quality rules, anomaly detection, and data lineage tracking built into every pipeline." },
        { title: "Rapid Time to Value", description: "Pre-built templates and accelerators that deliver your first insights in weeks, not months." },
        { title: "Self-Service Enablement", description: "Tools and training that empower business users to answer their own data questions independently." },
        { title: "Governance by Design", description: "GDPR, HIPAA, and CCPA compliant data management with role-based access and audit logging." },
      ]}
      relatedLinks={[{ label: "Data & Analytics Overview", href: "/services/data-analytics" }, { label: "AI-First Approach", href: "/services/ai-first" }, { label: "Databricks", href: "/services/business-transformation/databricks" }]}
    />
  );
}
