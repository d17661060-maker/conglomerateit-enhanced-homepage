import type { Metadata } from "next";
import ServiceLayout from "@/components/shared/ServiceLayout";
export const metadata: Metadata = { title: "Databricks", description: "Databricks Lakehouse implementation, data engineering, and ML platform services by ConglomerateIT — unifying data and AI at enterprise scale." };
export default function DatabricksPage() {
  return (
    <ServiceLayout label="Business Transformation" title="Databricks" titleHighlight="Data & AI Platform"
      description="Databricks Lakehouse architecture, data engineering pipelines, and ML platform implementation — unifying your data and AI workloads on a single platform."
      breadcrumbs={[{ label: "Services" }, { label: "Business Transformation", href: "/services/business-transformation" }, { label: "Databricks" }]}
      intro="Databricks is where data engineering and AI converge. ConglomerateIT's Databricks-certified engineers design and implement Lakehouse architectures on AWS, Azure, and GCP — building Delta Lake pipelines, Unity Catalog governance, and ML workflows that turn petabytes of data into business-ready insights."
      features={["Databricks Lakehouse Architecture", "Delta Lake & Delta Live Tables", "Apache Spark Engineering", "Unity Catalog & Data Governance", "MLflow & ML Pipelines", "Databricks SQL & BI Integration", "Streaming Data (Kafka + Databricks)", "Cost Optimization & Cluster Management"]}
      benefits={[
        { title: "Unified Platform", description: "One platform for data engineering, SQL analytics, and ML — eliminating the fragmented data tool sprawl." },
        { title: "Delta Lake Reliability", description: "ACID transactions, schema enforcement, and time-travel on your data lake — no more data swamps." },
        { title: "ML at Scale", description: "MLflow experiment tracking, model registry, and feature store for reproducible, production-grade ML." },
        { title: "Cost Efficiency", description: "Cluster autoscaling, spot instance strategies, and workload optimization that cut Databricks costs by 30-40%." },
        { title: "Governance with Unity Catalog", description: "Fine-grained access control, data lineage, and discovery across all your Databricks workspaces." },
        { title: "Multi-Cloud Expertise", description: "Databricks on AWS, Azure, and GCP — we work in your existing cloud environment." },
      ]}
      relatedLinks={[{ label: "Data & Analytics", href: "/services/data-analytics" }, { label: "AI-First Approach", href: "/services/ai-first" }, { label: "Salesforce", href: "/services/business-transformation/salesforce" }]}
    />
  );
}
