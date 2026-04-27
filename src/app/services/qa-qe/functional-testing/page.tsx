import type { Metadata } from "next";
import ServiceLayout from "@/components/shared/ServiceLayout";

export const metadata: Metadata = {
  title: "Functional Testing",
  description: "Manual and exploratory functional test coverage by CGIT — ensuring every feature works exactly as intended across all environments.",
};

export default function FunctionalTestingPage() {
  return (
    <ServiceLayout
      label="QA / QE"
      title="Functional"
      titleHighlight="Testing"
      description="Manual and exploratory functional test coverage that leaves no defect behind — aligned to your user stories, acceptance criteria, and business workflows."
      breadcrumbs={[{ label: "Services" }, { label: "QA / QE", href: "/services/qa-qe" }, { label: "Functional Testing" }]}
      intro="Our functional testing practice validates that every feature of your application behaves exactly as specified. From black-box and exploratory testing to requirements traceability and defect lifecycle management, our engineers provide the human insight that automation alone cannot replace."
      features={[
        "Black-box & White-box Testing",
        "Exploratory Testing",
        "Regression Testing",
        "Integration Testing",
        "User Acceptance Testing (UAT)",
        "Defect Lifecycle Management",
        "Requirements Traceability Matrix",
        "Test Case Design & Execution",
      ]}
      benefits={[
        { title: "Requirements Aligned", description: "Every test case maps directly to business requirements, ensuring complete coverage with zero gaps." },
        { title: "Domain Expertise", description: "Testers with domain knowledge in healthcare, finance, and enterprise software catch business-logic defects faster." },
        { title: "Transparent Reporting", description: "Real-time dashboards, defect analytics, and executive-ready reports keep stakeholders informed." },
        { title: "UAT Support", description: "We facilitate User Acceptance Testing — training your users and managing the sign-off process." },
        { title: "Agile Integration", description: "Embedded in your sprint cycles as QA partners — not just at the end of the pipeline." },
        { title: "Cross-Platform Coverage", description: "Web, desktop, API, and mobile testing across all major browsers and operating systems." },
      ]}
      relatedLinks={[
        { label: "Automation Testing", href: "/services/qa-qe/automation-testing" },
        { label: "Non-Functional Testing", href: "/services/qa-qe/non-functional-testing" },
        { label: "Observability", href: "/services/qa-qe/observability" },
      ]}
    />
  );
}
