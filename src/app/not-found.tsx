import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

export default function NotFound() {
  return (
    <SiteShell theme="group" brand="group">
      <section className="hero not-found">
        <div className="wrap">
          <p className="eyebrow">Page not found</p>
          <h1 className="display">This page could not be found.</h1>
          <p className="lead" style={{ maxWidth: "34em" }}>
            The address may have changed, or the page is not on this site.
          </p>
          <div className="actions">
            <Link className="btn" href="/">
              Back to Bayek
            </Link>
            <Link className="btn ghost" href="/contact">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
