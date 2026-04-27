import type { Metadata } from "next";
import ServiceLayout from "@/components/shared/ServiceLayout";

export const metadata: Metadata = {
  title: "Non-Functional Testing",
  description: "Performance, security, and load testing services by ConglomerateIT — ensuring your applications scale, stay secure, and deliver under pressure.",
};

export default function NonFunctionalTestingPage() {
  return (
    <ServiceLayout
      label="QA / QE"
      title="Non-Functional"
      titleHighlight="Testing"
      description="Performance, security, load, and reliability testing that ensures your application scales gracefully, stays secure, and meets SLAs under real-world conditions."
      breadcrumbs={[{ label: "Services" }, { label: "QA / QE", href: "/services/qa-qe" }, { label: "Non-Functional Testing" }]}
      intro="Performance issues cost companies millions in lost revenue and user trust. ConglomerateIT's non-functional testing practice validates your application's behavior under stress — from load spikes to security penetration attempts — before your users encounter them in production."
      features={[
        "Load & Stress Testing (JMeter, Gatling)",
        "Performance Profiling & Optimization",
        "Security Penetration Testing (OWASP)",
        "Vulnerability Assessment",
        "Scalability Testing",
        "Reliability & Soak Testing",
        "Chaos Engineering",
        "SLA Validation",
      ]}
      benefits={[
        { title: "Performance Baselines", description: "Establish quantified performance baselines and SLAs — response times, throughput, error rates — before go-live." },
        { title: "Find Your Breaking Point", description: "Stress testing reveals exactly where your architecture cracks, so you fix it before peak traffic events." },
        { title: "Security Compliance", description: "OWASP Top 10 testing aligned with PCI-DSS, HIPAA, and SOC 2 security requirements." },
        { title: "Realistic Load Models", description: "Production-accurate load profiles based on real traffic patterns — not synthetic guesses." },
        { title: "Actionable Reports", description: "Executive summaries and developer-level flamegraphs — right level of detail for every audience." },
        { title: "Remediation Support", description: "We don&apos;t just find issues — we work with your team to resolve performance bottlenecks." },
      ]}
      relatedLinks={[
        { label: "Functional Testing", href: "/services/qa-qe/functional-testing" },
        { label: "Automation Testing", href: "/services/qa-qe/automation-testing" },
        { label: "Observability", href: "/services/qa-qe/observability" },
      ]}
    />
  );
}
