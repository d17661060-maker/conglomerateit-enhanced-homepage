import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-5 right-5 z-[9990] hidden md:flex items-center gap-2 rounded-full border border-white/15 bg-black/80 px-3 py-2 shadow-2xl backdrop-blur-md">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">
        <MessageCircle className="h-4 w-4" />
      </span>
      <div className="pr-1">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/40">
          Ready to scale?
        </p>
        <Link
          href="/contact"
          className="group flex items-center gap-1 text-sm font-semibold text-white"
        >
          Talk to an expert
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
