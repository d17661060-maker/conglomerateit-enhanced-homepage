import type { Metadata } from "next";
import ServiceLayout from "@/components/shared/ServiceLayout";

export const metadata: Metadata = {
  title: "Web Development",
  description: "Custom websites, web portals, and web applications by ConglomerateIT — built with React, Next.js, and modern frameworks for performance and scale.",
};

export default function WebDevelopmentPage() {
  return (
    <ServiceLayout
      label="Software Development"
      title="Web"
      titleHighlight="Development"
      description="Custom websites, portals, and web applications built with modern frameworks — designed for performance, accessibility, and long-term maintainability."
      breadcrumbs={[{ label: "Services" }, { label: "Software Development", href: "/services/software-development" }, { label: "Web Development" }]}
      intro="ConglomerateIT builds web experiences that perform. From marketing sites and customer portals to complex SaaS applications, our frontend engineers use React, Next.js, and TypeScript to create fast, accessible, and SEO-optimized web products that users love and businesses rely on."
      features={["React & Next.js", "TypeScript", "Tailwind CSS & Design Systems", "Progressive Web Apps (PWA)", "Headless CMS Integration", "Performance Optimization (Core Web Vitals)", "SEO & Accessibility (WCAG 2.1)", "E-Commerce (Shopify, Commerce.js)"]}
      benefits={[
        { title: "Performance-First", description: "Core Web Vitals optimized by default — sub-2-second load times that improve SEO and conversion rates." },
        { title: "Design-to-Code Precision", description: "Pixel-perfect implementation from Figma designs with responsive layouts across all device sizes." },
        { title: "SEO & Accessibility", description: "Semantic HTML, ARIA compliance, and structured data built in from the start — not bolted on later." },
        { title: "Scalable Architecture", description: "Component-based architecture and design systems that scale across multiple products and teams." },
        { title: "CMS Integration", description: "Headless CMS integration (Contentful, Sanity, Strapi) for content teams to update without engineering." },
        { title: "Analytics & Optimization", description: "Built-in analytics integration, A/B testing hooks, and conversion rate optimization capabilities." },
      ]}
      relatedLinks={[
        { label: "Backend Development", href: "/services/software-development/backend" },
        { label: "Mobile App Development", href: "/services/software-development/mobile-app" },
        { label: "Business Transformation", href: "/services/business-transformation" },
      ]}
    />
  );
}
