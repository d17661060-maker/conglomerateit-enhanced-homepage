import type { Metadata } from "next";
import ServiceLayout from "@/components/shared/ServiceLayout";

export const metadata: Metadata = {
  title: "Data, Digital & Analytics",
  description: "End-to-end data strategy, engineering, and visualization by ConglomerateIT — turning raw data into business intelligence that drives decisions.",
};

export default function DataAnalyticsPage() {
  return (
    <ServiceLayout
      label="Services / Data & Analytics"
      title="Data That Drives"
      titleHighlight="Decisions"
      description="From data strategy and engineering to AI-powered visualization and governance — a complete data practice that transforms raw information into competitive advantage."
      breadcrumbs={[{ label: "Services" }, { label: "Data, Digital & Analytics" }]}
      intro="ConglomerateIT's Data, Digital & Analytics practice covers the complete data value chain. We Define your data strategy, Analyze your existing landscape, Visualize insights for decision-makers, Engineer robust pipelines, and Govern your data assets — ensuring data quality, accessibility, and compliance at every stage."
      features={[
        "Data Strategy & Roadmap (Define)",
        "Data Discovery & Assessment (Analyze)",
        "BI & Dashboard Development (Visualize)",
        "ETL/ELT Pipeline Engineering",
        "Data Lakehouse Architecture",
        "Data Governance & Quality",
        "Power BI, Tableau, Looker",
        "Snowflake, Databricks, Redshift",
      ]}
      benefits={[
        { title: "Define → Govern", description: "A structured 5-phase framework — Define, Analyze, Visualize, Engineer, Govern — that delivers measurable outcomes at each stage." },
        { title: "Single Source of Truth", description: "Unified data lakehouse architectures that eliminate data silos and power organization-wide analytics." },
        { title: "Real-Time Analytics", description: "Streaming data pipelines with Apache Kafka, Spark, and Flink for millisecond insights on live data." },
        { title: "Self-Service BI", description: "Power BI and Tableau implementations that enable business users to answer their own questions — without waiting for IT." },
        { title: "Data Quality First", description: "Automated data quality frameworks with validation rules, anomaly detection, and lineage tracking." },
        { title: "Regulatory Compliance", description: "Data governance aligned with GDPR, HIPAA, CCPA, and financial services regulations." },
      ]}
      relatedLinks={[
        { label: "Define", href: "/services/data-analytics/define" },
        { label: "Analyze", href: "/services/data-analytics/analyze" },
        { label: "Visualize", href: "/services/data-analytics/visualize" },
        { label: "Engineer", href: "/services/data-analytics/engineer" },
        { label: "Govern", href: "/services/data-analytics/govern" },
      ]}
    />
  );
}
