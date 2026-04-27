import type { Metadata } from "next";
import ServiceLayout from "@/components/shared/ServiceLayout";
export const metadata: Metadata = { title: "Salesforce", description: "Salesforce CRM implementation, customization, and managed support by ConglomerateIT — certified consultants delivering maximum ROI on your Salesforce investment." };
export default function SalesforcePage() {
  return (
    <ServiceLayout label="Business Transformation" title="Salesforce" titleHighlight="Implementation & Support"
      description="Certified Salesforce consultants delivering CRM implementations, custom development, and integrations that accelerate sales and strengthen customer relationships."
      breadcrumbs={[{ label: "Services" }, { label: "Business Transformation", href: "/services/business-transformation" }, { label: "Salesforce" }]}
      intro="ConglomerateIT is a trusted Salesforce implementation partner. Our certified consultants handle Sales Cloud, Service Cloud, Marketing Cloud, and Salesforce Platform — from greenfield implementations to complex multi-org consolidations and AppExchange development. We combine technical depth with change management expertise to drive user adoption and ROI."
      features={["Sales Cloud & Service Cloud", "Marketing Cloud & Pardot", "Salesforce CPQ & Billing", "Einstein Analytics & AI", "Custom App Development (Apex, LWC)", "Salesforce Flow & Automation", "AppExchange ISV Development", "Data Migration & Integration (MuleSoft)"]}
      benefits={[
        { title: "Certified Expertise", description: "Multi-certified Salesforce architects and consultants with 10+ years of enterprise implementation experience." },
        { title: "Faster Time to Value", description: "Pre-built templates and accelerators compress implementation timelines by up to 40%." },
        { title: "Deep Customization", description: "Apex, Lightning Web Components, and Flow — custom logic that fits your exact business process." },
        { title: "Data Integrity", description: "Proven data migration methodology with validation, deduplication, and rollback capability." },
        { title: "User Adoption", description: "Training programs and change management that ensure your team actually uses what we build." },
        { title: "Ongoing Optimization", description: "Managed support and quarterly optimization reviews to ensure Salesforce grows with your business." },
      ]}
      relatedLinks={[{ label: "ServiceNow", href: "/services/business-transformation/servicenow" }, { label: "Workday", href: "/services/business-transformation/workday" }, { label: "Databricks", href: "/services/business-transformation/databricks" }]}
    />
  );
}
