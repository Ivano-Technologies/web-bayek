import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { pageMetadata } from "@/lib/page-meta";

export const metadata: Metadata = pageMetadata({
  path: "/terms",
  title: "Terms of use | Bayek",
  description:
    "The terms for using bayek.org, the website of Bayek Integrated Services Ltd and Bayek Construction Ltd.",
});

export default function TermsPage() {
  return (
    <SiteShell theme="base" brand="base">
      <article className="section legal">
        <div className="wrap">
          <header className="legal-head">
            <h1>Terms of use</h1>
            <p className="legal-date">Last updated 28 October 2026</p>
          </header>

          <div className="legal-body">
            <h2>About this site</h2>
            <p>
              bayek.org presents two individual companies, Bayek Integrated
              Services Ltd (RC 7018053, registered with the Corporate Affairs
              Commission as Bayek Intergrated Services Ltd) and Bayek
              Construction Ltd. Ivano Technologies Ltd (RC 9326735) owns the
              content of this site and runs it. Contact:{" "}
              <a href="mailto:hi@bayek.org">hi@bayek.org</a>.
            </p>
            <p>By using the site you agree to these terms.</p>

            <h2>Information only</h2>
            <p>
              The site describes the services of each company. It is general
              information, not an offer, a quote or professional advice, and it
              does not create a contract. Each company is responsible only for
              its own services, and any work is governed by a separate written
              agreement with the company concerned.
            </p>

            <h2>Names, marks and content</h2>
            <p>
              The Bayek name and marks and all content on this site are owned by
              Ivano Technologies Ltd. You may share links and short quotes with
              credit. You may not copy, reuse or present our content or marks as
              your own without written permission.
            </p>

            <h2>Using the site fairly</h2>
            <p>
              Do not try to break, overload or gain unauthorised access to the
              site, or use the contact form to send spam or unlawful content.
            </p>

            <h2>No guarantee</h2>
            <p>
              The site is provided &quot;as is&quot;. We do not promise that it
              will always be available, error free or up to date. Project
              descriptions are examples and do not guarantee results.
            </p>

            <h2>Limits on liability</h2>
            <p>
              To the extent the law allows, neither the Bayek companies nor Ivano
              Technologies Ltd is liable for any indirect or consequential loss,
              or for loss of profit, data or business, arising from use of this
              site. Nothing here limits liability that cannot be limited under
              Nigerian law.
            </p>

            <h2>Privacy</h2>
            <p>
              See our Privacy notice at <Link href="/privacy">/privacy</Link>.
            </p>

            <h2>Changes</h2>
            <p>
              We may update these terms. The date at the top shows when they
              last changed.
            </p>

            <h2>Law and disputes</h2>
            <p>
              These terms are governed by the laws of the Federal Republic of
              Nigeria. The courts of the Federal Capital Territory, Abuja have
              jurisdiction.
            </p>
          </div>
        </div>
      </article>
    </SiteShell>
  );
}
