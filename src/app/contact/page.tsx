import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Connect with ConglomerateIT. Reach our global team across USA, Canada, India, and UK. We respond within 24 hours.",
};

const offices = [
  {
    country: "USA — Headquarters",
    flag: "🇺🇸",
    address: "3721 S Stonebridge Dr, Unit 701\nMcKinney, TX 75070",
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    address: "60 Atlantic Avenue, Suite 200\nToronto, Ontario M6K 1X9",
  },
  {
    country: "India",
    flag: "🇮🇳",
    address: "5th Floor, A&A Lake Front Building\nMadhapur, Hyderabad – 500081",
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    address: "EMEA Office\nUnited Kingdom",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-[#0a2540]">
        <div className="absolute inset-0 bg-mesh grid-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <p className="section-label mb-4 justify-center">Contact Us</p>
          <h1
            className="font-teko font-bold text-white mb-5 leading-tight"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
          >
            Connect with Us —{" "}
            <span className="gradient-text">Let&apos;s Build the Future Together</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Reach out and our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Form + offices */}
      <section className="py-16 bg-[#080d18]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-14">
          {/* Form */}
          <div>
            <h2 className="font-teko font-bold text-3xl text-white mb-8">Send Us a Message</h2>
            <ContactForm />
          </div>

          {/* Contact info */}
          <div>
            <h2 className="font-teko font-bold text-3xl text-white mb-8">Our Offices</h2>
            <div className="flex flex-col gap-4">
              {offices.map((o) => (
                <div key={o.country} className="card p-5 flex items-start gap-4">
                  <span className="text-2xl shrink-0">{o.flag}</span>
                  <div>
                    <h3 className="font-semibold text-white text-sm mb-1">{o.country}</h3>
                    <p className="text-sm text-white/45 whitespace-pre-line">{o.address}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 card p-5 flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#214daa] shrink-0" />
              <div>
                <p className="text-xs text-white/40 mb-0.5">Email us</p>
                <a
                  href="mailto:info@conglomerateIt.com"
                  className="text-sm text-white hover:text-[#214daa] transition-colors font-medium"
                >
                  info@conglomerateIt.com
                </a>
              </div>
            </div>

            <div
              className="mt-4 p-5 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(33,77,170,0.15), rgba(244,0,0,0.08))",
                border: "1px solid rgba(33,77,170,0.2)",
              }}
            >
              <p className="text-sm font-semibold text-white mb-1">Response within 24 hours</p>
              <p className="text-xs text-white/40">
                Our team is available Monday–Friday across all time zones. For urgent matters, please
                note &ldquo;Urgent&rdquo; in your message.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
