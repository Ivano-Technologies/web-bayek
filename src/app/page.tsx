import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Bayek",
  description:
    "Bayek Integrated Services Ltd and Bayek Construction, two Abuja companies.",
};

export default function HomePage() {
  return (
    <SiteShell theme="base" brand="base">
      <section className="landing">
        <div className="wrap">
          <h1 className="landing-line">
            Two Abuja companies: contracts and supply, and design and
            construction.
          </h1>
          <div className="cos">
            <Link className="co int" href="/integrated-services">
              <span className="co-bar" aria-hidden="true" />
              <img
                className="mark"
                src="/assets/wordmark-integrated.svg"
                alt="Bayek Integrated Services"
              />
              <p>
                We provide a broad range of integrated services for clients
                across Nigeria, from general contracts and logistics to the
                supply of medical, IT and power equipment.
              </p>
              <span className="go">
                Bayek Integrated Services Ltd{" "}
                <span className="arrow" aria-hidden="true">
                  &rarr;
                </span>
              </span>
            </Link>
            <Link className="co con" href="/construction">
              <span className="co-bar" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <img
                className="mark"
                src="/assets/wordmark-construction.svg"
                alt="Bayek Construction"
              />
              <p>
                Architectural, engineering and project management services
                shaped around each client&apos;s needs, delivered by a team that
                also builds.
              </p>
              <span className="go">
                Bayek Construction{" "}
                <span className="arrow" aria-hidden="true">
                  &rarr;
                </span>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
