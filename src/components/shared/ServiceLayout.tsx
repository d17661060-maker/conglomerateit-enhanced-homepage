import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "./PageHero";

interface ServiceLayoutProps {
  label: string;
  title: string;
  titleHighlight?: string;
  description: string;
  breadcrumbs: { label: string; href?: string }[];
  intro: string;
  features: string[];
  benefits: { title: string; description: string }[];
  relatedLinks?: { label: string; href: string }[];
}

export default function ServiceLayout({
  label,
  title,
  titleHighlight,
  description,
  breadcrumbs,
  intro,
  features,
  benefits,
  relatedLinks,
}: ServiceLayoutProps) {
  return (
    <>
      <PageHero
        label={label}
        title={title}
        titleHighlight={titleHighlight}
        description={description}
        breadcrumbs={breadcrumbs}
      />

      {/* Intro */}
      <section className="py-16 bg-[#080d18]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-white/70 text-lg leading-relaxed">{intro}</p>
              <Link href="/contact" className="btn-primary mt-8 inline-flex">
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {features.map((f) => (
                <div
                  key={f}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.07]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#214daa] mt-0.5 shrink-0" />
                  <span className="text-sm text-white/70">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <p className="section-label mb-3">Why Choose Us</p>
          <h2 className="section-heading text-white mb-12">
            Built for <span className="gradient-text">Real Results</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="card p-6">
                <div className="w-10 h-1 rounded-full mb-4" style={{ background: "linear-gradient(to right, #214daa, #f40000)" }} />
                <h3 className="font-teko font-semibold text-xl text-white mb-2">{b.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      {relatedLinks && relatedLinks.length > 0 && (
        <section className="py-14 bg-[#080d18] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h3 className="font-teko font-semibold text-2xl text-white mb-6">Related Services</h3>
            <div className="flex flex-wrap gap-3">
              {relatedLinks.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="px-5 py-2.5 rounded-full text-sm border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-all duration-200"
                >
                  {r.label} <ArrowRight className="inline w-3.5 h-3.5 ml-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-30" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="section-heading text-white mb-4">
            Ready to get <span className="gradient-text">started?</span>
          </h2>
          <p className="text-white/55 mb-8">
            Connect with our experts and see how ConglomerateIT can transform your business.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn-primary">
              Talk to an Expert <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/gcc" className="btn-outline">
              Explore GCC
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
