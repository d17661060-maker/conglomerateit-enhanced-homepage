import type { Metadata } from "next";
import ServiceLayout from "@/components/shared/ServiceLayout";

export const metadata: Metadata = {
  title: "Back End Development",
  description: "Scalable APIs, microservices, and server-side engineering by ConglomerateIT — built with Node.js, Python, Java, and .NET for enterprise performance.",
};

export default function BackendPage() {
  return (
    <ServiceLayout
      label="Software Development"
      title="Back End"
      titleHighlight="Development"
      description="Robust APIs, microservices, and database architectures that power your applications — built for security, performance, and infinite scale."
      breadcrumbs={[{ label: "Services" }, { label: "Software Development", href: "/services/software-development" }, { label: "Back End Development" }]}
      intro="Your backend is the engine of your business. ConglomerateIT engineers build secure, high-performance server-side systems using Node.js, Python (FastAPI/Django), Java (Spring Boot), and .NET — following RESTful and GraphQL API design best practices with comprehensive test coverage and documentation."
      features={["Node.js, Python, Java, .NET", "REST & GraphQL APIs", "Microservices & Event-Driven Architecture", "Apache Kafka, RabbitMQ", "PostgreSQL, MySQL, MongoDB, Redis", "Authentication (OAuth 2.0, JWT, SAML)", "API Gateway & Rate Limiting", "Swagger / OpenAPI Documentation"]}
      benefits={[
        { title: "API-First Design", description: "Well-documented, versioned APIs designed for longevity — consumed by web, mobile, and third-party integrators." },
        { title: "Microservices Architecture", description: "Independently deployable services with clear bounded contexts — enabling teams to ship faster with less risk." },
        { title: "Database Mastery", description: "Relational and NoSQL database design, query optimization, and migration strategies for any scale." },
        { title: "Security by Default", description: "OAuth 2.0, JWT, input validation, rate limiting, and OWASP best practices embedded in every service." },
        { title: "Event-Driven Systems", description: "Asynchronous architectures with Kafka and RabbitMQ for high-throughput, resilient data pipelines." },
        { title: "Full Observability", description: "Structured logging, distributed tracing, and health endpoints built into every service from day one." },
      ]}
      relatedLinks={[
        { label: "Web Development", href: "/services/software-development/web-development" },
        { label: "Mobile App Development", href: "/services/software-development/mobile-app" },
        { label: "Cloud Infrastructure", href: "/services/infrastructure/cloud/aws" },
      ]}
    />
  );
}
