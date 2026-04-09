'use client';

import { useState } from "react";
import ExperienceCard, { ExperienceItem } from "@/components/ui/ExperienceCard";
import avatar_img from "@/assets/avatar.png";
import { FaGithub, FaLinkedin, FaInstagram, FaJava } from "react-icons/fa";
import {
  SiPython, SiJavascript, SiTypescript, SiNodedotjs, SiFastapi, SiDjango,
  SiExpress, SiReact, SiNextdotjs, SiTailwindcss, SiPostgresql, SiMysql,
  SiRedis, SiDocker, SiNginx, SiLinux, SiCloudflare,
  SiVercel, SiGit, SiPostman, SiNpm
} from "react-icons/si";
import { FaAws, FaWhatsapp } from "react-icons/fa";
import { VscVscode, VscFolder } from "react-icons/vsc";

const EXPERIENCE = [
  {
    company: "jgluciano.dev",
    url: "https://github.com/jglucian0",
    role: "Desenvolvedor Backend (Freelance)",
    period: "Out 2024 - Present",
    location: "Londrina, PR (Remote)",
    details: [
      "Arquitetura e desenvolvimento de aplicações backend escaláveis e APIs RESTful focadas em regras de negócio reais.",
      "Modelagem e otimização de bancos de dados relacionais e em memória utilizando PostgreSQL e Redis.",
      "Implementação de soluções backend utilizando Python (Django, FastAPI) e Node.js, selecionando a stack ideal por contexto.",
      "Provisionamento de infraestrutura cloud e deploy containerizado utilizando Docker e AWS.",
      "Estruturação de pipelines de CI/CD e aplicação de testes automatizados para garantir a estabilidade das entregas.",
      "Atuação full-cycle com autonomia para realizar integrações de frontend utilizando React e Next.js."
    ],
    skills: [
      "Python",
      "Node.js",
      "JavaScript",
      "REST API",
      "PostgreSQL",
      "Redis",
      "FastAPI",
      "Django",
      "Docker",
      "AWS",
      "CI/CD",
      "TDD"
    ]
  },
  {
    company: "NexaS One ERP",
    role: "Desenvolvedor Backend Junior",
    period: "Fev 2025 - Out 2025",
    location: "Maringá, PR (Remote)",
    details: [
      "Desenvolvimento e evolução arquitetural do ERP NexaS One, plataforma especializada na transformação digital do mercado veterinário.",
      "Implementação de módulos backend estratégicos para automação de processos de gestão financeira e fiscal de clientes B2B.",
      "Construção e manutenção de APIs RESTful escaláveis em Node.js e PHP para integração de serviços do ecossistema.",
      "Otimização de consultas e modelagem de dados relacionais no PostgreSQL para garantir performance e integridade nas operações vitais do ERP.",
      "Manutenção de interfaces legadas e fluxos dinâmicos utilizando JavaScript e jQuery integrados ao backend."
    ],
    skills: [
      "Node.js",
      "PHP",
      "JavaScript",
      "PostgreSQL",
      "REST API",
      "jQuery"
    ]
  }
];

const MAINTAINING = [
  {
    name: "garimpei-api-rest",
    href: "https://github.com/jglucian0/garimpei-api-rest",
    description: "API RESTful para extração inteligente de dados com suporte multisessão, fornecendo dados essenciais de produtos do (Mercado Livre, Amazon, Nike...) para afiliados."
  },
  {
    name: "restinit",
    href: "https://github.com/S4NKALP/django-nepkit",
    description: "CLI para criar APIs REST em Node.js prontas para produção, com arquitetura limpa, autenticação, integração com banco de dados e configuração de deploy automatizada."
  },
  {
    name: "djinit",
    href: "https://github.com/S4NKALP/djinit",
    description: "Uma CLI rápida e interativa para iniciar um projeto Django moderno e pronto para produção em minutos."
  },
  {
    name: "clone-tabnews",
    href: "https://github.com/jglucian0/clone-tabnews",
    description: "Aplicação fullstack inspirada no TabNews, com sistema de publicação de conteúdo, interação entre usuários e arquitetura escalável."
  }
];

const SKILLS = [
  {
    category: "Linguagens:",
    items: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ]
  },
  {
    category: "Frameworks:",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Django", icon: SiDjango, color: "#44B78B" },
      { name: "Express", icon: SiExpress, color: "#FFFFFF" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ]
  },
  {
    category: "Database:",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
    ]
  },
  {
    category: "DevOps and Tools:",
    items: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Nginx", icon: SiNginx, color: "#009639" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "Cloudflare", icon: SiCloudflare, color: "#F38020" },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "npm", icon: SiNpm, color: "#CB3837" },
    ]
  }
];

export default function Index() {
  const [toastOpen, setToastOpen] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("contato@jgluciano.dev");
    setToastOpen(true);
    setTimeout(() => {
      setToastOpen(false);
    }, 3000);
  };

  return (
    <div className="w-full relative px-4 md:px-6">
      <div
        className={`fixed bottom-5 right-5 flex items-center justify-between px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg shadow-xl z-50 transform transition-all duration-300 ease-in-out ${toastOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20 text-green-500">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <span className="text-sm font-medium text-[var(--text-primary)]">E-mail copiado!</span>
        </div>
      </div>

      {/* Profile Section */}
      <section className="flex flex-col items-start w-full border-x border-[var(--border-primary)]">
        {/* Name + title header */}
        <div className="flex items-start w-full px-4 py-1 border-b border-[var(--border-primary)]">
          <div className="flex flex-col items-start flex-1">
            <h2 className="text-2xl font-bold leading-8 w-full text-[var(--text-primary)]">
              João Gabriel Luciano ☕
            </h2>
            <p className="text-sm font-normal leading-5 w-full text-[var(--text-muted)]">
              Desenvolvedor Backend | Python & JavaScript | PostgreSQL | APIs RESTful | AWS & Docker
            </p>
          </div>
        </div>

        {/* Bio + avatar */}
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10 p-4 w-full">
          {/* Text content */}
          <div className="flex flex-col items-start gap-4 flex-1">
            <div className="flex flex-col text-[14px] gap-4 w-full md:text-base leading-6 text-[var(--text-secondary)]">
              <p>
                Sou Desenvolvedor Backend focado em construir{" "}
                <strong className="font-bold text-[var(--text-primary)]">aplicações escaláveis e confiáveis</strong>{" "}
                que resolvem problemas reais. Construo e mantenho{" "}
                <strong className="font-bold text-[var(--text-primary)]">APIs RESTful</strong>, sempre priorizando{" "}
                <strong className="font-bold text-[var(--text-primary)]">segurança, código limpo e performance</strong>,
                aplicando boas práticas como{" "}
                <strong className="font-bold text-[var(--text-primary)]">Clean Code e TDD</strong>.
              </p>
              <p>
                Atuo com ecossistemas de{" "}
                <strong className="font-bold text-[var(--text-primary)]">Python e Node.js</strong>,
                utilizando majoritariamente{" "}
                <strong className="font-bold text-[var(--text-primary)]">PostgreSQL</strong>{" "}
                para banco de dados.
              </p>
              <p>
                Embora meu foco principal seja backend, também posso contribuir no frontend com{" "}
                <strong className="font-bold text-[var(--text-primary)]">React e Next.js</strong>.
              </p>
            </div>

            <p className="text-base font-normal leading-6 text-[var(--text-secondary)]">
              Estou sempre aberto a novos desafios e oportunidades de colaboração no mercado.{" "}
              Entre em contato{" "}
              <a
                href="mailto:contato@jgluciano.dev"
                onClick={handleCopyEmail}
                className="font-bold border-b border-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                contato@jgluciano.dev
              </a>{" "}
              ou me encontre nas redes sociais.
            </p>

            {/* Social icons com react-icons */}
            <div className="flex items-center gap-4 flex-wrap pt-2">
              <a
                href="https://github.com/jglucian0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all duration-300 hover:scale-110"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/jgluciano"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin size={24} />
              </a>

              <a
                href="https://www.instagram.com/jgluciano_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all duration-300 hover:scale-110"
              >
                <FaInstagram size={24} />
              </a>

              <a
                href="https://wa.me/5543996142131"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all duration-300 hover:scale-110"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>

            {/* View Resume button */}
            <div className="mt-1">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-6 py-2.5 justify-center items-center rounded-full shadow-sm hover:opacity-90 transition-opacity bg-[var(--text-primary)]"
              >
                <span className="text-sm font-bold leading-5 text-center text-[var(--bg-primary)]">
                  Ver Curriculo
                </span>
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div className="flex items-start px-6 flex-shrink-0">
            <div
              className="flex w-[224px] h-[224px] justify-center items-center rounded-full mt-[30px] overflow-hidden flex-shrink-0"
              style={{
                boxShadow: "0 0 0 2px rgba(55, 115, 98), 0 10px 15px -3px rgba(0,0,0,0.10), 0 4px 6px -4px rgba(0,0,0,0.10)",
              }}
            >
              <img
                src={avatar_img.src}
                alt="João Gabriel Luciano"
                className="w-[224px] h-[224px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>



      <div className="flex justify-center items-start gap-8 mt-12 w-full">
        <section className="flex flex-col items-center gap-1 flex-1 border-x border-[var(--border-primary)] pb-4">
          <div className="w-full px-4 pb-8 pt-4">
            <div className="flex flex-col gap-7 ">
              {SKILLS.map((skillGroup, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <h3 className="text-[15px] font-bold text-[var(--text-primary)] tracking-wide">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((item, i) => (
                      <div
                        key={i}
                        title={item.name}
                        className="flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-xl bg-[#161b22] border border-[#1E2939] hover:border-[#99A1AF] hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        <item.icon size={24} color={item.color} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-8 mt-12 w-full">

        {/* Projetos Recentes */}
        <section className="flex flex-col items-center gap-1 w-full lg:flex-1 border-x border-[var(--border-primary)] pb-4 bg-[var(--bg-primary)] h-full">
          <div className="flex items-center w-full px-4 md:px-6 py-3 border-b border-[var(--border-primary)]">
            <h2 className="text-lg font-bold leading-7 flex-1 text-[var(--text-primary)] uppercase tracking-wide">
              Projetos recentes
            </h2>
          </div>
          <div className="p-4 md:p-6 w-full">
            <ul className="space-y-4">
              {MAINTAINING.map((project) => (
                <li key={project.name} className="group border border-transparent hover:border-[var(--border-primary)] hover:bg-[var(--bg-card)] p-3 -mx-3 rounded-xl transition-all duration-200">
                  <a href={project.href} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="flex items-center gap-2">
                      <VscFolder
                        className="text-[var(--text-primary)] transition-colors shrink-0"
                        size={18}
                      />
                      <span className="text-[var(--text-primary)] font-mono font-semibold group-hover:underline transition-colors block text-sm md:text-base">
                        {project.name}
                      </span>
                    </div>
                    <span className="block text-xs md:text-sm text-[var(--text-muted)] mt-1.5 leading-relaxed">
                      {project.description}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>



        {/* Experience Timeline */}
        <section className="flex flex-col items-center gap-1 w-full lg:flex-1 border-x border-[var(--border-primary)] pb-4 bg-[var(--bg-primary)] h-full">
          <div className="flex items-center w-full px-4 md:px-6 py-3 border-b border-[var(--border-primary)]">
            <h2 className="text-lg font-bold leading-7 flex-1 text-[var(--text-primary)] uppercase tracking-wide">
              Experiências
            </h2>
          </div>

          <div className="w-full px-4 md:px-6 pt-6">
            <div className="relative pl-[28px] sm:pl-[48px] w-full">

              <div className="absolute left-[11px] sm:left-[23px] top-2 h-[calc(100%-2rem)] w-[2px] bg-[var(--border-secondary)]" aria-hidden="true" />

              <div className="w-full">
                {EXPERIENCE.map((exp, idx) => (
                  <ExperienceCard key={idx} item={exp} />
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}