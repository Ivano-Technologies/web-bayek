import Link from "next/link";

export type Brand = "group" | "integrated" | "construction";
export type NavId = "about" | "integrated-services" | "construction" | "contact";

const WORDMARK: Record<Brand, { src: string; alt: string }> = {
  group: { src: "/assets/wordmark-group.svg", alt: "Bayek home" },
  integrated: { src: "/assets/wordmark-integrated.svg", alt: "Bayek home" },
  construction: { src: "/assets/wordmark-construction.svg", alt: "Bayek home" },
};

const NAV: { href: string; id: NavId; label: string }[] = [
  { href: "/about", id: "about", label: "About Bayek" },
  {
    href: "/integrated-services",
    id: "integrated-services",
    label: "Integrated Services",
  },
  { href: "/construction", id: "construction", label: "Construction" },
  { href: "/contact", id: "contact", label: "Contact" },
];

export function SiteHeader({
  brand,
  current,
}: {
  brand: Brand;
  current?: NavId;
}) {
  const mark = WORDMARK[brand];

  return (
    <header className="site-head">
      <div className="wrap">
        <Link className="brand" href="/">
          <img src={mark.src} alt={mark.alt} />
        </Link>
        <nav aria-label="Main">
          <ul className="nav">
            {NAV.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  aria-current={current === item.id ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
