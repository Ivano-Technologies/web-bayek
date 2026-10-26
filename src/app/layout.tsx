import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bayek.org"),
  title: {
    default: "Bayek Group",
    template: "%s",
  },
  description:
    "Bayek brings together Bayek Integrated Services and Bayek Construction.",
  applicationName: "Bayek Group",
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "Bayek Group",
    url: "https://bayek.org",
    title: "Bayek Group",
    description:
      "Bayek brings together Bayek Integrated Services and Bayek Construction.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NG" className={montserrat.variable}>
      <body>{children}</body>
    </html>
  );
}
