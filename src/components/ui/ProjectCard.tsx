import { VscFolder, VscStarFull, VscRepoForked } from "react-icons/vsc";
import { SiPython, SiShell, SiJavascript, SiTypescript } from "react-icons/si";
import { JSX } from "react";

interface ProjectCardProps {
  project: {
    name: string;
    description: string;
    techs?: string; // Adicionado para exibir a stack em texto
    language: string;
    stars: number;
    forks: number;
    updated_at: string;
  };
}

const languageIcons: { [key: string]: JSX.Element } = {
  Python: <SiPython className="text-blue-400" size={14} />,
  Shell: <SiShell className="text-gray-400" size={14} />,
  JavaScript: <SiJavascript className="text-yellow-400" size={14} />,
  TypeScript: <SiTypescript className="text-blue-500" size={14} />
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-3 p-5 rounded-lg border border-[var(--border-primary)] bg-[var(--bg-card)] hover:border-[var(--text-muted)] transition-colors h-full">
      <div className="flex items-center gap-2">
        <VscFolder className="text-[var(--text-primary)]" size={18} />
        <h3 className="font-semibold text-lg text-[var(--text-primary)]">{project.name}</h3>
      </div>

      <p className="text-[var(--text-muted)] text-sm flex-1 leading-relaxed">
        {project.description}
      </p>

      {/* Exibe a stack de forma discreta em texto (sem quebrar o visual original) */}
      {project.techs && (
        <p className="text-[12px] text-[var(--text-dim)] leading-relaxed">
          <span className="font-semibold text-[var(--text-muted)]">Stack: </span>
          {project.techs}
        </p>
      )}

      <div className="flex items-center gap-5 text-xs text-[var(--text-dim)] pt-2">
        <span className="flex items-center gap-2 font-medium text-[var(--text-muted)]">
          {languageIcons[project.language] || <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>}
          {project.language}
        </span>
        <span className="flex items-center gap-1.5">
          <VscStarFull size={14} /> {project.stars}
        </span>
        <span className="flex items-center gap-1.5">
          <VscRepoForked size={14} /> {project.forks}
        </span>
      </div>

      <div className="text-xs text-[var(--text-dim)] mt-2">
        Updated {project.updated_at}
      </div>
    </div>
  );
}