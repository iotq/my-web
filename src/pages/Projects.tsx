import { Tag } from "antd";
import { LinkOutlined, GithubOutlined } from "@ant-design/icons";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  year: string;
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "個案管理系統",
    subtitle: "Case Management System",
    description:
      "為福利機構打造的全功能後台系統，包含個案管理、表格填寫、數據統計及匯出。\n網頁端採用 React + Material UI + Typescript 構建，數據庫使用Firestore",
    tags: ["React", "Material UI", "Typescript", "Firestore"],
    year: "2020-2024",
    link: "#",
    github: "#",
  },
  {
    title: "食物援助管理系統",
    subtitle: "Food Assistance Management System",
    description:
      "為福利機構打造的全功能後台系統，包含個案管理、預約、庫存管理及追蹤。\n\n網頁端採用 React + Material UI 構建，數據庫使用Firestore，另外使用Go開發的Server作query和匯出Xlsx用途",
    tags: ["React", "Material UI", "Typescript", "Firestore", "Go"],
    year: "2022-2026",
    link: "#",
    github: "#",
  },
  {
    title: "標準企業門戶網站",
    subtitle: "Bussiness Web App",
    description:
      "為中小型企業打造的網絡應用，包含第三方登入、服務端渲染、多語言。\n網頁端採用 React + Ant Design + Tailwindcss + Next.js 構建，後端使用.NET + SQL Server。",
    tags: [
      "React",
      "Ant Design",
      "Next.js",
      "Tailwindcss",
      "SQL Server",
      "RabbitMQ",
      "Redis",
      "Kubernetes",
      "GitHub Action",
    ],
    year: "2026",
    link: "#",
    github: "#",
  },
];

export function Projects() {
  return (
    <div>
      <div className="mb-12 animate-fade-up">
        <p
          className="text-[11px] tracking-[0.25em] uppercase mb-3"
          style={{ color: "var(--accent)" }}
        >
          Selected Projects
        </p>
        <h1 className="font-display text-5xl font-light tracking-wide mb-2">
          作品專案
        </h1>
        <div
          className="h-0.5 mt-4"
          style={{
            width: 0,
            animation: "expandLine 0.8s 0.3s ease forwards",
            background: "var(--accent)",
          }}
        />
      </div>

      <div className="space-y-0">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className="animate-fade-up group relative py-8 border-b transition-all duration-300 cursor-pointer"
            style={{
              animationDelay: `${0.2 + i * 0.1}s`,
              borderColor: "var(--border)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(212,168,83,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
            }}
          >
            <div className="flex items-start justify-between gap-8">
              <div className="flex-1">
                <span
                  className="text-[11px] tracking-wider"
                  style={{ color: "var(--text-muted)" }}
                >
                  {project.year}
                </span>
                <div className="flex items-baseline gap-3 mt-1 mb-2">
                  <h3
                    className="font-display text-2xl font-light group-hover:text-accent transition-colors duration-300"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {project.title}
                  </h3>
                  <span
                    className="text-xs hidden sm:inline"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {project.subtitle}
                  </span>
                </div>

                <p
                  className="text-sm leading-6 mb-4"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag
                      key={tag}
                      className="!!text-[11px] !px-2.5 !py-0.5 !rounded"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        borderColor: "var(--border)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {tag}
                    </Tag>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 shrink-0">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200 hover:text-accent"
                    style={{ color: "var(--text-muted)", fontSize: 16 }}
                  >
                    <GithubOutlined />
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200 hover:text-accent"
                    style={{ color: "var(--text-muted)", fontSize: 16 }}
                  >
                    <LinkOutlined />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
