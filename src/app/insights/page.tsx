import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Newspaper } from "lucide-react";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "ConglomerateIT insights, thought leadership, careers, and culture resources.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        label="Insights"
        title="Thought leadership and"
        titleHighlight="career growth"
        description="Resources for enterprise technology buyers and candidates building AI-first, globally distributed careers."
        breadcrumbs={[{ label: "Insights" }]}
      />
      <section className="bg-[#080d18] py-20">
        <div className="mx-auto grid max-w-5xl gap-5 px-4 md:grid-cols-2 lg:px-8">
          {[
            {
              title: "Blog",
              description:
                "Authoritative articles aligned with AI, cloud, QA, delivery models, Salesforce, and enterprise transformation.",
              href: "/insights/blog",
              icon: Newspaper,
            },
            {
              title: "Careers",
              description:
                "Explore CGIT culture, global teams, open roles, and application paths for AI and engineering talent.",
              href: "/insights/careers",
              icon: BriefcaseBusiness,
            },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="card group block p-8">
              <item.icon className="mb-5 h-7 w-7 text-[#214daa]" />
              <h2 className="font-teko text-4xl font-semibold text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/50">
                {item.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/45 transition group-hover:text-white">
                Open <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
