import type { Metadata } from "next";
import { DM_Sans as Sans } from "next/font/google";
import Statsig from "./components/statsig";
import "./global.css";
import { baseUrl } from "./sitemap";
const sans = Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Kalin Patel",
    template: "%s – Kalin Patel",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  description: "Computer Science Student at the University of Illinois Urbana-Champaign",
  openGraph: {
    title: "Kalin Patel",
    description: "Computer Science Student at the University of Illinois Urbana-Champaign",
    url: baseUrl,
    siteName: "Kalin Patel",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cx("text-black bg-white text-white bg-black", sans.variable)}>
      <body className="antialiased">
        <Statsig>
          <main className="flex-auto min-w-0 flex flex-col">{children}</main>
        </Statsig>
      </body>
    </html>
  );
}
