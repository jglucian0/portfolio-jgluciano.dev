import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import logo_img from "./icon.png";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

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
            <div className="mx-auto max-w-[896px] min-h-screen bg-[var(--bg-primary)]">
              <div className="flex min-h-screen flex-col justify-between px-0">

                <header className="flex flex-col items-start py-10">
                  <div className="flex justify-between items-center w-full overflow-auto">
                    <div className="flex justify-between items-start gap-0">
                      <span className="relative flex flex-col items-start py-1 px-2">
                        <div className="absolute bottom-0.5 left-2 h-px bg-[var(--border-secondary)]" style={{ width: 'calc(100% - 16px)' }} />
                        <Link href="/" className="text-[16px] font-normal leading-6 tracking-[-0.4px] text-[var(--accent)] no-underline transition-colors">home</Link>
                      </span>
                      <span className="relative flex flex-col items-start py-1 px-2">
                        <Link href="/projects" className="text-[16px] font-normal leading-6 tracking-[-0.4px] text-[var(--text-dim)] no-underline transition-colors">projects</Link>
                      </span>
                      <span className="relative flex flex-col items-start py-1 px-2">
                        <Link href="/blog" className="text-[16px] font-normal leading-6 tracking-[-0.4px] text-[var(--text-dim)] no-underline transition-colors">blog</Link>
                      </span>
                    </div>
                    <div className="flex items-center">
                      <ThemeToggle />
                    </div>
                  </div>
                </header>

                <main className="flex-1 w-full">{children}</main>

                <footer className="flex items-center justify-between w-full px-4 py-8 border-t border-[var(--border-primary)]">
                  <div className="flex w-7 h-7 justify-center items-center rounded-full border border-[var(--border-secondary)] bg-[var(--bg-tertiary)] overflow-hidden flex-shrink-0">
                    <img src={logo_img.src} alt="Logo" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[var(--text-muted)] text-xs font-normal leading-5">
                    <Link href="https://creativecommons.org/licenses/by-nc-sa/4.0/" className="hover:text-[var(--text-secondary)] transition-colors">CC BY-NC-SA 4.0</Link>
                    {" "}• © 2023 - 2026 {" "}
                    <Link href="https://www.linkedin.com/in/jgluciano" className="hover:text-[var(--text-secondary)] transition-colors">João Gabriel Luciano</Link>
                  </span>
                  <div className="flex items-center gap-2 text-[var(--text-muted)] text-xs font-normal leading-5">
                    <Link href="/sitemap.xml" className="hover:text-[var(--text-secondary)] transition-colors">sitemap.xml</Link>
                    <span>•</span>
                    <Link href="https://www.dmca.com/" className="hover:text-[var(--text-secondary)] transition-colors">DMCA</Link>
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