import type { Metadata } from "next";
import ServiceLayout from "@/components/shared/ServiceLayout";

export const metadata: Metadata = {
  title: "Functional Automation Testing",
  description: "Automated test suites for regression and CI/CD pipelines — built by CGIT engineers using Selenium, Cypress, Playwright, and more.",
};

export default function AutomationTestingPage() {
  return (
    <ServiceLayout
      label="QA / QE"
      title="Functional"
      titleHighlight="Automation Testing"
      description="Enterprise-grade automated test suites that accelerate releases, reduce manual effort, and keep your CI/CD pipeline green — every commit, every time."
      breadcrumbs={[{ label: "Services" }, { label: "QA / QE", href: "/services/qa-qe" }, { label: "Automation Testing" }]}
      intro="ConglomerateIT builds robust automation frameworks tailored to your technology stack. From UI automation with Selenium and Playwright to API testing with RestAssured and Postman, our engineers design maintainable, scalable test suites that integrate natively into your DevOps pipeline."
      features={[
        "Selenium / Cypress / Playwright",
        "RestAssured & Postman (API Testing)",
        "TestNG / JUnit / NUnit",
        "CI/CD Integration (Jenkins, GitHub Actions)",
        "Data-Driven & Keyword-Driven Frameworks",
        "Page Object Model Architecture",
        "Test Results & Reporting (Allure, ExtentReports)",
        "Mobile Automation (Appium)",
      ]}
      benefits={[
        { title: "60% Faster Releases", description: "Automated regression suites run in minutes, not days — enabling multiple production deployments per week." },
        { title: "Framework Strategy", description: "We design the right framework architecture upfront — POM, BDD (Cucumber), or data-driven — for long-term maintainability." },
        { title: "CI/CD Native", description: "Tests trigger automatically on every commit, PR, and deployment — catching regressions before they reach production." },
        { title: "Parallel Execution", description: "Distributed test execution on Selenium Grid or cloud providers (BrowserStack, Sauce Labs) for maximum speed." },
        { title: "Low Maintenance", description: "Modular, reusable code with self-healing locators minimizes test flakiness and maintenance overhead." },
        { title: "ROI in 3 Months", description: "Typical automation ROI is achieved within 90 days through reduced manual testing hours." },
      ]}
      relatedLinks={[
        { label: "Functional Testing", href: "/services/qa-qe/functional-testing" },
        { label: "Non-Functional Testing", href: "/services/qa-qe/non-functional-testing" },
        { label: "Observability", href: "/services/qa-qe/observability" },
      ]}
    />
  );
}
