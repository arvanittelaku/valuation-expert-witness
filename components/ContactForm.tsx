"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { SITE_EMAIL } from "@/lib/site";

const ASSET_TYPES = [
  "Business / Shares",
  "Property / Land",
  "Intellectual Property",
  "Plant & Machinery",
  "Art / Antiques / Chattels",
  "Financial Instruments",
  "Goodwill / Intangibles",
  "Specialist Assets",
  "Multiple / Not Sure",
];

const LEGAL_CONTEXTS = [
  "Shareholder Dispute",
  "Divorce / Financial Remedy",
  "Compulsory Purchase",
  "Professional Negligence",
  "IP Infringement",
  "Probate / Estate",
  "Lease Renewal / Rent Review",
  "Insurance Claim",
  "Tax Dispute",
  "International Arbitration",
  "Other",
];

const EXPERT_DISCIPLINES = [
  "Forensic Accountant",
  "RICS Chartered Surveyor",
  "IP Specialist",
  "Plant & Machinery Valuer",
  "Art / Specialist Valuer",
  "Financial Instruments Specialist",
  "Multiple / Not Sure",
];

const URGENCY_OPTIONS = [
  "Standard (within 1 business day)",
  "Urgent (within 24 hours)",
  "Hearing within 3 months",
  "Hearing listed, immediate",
];

const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
const formspreeUrl = formspreeId ? `https://formspree.io/f/${formspreeId}` : null;

async function submitToFormspree(form: HTMLFormElement): Promise<boolean> {
  if (!formspreeUrl) return false;
  try {
    const data = new FormData(form);
    data.set("assetTypes", data.get("assetTypes") || "");
    const res = await fetch(formspreeUrl, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data,
    });
    return res.ok;
  } catch {
    return false;
  }
}

export default function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [selectedAssets, setSelectedAssets] = useState<string[]>([]);

  function toggleAsset(asset: string) {
    setSelectedAssets((prev) =>
      prev.includes(asset) ? prev.filter((a) => a !== asset) : [...prev, asset]
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const assetTypes = selectedAssets.join(", ");

    const leadPayload = {
      fullName: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      organisation: String(data.get("organisation") || "").trim(),
      assetTypes,
      legalContext: String(data.get("legalContext") || "").trim(),
      expertDiscipline: String(data.get("expertDiscipline") || "").trim(),
      deadline: String(data.get("deadline") || "").trim(),
      urgency: String(data.get("urgency") || "").trim(),
      description: String(data.get("description") || "").trim(),
    };

    if (!leadPayload.fullName || !leadPayload.email) {
      setStatus("error");
      setErrorMessage("Please enter your full name and email.");
      return;
    }

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadPayload),
      });

      if (res.ok) {
        router.push("/thank-you");
        return;
      }

      if (res.status === 503 && (await submitToFormspree(form))) {
        router.push("/thank-you");
        return;
      }

      setStatus("error");
      setErrorMessage(
        res.status === 503
          ? "Lead delivery is not configured. Please email us directly."
          : "Something went wrong. Please try again or email us directly."
      );
    } catch {
      if (await submitToFormspree(form)) {
        router.push("/thank-you");
        return;
      }
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or email us directly.");
    }
  }

  const inputClass =
    "w-full min-h-[44px] min-w-0 rounded border border-border px-3 py-2 text-base text-body focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 sm:text-sm";
  const labelClass = "mb-1 block text-sm font-medium text-heading";

  return (
    <form onSubmit={handleSubmit} className="min-w-0 space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor="name" className={labelClass}>
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
          />
        </div>
        <div className="min-w-0">
          <label htmlFor="organisation" className={labelClass}>
            Organisation *
          </label>
          <input
            id="organisation"
            name="organisation"
            type="text"
            required
            autoComplete="organization"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </div>
        <div className="min-w-0">
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
          />
        </div>
      </div>

      <fieldset className="min-w-0">
        <legend className={labelClass}>Asset Type (select all that apply)</legend>
        <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {ASSET_TYPES.map((asset) => (
            <label
              key={asset}
              className="flex min-h-[44px] items-center gap-2 rounded border border-border px-3 py-2 text-sm text-body cursor-pointer hover:border-accent transition-colors"
            >
              <input
                type="checkbox"
                checked={selectedAssets.includes(asset)}
                onChange={() => toggleAsset(asset)}
                className="h-4 w-4 shrink-0 accent-accent"
              />
              <span className="break-words">{asset}</span>
            </label>
          ))}
        </div>
        <input type="hidden" name="assetTypes" value={selectedAssets.join(", ")} />
      </fieldset>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor="legalContext" className={labelClass}>
            Legal Context *
          </label>
          <select id="legalContext" name="legalContext" required className={inputClass}>
            <option value="">Select context</option>
            {LEGAL_CONTEXTS.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="min-w-0">
          <label htmlFor="expertDiscipline" className={labelClass}>
            Expert Discipline Needed
          </label>
          <select id="expertDiscipline" name="expertDiscipline" className={inputClass}>
            <option value="">Select discipline</option>
            {EXPERT_DISCIPLINES.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor="deadline" className={labelClass}>
            Hearing / deadline date
          </label>
          <input id="deadline" name="deadline" type="date" className={inputClass} />
        </div>
        <div className="min-w-0">
          <label htmlFor="urgency" className={labelClass}>
            Urgency
          </label>
          <select id="urgency" name="urgency" className={inputClass} defaultValue={URGENCY_OPTIONS[0]}>
            {URGENCY_OPTIONS.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="min-w-0">
        <label htmlFor="description" className={labelClass}>
          Brief description of the matter
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          className={`${inputClass} min-h-[120px] resize-y`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          {errorMessage ?? "Something went wrong. Please email "}
          <a href={`mailto:${SITE_EMAIL}`} className="underline">
            {SITE_EMAIL}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex min-h-[44px] w-full items-center justify-center rounded bg-accent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-accent/90 disabled:opacity-60 sm:w-auto sm:text-sm"
      >
        {status === "submitting" ? "Submitting..." : "Contact Us"}
      </button>
    </form>
  );
}
