"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type CareerFormState = {
  name: string;
  email: string;
  role: string;
  location: string;
  profile: string;
};

const emptyCareerForm: CareerFormState = {
  name: "",
  email: "",
  role: "",
  location: "",
  profile: "",
};

export default function CareerApplyForm() {
  const [form, setForm] = useState<CareerFormState>(emptyCareerForm);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = event.target.name as keyof CareerFormState;
    const { value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formsubmit.co/ajax/conglomerate.it@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          "Submission Type": "Career Application",
          Name: form.name,
          Email: form.email,
          Role: form.role,
          Location: form.location,
          Profile: form.profile,
        }),
      });

      if (response.ok) {
        setStatus("sent");
        setForm(emptyCareerForm);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="card p-8 text-center">
        <CheckCircle2 className="mx-auto mb-4 h-11 w-11 text-[#214daa]" />
        <h3 className="font-teko text-3xl font-semibold text-white">Application received</h3>
        <p className="mt-2 text-sm text-white/55">
          The CGIT team will review your profile and follow up when there is a match.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card flex flex-col gap-4 p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" value={form.name} onChange={handleChange} required />
        <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Role of interest" name="role" value={form.role} onChange={handleChange} required />
        <Field label="Location" name="location" value={form.location} onChange={handleChange} />
      </div>
      <div>
        <label className="mb-1.5 block text-xs text-white/50">LinkedIn, portfolio, or short profile *</label>
        <textarea
          name="profile"
          required
          value={form.profile}
          onChange={handleChange}
          rows={5}
          className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/20 transition-colors focus:border-[#214daa]/60 focus:outline-none"
          placeholder="Share your LinkedIn URL, resume link, or a short summary of your experience."
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary justify-center disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Submitting..." : "Submit application"}
        <ArrowRight className="h-4 w-4" />
      </button>
      {status === "error" && (
        <p className="text-center text-sm text-[#f40000]">
          Something went wrong. Please email info@conglomerateIt.com.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs text-white/50">
        {label} {required ? "*" : ""}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/20 transition-colors focus:border-[#214daa]/60 focus:outline-none"
      />
    </div>
  );
}
