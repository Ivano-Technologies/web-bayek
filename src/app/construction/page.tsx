import type { Metadata } from "next";
import Link from "next/link";
import { BayekLoop } from "@/components/bayek-loop";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Bayek Construction",
  description:
    "Bayek Construction: architecture, project management, construction and electrical installations.",
};

export default function ConstructionPage() {
  return (
    <SiteShell theme="con" brand="construction" current="construction">
      <section className="con-hero">
        <BayekLoop className="loop-tint" />
        <div className="wrap grid">
          <div>
            <p className="eyebrow c">Bayek Construction</p>
            <h1 className="display">From design to completion.</h1>
            <p className="lead">
              Architectural, engineering and project management services shaped
              around each client&apos;s needs, delivered by a team that also
              builds. We work to improve the built environment and contribute to
              Nigeria&apos;s development.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                marginTop: "3rem",
              }}
            >
              <Link className="btn" href="/contact">
                Discuss a project
              </Link>
              <a className="btn ghost" href="#services">
                What we do
              </a>
            </div>
          </div>
          <div className="con-cols" aria-hidden="true">
            <div className="col a">
              <img
                src="/assets/photos/cover-worker-bw.jpg"
                alt=""
                style={{ objectPosition: "40% 30%" }}
              />
              <span
                className="block solid"
                style={{
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "20%",
                  background: "var(--con-clay)",
                }}
              />
              <span
                className="block"
                style={{
                  left: 0,
                  top: "20%",
                  width: "100%",
                  height: "14%",
                  background: "var(--con-red)",
                }}
              />
            </div>
            <div className="col b">
              <img
                src="/assets/photos/cover-site-bw.jpg"
                alt=""
                style={{ objectPosition: "50% 40%" }}
              />
              <span
                className="block"
                style={{
                  right: 0,
                  bottom: 0,
                  width: "52%",
                  height: "36%",
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

      <section id="services" className="section" style={{ background: "var(--paper)" }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow c">Areas of specialisation</span>
            <h2>The whole project lifecycle, in one firm.</h2>
          </div>
          <div className="spec-groups">
            <article>
              <h3>Architecture and design</h3>
              <ul>
                <li>Concept design and planning, residential and commercial</li>
                <li>
                  Sustainable building design, BIM and integrated project
                  delivery
                </li>
                <li>Landscape architecture and site planning</li>
                <li>Interior design</li>
                <li>Infrastructure and utility planning</li>
              </ul>
            </article>
            <article>
              <h3>Project management</h3>
              <ul>
                <li>Inception to completion</li>
                <li>Planning, scheduling and cost control</li>
                <li>Risk management</li>
                <li>Quality assurance and control</li>
                <li>Stakeholder communication</li>
              </ul>
            </article>
            <article>
              <h3>Construction and contract administration</h3>
              <ul>
                <li>General contracting and construction management</li>
                <li>Contract administration and negotiation</li>
                <li>Claims management and dispute resolution</li>
              </ul>
            </article>
            <article>
              <h3>Electrical and solar installations</h3>
              <ul>
                <li>
                  Electrical design and installation for buildings and
                  infrastructure
                </li>
                <li>Solar powered systems</li>
                <li>Energy storage and microgrids</li>
              </ul>
            </article>
            <article>
              <h3>Structural and civil works</h3>
              <ul>
                <li>Structural design for buildings and infrastructure</li>
                <li>Site development, grading and utilities</li>
                <li>Geotechnical and foundation design</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="band with-panel" aria-label="On site">
        <img
          src="/assets/photos/site-formwork-bw.jpg"
          alt="Formwork and reinforcement on a Bayek Construction housing site"
        />
        <div className="panel">
          <p className="eyebrow">Our first aim</p>
          <blockquote>
            Deliver every project safely, from concept to completion, on time
            and within budget.
          </blockquote>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow c">Aims</span>
            <h2>How we measure our work.</h2>
          </div>
          <div className="aims-wrap">
            <figure className="proj-photo">
              <img
                src="/assets/photos/site-team-colour.jpg"
                alt="Bayek Construction crew on foundation formwork at a housing site"
              />
            </figure>
            <div className="aims3 stack">
              <article>
                <h3>Delivery and design</h3>
                <p>
                  Creative, functional and sustainable design, with careful
                  workmanship, tailored to each client&apos;s needs.
                </p>
              </article>
              <article>
                <h3>Sustainability</h3>
                <p>
                  Environmental protection built into every stage, from design
                  to completion, and a business built for the long term.
                </p>
              </article>
              <article>
                <h3>Leadership and efficiency</h3>
                <p>
                  Leadership that puts quality first, backed by sound
                  operational, administrative and financial systems.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <div>
            <p className="eyebrow">Bayek Construction</p>
            <h2>Planning a building or site works?</h2>
            <p className="cta-mail">
              <a href="mailto:construction@bayek.org">construction@bayek.org</a>
            </p>
          </div>
          <div className="cta-acts">
            <Link className="btn on-dark" href="/contact">
              Contact Construction
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
