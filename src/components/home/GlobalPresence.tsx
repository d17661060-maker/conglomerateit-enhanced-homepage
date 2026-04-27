import { MapPin } from "lucide-react";

const offices = [
  {
    country: "USA",
    flag: "🇺🇸",
    address: "3721 S Stonebridge Dr, Unit 701, McKinney, TX 75070",
    highlight: "Headquarters",
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    address: "60 Atlantic Avenue, Suite 200, Toronto, Ontario M6K 1X9",
    highlight: "",
  },
  {
    country: "India",
    flag: "🇮🇳",
    address: "5th Floor, A&A Lake Front Building, Madhapur, Hyderabad – 500081",
    highlight: "Engineering Hub",
  },
  {
    country: "UK",
    flag: "🇬🇧",
    address: "United Kingdom",
    highlight: "EMEA Office",
  },
];

export default function GlobalPresence() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Global Presence</p>
          <h2 className="section-heading text-white">
            Offices across <span className="gradient-text">4 continents</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {offices.map((o) => (
            <div key={o.country} className="card p-6 group">
              <div className="text-3xl mb-4">{o.flag}</div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-teko font-semibold text-xl text-white">{o.country}</h3>
                {o.highlight && (
                  <span className="text-[0.65rem] px-2 py-0.5 rounded-full bg-[#214daa]/20 text-[#214daa] font-medium border border-[#214daa]/20">
                    {o.highlight}
                  </span>
                )}
              </div>
              <div className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-white/25 mt-0.5 shrink-0" />
                <p className="text-sm text-white/45 leading-relaxed">{o.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
