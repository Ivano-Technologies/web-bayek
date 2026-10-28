"use client";

import Link from "next/link";
import { useActionState } from "react";
import { sendEnquiry, type ContactState } from "./actions";

const initial: ContactState = { status: "idle" };

export function ContactForm() {
  const [state, action, pending] = useActionState(sendEnquiry, initial);

  return (
    <form action={action} aria-label="Enquiry form" noValidate>
      <h2 className="h3" style={{ marginBottom: "1.5rem" }}>
        Send an enquiry
      </h2>
      <div className="hp" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div className="field">
        <label htmlFor="t">Topic</label>
        <select id="t" name="topic" defaultValue="general" required>
          <option value="general">General</option>
          <option value="integrated-services">Integrated Services</option>
          <option value="construction">Construction</option>
        </select>
      </div>
      <div className="row2">
        <div className="field">
          <label htmlFor="n">Name</label>
          <input id="n" name="name" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="o">Organisation</label>
          <input id="o" name="organisation" autoComplete="organization" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="e">Email</label>
        <input id="e" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="m">What do you need?</label>
        <textarea id="m" name="message" required />
      </div>
      <button className="btn" type="submit" disabled={pending}>
        Send enquiry
      </button>
      <p className="form-privacy">
        We use your details only to reply to you. See our{" "}
        <Link href="/privacy">privacy notice</Link>.
      </p>
      {state.status === "ok" ? (
        <p className="form-status ok" role="status">
          Thank you. Your message has been sent.
        </p>
      ) : null}
      {state.status === "error" ? (
        <p className="form-status err" role="alert">
          {state.message}
        </p>
      ) : null}
      <p className="note">
        Your message goes straight to the team for the topic you choose.
      </p>
    </form>
  );
}
