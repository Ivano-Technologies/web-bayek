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
    default: "Bayek",
    template: "%s",
  },
  description:
    "Bayek Integrated Services Ltd and Bayek Construction, two Abuja companies.",
  applicationName: "Bayek",
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "Bayek",
    url: "https://bayek.org",
    title: "Bayek",
    description:
      "Bayek Integrated Services Ltd and Bayek Construction, two Abuja companies.",
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
