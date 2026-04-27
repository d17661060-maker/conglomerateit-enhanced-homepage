import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function StripeStyleClients() {
  const clients = [
    {
      name: "HealthTech Solutions",
      title: "HealthTech Solutions transforms QA processes with ConglomerateIT",
      description: "HealthTech Solutions revolutionized their quality assurance processes, achieving 42% faster release cycles while maintaining full HIPAA compliance through our AI-first testing approach.",
      stats: [
        { value: "42%", label: "Faster releases" },
        { value: "100%", label: "HIPAA compliant" }
      ],
      category: "Healthcare"
    },
    {
      name: "FinCore Systems", 
      title: "FinCore Systems modernizes infrastructure with ConglomerateIT",
      description: "FinCore Systems achieved 35% infrastructure cost reduction while significantly improving PCI-DSS readiness through our cloud modernization expertise.",
      stats: [
        { value: "35%", label: "Cost reduction" },
        { value: "100%", label: "PCI-DSS ready" }
      ],
      category: "Financial Services"
    },
    {
      name: "Global Sales Corp",
      title: "Global Sales Corp unifies sales workflow with ConglomerateIT",
      description: "Global Sales Corp transformed their entire sales workflow with Salesforce integration, providing unprecedented executive visibility and operational efficiency.",
      stats: [
        { value: "100%", label: "Workflow unified" },
        { value: "60%", label: "Efficiency gain" }
      ],
      category: "Retail"
    },
    {
      name: "RetailFlow",
      title: "RetailFlow scales platform with ConglomerateIT's AI-first approach",
      description: "RetailFlow successfully scaled their platform while maintaining exceptional performance through our AI-first approach to infrastructure and development.",
      stats: [
        { value: "10x", label: "Platform scale" },
        { value: "99.9%", label: "Uptime" }
      ],
      category: "E-commerce"
    }
  ];

  return (
    <section className="bg-gray-50 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
            Powering businesses of all sizes
          </h2>
          <p className="mt-6 text-xl text-gray-600">
            Transform your enterprise with agile IT infrastructure
          </p>
        </div>

        {/* Client Stories Grid */}
        <div className="space-y-20">
          {clients.map((client, index) => (
            <div key={client.name} className="grid gap-12 lg:grid-cols-2 lg:items-center">
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#1e40af]/10 px-3 py-1 text-sm font-semibold text-[#1e40af] mb-4">
                  {client.category}
                </div>
                
                <h3 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl mb-6">
                  {client.name} transforms with ConglomerateIT
                </h3>
                
                <p className="text-lg text-gray-600 mb-8">
                  {client.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {client.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 text-[16px] font-semibold text-[#1e40af] transition-colors hover:text-[#0f172a]"
                >
                  Read the story <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              {/* Visual Placeholder */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="bg-gradient-to-br from-[#1e40af]/10 to-[#dc2626]/10 rounded-2xl p-12 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#1e40af] to-[#3b82f6] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                      {client.name.split(' ').map(word => word[0]).join('')}
                    </div>
                    <div className="text-lg font-semibold text-gray-900">{client.name}</div>
                    <div className="text-sm text-gray-600">Success Story</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#1e40af] px-8 py-4 text-[16px] font-semibold text-white transition-colors hover:bg-[#0f172a]">
            View all client stories <ArrowRight className="h-5 w-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
