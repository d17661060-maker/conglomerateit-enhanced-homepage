import type { Metadata } from "next";
import ServiceLayout from "@/components/shared/ServiceLayout";
export const metadata: Metadata = { title: "ServiceNow", description: "ServiceNow ITSM, ITOM, and workflow automation implementation by ConglomerateIT — transforming service delivery across IT and beyond." };
export default function ServiceNowPage() {
  return (
    <ServiceLayout label="Business Transformation" title="ServiceNow" titleHighlight="Implementation & Automation"
      description="ITSM, ITOM, HR Service Delivery, and custom workflow automation on the ServiceNow platform — delivered by certified implementation consultants."
      breadcrumbs={[{ label: "Services" }, { label: "Business Transformation", href: "/services/business-transformation" }, { label: "ServiceNow" }]}
      intro="ServiceNow is the operating system of the enterprise. ConglomerateIT's certified ServiceNow consultants implement ITSM, ITOM, HR Service Delivery, Customer Service Management, and custom applications on the Now Platform — driving workflow efficiency, reducing MTTR, and delivering measurable cost savings."
      features={["ITSM (Incident, Problem, Change)", "ITOM & Discovery", "HR Service Delivery", "Customer Service Management (CSM)", "Security Operations (SecOps)", "Custom Workflow Development", "ServiceNow Integration Hub", "Performance Analytics & Dashboards"]}
      benefits={[
        { title: "Reduce MTTR", description: "Automated incident routing, escalation, and resolution workflows cut Mean Time to Resolve by up to 50%." },
        { title: "Enterprise Workflow", description: "Extend ServiceNow beyond IT — HR, facilities, legal, and finance all benefiting from unified workflow." },
        { title: "Out-of-Box + Custom", description: "We maximize out-of-box functionality first, then extend with custom code only where business value justifies it." },
        { title: "Integration Expertise", description: "Integration Hub connections to your existing CMDB, monitoring tools, and business systems." },
        { title: "Reporting & Analytics", description: "Performance Analytics dashboards that give leadership real-time visibility into service health." },
        { title: "Upgrade Management", description: "Patch and upgrade management that keeps your instance current without disrupting operations." },
      ]}
      relatedLinks={[{ label: "Salesforce", href: "/services/business-transformation/salesforce" }, { label: "Workday", href: "/services/business-transformation/workday" }, { label: "Databricks", href: "/services/business-transformation/databricks" }]}
    />
  );
}
