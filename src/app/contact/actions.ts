"use server";

import { Resend } from "resend";
import {
  isEmail,
  isTopic,
  recipientForTopic,
  topicLabel,
} from "@/lib/contact";

export type ContactState =
  | { status: "idle" }
  | { status: "ok" }
  | { status: "error"; message: string };

function fail(message: string): ContactState {
  return { status: "error", message };
}

export async function sendEnquiry(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const honeypot = String(formData.get("website") ?? "").trim();
  if (honeypot) {
    return { status: "ok" };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const topicRaw = String(formData.get("topic") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const organisation = String(formData.get("organisation") ?? "").trim();

  if (!name || name.length > 120) {
    return fail("Please enter your name.");
  }
  if (!isEmail(email)) {
    return fail("Please enter a valid email address.");
  }
  if (!isTopic(topicRaw)) {
    return fail("Please choose a topic.");
  }
  if (!message || message.length > 5000) {
    return fail("Please tell us what you need.");
  }
  if (organisation.length > 200) {
    return fail("Please shorten the organisation name.");
  }

  const recipient = recipientForTopic(topicRaw);
  const dry =
    !process.env.RESEND_API_KEY || process.env.CONTACT_DRY_RUN === "true";

  if (dry) {
    console.info("[contact] dry-run recipient:", recipient);
    return { status: "ok" };
  }

  const label = topicLabel(topicRaw);
  const lines = [
    `Topic: ${label}`,
    `Name: ${name}`,
    organisation ? `Organisation: ${organisation}` : null,
    `Email: ${email}`,
    "",
    message,
  ].filter((line): line is string => line !== null);

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send(
    {
      from: "Bayek <no-reply@bayek.org>",
      to: [recipient],
      replyTo: email,
      subject: `Website enquiry (${label})`,
      text: lines.join("\n"),
    },
    { idempotencyKey: `contact-enquiry/${crypto.randomUUID()}` },
  );

  if (error) {
    console.error("[contact] send failed");
    return fail("Your message could not be sent. Please try again.");
  }

  return { status: "ok" };
}
