'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { name: 'home', path: '/' },
    { name: 'projects', path: '/projects' }
  ];

  return (
    <div className="flex justify-between items-start gap-0">
      {navItems.map((item) => {
        const isActive = pathname === item.path;

        return (
          <span key={item.name} className="relative flex flex-col items-start py-1 px-2">
            {isActive && (
              <div className="absolute bottom-0.5 left-2 h-px bg-[var(--border-secondary)] w-[calc(100%-16px)]" />
            )}
            <Link
              href={item.path}
              className={`text-[16px] font-normal leading-6 tracking-[-0.4px] no-underline transition-colors ${isActive ? 'text-[var(--accent)]' : 'text-[var(--text-dim)] hover:text-[var(--text-primary)]'
                }`}
            >
              {item.name}
            </Link>
          </span>
        );
      })}
    </div>
  );
}