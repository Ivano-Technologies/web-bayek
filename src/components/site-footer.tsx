import Link from "next/link";
import { BayekLoop } from "@/components/bayek-loop";

export function SiteFooter() {
  return (
    <footer className="site-foot ink-band">
      <BayekLoop className="loop-foot" />
      <div className="wrap">
        <img className="foot-mark" src="/assets/mark-bayek-white.svg" alt="Bayek" />
        <div className="foot-grid">
          <div className="foot-co int">
            <h4>
              <Link href="/integrated-services">Bayek Integrated Services Ltd</Link>
            </h4>
            <ul>
              <li>
                <a href="mailto:services@bayek.org">services@bayek.org</a>
              </li>
              <li>
                <Link href="/integrated-services">Integrated Services</Link>
              </li>
            </ul>
          </div>
          <div className="foot-co con">
            <h4>
              <Link href="/construction">Bayek Construction</Link>
            </h4>
            <ul>
              <li>
                <a href="mailto:construction@bayek.org">construction@bayek.org</a>
              </li>
              <li>
                <Link href="/construction">Construction</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-base">
          <span>
            General enquiries <a href="mailto:hi@bayek.org">hi@bayek.org</a>
          </span>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
