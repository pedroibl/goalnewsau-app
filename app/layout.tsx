import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GoalNews AU — Australian Football & Soccer News",
  description:
    "Australia's home for A-League, NRL, Matildas, and World Cup coverage. Live scores, breaking news, and expert analysis from GoalNews AU.",
  keywords: ["A-League", "NRL", "Matildas", "World Cup", "Australian football", "soccer news"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <body
        style={{ background: "var(--bg-deep)", color: "var(--color-text)" }}
        className="min-h-full flex flex-col"
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer
          style={{
            background: "var(--bg-surface)",
            borderTop: "1px solid var(--color-border)",
            color: "var(--color-secondary)",
          }}
          className="py-8 text-center text-sm"
        >
          <div className="max-w-7xl mx-auto px-4">
            <p>
              &copy; {new Date().getFullYear()}{" "}
              <span style={{ color: "var(--color-text)" }}>GoalNews AU</span>. All rights reserved.
            </p>
            <p className="mt-1">
              Australia&apos;s home for A-League, NRL, Matildas &amp; World Cup news.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
