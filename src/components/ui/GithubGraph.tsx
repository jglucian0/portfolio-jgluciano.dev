"use client";

import { useEffect, useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { useTheme } from 'next-themes';

export function GithubGraph() {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="border border-[#1E2939] rounded-lg p-5 bg-[#0A0A0A] h-[180px] w-full animate-pulse" />
    );
  }

  const currentTheme = resolvedTheme === 'dark' ? 'dark' : 'light';

  return (
    <div className="border border-[#1E2939] rounded-lg p-5 bg-[--bg-primary] w-full overflow-hidden">
      <div className="github-calendar-fluid">
        <GitHubCalendar
          username="jglucian0"
          blockSize={12}
          blockMargin={4}
          fontSize={12}
          colorScheme={currentTheme}
          theme={{
            dark: ['#161B22', '#0E4429', '#006D32', '#26A641', '#39D353'],
          }}
          labels={{
            totalCount: '{{count}} contribuições no último ano',
          }}
        />
      </div>

      <style jsx global>{`
        .github-calendar-fluid > div {
          width: 100% !important;
          max-width: 100% !important;
          overflow: hidden;
        }
        
        .github-calendar-fluid svg {
          width: 100% !important;
          height: auto !important;
          display: block;
        }

        .github-calendar-fluid text {
          font-size: 12px;
        }
      `}</style>
    </div>
  );
}