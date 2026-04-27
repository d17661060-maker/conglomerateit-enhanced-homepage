import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/shared/PageHero";
import { legalPages, legalSlugs } from "@/lib/legal-content";

type LegalPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return legalSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: LegalPageProps): Metadata {
  const page = legalPages[params.slug];
  if (!page) {
    return { title: "Legal" };
  }

  return {
    title: page.title,
    description: page.description,
  };
}

export default function LegalPolicyPage({ params }: LegalPageProps) {
  const page = legalPages[params.slug];
  if (!page) notFound();

  return (
    <>
      <PageHero
        label="Legal & Policies"
        title={page.title}
        description={page.description}
        breadcrumbs={[
          { label: "Legal", href: "/legal" },
          { label: page.title },
        ]}
      />

      <section className="bg-[#080d18] py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="mb-8 rounded-lg border border-white/10 bg-white/[0.03] p-5 text-sm text-white/45">
            Source retained from legacy website: <span className="font-semibold text-white/70">{page.source}</span>
          </div>

          <div className="space-y-5">
            {page.sections.map((section) => (
              <article key={section.title} className="card p-7">
                <h2 className="font-teko text-3xl font-semibold text-white">
                  {section.title}
                </h2>

                {section.body?.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-sm leading-relaxed text-white/55">
                    {paragraph}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="mt-5 space-y-3">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/55">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#214daa]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.table && (
                  <div className="mt-5 overflow-hidden rounded-lg border border-white/10">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-white/[0.05] text-white/70">
                        <tr>
                          {section.table.columns.map((column) => (
                            <th key={column} className="px-4 py-3 font-semibold">
                              {column}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        {section.table.rows.map((row) => (
                          <tr key={row.join("-")} className="text-white/55">
                            {row.map((cell) => (
                              <td key={cell} className="px-4 py-3 align-top">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
