import { FaGithub } from "react-icons/fa";
import { GithubGraph } from "@/components/ui/GithubGraph";
import { ProjectCard } from "@/components/ui/ProjectCard";

const REPOSITORIES = [
  {
    name: "clone-tabnews",
    description: `Engenharia de software ponta a ponta: do versionamento à produção, com foco em escalabilidade e qualidade real.`,
    techs: "Node.js, Next.js, PostgreSQL, Jest, Docker",
    language: "JavaScript",
    stars: 6,
    forks: 1,
    updated_at: "3 days ago",
    url: "https://github.com/jglucian0/clone-tabnews"
  },
  {
    name: "garimpei-api-rest",
    description: `API RESTful que automatiza a extração de dados essenciais de produtos de múltiplos marketplaces de forma confiável e segura.`,
    techs: "Node.js, Express, Puppeteer, PostgreSQL, Jest, Docker",
    language: "JavaScript",
    stars: 6,
    forks: 0,
    updated_at: "5 days ago",
    url: "https://github.com/jglucian0/clone-tabnews"
  },
  {
    name: "rentoy-saas-api",
    description: "API RESTful desenvolvido para um micro-saas de gerenciamento para empresas de locação de brinquedos.",
    techs: "FastAPI, Django, SQLAlchemy, PostgreSQL, Docker, Pytest",
    language: "Python",
    stars: 5,
    forks: 0,
    updated_at: "1 years ago",
    url: "https://github.com/jglucian0/rentoy-saas-api"
  },
  {
    name: "restinit",
    description: "CLI para criar APIs REST em Node.js, com arquitetura, autenticação, integração com banco de dados e configuração de deploy automatizada.",
    techs: "Node.js, Express, PostgreSQL, Jest, Docker",
    language: "JavaScript",
    stars: 3,
    forks: 0,
    updated_at: "3 days ago",
    url: "https://github.com/jglucian0/restinit"
  },
  {
    name: "djinit",
    description: "Uma CLI rápida e interativa para iniciar um projeto Django moderno e pronto para produção em minutos.",
    techs: "Django, FastAPI, Docker, PostgreSQL, Pytest",
    language: "Python",
    stars: 9,
    forks: 0,
    updated_at: "2 weeks ago",
    url: "https://github.com/jglucian0/dotfile"
  },
  {
    name: "task-manager-cli",
    description: "Gerenciador de tarefas no terminal feito com Python e orientação a objetos. Projeto de portfólio com persistência em JSON.",
    techs: "CLI, JSON, POO",
    language: "Python",
    stars: 5,
    forks: 0,
    updated_at: "2 years ago",
    url: "https://github.com/jglucian0/task-manager-cli"
  }
];

export default function Projects() {
  return (
    <div className="w-full relative px-4 md:px-6">
      <div className="w-full flex flex-col gap-12 px-4 md:px-6 py-8 border-x border-[var(--border-primary)] min-h-full">

        <div className="w-full mt-2">
          <h1 className="text-sm md:text-[13px] font-bold text-[var(--text-primary)] uppercase tracking-wide leading-relaxed w-full">
            COMPLETED MULTIPLE WEB DEVELOPMENT FREELANCE PROJECTS, SPECIALIZING IN FULL-STACK AND BACKEND DEVELOPMENT.
          </h1>
        </div>

        <section className="flex flex-col w-full pt-6 border-t border-[var(--border-secondary)]">
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <FaGithub size={16} className="text-[var(--text-primary)]" />
            <h2 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider">
              GITHUB
            </h2>
          </div>
          <div className="w-full overflow-x-auto pb-2">
            <div className="min-w-[600px] md:min-w-full">
              <GithubGraph />
            </div>
          </div>
        </section>

        <section className="flex flex-col w-full pt-6 border-t border-[var(--border-secondary)]">
          <div className="flex items-center gap-2 mb-6">
            <FaGithub size={16} className="text-[var(--text-primary)]" />
            <h2 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider">
              POPULAR REPOSITORIES
            </h2>
          </div>

          <div className="flex sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2 overflow-x-auto snap-x snap-mandatory sm:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {REPOSITORIES.map((repo, idx) => (
              <a
                key={idx}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full shrink-0 snap-center h-full hover:-translate-y-1.5 transition-transform duration-300 outline-none"
              >
                <ProjectCard project={repo} />
              </a>
            ))}
          </div>

          <div className="mt-4 flex justify-center">
            <a
              href="https://github.com/jglucian0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--text-secondary)] hover:underline underline-offset-4 transition-all flex items-center gap-2"
            >
              Veja mais no GitHub <FaGithub size={14} />
            </a>
          </div>

        </section>

      </div>
    </div>
  );
}