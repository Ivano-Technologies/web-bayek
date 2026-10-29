import type { Metadata } from "next";
import Link from "next/link";
import { BayekLoop } from "@/components/bayek-loop";
import { SiteShell } from "@/components/site-shell";
import { pageMetadata } from "@/lib/page-meta";

const DESCRIPTION =
  "Bayek is an Abuja business covering contracts and supply, and design and construction, for clients across Nigeria.";

export const metadata: Metadata = pageMetadata({
  path: "/",
  title: "Bayek",
  description: DESCRIPTION,
});

export default function HomePage() {
  return (
    <SiteShell theme="base" brand="base">
      <section className="home-hero ink-band">
        <BayekLoop className="loop-hero" variant="hero" />
        <div className="wrap">
          <h1 className="home-line">
            Contracts, supply, design and construction, delivered end to end.
          </h1>
          <p className="lead">
            Bayek serves clients across Nigeria, from general contracts,
            logistics and supply to architecture, project management and
            building.
          </p>
        </div>
      </section>

      <section className="home-what">
        <div className="wrap">
          <p className="eyebrow what-ey">What we do</p>
          <div className="what-grid">
            <Link className="what int" href="/integrated-services">
              <h2 className="h3">
                Integrated Services{" "}
                <span className="arrow" aria-hidden="true">
                  &rarr;
                </span>
              </h2>
              <p>
                Printing and corporate stationery, general contracts, trading,
                logistics, procurement and the supply of medical, IT and power
                equipment.
              </p>
            </Link>
            <Link className="what con" href="/construction">
              <h2 className="h3">
                Construction{" "}
                <span className="arrow" aria-hidden="true">
                  &rarr;
                </span>
              </h2>
              <p>
                Architecture, engineering and project management, through to
                construction and electrical installations.
              </p>
            </Link>
          </div>
          <div className="how">
            <p className="eyebrow">How we work</p>
            <p>
              We provide safe systems of work, train and supervise our people,
              and put quality first.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
