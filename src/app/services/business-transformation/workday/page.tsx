import type { Metadata } from "next";
import ServiceLayout from "@/components/shared/ServiceLayout";
export const metadata: Metadata = { title: "Workday", description: "Workday HCM, Finance, and Planning implementation by ConglomerateIT — certified consultants delivering measurable HR and finance transformation." };
export default function WorkdayPage() {
  return (
    <ServiceLayout label="Business Transformation" title="Workday" titleHighlight="HCM, Finance & Planning"
      description="Certified Workday consultants implementing HCM, Financials, and Adaptive Planning — transforming HR and finance operations for the modern enterprise."
      breadcrumbs={[{ label: "Services" }, { label: "Business Transformation", href: "/services/business-transformation" }, { label: "Workday" }]}
      intro="Workday is the cloud platform that modern HR and Finance teams depend on. ConglomerateIT's Workday-certified consultants handle end-to-end implementations — from requirements gathering and configuration through data migration, integration, testing, and hypercare — delivering on-time, on-budget Workday deployments."
      features={["Workday HCM (Core HR, Payroll, Talent)", "Workday Financial Management", "Workday Adaptive Planning", "Workday Recruiting & Learning", "Integrations (Workday Studio, EIB, PICOF)", "Data Migration & Conversion", "Reports & Dashboards (BIRT, Prism)", "Post-Production Support"]}
      benefits={[
        { title: "Certified Consultants", description: "Workday-certified consultants with deep HCM and Financial Management implementation experience." },
        { title: "Data Migration Expertise", description: "Proven data migration methodology for complex HR and finance data — with full reconciliation and validation." },
        { title: "Integration Architecture", description: "Workday Studio and EIB integrations connecting Workday to your payroll processors, benefits carriers, and ERPs." },
        { title: "On-Time Delivery", description: "Structured project management with weekly steering committees and proactive risk management." },
        { title: "Change Management", description: "Comprehensive training programs and user adoption support for HR and Finance teams." },
        { title: "Hypercare & Beyond", description: "60-day hypercare period post-go-live, transitioning to steady-state managed support." },
      ]}
      relatedLinks={[{ label: "Salesforce", href: "/services/business-transformation/salesforce" }, { label: "ServiceNow", href: "/services/business-transformation/servicenow" }, { label: "Databricks", href: "/services/business-transformation/databricks" }]}
    />
  );
}
