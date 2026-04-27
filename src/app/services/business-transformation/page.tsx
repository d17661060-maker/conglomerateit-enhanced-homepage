import type { Metadata } from "next";
import ServiceLayout from "@/components/shared/ServiceLayout";

export const metadata: Metadata = {
  title: "Business Transformation",
  description: "Salesforce, ServiceNow, Workday, and Databricks implementation and support by ConglomerateIT — transforming enterprise operations at scale.",
};

export default function BusinessTransformationPage() {
  return (
    <ServiceLayout
      label="Services / Business Transformation"
      title="Enterprise Platforms,"
      titleHighlight="Transformed"
      description="End-to-end implementation, customization, and support for Salesforce, ServiceNow, Workday, and Databricks — the platforms that run the modern enterprise."
      breadcrumbs={[{ label: "Services" }, { label: "Business Transformation" }]}
      intro="ConglomerateIT's Business Transformation practice specializes in the world's leading enterprise platforms. Our certified consultants handle the full lifecycle — from discovery and architecture through implementation, user training, and ongoing optimization — ensuring maximum ROI on your platform investment."
      features={[
        "Salesforce CRM & Sales Cloud",
        "ServiceNow ITSM & ITOM",
        "Workday HCM, Finance & Planning",
        "Databricks Data Engineering & ML",
        "System Integration & API Development",
        "Custom Development & AppExchange",
        "User Adoption & Change Management",
        "Ongoing Managed Support",
      ]}
      benefits={[
        { title: "Certified Consultants", description: "Platform-certified consultants across Salesforce, ServiceNow, Workday, and Databricks — with real-world implementation experience." },
        { title: "Accelerated Deployment", description: "Pre-built templates and accelerators reduce implementation timelines by 30-40%." },
        { title: "Integration Expertise", description: "Seamless integration between platforms and your existing enterprise systems — no data silos." },
        { title: "Change Management", description: "Structured user adoption programs that ensure your investment delivers real business value." },
        { title: "Post-Go-Live Support", description: "Dedicated managed services for ongoing optimization, releases, and user support." },
        { title: "Industry Templates", description: "Pre-configured solutions for Healthcare, Financial Services, Manufacturing, and Retail." },
      ]}
      relatedLinks={[
        { label: "Salesforce", href: "/services/business-transformation/salesforce" },
        { label: "ServiceNow", href: "/services/business-transformation/servicenow" },
        { label: "Workday", href: "/services/business-transformation/workday" },
        { label: "Databricks", href: "/services/business-transformation/databricks" },
      ]}
    />
  );
}
