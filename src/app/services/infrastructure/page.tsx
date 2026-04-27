import type { Metadata } from "next";
import ServiceLayout from "@/components/shared/ServiceLayout";

export const metadata: Metadata = {
  title: "Infrastructure Services",
  description: "On-premises, cloud, and core infrastructure services by ConglomerateIT — from compute and storage to AWS, Azure, GCP, and network security.",
};

export default function InfrastructurePage() {
  return (
    <ServiceLayout
      label="Services / Infrastructure"
      title="Enterprise Infrastructure,"
      titleHighlight="Optimized for Performance"
      description="End-to-end infrastructure management across on-premises, cloud, and hybrid environments — designed for reliability, security, and scale."
      breadcrumbs={[{ label: "Services" }, { label: "Infrastructure" }]}
      intro="ConglomerateIT's Infrastructure practice spans the full spectrum — from bare-metal compute and backup to multi-cloud orchestration across AWS, Azure, and GCP. Our certified engineers design, migrate, and manage infrastructure that is resilient, cost-efficient, and aligned with your security and compliance requirements."
      features={[
        "On-Premises: Compute, Storage, Backup",
        "Network (DC/WAN/APS) & Security",
        "AWS, Azure, GCP — Multi-Cloud",
        "Cloud Migration & App Rationalization",
        "DDI, Active Directory, FTP",
        "DevOps & SRE",
        "Disaster Recovery & BCP",
        "Infrastructure as Code (Terraform, Ansible)",
      ]}
      benefits={[
        { title: "Multi-Cloud Expertise", description: "Certified architects across AWS, Azure, and GCP — designing the right cloud strategy for your workloads." },
        { title: "Zero-Downtime Migrations", description: "Battle-tested migration methodology with rollback plans, minimizing business disruption." },
        { title: "Cost Governance", description: "FinOps practices and cloud cost optimization that typically deliver 20-35% savings on cloud spend." },
        { title: "Security-First", description: "Network security, IAM, and compliance controls baked into every infrastructure design from day one." },
        { title: "24/7 Managed Operations", description: "Round-the-clock NOC monitoring with SLA-backed response times for critical infrastructure." },
        { title: "Scalable Architecture", description: "Infrastructure that grows with your business — auto-scaling, serverless, and containerized workloads." },
      ]}
      relatedLinks={[
        { label: "Compute Platform", href: "/services/infrastructure/on-premises/compute" },
        { label: "AWS", href: "/services/infrastructure/cloud/aws" },
        { label: "Azure", href: "/services/infrastructure/cloud/azure" },
        { label: "GCP", href: "/services/infrastructure/cloud/gcp" },
        { label: "Network Security", href: "/services/infrastructure/on-premises/network-security" },
        { label: "Migration", href: "/services/infrastructure/cloud/migration" },
      ]}
    />
  );
}
