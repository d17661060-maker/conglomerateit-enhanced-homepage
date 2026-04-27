import type { Metadata } from "next";
import ServiceLayout from "@/components/shared/ServiceLayout";

export const metadata: Metadata = {
  title: "Mobile App Development",
  description: "iOS, Android, and cross-platform mobile app development by ConglomerateIT — built with Swift, Kotlin, and React Native for superior user experiences.",
};

export default function MobileAppPage() {
  return (
    <ServiceLayout
      label="Software Development"
      title="Mobile App"
      titleHighlight="Development"
      description="Native iOS and Android apps, and cross-platform solutions with React Native — delivering polished user experiences that users love and businesses trust."
      breadcrumbs={[{ label: "Services" }, { label: "Software Development", href: "/services/software-development" }, { label: "Mobile App Development" }]}
      intro="Mobile is where your users live. ConglomerateIT builds high-quality iOS and Android applications — native with Swift and Kotlin for maximum performance, or cross-platform with React Native when time-to-market matters. Every app we build goes through rigorous UX testing, performance profiling, and App Store review optimization."
      features={["iOS (Swift / SwiftUI)", "Android (Kotlin / Jetpack Compose)", "React Native (Cross-Platform)", "Flutter", "App Store & Google Play Deployment", "Push Notifications & Deep Linking", "Offline-First Architecture", "Mobile Analytics & Crash Reporting"]}
      benefits={[
        { title: "Native Performance", description: "Swift and Kotlin apps that feel like they belong on the platform — smooth animations, fast load times, native gestures." },
        { title: "Cross-Platform ROI", description: "React Native delivers ~80% code reuse across iOS and Android — cutting development cost without sacrificing quality." },
        { title: "UX Excellence", description: "User-tested interfaces designed for the platform conventions that mobile users expect and appreciate." },
        { title: "App Store Optimization", description: "Screenshots, descriptions, and metadata optimized for discovery and conversion in both app stores." },
        { title: "Offline-First", description: "Apps that work without connectivity — syncing seamlessly when the network returns." },
        { title: "Security & Compliance", description: "GDPR, HIPAA, and PCI-DSS compliant mobile apps with secure local storage and certificate pinning." },
      ]}
      relatedLinks={[
        { label: "Web Development", href: "/services/software-development/web-development" },
        { label: "Backend Development", href: "/services/software-development/backend" },
        { label: "QA / QE", href: "/services/qa-qe" },
      ]}
    />
  );
}
