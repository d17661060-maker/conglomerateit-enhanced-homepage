import type { Metadata } from "next";
import ServiceLayout from "@/components/shared/ServiceLayout";

export const metadata: Metadata = {
  title: "QA / QE — Quality Assurance & Engineering",
  description:
    "ConglomerateIT delivers end-to-end QA/QE services: functional testing, automation, non-functional testing, and observability for flawless software delivery.",
};

export default function QAQEPage() {
  return (
    <ServiceLayout
      label="Services / QA & QE"
      title="Quality Assurance &"
      titleHighlight="Quality Engineering"
      description="Ensure flawless software delivery with our advanced QA/QE solutions — from manual testing to full automation and production observability."
      breadcrumbs={[{ label: "Services" }, { label: "QA / QE" }]}
      intro="ConglomerateIT&apos;s QA/QE practice delivers comprehensive testing solutions that integrate seamlessly into your CI/CD pipeline. Our certified test engineers combine manual expertise with automation frameworks to ensure your software performs, scales, and stays secure — across every environment."
      features={[
        "Functional & Exploratory Testing",
        "Test Automation (Selenium, Cypress, Playwright)",
        "Performance & Load Testing",
        "Security Testing",
        "CI/CD Integration",
        "Production Observability",
        "Test Strategy & Governance",
        "Shift-Left Testing",
      ]}
      benefits={[
        {
          title: "Faster Time to Market",
          description: "Automated regression suites cut release cycles by up to 60%, enabling continuous delivery without sacrificing quality.",
        },
        {
          title: "Defect Prevention",
          description: "Shift-left testing finds issues early in the SDLC — where fixing them costs 10x less than post-production.",
        },
        {
          title: "Full Observability",
          description: "End-to-end monitoring, logging, and distributed tracing ensure production issues are caught before your users notice.",
        },
        {
          title: "Framework Agnostic",
          description: "We work with your existing stack — Selenium, Cypress, Playwright, JMeter, Gatling, and more.",
        },
        {
          title: "Compliance-Ready",
          description: "All testing aligned with HIPAA, PCI-DSS, SOC 2, and ISO 27001 requirements.",
        },
        {
          title: "Expert Engineers",
          description: "Certified ISTQB professionals with deep domain expertise across healthcare, fintech, and enterprise software.",
        },
      ]}
      relatedLinks={[
        { label: "Functional Testing", href: "/services/qa-qe/functional-testing" },
        { label: "Automation Testing", href: "/services/qa-qe/automation-testing" },
        { label: "Non-Functional Testing", href: "/services/qa-qe/non-functional-testing" },
        { label: "Observability", href: "/services/qa-qe/observability" },
      ]}
    />
  );
}
