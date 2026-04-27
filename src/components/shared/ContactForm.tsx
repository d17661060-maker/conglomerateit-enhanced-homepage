"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

type ContactFormState = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  phone: string;
  budget: string;
  useCase: string;
  privacy: boolean;
};

const emptyForm: ContactFormState = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  jobTitle: "",
  phone: "",
  budget: "",
  useCase: "",
  privacy: false,
};

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(emptyForm);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    if (e.target instanceof HTMLInputElement && e.target.type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setForm((prev) => ({ ...prev, privacy: target.checked }));
      return;
    }

    const name = e.target.name as Exclude<keyof ContactFormState, "privacy">;
    setForm((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/conglomerate.it@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          "First Name": form.firstName,
          "Last Name": form.lastName,
          "Work Email": form.email,
          Company: form.company,
          "Job Title": form.jobTitle,
          Phone: form.phone,
          Budget: form.budget,
          "Use Case": form.useCase,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm(emptyForm);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="card p-10 text-center">
        <CheckCircle2 className="w-12 h-12 text-[#214daa] mx-auto mb-4" />
        <h3 className="font-teko font-bold text-2xl text-white mb-2">Message Received!</h3>
        <p className="text-white/55">We&apos;ll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-white/50 mb-1.5 block">First Name *</label>
          <input
            type="text"
            name="firstName"
            required
            value={form.firstName}
            onChange={handleChange}
            className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#214daa]/60 transition-colors"
            placeholder="John"
          />
        </div>
        <div>
          <label className="text-xs text-white/50 mb-1.5 block">Last Name *</label>
          <input
            type="text"
            name="lastName"
            required
            value={form.lastName}
            onChange={handleChange}
            className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#214daa]/60 transition-colors"
            placeholder="Doe"
          />
        </div>
      </div>
      <div>
        <label className="text-xs text-white/50 mb-1.5 block">Work Email *</label>
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#214daa]/60 transition-colors"
          placeholder="john@company.com"
        />
      </div>
      <div>
        <label className="text-xs text-white/50 mb-1.5 block">Company</label>
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#214daa]/60 transition-colors"
          placeholder="Acme Inc."
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-white/50 mb-1.5 block">Job Title</label>
          <input
            type="text"
            name="jobTitle"
            value={form.jobTitle}
            onChange={handleChange}
            className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#214daa]/60 transition-colors"
            placeholder="CTO"
          />
        </div>
        <div>
          <label className="text-xs text-white/50 mb-1.5 block">Phone</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#214daa]/60 transition-colors"
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>
      <div>
        <label className="text-xs text-white/50 mb-1.5 block">Budget</label>
        <select
          name="budget"
          value={form.budget}
          onChange={handleChange}
          className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#214daa]/60 transition-colors"
        >
          <option value="" className="bg-[#080d18]">Select budget range</option>
          <option value="Exploring" className="bg-[#080d18]">Exploring</option>
          <option value="$25k-$75k" className="bg-[#080d18]">$25k-$75k</option>
          <option value="$75k-$250k" className="bg-[#080d18]">$75k-$250k</option>
          <option value="$250k+" className="bg-[#080d18]">$250k+</option>
        </select>
      </div>
      <div>
        <label className="text-xs text-white/50 mb-1.5 block">Use Case *</label>
        <textarea
          name="useCase"
          required
          rows={4}
          value={form.useCase}
          onChange={handleChange}
          className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#214daa]/60 transition-colors"
          placeholder="Tell us what you want to build, modernize, hire for, or launch."
        />
      </div>
      <label className="flex items-start gap-3 cursor-pointer mt-1">
        <input
          type="checkbox"
          name="privacy"
          required
          checked={form.privacy}
          onChange={handleChange}
          className="mt-1 accent-[#214daa]"
        />
        <span className="text-xs text-white/40 leading-relaxed">
          I agree to the{" "}
          <Link href="/legal/privacy-policy" className="text-[#214daa] hover:underline">
            Privacy Policy
          </Link>{" "}
          and consent to ConglomerateIT contacting me about their services.
        </span>
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary justify-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
        <ArrowRight className="w-4 h-4" />
      </button>
      {status === "error" && (
        <p className="text-sm text-[#f40000] text-center">
          Something went wrong. Please email us at info@conglomerateIt.com
        </p>
      )}
    </form>
  );
}
