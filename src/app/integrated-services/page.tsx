import type { Metadata } from "next";
import Link from "next/link";
import { BayekLoop } from "@/components/bayek-loop";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Bayek Integrated Services",
  description:
    "Bayek Integrated Services Ltd: printing and corporate stationery, contracts, trading, logistics, procurement and supply.",
};

export default function IntegratedServicesPage() {
  return (
    <SiteShell theme="int" brand="integrated" current="integrated-services">
      <section className="int-hero">
        <BayekLoop className="loop-cover" />
        <div className="wrap grid">
          <div className="text">
            <p className="eyebrow c">Bayek Integrated Services Ltd</p>
            <h1 className="display">
              Printing, contracts, trade and supply, handled by one team.
            </h1>
            <p className="lead">
              We provide a broad range of integrated services for clients across
              Nigeria, from printing and corporate stationery, general contracts
              and logistics to the supply of medical, IT and power equipment.
            </p>
            <div
              className="actions"
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                marginTop: "3rem",
              }}
            >
              <Link className="btn" href="/contact">
                Talk to us
              </Link>
              <a className="btn ghost" href="#areas">
                Areas of operation
              </a>
            </div>
          </div>
          <div className="teal-cols" aria-hidden="true">
            <span className="pill" />
            <i />
            <i />
          </div>
        </div>
      </section>

      <section id="areas" className="section">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow c">Areas of operation</span>
            <h2>Nine lines of business, one point of contact.</h2>
          </div>
          <ol className="numbered">
            <li className="lead-area">
              <span className="n">I</span>
              <div>
                <h3>Printing and stationery</h3>
                <p>Brochures, reports and corporate stationery, delivered on deadline.</p>
              </div>
            </li>
            <li>
              <span className="n">II</span>
              <div>
                <h3>General contracts</h3>
                <p>Building construction, civil works and electrical installations.</p>
              </div>
            </li>
            <li>
              <span className="n">III</span>
              <div>
                <h3>Trading, imports and exports</h3>
                <p>Trading in goods and products, locally and internationally.</p>
              </div>
            </li>
            <li>
              <span className="n">IV</span>
              <div>
                <h3>Logistics</h3>
                <p>Transport, warehousing and distribution, delivered safely and on time.</p>
              </div>
            </li>
            <li>
              <span className="n">V</span>
              <div>
                <h3>Procurement and supply</h3>
                <p>Sourcing, negotiation, delivery and after-sales support for general goods.</p>
              </div>
            </li>
            <li>
              <span className="n">VI</span>
              <div>
                <h3>Hospital and pharmaceutical equipment</h3>
                <p>Supply and distribution of hospital and pharmaceutical equipment and products.</p>
              </div>
            </li>
            <li>
              <span className="n">VII</span>
              <div>
                <h3>IT products</h3>
                <p>Software development, network installation and data management.</p>
              </div>
            </li>
            <li>
              <span className="n">VIII</span>
              <div>
                <h3>Alternative power</h3>
                <p>Solar power systems, generators, inverters and backup power.</p>
              </div>
            </li>
            <li>
              <span className="n">IX</span>
              <div>
                <h3>Management training</h3>
                <p>Management consultancy and training for growing businesses.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="section spec">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Specialisation</span>
            <h2>Where our team has the deepest experience.</h2>
          </div>
          <div className="spec-grid">
            <div>
              <h3>Project management</h3>
              <p>
                Budgeting, planning, scheduling, coordination, monitoring and
                evaluation.
              </p>
            </div>
            <div>
              <h3>Real estate and property development</h3>
              <p>
                Feasibility studies, land acquisition, design, construction,
                marketing and sales.
              </p>
            </div>
            <div>
              <h3>Information technology</h3>
              <p>Software, networks and data management.</p>
            </div>
            <div>
              <h3>Automobile sales</h3>
              <p>
                New and used vehicle sales, spare parts supply and vehicle
                maintenance.
              </p>
            </div>
            <div>
              <h3>Alternative energy</h3>
              <p>Solar power systems, inverters and backup power solutions.</p>
            </div>
            <div>
              <h3>Medical equipment and consumables</h3>
              <p>
                Hospital and pharmaceutical equipment, consumables, dental
                materials, furniture and kits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap feature gc">
          <div className="gc-panel" aria-label="General contracts cover">
            <p className="gc-item">
              <span>01</span>Building construction
            </p>
            <p className="gc-item">
              <span>02</span>Civil works
            </p>
            <p className="gc-item">
              <span>03</span>Electrical installations
            </p>
          </div>
          <div>
            <p className="eyebrow c">General contracts</p>
            <h2 style={{ margin: "1rem 0 1.5rem" }}>
              Building, civil and electrical works, planned and managed by one
              team.
            </h2>
            <p className="lead">
              Our general contracts cover building construction, civil works and
              electrical installations.
            </p>
            <p style={{ marginTop: "2rem" }}>
              <Link className="btn ghost" href="/contact">
                Discuss a contract
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--int-tint)" }}>
        <div className="wrap split">
          <div>
            <p className="eyebrow c" style={{ marginBottom: "1.25rem" }}>
              Health and safety
            </p>
            <h2>Safe systems of work, for everyone on site.</h2>
          </div>
          <div>
            <p className="lead">
              Our directors lead on health and safety. We provide safe
              workplaces and safe systems of work, train and supervise our
              people, consult staff and contractors, and review performance
              regularly.
            </p>
          </div>
        </div>
      </section>

      <section
        className="section tight clients"
        aria-labelledby="clients-int"
      >
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow c" id="clients-int">
              Selected clients
            </span>
            <p className="clients-intro">
              Organisations we have worked with include:
            </p>
          </div>
          <ul className="client-list">
            <li>
              <span className="cl-name">Nigerian Education Loan Fund</span>{" "}
              <span className="cl-short">NELFUND</span>
              <span className="cl-proj">
                Printed and delivered 2,500 copies of the NELFUND Progress
                Report Brochure for the South-West sensitisation. Jan to Feb
                2026.
              </span>
            </li>
            <li>
              <span className="cl-name">Nigerians in Diaspora Commission</span>{" "}
              <span className="cl-short">NIDCOM</span>
              <span className="cl-proj">
                Supplied stationery for NIDCOM headquarters, completed in one
                week. Mar to Apr 2025.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <div>
            <p className="eyebrow">Bayek Integrated Services</p>
            <h2>Need something sourced, supplied or delivered?</h2>
            <p className="cta-mail">
              <a href="mailto:services@bayek.org">services@bayek.org</a>
            </p>
          </div>
          <div className="cta-acts">
            <Link className="btn on-dark" href="/contact">
              Contact Integrated Services
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
