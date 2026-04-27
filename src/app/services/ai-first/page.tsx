import type { Metadata } from "next";
import ServiceLayout from "@/components/shared/ServiceLayout";

export const metadata: Metadata = {
  title: "AI-First Approach",
  description: "IT to AI transformation, AI-native roles, and Generative AI implementation by ConglomerateIT — building the intelligent enterprise of tomorrow.",
};

export default function AIFirstPage() {
  return (
    <ServiceLayout
      label="Services / AI-First Approach"
      title="Intelligent"
      titleHighlight="Transformation"
      description="From transitioning IT operations to AI-augmented workflows to building AI-native teams and deploying Generative AI — we help enterprises become AI-first."
      breadcrumbs={[{ label: "Services" }, { label: "AI-First Approach" }]}
      intro="Artificial Intelligence is no longer a future aspiration — it is a present-day competitive imperative. ConglomerateIT's AI-First practice helps organizations at every stage of the AI journey: transitioning existing IT workflows to AI-augmented processes, hiring and building AI-native teams, and implementing Generative AI solutions that deliver immediate business value."
      features={[
        "AI Readiness Assessment",
        "IT Operations to AI Transition",
        "AI-Native Team Building",
        "Generative AI Strategy & Implementation",
        "LLM Integration (OpenAI, Claude, Gemini)",
        "RAG & Knowledge Management Systems",
        "ML Platform Engineering (MLflow, Kubeflow)",
        "AI Governance & Ethics Framework",
      ]}
      benefits={[
        { title: "Accelerated AI Adoption", description: "Structured adoption frameworks that move organizations from AI interest to AI value in 90 days." },
        { title: "AI-Native Talent", description: "We source and place AI-native professionals — prompt engineers, ML engineers, AI architects — purpose-built for the AI era." },
        { title: "GenAI Business Cases", description: "We identify and validate the highest-ROI Generative AI use cases for your specific industry and operations." },
        { title: "Responsible AI", description: "Every AI implementation includes governance frameworks, bias testing, and explainability measures." },
        { title: "Enterprise Integration", description: "AI solutions that integrate with your existing systems — not isolated experiments that never reach production." },
        { title: "Continuous Innovation", description: "AI is evolving weekly — our practice stays current so you can benefit from the latest models and techniques." },
      ]}
      relatedLinks={[
        { label: "IT to AI", href: "/services/ai-first/it-to-ai" },
        { label: "AI Native Roles", href: "/services/ai-first/ai-native-roles" },
        { label: "Gen AI", href: "/services/ai-first/gen-ai" },
        { label: "Data & Analytics", href: "/services/data-analytics" },
      ]}
    />
  );
}
