import type { Metadata } from "next";
import { BayekLoop } from "@/components/bayek-loop";
import { SiteShell } from "@/components/site-shell";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact | Bayek",
  description: "Contact Bayek Integrated Services and Bayek Construction.",
};

export default function ContactPage() {
  return (
    <SiteShell theme="base" brand="base" current="contact">
      <section className="hero contact-hero" style={{ paddingBottom: "var(--s-8)" }}>
        <BayekLoop className="loop-cover" />
        <div className="wrap">
          <p className="eyebrow">Contact</p>
          <h1 className="display" style={{ maxWidth: "11em" }}>
            Start with a conversation.
          </h1>
          <p className="lead" style={{ maxWidth: "34em" }}>
            Tell us about the goods, service or project you have in mind and we
            will put you in touch with the right team.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="contact-general">
            <div>
              <p className="eyebrow">General enquiries</p>
              <p className="big-mail">
                <a href="mailto:hi@bayek.org">hi@bayek.org</a>
              </p>
            </div>
            <div>
              <p className="eyebrow">Office</p>
              <p>Saham Plaza, Wuse II, Abuja</p>
            </div>
          </div>
        </div>
        <div className="wrap contact-grid">
          <div>
            <div className="card int">
              <img
                src="/assets/wordmark-integrated.svg"
                alt="Bayek Integrated Services"
              />
              <dl>
                <dt>Email</dt>
                <dd>
                  <a href="mailto:services@bayek.org">services@bayek.org</a>
                </dd>
              </dl>
            </div>
            <div className="card con">
              <img
                src="/assets/wordmark-construction.svg"
                alt="Bayek Construction"
              />
              <dl>
                <dt>Email</dt>
                <dd>
                  <a href="mailto:construction@bayek.org">
                    construction@bayek.org
                  </a>
                </dd>
              </dl>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </SiteShell>
  );
}
