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

function ThemeToggleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 4.16667H18.3333" stroke="#71717B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.6667 2.5V5.83333" stroke="#71717B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.4874 10.405C17.4093 11.8518 16.9138 13.245 16.0608 14.4162C15.2078 15.5874 14.0338 16.4864 12.6807 17.0046C11.3277 17.5228 9.85349 17.638 8.43637 17.3363C7.01924 17.0345 5.71985 16.3288 4.69527 15.3043C3.67069 14.2798 2.96479 12.9805 2.6629 11.5634C2.36101 10.1463 2.47605 8.67212 2.99412 7.31902C3.51219 5.96591 4.4111 4.79183 5.5822 3.9387C6.7533 3.08557 8.14644 2.58992 9.59322 2.51167C9.93072 2.49334 10.1074 2.895 9.92822 3.18084C9.32896 4.13963 9.07237 5.27323 9.2003 6.39663C9.32824 7.52003 9.83316 8.5669 10.6327 9.3664C11.4322 10.1659 12.479 10.6708 13.6024 10.7988C14.7258 10.9267 15.8594 10.6701 16.8182 10.0708C17.1049 9.89167 17.5057 10.0675 17.4874 10.405Z" stroke="#71717B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

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
                    <Link href="/dmca" className="hover:text-[var(--text-secondary)] transition-colors">DMCA</Link>
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