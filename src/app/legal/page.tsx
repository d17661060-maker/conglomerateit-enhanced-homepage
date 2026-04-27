import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { legalPages } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Legal & Policies",
  description:
    "Privacy, terms, acceptable use, compliance, and legal information for ConglomerateIT.",
};

export default function LegalIndexPage() {
  return (
    <>
      <PageHero
        label="Legal & Policies"
        title="Trust, compliance, and"
        titleHighlight="responsible use"
        description="A complete policy center for privacy, terms, compliance practices, legal information, and acceptable use."
        breadcrumbs={[{ label: "Legal" }]}
      />
      <section className="bg-[#080d18] py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 md:grid-cols-2 lg:px-8">
          {Object.entries(legalPages).map(([slug, page]) => (
            <Link key={slug} href={`/legal/${slug}`} className="card group block p-7">
              <FileText className="mb-5 h-6 w-6 text-[#214daa]" />
              <h2 className="font-teko text-3xl font-semibold text-white">
                {page.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/50">
                {page.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/45 transition group-hover:text-white">
                Read policy <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
