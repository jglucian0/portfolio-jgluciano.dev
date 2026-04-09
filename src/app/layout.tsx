import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import logo_img from "./icon.png";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Navigation } from "@/components/ui/Navigation";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider>
          <div className="min-h-screen bg-[var(--bg-secondary)]">
            <div className="mx-auto max-w-[896px] min-h-screen bg-[var(--bg-primary)] shadow-sm">
              <div className="flex min-h-screen flex-col justify-between">

                <header className="flex flex-col items-start px-4 py-8 md:py-10">
                  <div className="flex justify-between items-center w-full overflow-x-auto pb-2 scrollbar-hide">
                    <Navigation />
                    <div className="flex items-center ml-4 shrink-0">
                      <ThemeToggle />
                    </div>
                  </div>
                </header>

                <main className="flex-1 w-full">{children}</main>

                <footer className="flex items-center justify-between w-full px-4 py-8 border-t border-[var(--border-primary)]">
                  <div className="flex w-[20px] h-[20px] sm:w-7 sm:h-7 justify-center items-center rounded-full border border-[var(--border-secondary)] bg-[var(--bg-tertiary)] overflow-hidden shrink-0">
                    <img src={logo_img.src} alt="Logo" className="w-full h-full object-cover" />
                  </div>

                  <span className="text-[var(--text-muted)] text-[8px] sm:text-xs font-normal leading-5">
                    <Link href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" className="hover:text-[var(--text-secondary)] transition-colors">CC BY-NC-SA 4.0</Link>
                    {" "}• © 2023 - 2026 {" "}
                    <Link href="https://www.linkedin.com/in/jgluciano" target="_blank" className="hover:text-[var(--text-secondary)] transition-colors">João Gabriel Luciano</Link>
                  </span>

                  <div className="flex items-center gap-2 text-[var(--text-muted)] text-[8px] sm:text-xs font-normal leading-5">
                    <Link href="/sitemap.xml" target="_blank" className="hover:text-[var(--text-secondary)] transition-colors">sitemap.xml</Link>
                    <span>•</span>
                    <Link href="/dmca" target="_blank" className="hover:text-[var(--text-secondary)] transition-colors">DMCA</Link>
                  </div>
                </footer>

              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}