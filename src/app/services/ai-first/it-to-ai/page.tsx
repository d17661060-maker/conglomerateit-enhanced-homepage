import type { Metadata } from "next";
import ServiceLayout from "@/components/shared/ServiceLayout";
export const metadata: Metadata = { title: "IT to AI Transformation", description: "Transition existing IT operations to AI-augmented workflows with ConglomerateIT — structured programs that deliver AI value in 90 days." };
export default function ITtoAIPage() {
  return (
    <ServiceLayout label="AI-First Approach" title="IT to AI" titleHighlight="Transformation"
      description="A structured program to transition your IT operations from manual and reactive to AI-augmented and proactive — delivering measurable value in 90 days."
      breadcrumbs={[{ label: "Services" }, { label: "AI-First", href: "/services/ai-first" }, { label: "IT to AI" }]}
      intro="Most organizations have years of IT maturity but struggle to make the leap to AI-augmented operations. ConglomerateIT's IT to AI program provides a structured pathway — assessing your current IT landscape, identifying the highest-value AI use cases, and executing a phased transformation that delivers quick wins while building toward a fully AI-augmented IT operation."
      features={["AI Readiness Assessment", "Use Case Identification & Prioritization", "AIOps Implementation", "Intelligent Monitoring & Alerting", "Predictive Maintenance & Anomaly Detection", "Natural Language IT Operations (NLU)", "IT Process Automation (RPA + AI)", "AI Governance & Change Management"]}
      benefits={[
        { title: "Structured Pathway", description: "A proven 4-phase roadmap: Assess → Identify → Pilot → Scale — with clear milestones and measurable outcomes at each stage." },
        { title: "Quick Wins First", description: "We identify and implement 2-3 high-value, low-risk AI use cases in the first 30 days to build momentum and stakeholder confidence." },
        { title: "AIOps Integration", description: "AI-powered monitoring that reduces alert noise by 70% and predicts infrastructure incidents before they impact users." },
        { title: "Process Automation", description: "Intelligent automation of repetitive IT tasks — ticket routing, password resets, patch management — freeing your team for higher-value work." },
        { title: "Knowledge Transfer", description: "Your IT team gains the AI skills and frameworks to sustain and extend the transformation independently." },
        { title: "Risk Management", description: "Human-in-the-loop guardrails and fallback procedures ensure AI augmentation never introduces new points of failure." },
      ]}
      relatedLinks={[{ label: "AI Native Roles", href: "/services/ai-first/ai-native-roles" }, { label: "Gen AI", href: "/services/ai-first/gen-ai" }, { label: "Infrastructure", href: "/services/infrastructure" }]}
    />
  );
}
