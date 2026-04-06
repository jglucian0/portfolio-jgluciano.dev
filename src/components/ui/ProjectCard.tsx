import { VscFolder, VscStarFull, VscRepoForked } from "react-icons/vsc";
import { SiPython, SiShell, SiJavascript } from "react-icons/si";
import { JSX } from "react";

interface ProjectCardProps {
  project: {
    name: string;
    description: string;
    language: string;
    stars: number;
    forks: number;
    updated_at: string;
  };
}

// Mapa para escolher o ícone da linguagem corretamente
const languageIcons: { [key: string]: JSX.Element } = {
  Python: <SiPython className="text-yellow-400" size={16} />,
  Shell: <SiShell className="text-gray-400" size={16} />,
  Javascript: <SiJavascript className="text-yellow-300" size={16} />,
  CLSL: <span className="text-gray-500 text-xs">CLSL</span> // Placeholder para CLSL
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-3 p-5 rounded-lg border border-borderBase bg-bgCard hover:border-[#364153] transition-colors h-full">
      <div className="flex items-center gap-2">
        <VscFolder className="text-accentCyan" size={18} />
        <h3 className="font-semibold text-lg text-textPrimary">{project.name}</h3>
      </div>

      <p className="text-textSecondary text-sm flex-1 leading-relaxed">
        {project.description}
      </p>

      <div className="flex items-center gap-5 text-xs text-[#737373] pt-2">
        <span className="flex items-center gap-2">
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

      <div className="text-xs text-[#737373] mt-2">
        Updated {project.updated_at}
      </div>
    </div>
  );
}