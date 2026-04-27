import type { Metadata } from "next";
import ServiceLayout from "@/components/shared/ServiceLayout";

export const metadata: Metadata = {
  title: "Observability",
  description: "Production monitoring, logging, and distributed tracing by ConglomerateIT — full visibility into your systems, 24/7.",
};

export default function ObservabilityPage() {
  return (
    <ServiceLayout
      label="QA / QE"
      title="Production"
      titleHighlight="Observability"
      description="End-to-end monitoring, structured logging, and distributed tracing that gives your teams complete visibility into production — and the confidence to ship faster."
      breadcrumbs={[{ label: "Services" }, { label: "QA / QE", href: "/services/qa-qe" }, { label: "Observability" }]}
      intro="In modern distributed systems, visibility is not optional. ConglomerateIT's Observability practice implements the three pillars — metrics, logs, and traces — using industry-leading platforms like Datadog, New Relic, Prometheus/Grafana, and the OpenTelemetry stack, ensuring you never fly blind in production."
      features={[
        "Metrics, Logs & Traces (OpenTelemetry)",
        "Datadog / New Relic / Dynatrace",
        "Prometheus + Grafana Stack",
        "ELK / Splunk Log Management",
        "Distributed Tracing (Jaeger, Zipkin)",
        "Alerting & On-Call Management (PagerDuty)",
        "SLO / SLA Dashboards",
        "Synthetic Monitoring",
      ]}
      benefits={[
        { title: "MTTD Reduction", description: "Mean-time-to-detect production incidents cut by 70% with proactive anomaly detection and smart alerting." },
        { title: "Root Cause Analysis", description: "Distributed tracing across microservices reveals the exact chain of events behind any incident." },
        { title: "SLO Management", description: "Define, measure, and report on Service Level Objectives — keeping engineering and business aligned." },
        { title: "Cost Optimization", description: "Cardinality management and log tiering reduce observability costs without sacrificing visibility." },
        { title: "Developer Experience", description: "Self-service dashboards and pre-built alerts empower developers without requiring SRE involvement for every query." },
        { title: "Platform Agnostic", description: "We work with your existing observability stack — or help you choose and implement the right platform." },
      ]}
      relatedLinks={[
        { label: "Functional Testing", href: "/services/qa-qe/functional-testing" },
        { label: "Automation Testing", href: "/services/qa-qe/automation-testing" },
        { label: "Infrastructure", href: "/services/infrastructure" },
      ]}
    />
  );
}
