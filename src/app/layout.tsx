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
    "Bayek is an Abuja business covering contracts and supply, and design and construction, for clients across Nigeria.",
  applicationName: "Bayek",
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "Bayek",
    url: "https://bayek.org",
    title: "Bayek",
    description:
      "Bayek is an Abuja business covering contracts and supply, and design and construction, for clients across Nigeria.",
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
