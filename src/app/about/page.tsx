import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "About Bayek",
  description: "About Bayek Integrated Services and Bayek Construction.",
};

export default function AboutPage() {
  return (
    <SiteShell theme="group" brand="group" current="about">
      <section className="hero" style={{ paddingBottom: "var(--s-9)" }}>
        <div
          className="ribbon rib-top"
          style={{
            right: -30,
            top: -120,
            width: 240,
            height: 620,
            opacity: 0.85,
          }}
        >
          <img src="/assets/ribbon.svg" alt="" />
        </div>
        <div className="wrap">
          <p className="eyebrow">About Bayek</p>
          <h1 className="display" style={{ maxWidth: "12em" }}>
            Two companies, one standard of work.
          </h1>
          <p className="lead" style={{ maxWidth: "38em" }}>
            Bayek Integrated Services handles contracts and supply. Bayek
            Construction handles design and construction.
          </p>
        </div>
      </section>

      <section className="section tight" style={{ background: "var(--paper)" }}>
        <div className="wrap split">
          <div>
            <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>
              Mission
            </p>
            <p className="statement">
              To deliver high quality services that meet our clients&apos; needs
              and contribute to their success, and to build{" "}
              <strong>
                long-term relationships based on trust, integrity and mutual
                respect.
              </strong>
            </p>
          </div>
          <div>
            <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>
              Vision
            </p>
            <p className="statement">
              To set the standard for{" "}
              <strong>quality, efficiency and customer satisfaction</strong>,
              with a culture of excellence and continuous improvement.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">The companies</span>
            <h2>Each company has its own focus and its own team.</h2>
          </div>
          <div className="co-row">
            <div className="stripe" aria-hidden="true">
              <i style={{ background: "var(--int-teal)" }} />
              <i style={{ background: "var(--int-teal)", marginTop: "40%" }} />
            </div>
            <div>
              <img
                className="mark"
                src="/assets/wordmark-integrated.svg"
                alt="Bayek Integrated Services"
              />
              <p style={{ marginTop: "1.5rem" }} className="muted">
                A multi-sector company serving clients across Nigeria, from
                general contracts to the supply of medical, IT and power
                equipment.
              </p>
              <p style={{ marginTop: "1.5rem" }}>
                <Link className="btn ghost" href="/integrated-services">
                  Integrated Services
                </Link>
              </p>
            </div>
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
          </div>
          <div className="co-row">
            <div className="stripe" aria-hidden="true">
              <i style={{ background: "var(--con-clay)" }} />
              <i style={{ background: "var(--con-red)", marginTop: "40%" }} />
            </div>
            <div>
              <img
                className="mark"
                src="/assets/wordmark-construction.svg"
                alt="Bayek Construction"
              />
              <p style={{ marginTop: "1.5rem" }} className="muted">
                Architectural, engineering, project management and construction
                services, from concept to completion.
              </p>
              <p style={{ marginTop: "1.5rem" }}>
                <Link className="btn ghost" href="/construction">
                  Construction
                </Link>
              </p>
            </div>
            <ul>
              <li>Architecture and design</li>
              <li>Project management</li>
              <li>Construction and contract administration</li>
              <li>Electrical and solar installations</li>
              <li>Structural and civil works</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--grey-100)" }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Aims</span>
            <h2>What we hold ourselves to.</h2>
          </div>
          <ol className="numbered">
            <li>
              <span className="n">01</span>
              <div>
                <h3>A complete service</h3>
                <p>
                  Cover our clients&apos; needs from project management and
                  procurement to construction, power and equipment supply.
                </p>
              </div>
            </li>
            <li>
              <span className="n">02</span>
              <div>
                <h3>Efficient and safe delivery</h3>
                <p>
                  Deliver efficiently, effectively and safely, using current
                  technology and good practice.
                </p>
              </div>
            </li>
            <li>
              <span className="n">03</span>
              <div>
                <h3>A skilled workforce</h3>
                <p>
                  Attract, develop and keep skilled, motivated people who share
                  our values.
                </p>
              </div>
            </li>
            <li>
              <span className="n">04</span>
              <div>
                <h3>Responsible growth</h3>
                <p>
                  Create jobs, support local businesses and act responsibly
                  towards people and the environment.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>
              Health and safety
            </p>
            <h2>Safety is led from the top.</h2>
            <p className="lead" style={{ marginTop: "1.5rem" }}>
              Our directors take collective responsibility for health and safety
              and expect every part of the business to reflect it.
            </p>
          </div>
          <ul className="ruled">
            <li>Safe workplaces and safe systems of work</li>
            <li>
              Information, instruction, training and supervision for all staff
            </li>
            <li>Resources to make the policy work</li>
            <li>Regular consultation with staff and contractors</li>
            <li>Regular review of performance and incidents</li>
          </ul>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <div>
            <h2>Talk to the team that fits your project.</h2>
            <p className="cta-mail">
              General enquiries <a href="mailto:hi@bayek.org">hi@bayek.org</a>
            </p>
          </div>
          <Link className="btn on-dark" href="/contact">
            Contact us
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
