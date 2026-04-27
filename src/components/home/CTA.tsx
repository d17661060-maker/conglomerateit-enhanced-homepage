import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(33,77,170,0.15), transparent), radial-gradient(ellipse 40% 40% at 80% 80%, rgba(244,0,0,0.08), transparent), #000",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#214daa]/40 to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <p className="section-label mb-5 justify-center">Let&apos;s Start</p>
        <h2
          className="font-teko font-bold text-white mb-6 leading-tight"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
        >
          Start your experience with{" "}
          <span className="gradient-text">ConglomerateIT</span>
        </h2>
        <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
          Join 500+ organizations that trust CGIT to deliver technology that works —
          on time, on budget, and built for the future.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link href="/contact" className="btn-primary text-base px-10 py-4">
            Join Us <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/about" className="btn-outline text-base px-10 py-4">
            Learn About CGIT
          </Link>
        </div>
      </div>
    </section>
  );
}
