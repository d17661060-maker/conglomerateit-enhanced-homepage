import type { Metadata } from "next";
import { BrainCircuit, Globe2, GraduationCap, Users } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import CareerApplyForm from "@/components/shared/CareerApplyForm";
import { openRoles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build your career at ConglomerateIT across AI, cloud, QA, Salesforce, engineering, and global delivery teams.",
};

const culture = [
  {
    icon: BrainCircuit,
    title: "AI-first learning",
    body: "Work on modern AI, data, cloud, QA, and platform programs with room to keep learning.",
  },
  {
    icon: Globe2,
    title: "Global exposure",
    body: "Collaborate across US, Canada, India, and UK teams with enterprise clients and cross-border delivery.",
  },
  {
    icon: GraduationCap,
    title: "Growth mindset",
    body: "CGIT emphasizes ownership, learning, mentorship, and progression into high-impact roles.",
  },
  {
    icon: Users,
    title: "Inclusive culture",
    body: "The company culture emphasizes innovation, client-first delivery, and women empowerment in technology.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        label="Careers"
        title="Build the teams behind"
        titleHighlight="AI-first delivery"
        description="Join ConglomerateIT across engineering, QA, cloud, AI, data, enterprise platforms, and global delivery operations."
        breadcrumbs={[
          { label: "Insights", href: "/insights" },
          { label: "Careers" },
        ]}
      />

      <section className="bg-[#080d18] py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="section-label mb-3">Open roles</p>
            <h2 className="section-heading text-white">
              Talent for the next generation of enterprise technology.
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {openRoles.map((role) => (
              <article key={role.title} className="card p-7">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-white/[0.04] px-3 py-1 text-xs text-white/45">
                    {role.type}
                  </span>
                  <span className="rounded-full bg-[#214daa]/15 px-3 py-1 text-xs text-[#8aa9ff]">
                    {role.location}
                  </span>
                </div>
                <h3 className="font-teko text-3xl font-semibold text-white">{role.title}</h3>
                <p className="mt-2 text-sm text-white/55">{role.focus}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-[#0a1020]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12">
            <p className="section-label mb-3">Culture</p>
            <h2 className="font-teko text-5xl font-bold leading-tight">
              Cross-border teams, client-first delivery, constant learning.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {culture.map((item) => (
              <div key={item.title} className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                <item.icon className="mb-5 h-6 w-6 text-[#214daa]" />
                <h3 className="font-teko text-2xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#080d18] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8">
          <div>
            <p className="section-label mb-4">Apply</p>
            <h2 className="section-heading text-white">
              Tell us how you want to grow.
            </h2>
            <p className="mt-4 max-w-xl text-white/55">
              This lightweight application form keeps the SRS career flow in place until a dedicated applicant tracking system is connected.
            </p>
          </div>
          <CareerApplyForm />
        </div>
      </section>
    </>
  );
}
