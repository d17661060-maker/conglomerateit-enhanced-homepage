import type { Metadata } from "next";
import ServiceLayout from "@/components/shared/ServiceLayout";
export const metadata: Metadata = { title: "Compute Platform", description: "Enterprise compute platform design and management by ConglomerateIT — HPE, Dell, Cisco UCS, and virtualization with VMware and Hyper-V." };
export default function Page() {
  return (
    <ServiceLayout
      label="Infrastructure"
      title="Compute Platform"
      titleHighlight=""
      description="Enterprise compute platform design and management by ConglomerateIT — HPE, Dell, Cisco UCS, and virtualization with VMware and Hyper-V."
      breadcrumbs={[{ label: "Services" }, { label: "Infrastructure", href: "/services/infrastructure" }, { label: "Compute Platform" }]}
      intro="ConglomerateIT delivers enterprise-grade Compute Platform services backed by certified engineers, proven methodologies, and 24/7 managed operations. Our solutions are designed for reliability, security, and scalability — aligned with your compliance requirements and business goals."
      features={["Expert Engineering Team", "24/7 Managed Operations", "SLA-Backed Delivery", "Security & Compliance", "Cloud & On-Premises", "Proactive Monitoring", "Disaster Recovery", "Documentation & Runbooks"]}
      benefits={[
        { title: "Reliability by Design", description: "High-availability architectures with redundancy built in — meeting 99.99% uptime SLAs for critical systems." },
        { title: "Security-First", description: "Every solution designed with security controls, access management, and audit trails from the ground up." },
        { title: "Certified Expertise", description: "Engineers certified across leading platforms — ensuring best practices are applied at every level." },
        { title: "Proactive Operations", description: "24/7 monitoring and automated remediation that resolves issues before they impact your business." },
        { title: "Cost Optimization", description: "Right-sized solutions and ongoing optimization that eliminate waste and reduce TCO." },
        { title: "Compliance Ready", description: "SOC 2, ISO 27001, HIPAA, and PCI-DSS aligned solutions for regulated industries." },
      ]}
      relatedLinks={[{ label: "Infrastructure Overview", href: "/services/infrastructure" }, { label: "Cloud Services", href: "/services/infrastructure/cloud/aws" }, { label: "Network Security", href: "/services/infrastructure/on-premises/network-security" }]}
    />
  );
}
