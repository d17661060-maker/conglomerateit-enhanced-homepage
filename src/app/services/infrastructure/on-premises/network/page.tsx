import type { Metadata } from "next";
import ServiceLayout from "@/components/shared/ServiceLayout";
export const metadata: Metadata = { title: "Network (DC/WAN/APS)", description: "Data center networking, WAN optimization, and access point services by ConglomerateIT — Cisco, Juniper, and Aruba expertise." };
export default function Page() {
  return (
    <ServiceLayout
      label="Infrastructure"
      title="Network (DC/WAN/APS)"
      titleHighlight=""
      description="Data center networking, WAN optimization, and access point services by ConglomerateIT — Cisco, Juniper, and Aruba expertise."
      breadcrumbs={[{ label: "Services" }, { label: "Infrastructure", href: "/services/infrastructure" }, { label: "Network (DC/WAN/APS)" }]}
      intro="ConglomerateIT delivers enterprise-grade Network (DC/WAN/APS) services backed by certified engineers, proven methodologies, and 24/7 managed operations. Our solutions are designed for reliability, security, and scalability — aligned with your compliance requirements and business goals."
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
