import { SiteFooter } from "@/components/site-footer";
import {
  SiteHeader,
  type Brand,
  type NavId,
} from "@/components/site-header";

type Theme = "group" | "int" | "con";

export function SiteShell({
  theme,
  brand,
  current,
  children,
}: {
  theme: Theme;
  brand: Brand;
  current?: NavId;
  children: React.ReactNode;
}) {
  return (
    <div className={`theme-${theme}`}>
      <SiteHeader brand={brand} current={current} />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
