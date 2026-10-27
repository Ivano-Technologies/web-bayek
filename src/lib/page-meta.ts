import type { Metadata } from "next";

export const SITE_URL = "https://bayek.org";

type PageMetaInput = {
  /** Route path, for example "/" or "/contact". */
  path: string;
  title: string;
  description: string;
};

/**
 * Builds per-page metadata with a self-referencing canonical, a page-specific
 * og:url and matching Open Graph and Twitter title and description.
 *
 * Next.js merges metadata shallowly, so the shared Open Graph fields from the
 * root layout are repeated here to keep them on every page.
 */
export function pageMetadata({ path, title, description }: PageMetaInput): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_NG",
      siteName: "Bayek",
      url,
      title,
      description,
    },
    twitter: {
      title,
      description,
    },
  };
}
