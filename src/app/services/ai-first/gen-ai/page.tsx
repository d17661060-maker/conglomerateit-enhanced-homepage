import type { Metadata } from "next";
import ServiceLayout from "@/components/shared/ServiceLayout";
export const metadata: Metadata = { title: "Generative AI", description: "Generative AI strategy, implementation, and enablement by ConglomerateIT — deploying LLMs, RAG systems, and AI agents that deliver real business value." };
export default function GenAIPage() {
  return (
    <ServiceLayout label="AI-First Approach" title="Generative AI" titleHighlight="Implementation"
      description="Enterprise Generative AI — from identifying high-value use cases to deploying LLMs, RAG pipelines, and AI agents that integrate with your business processes."
      breadcrumbs={[{ label: "Services" }, { label: "AI-First", href: "/services/ai-first" }, { label: "Gen AI" }]}
      intro="Generative AI is transforming how enterprises create content, write code, support customers, and make decisions. ConglomerateIT's Gen AI practice helps organizations move beyond experimentation — identifying genuine ROI opportunities, selecting the right models and architectures, and deploying production-grade Gen AI systems with proper governance and security."
      features={["LLM Strategy & Use Case Identification", "OpenAI GPT, Claude, Gemini Integration", "RAG (Retrieval-Augmented Generation)", "Fine-Tuning & Domain Adaptation", "AI Agents & Multi-Agent Systems", "Document Intelligence & Processing", "Code Generation & Developer Copilots", "AI Safety, Security & Governance"]}
      benefits={[
        { title: "ROI-First Approach", description: "We identify and validate the 3-5 Gen AI use cases with the highest ROI for your specific business — before writing a single line of code." },
        { title: "Production-Grade Deployment", description: "Enterprise-ready Gen AI with security controls, access management, cost governance, and monitoring — not demos." },
        { title: "RAG Architecture", description: "Connect LLMs to your proprietary knowledge bases securely — ensuring accurate, hallucination-reduced responses grounded in your data." },
        { title: "Model Selection", description: "Vendor-neutral model selection across OpenAI, Anthropic, Google, Meta, and open-source — right model for each use case." },
        { title: "Responsible AI", description: "Bias testing, prompt injection protection, output filtering, and human-in-the-loop workflows for every deployment." },
        { title: "Developer Enablement", description: "Internal developer copilots and coding assistants that accelerate your engineering team&apos;s productivity." },
      ]}
      relatedLinks={[{ label: "IT to AI", href: "/services/ai-first/it-to-ai" }, { label: "AI Native Roles", href: "/services/ai-first/ai-native-roles" }, { label: "Data & Analytics", href: "/services/data-analytics" }]}
    />
  );
}
