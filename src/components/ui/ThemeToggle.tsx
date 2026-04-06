'use client';

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-8 h-8" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="flex w-8 h-8 justify-center items-center rounded-full hover:bg-[var(--border-primary)] transition-colors text-[var(--text-muted)] hover:text-[var(--text-primary)]"
    >
      {theme === "dark" ? (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 4.16667H18.3333" />
          <path d="M16.6667 2.5V5.83333" />
          <path d="M17.4874 10.405C17.4093 11.8518 16.9138 13.245 16.0608 14.4162C15.2078 15.5874 14.0338 16.4864 12.6807 17.0046C11.3277 17.5228 9.85349 17.638 8.43637 17.3363C7.01924 17.0345 5.71985 16.3288 4.69527 15.3043C3.67069 14.2798 2.96479 12.9805 2.6629 11.5634C2.36101 10.1463 2.47605 8.67212 2.99412 7.31902C3.51219 5.96591 4.4111 4.79183 5.5822 3.9387C6.7533 3.08557 8.14644 2.58992 9.59322 2.51167C9.93072 2.49334 10.1074 2.895 9.92822 3.18084C9.32896 4.13963 9.07237 5.27323 9.2003 6.39663C9.32824 7.52003 9.83316 8.5669 10.6327 9.3664C11.4322 10.1659 12.479 10.6708 13.6024 10.7988C14.7258 10.9267 15.8594 10.6701 16.8182 10.0708C17.1049 9.89167 17.5057 10.0675 17.4874 10.405Z" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      )}
    </button>
  );
}