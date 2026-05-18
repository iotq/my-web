import { Progress } from "antd";

interface SkillCategory {
  category: string;
  skills: { name: string; level: number }[];
}

const skillData: SkillCategory[] = [
  {
    category: "前端開發",
    skills: [
      { name: "React / Next.js", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS / Ant Design", level: 90 },
    ],
  },
  {
    category: "後端開發",
    skills: [
      { name: "Node.js / Express", level: 85 },
      { name: "PostgreSQL / MongoDB", level: 82 },
    ],
  },
  {
    category: "DevOps & 工具",
    skills: [
      { name: "Docker / K8s", level: 75 },
      { name: "AWS / GCP", level: 73 },
      { name: "CI/CD (GitHub Actions)", level: 80 },
      { name: "Git", level: 90 },
    ],
  },
];

export function Skills() {
  return (
    <div>
      <div className="mb-12 animate-fade-up">
        <p
          className="text-[11px] tracking-[0.25em] uppercase mb-3"
          style={{ color: "var(--accent)" }}
        >
          Skills & Expertise
        </p>
        <h1 className="font-display text-5xl font-light tracking-wide mb-2">
          技能專長
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

      <div className="space-y-10">
        {skillData.map((cat, ci) => (
          <div
            key={cat.category}
            className="animate-fade-up"
            style={{ animationDelay: `${0.2 + ci * 0.15}s` }}
          >
            <h2
              className="text-xs tracking-[0.15em] uppercase mb-6 pb-3 border-b"
              style={{
                color: "var(--text-primary)",
                borderColor: "var(--border)",
              }}
            >
              {cat.category}
            </h2>
            <div className="space-y-5">
              {cat.skills.map((skill, si) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span
                      className="text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {skill.name}
                    </span>
                    <span
                      className="text-[11px] tabular-nums"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <Progress
                    percent={skill.level}
                    showInfo={false}
                    strokeColor={{
                      "0%": "var(--accent-dark)",
                      "100%": "var(--accent-light)",
                    }}
                    railColor="rgba(255,255,255,0.04)"
                    size={{ height: 6 }}
                    style={{
                      animationDelay: `${0.4 + ci * 0.15 + si * 0.05}s`,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
