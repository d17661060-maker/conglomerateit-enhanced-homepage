import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpenText } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { blogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "ConglomerateIT blog topics for AI-first IT services, offshore delivery, Salesforce consulting, and cloud modernization.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        label="Blog"
        title="SEO content engine for"
        titleHighlight="enterprise buyers"
        description="Starter thought-leadership topics aligned to the SRS keyword strategy and service priorities."
        breadcrumbs={[
          { label: "Insights", href: "/insights" },
          { label: "Blog" },
        ]}
      />

      <section className="bg-[#080d18] py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="card p-7">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="rounded-full bg-white/[0.04] px-3 py-1 text-xs text-white/45">
                    {post.category}
                  </span>
                  <BookOpenText className="h-5 w-5 text-[#214daa]" />
                </div>
                <h2 className="font-teko text-3xl font-semibold leading-tight text-white">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {post.summary}
                </p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-white/30">
                  {post.readTime}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-[#0a1020]">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-5 px-4 lg:px-8">
          <p className="section-label">Content strategy</p>
          <h2 className="font-teko text-5xl font-bold leading-tight">
            Publish around buyer intent, not company news.
          </h2>
          <p className="max-w-3xl text-slate-600">
            The SRS targets keywords like AI IT services company, offshore development center, Salesforce consulting partner, cloud modernization services, and AWS. This page is ready for a CMS-backed publishing flow.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#0a1020] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#214daa]"
          >
            Talk to an expert <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
