import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { pageMetadata } from "@/lib/page-meta";

export const metadata: Metadata = pageMetadata({
  path: "/privacy",
  title: "Privacy notice | Bayek",
  description:
    "How personal data sent through bayek.org is collected, used, shared and kept, and the rights you have under the Nigeria Data Protection Act 2023.",
});

export default function PrivacyPage() {
  return (
    <SiteShell theme="base" brand="base">
      <article className="section legal">
        <div className="wrap">
          <header className="legal-head">
            <h1>Privacy notice</h1>
            <p className="legal-date">Last updated 28 October 2026</p>
          </header>

          <div className="legal-body">
            <h2>Who we are</h2>
            <p>bayek.org presents two companies:</p>
            <ul>
              <li>
                <strong>Bayek Integrated Services Ltd</strong> (RC 7018053,
                registered with the Corporate Affairs Commission as Bayek
                Intergrated Services Ltd)
              </li>
              <li>
                <strong>Bayek Construction Ltd</strong>
              </li>
            </ul>
            <p>
              This website is owned and run by Ivano Technologies Ltd (RC
              9326735), which is the data controller for personal data collected
              through it. In this notice &quot;we&quot; means Ivano Technologies
              Ltd.
            </p>
            <p>
              Privacy contact: <a href="mailto:hi@bayek.org">hi@bayek.org</a>.
            </p>

            <h2>What we collect and why</h2>
            <div className="legal-table">
              <table>
                <thead>
                  <tr>
                    <th scope="col">What</th>
                    <th scope="col">When</th>
                    <th scope="col">Why</th>
                    <th scope="col">Lawful basis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="What">
                      Topic, name, organisation (optional), email address and
                      message
                    </td>
                    <td data-label="When">When you send the contact form</td>
                    <td data-label="Why">
                      To pass your message to the right team and reply to you
                    </td>
                    <td data-label="Lawful basis">
                      Our legitimate interest in answering enquiries, or steps
                      you ask us to take before a contract
                    </td>
                  </tr>
                  <tr>
                    <td data-label="What">
                      Anything you send by email to services@, construction@ or
                      hi@bayek.org
                    </td>
                    <td data-label="When">When you email us</td>
                    <td data-label="Why">The same</td>
                    <td data-label="Lawful basis">The same</td>
                  </tr>
                  <tr>
                    <td data-label="What">
                      Technical data such as IP address, browser type and the
                      page requested
                    </td>
                    <td data-label="When">Every visit, in our hosting provider&apos;s server logs</td>
                    <td data-label="Why">To keep the site running and secure, and to block spam</td>
                    <td data-label="Lawful basis">Our legitimate interest in running a secure website</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              We do not sell personal data, use it for advertising or make
              automated decisions about you.
            </p>

            <h2>Cookies</h2>
            <p>
              This website does not set cookies and does not use analytics or
              advertising trackers. If that changes we will add a cookie notice
              and ask for your consent first.
            </p>

            <h2>Who we share it with</h2>
            <ul>
              <li>
                <strong>Vercel Inc.</strong> hosts the website and keeps its
                server logs.
              </li>
              <li>
                <strong>Resend</strong> delivers contact form messages to our
                team inbox, using its United States (us-east-1) sending region.
              </li>
              <li>
                <strong>Zoho Corporation</strong> hosts our team mailboxes in its
                United States data centre.
              </li>
              <li>
                <strong>The Bayek company your message is about</strong>, so
                that its team can reply to you.
              </li>
            </ul>
            <p>We may also share data where the law requires it.</p>

            <h2>Transfers outside Nigeria</h2>
            <p>
              These providers store data outside Nigeria, including in the
              United States. We only transfer data where the Nigeria Data
              Protection Act 2023 allows it, for example with adequate
              protection or contractual safeguards in place (sections 41 to 43).
            </p>

            <h2>How long we keep it</h2>
            <ul>
              <li>
                Contact messages and replies: for as long as needed to answer you
                and follow up, and then deleted. If an enquiry becomes part of a
                contract, we keep it as part of that contract&apos;s records.
              </li>
              <li>
                Hosting server logs: kept for no more than 30 days under our
                hosting provider&apos;s published log retention limits.
              </li>
            </ul>

            <h2>Your rights</h2>
            <p>
              You can ask us to give you a copy of your data, correct it, delete
              it, limit or object to how we use it, give it to you in a reusable
              format, or withdraw consent. Email{" "}
              <a href="mailto:hi@bayek.org">hi@bayek.org</a> with the subject
              &quot;Data request&quot;. We will reply without undue delay, free
              of charge. We may ask you to confirm who you are.
            </p>
            <p>
              You can complain to the Nigeria Data Protection Commission (NDPC),{" "}
              <a href="https://ndpc.gov.ng" rel="noopener noreferrer">
                https://ndpc.gov.ng
              </a>
              .
            </p>

            <h2>If something goes wrong</h2>
            <p>
              If a breach affecting your data is likely to put your rights at
              risk, we will tell the NDPC within 72 hours and tell you without
              delay if the risk to you is high.
            </p>

            <h2>Children</h2>
            <p>
              This website is for businesses and adults. We do not knowingly
              collect data from anyone under 18.
            </p>

            <h2>Changes</h2>
            <p>If we change this notice we will update the date at the top.</p>
          </div>
        </div>
      </article>
    </SiteShell>
  );
}
