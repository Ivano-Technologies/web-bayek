import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <img src="/assets/wordmark-group.svg" alt="Bayek" />
            <p className="small muted" style={{ marginTop: "1.25rem", maxWidth: "26em" }}>
              Integrated services, supply and construction, from Abuja.
            </p>
          </div>
          <div>
            <h4>Companies</h4>
            <ul>
              <li>
                <Link href="/integrated-services">Bayek Integrated Services Ltd</Link>
              </li>
              <li>
                <Link href="/construction">Bayek Construction</Link>
              </li>
              <li>
                <Link href="/about">About Bayek</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:hi@bayek.org">hi@bayek.org</a>
              </li>
              <li>
                <Link href="/contact">All contact details</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
