import { appendRow } from "@/lib/google-sheets";

export const BRAND_NAME = "ValuationExpertWitness";

export const SHEET_COLUMN_HEADERS = [
  "Timestamp",
  "Full Name",
  "Email",
  "Phone",
  "Organisation",
  "Asset Types",
  "Legal Context",
  "Expert Discipline",
  "Hearing / Deadline",
  "Urgency",
  "Description",
  "Brand",
] as const;

export type LeadFormPayload = {
  fullName: string;
  email: string;
  phone?: string;
  organisation?: string;
  assetTypes?: string;
  legalContext?: string;
  expertDiscipline?: string;
  deadline?: string;
  urgency?: string;
  description?: string;
};

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

export function isGoogleSheetsConfigured(): boolean {
  return Boolean(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_PRIVATE_KEY &&
      process.env.GOOGLE_SHEET_ID
  );
}

export async function appendLeadToSheet(payload: LeadFormPayload): Promise<void> {
  const timestamp = new Date().toISOString();

  await appendRow([
    timestamp,
    sanitize(payload.fullName),
    payload.email.toLowerCase().trim(),
    payload.phone?.trim() ?? "",
    sanitize(payload.organisation ?? ""),
    payload.assetTypes ?? "",
    payload.legalContext ?? "",
    payload.expertDiscipline ?? "",
    payload.deadline ?? "",
    payload.urgency ?? "",
    sanitize(payload.description ?? ""),
    BRAND_NAME,
  ]);
}

export async function notifyLeadWebhook(
  payload: Pick<LeadFormPayload, "fullName" | "email" | "phone">
): Promise<void> {
  const webhookUrl =
    process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL;

  if (!webhookUrl) return;

  const body = {
    "Full Name": payload.fullName.trim(),
    Email: payload.email.trim(),
    "Phone Number": payload.phone?.trim() ?? "",
    "Brand name": BRAND_NAME,
  };

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error("Webhook request failed");
  }
}

export async function processLeadSubmission(payload: LeadFormPayload): Promise<void> {
  await appendLeadToSheet(payload);

  try {
    await notifyLeadWebhook(payload);
  } catch (error) {
    console.error("Lead webhook failed (sheet write succeeded):", error);
  }
}
