import type { Metadata } from "next";
import ServiceLayout from "@/components/shared/ServiceLayout";

export const metadata: Metadata = {
  title: "Software Development",
  description: "Custom web, backend, and mobile application development by ConglomerateIT — built for scale, performance, and long-term maintainability.",
};

export default function SoftwareDevelopmentPage() {
  return (
    <ServiceLayout
      label="Services / Software Development"
      title="Custom Software"
      titleHighlight="Built to Last"
      description="Web portals, backend APIs, and mobile applications — engineered with modern frameworks, agile practices, and a relentless focus on quality."
      breadcrumbs={[{ label: "Services" }, { label: "Software Development" }]}
      intro="ConglomerateIT's software engineering teams build scalable, maintainable software using modern technology stacks. From React and Next.js frontends to Node.js, Python, and Java backends — and iOS/Android mobile apps — we deliver full-stack solutions that align business requirements with technical excellence."
      features={[
        "React, Next.js, Angular, Vue.js",
        "Node.js, Python, Java, .NET",
        "REST & GraphQL APIs",
        "iOS (Swift), Android (Kotlin), React Native",
        "Microservices & Event-Driven Architecture",
        "PostgreSQL, MongoDB, Redis",
        "DevOps & CI/CD",
        "Cloud-Native Applications",
      ]}
      benefits={[
        { title: "Agile Delivery", description: "2-week sprint cycles with demos, retrospectives, and continuous integration — you see progress every sprint." },
        { title: "Full-Stack Teams", description: "End-to-end ownership from UX/UI design through development, QA, and deployment — one accountable team." },
        { title: "Scalable Architecture", description: "Built on microservices and cloud-native patterns — designed to scale from hundreds to millions of users." },
        { title: "Code Quality", description: "Automated code review, static analysis, and mandatory test coverage — no compromises on quality." },
        { title: "IP Protection", description: "All code, documentation, and IP transferred 100% to your organization at project completion." },
        { title: "Long-Term Partnership", description: "We build software you can maintain — clean code, comprehensive documentation, and knowledge transfer included." },
      ]}
      relatedLinks={[
        { label: "Web Development", href: "/services/software-development/web-development" },
        { label: "Backend Development", href: "/services/software-development/backend" },
        { label: "Mobile App Development", href: "/services/software-development/mobile-app" },
      ]}
    />
  );
}
