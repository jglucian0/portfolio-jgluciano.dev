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
import { VscVscode } from "react-icons/vsc";

function BuildingIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.6667 13.3333V2.66665C10.6667 2.31302 10.5262 1.97389 10.2761 1.72384C10.0261 1.47379 9.68696 1.33331 9.33334 1.33331H6.66667C6.31305 1.33331 5.97391 1.47379 5.72386 1.72384C5.47381 1.97389 5.33334 2.31302 5.33334 2.66665V13.3333" stroke="#E4E4E7" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.3333 4H2.66667C1.93029 4 1.33334 4.59695 1.33334 5.33333V12C1.33334 12.7364 1.93029 13.3333 2.66667 13.3333H13.3333C14.0697 13.3333 14.6667 12.7364 14.6667 12V5.33333C14.6667 4.59695 14.0697 4 13.3333 4Z" stroke="#E4E4E7" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const EXPERIENCE = [
  {
    company: "Personal Projects",
    url: "https://github.com/S4NKALP",
    role: "Open Source Developer",
    period: "2023 - Present",
    location: "Remote",
    details: [
      "Architected and maintained high-performance CLI tools in Rust and Python, focusing on Linux system optimization and developer productivity.",
      "Designed and implemented `lapctl`, a Rust-based hardware controller achieving near-instant execution for GPU and power management.",
      "Built `django-nepkit`, a specialized set of Django tools solving localization challenges for the Nepali developer ecosystem.",
      "Automated development workflows using Bash and Lua, improving personal sprint velocity and project consistency.",
      "Managed full-stack deployments on Linux servers, including SSL automation, Nginx configuration, and CI/CD via GitHub Actions."
    ],
    skills: ["Rust", "Python", "Linux", "C", "GTK", "Lua", "Bash", "ArchLinux", "Django", "Git", "PostgreSQL", "Deployment"]
  },
  {
    company: "Venusion Infotech Pvt. Ltd.",
    url: "https://www.venusioninfotech.com/",
    role: "Backend Developer",
    period: "2024 - 2025",
    location: "Kohalpur, Nepal",
    details: [
      "Engineered scalable backend architectures for e-commerce platforms using Django and PostgreSQL, supporting high-concurrency order processing.",
      "Developed dynamic form processing engines for educational consultancy systems, reducing lead handling time by streamlining data workflows.",
      "Collaborated with frontend teams to define robust REST API contracts, ensuring seamless integration with React-based interfaces.",
      "Optimized database performance by implementing advanced indexing and query caching, resulting in faster content delivery for client applications.",
      "Steered the deployment of production-ready systems on cloud infrastructure, ensuring 99.9% uptime through proactive monitoring."
    ],
    skills: ["Python", "Django", "REST API", "PostgreSQL", "MySQL", "Redis", "Nginx", "Deployment"]
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
    category: "Languages:",
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
    <div className="w-full relative">
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
        <div className="flex items-start gap-10 p-4 w-full">
          {/* Text content */}
          <div className="flex flex-col items-start gap-4 flex-1">
            <div className="flex flex-col gap-4 w-full text-base leading-6 text-[var(--text-secondary)]">
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
                href="https://github.com/s4nkalp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all duration-300 hover:scale-110"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://linkedin.com/in/s4nkalp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin size={24} />
              </a>

              <a
                href="https://instagram.com/s4nkalp"
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
                boxShadow: "0 0 0 2px var(--accent), 0 10px 15px -3px rgba(0,0,0,0.10), 0 4px 6px -4px rgba(0,0,0,0.10)",
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

        <div className="w-full px-4 pb-8 pt-4">
          <div className="flex flex-col gap-7">
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
                      className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#161b22] border border-[#1E2939] hover:border-[#99A1AF] hover:scale-105 transition-all duration-200 cursor-pointer"
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

      <div className="flex justify-center items-start gap-8 mt-12 w-full">
        <section className="flex flex-col items-center gap-1 flex-1 border-x border-[var(--border-primary)] pb-4">
          <div className="flex items-center w-full px-4 py-1 border-b border-[var(--border-primary)]">
            <h2 className="text-xl font-bold leading-7 flex-1 text-[var(--text-primary)]">
              Projetos recentes
            </h2>
          </div>

          <div className="p-4 w-full">
            <ul className="space-y-3">
              {MAINTAINING.map((project) => (
                <li key={project.name}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-md p-3 -m-3 transition-all duration-200"
                  >
                    <span className="text-[var(--text-primary)] font-mono font-semibold group-hover:underline transition-colors">
                      {project.name}
                    </span>
                  </a>
                  <span className="block text-sm text-[var(--text-muted)] mt-1 leading-relaxed">
                    {project.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Experience */}
        <section className="flex flex-col items-center gap-4 flex-1 border-x border-[var(--border-primary)] pb-4">
          <div className="flex items-center w-full px-4 py-1 border-b border-[var(--border-primary)]">
            <h2 className="text-xl font-bold leading-7 flex-1 text-[var(--text-primary)]">
              Experiências
            </h2>
          </div>

          <div className="w-full px-4">
            <div className="relative pl-8 sm:pl-10 md:pl-12 w-full pt-4">
              <div className="absolute left-3 sm:left-4 md:left-[23px] top-0 h-full w-0.5 bg-[var(--timeline)]" aria-hidden="true" />

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