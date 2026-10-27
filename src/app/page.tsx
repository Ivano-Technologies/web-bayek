import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Bayek",
  description:
    "Bayek brings together Bayek Integrated Services and Bayek Construction.",
};

export default function HomePage() {
  return (
    <SiteShell theme="group" brand="group">
      <section className="hero">
        <div
          className="ribbon"
          style={{
            right: -40,
            bottom: -60,
            width: 300,
            height: 760,
            opacity: 0.9,
          }}
        >
          <img src="/assets/ribbon.svg" alt="" />
        </div>
        <div className="wrap hero-grid">
          <div>
            <h1 className="display">Supply, build and deliver, under one name.</h1>
            <p className="lead">
              Bayek brings together two companies. Bayek Integrated Services
              handles contracts, trading, logistics, procurement and specialist
              supply. Bayek Construction designs, manages and builds, from
              concept to completion.
            </p>
            <div className="actions">
              <a className="btn" href="#companies">
                Our companies
              </a>
              <Link className="btn ghost" href="/contact">
                Contact us
              </Link>
            </div>
          </div>
          <div className="columns" aria-hidden="true">
            <div className="col a">
              <img
                src="/assets/photos/cover-worker-bw.jpg"
                alt=""
                style={{ objectPosition: "50% 30%" }}
              />
              <span
                className="block"
                style={{
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "28%",
                  background: "var(--int-teal)",
                }}
              />
            </div>
            <div className="col b">
              <img src="/assets/photos/cover-site-bw.jpg" alt="" />
              <span
                className="block"
                style={{
                  right: 0,
                  bottom: 0,
                  width: "62%",
                  height: "40%",
                  background: "var(--con-red)",
                }}
              />
              <span
                className="block solid"
                style={{
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: 10,
                  background: "var(--con-e)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="companies" className="doors" aria-label="Our companies">
        <Link className="door int" href="/integrated-services">
          <img
            className="mark"
            src="/assets/wordmark-integrated.svg"
            alt="Bayek Integrated Services"
          />
          <h2>Integrated Services</h2>
          <p style={{ maxWidth: "30em" }}>
            Contracts, trade and supply for public and private clients across
            Nigeria.
          </p>
          <ul>
            <li>General contracts</li>
            <li>Trading, imports and exports</li>
            <li>Logistics</li>
            <li>Procurement and supply</li>
            <li>Hospital and pharmaceutical equipment</li>
            <li>IT and printing</li>
            <li>Alternative power</li>
            <li>Automobiles</li>
            <li>Real estate</li>
            <li>Management training</li>
          </ul>
          <span className="go">
            Explore Integrated Services{" "}
            <span className="arrow" aria-hidden="true">
              &rarr;
            </span>
          </span>
        </Link>
        <Link className="door con" href="/construction">
          <div className="photo">
            <img
              src="/assets/photos/site-team-colour.jpg"
              alt="Bayek Construction team on site, checking reinforcement and formwork"
            />
          </div>
          <img
            className="mark"
            src="/assets/wordmark-construction-white.svg"
            alt="Bayek Construction"
          />
          <h2>Construction</h2>
          <p style={{ maxWidth: "30em" }}>
            Architecture, project management and building works, from first
            sketch to handover.
          </p>
          <ul>
            <li>Architecture and design</li>
            <li>Project management</li>
            <li>Construction and contract administration</li>
            <li>Electrical and solar installations</li>
            <li>Structural and civil works</li>
          </ul>
          <span className="go">
            Explore Construction{" "}
            <span className="arrow" aria-hidden="true">
              &rarr;
            </span>
          </span>
        </Link>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">How we work</span>
            <h2>Three commitments shared by both companies.</h2>
          </div>
          <div className="principles">
            <div className="principle">
              <span className="num">01</span>
              <h3>Safe, on time, on budget</h3>
              <p>
                We plan every project to be delivered safely, on schedule and
                within the agreed budget.
              </p>
            </div>
            <div className="principle">
              <span className="num">02</span>
              <h3>One point of contact</h3>
              <p>
                From sourcing equipment to managing a build, clients deal with
                one team that sees the work through.
              </p>
            </div>
            <div className="principle">
              <span className="num">03</span>
              <h3>Skilled people, local benefit</h3>
              <p>
                We develop a skilled workforce and support the communities where
                we work through jobs and local suppliers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band" aria-label="On site">
        <img
          src="/assets/photos/site-formwork-bw.jpg"
          alt="Workers crossing formwork and reinforcement on a Bayek Construction housing site"
        />
        <span className="caption">On site with Bayek Construction</span>
      </section>

      <section className="cta">
        <div className="wrap">
          <div>
            <p className="eyebrow">Work with Bayek</p>
            <h2>Tell us what you need supplied, managed or built.</h2>
            <p className="cta-mail">
              General enquiries <a href="mailto:hi@bayek.org">hi@bayek.org</a>
            </p>
          </div>
          <Link className="btn on-dark" href="/contact">
            Get in touch
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
