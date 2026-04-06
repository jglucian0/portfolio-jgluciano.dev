'use client';

import { useState } from "react";

export interface ExperienceItem {
  company: string;
  url?: string;
  role: string;
  period: string;
  location: string;
  details: string[];
  skills: string[];
}

export default function ExperienceCard({ item }: { item: ExperienceItem }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mb-8 last:mb-0 relative w-full">
      {/* Ícone da Maleta na Linha do Tempo (Cores fixas para manter o padrão escuro igual na imagem) */}
      <div className="absolute left-[-1.875rem] sm:left-[-2.125rem] md:left-[-2.375rem] top-1 flex size-6 sm:size-7 shrink-0 items-center justify-center rounded-lg bg-[#161b22] text-[#F3F4F6] border border-[#364153] shadow-sm" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-3.5 sm:size-4" aria-hidden="true">
          <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          <rect width="20" height="14" x="2" y="6" rx="2"></rect>
        </svg>
      </div>

      {/* Conteúdo Clicável com variáveis dinâmicas */}
      <div className="cursor-pointer group" role="button" tabIndex={0} aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>

        {/* Título (Company) */}
        <div className="font-semibold text-base sm:text-lg text-[var(--text-primary)] leading-tight">
          {item.url ? (
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:underline" onClick={(e) => e.stopPropagation()}>
              {item.company}
            </a>
          ) : (
            item.company
          )}
        </div>

        {/* Subtítulos */}
        <div className="mt-1 text-sm sm:text-base text-[var(--text-muted)]">{item.role}</div>
        <div className="mt-0.5 text-xs sm:text-sm text-[var(--text-dim)]">{item.period}</div>

        <div className="flex items-center gap-1.5 mt-1 text-xs sm:text-sm text-[var(--text-dim)]">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="size-3 sm:size-3.5" xmlns="http://www.w3.org/2000/svg">
            <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
          </svg>
          <span>{item.location}</span>
        </div>

        {/* Seção Expansível */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expanded ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className="bg-[var(--bg-card)] border border-[var(--border-primary)] rounded-lg p-3 sm:p-4">

            {/* Lista de Detalhes */}
            <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 text-xs sm:text-sm text-[var(--text-muted)]">
              {item.details.map((detail, idx) => (
                <li key={idx} className="leading-relaxed">{detail}</li>
              ))}
            </ul>

            {/* Tags de Habilidades */}
            {item.skills && item.skills.length > 0 && (
              <div className="mt-3 pt-3 border-t border-[var(--border-primary)]">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {item.skills.map((skill, idx) => (
                    <span key={idx} className="inline-flex items-center rounded-md border border-[var(--border-primary)] bg-[var(--bg-primary)] px-2 py-1 font-mono text-[10px] sm:text-xs text-[var(--text-muted)]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Texto Toggle */}
        <div className="mt-2 text-xs text-[var(--text-dim)] group-hover:text-[var(--text-primary)] transition-colors">
          {expanded ? "Click to collapse" : "Click to expand"}
        </div>
      </div>
    </div>
  );
}