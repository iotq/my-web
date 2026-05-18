import {
  EnvironmentOutlined
} from "@ant-design/icons";
import { Tag } from "antd";

const highlights = [
  { label: "年資", value: "5+ 年", detail: "全端開發經驗" },
  { label: "專案", value: "10+", detail: "成品" },
  { label: "技術棧", value: "React / .NET", detail: "主要開發工具" },
];

const About = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="mb-12 animate-fade-up">
        <p
          className="text-[11px] tracking-[0.25em] uppercase mb-3"
          style={{ color: "var(--accent)" }}
        >
          About Me
        </p>
        <h1 className="font-display text-5xl font-light tracking-wide leading-tight mb-2!">
          關於我
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
      <div className="animate-fade-up delay-200 my-4!">
        <p
          className="text-lg leading-8!"
        >
          你好，我是<strong style={{ color: "var(--accent)" }}>蔡騰飛</strong>
          ，一位全端工程師。我相信好的軟體不只是功能的堆砌，而是技術與美學的融合。
        </p>
        <p
          className="text-base leading-6"
          style={{ color: "var(--text-secondary)" }}
        >
          在過去多年裡，我參與了從零到一的產品開發，涵蓋個案管理、倉庫管理、企業網站、游戲等多種類型。我享受將複雜的業務邏輯轉化為優雅、可維護的程式碼，也不斷探索前端效能優化與使用者體驗的極致。
        </p>
      </div>
      <div
        className="flex flex-wrap mb-4! animate-fade-up delay-300"
      >
        <div className="flex items-center gap-2">
          <EnvironmentOutlined style={{ color: "var(--accent)", fontSize: 14 }} />
          <span
            className="text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            香港
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 mb-12!">
        {highlights.map((item, i) => (
          <div
            key={item.label}
            className="animate-fade-up rounded-lg p-6! border transition-all duration-300 cursor-default group"
            style={{
              animationDelay: `${0.4 + i * 0.1}s`,
              background: "var(--bg-surface)",
              borderColor: "var(--border)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <p
              className="text-[10px] tracking-[0.2em] uppercase mb-3"
              style={{ color: "var(--text-muted)" }}
            >
              {item.label}
            </p>
            <p
              className="font-display text-3xl font-light mb-1"
              style={{ color: "var(--accent)" }}
            >
              {item.value}
            </p>
            <p
              className="text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              {item.detail}
            </p>
          </div>
        ))}
      </div>

      <div className="animate-fade-up delay-600">
        <p
          className="text-sm tracking-[0.2em] uppercase mb-4!"
          style={{ color: "var(--text-muted)" }}
        >
          關鍵字
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            "React",
            "TypeScript",
            "Node.js",
            "PostgreSQL",
            "Docker",
            "AWS",
            "UI/UX"
          ].map((tag) => (
            <Tag
              key={tag}
              className="!!text-xs px-3! py-1! rounded-full!"
              style={{
                background: "rgba(212,168,83,0.08)",
                borderColor: "rgba(212,168,83,0.2)",
                color: "var(--accent)",
              }}
            >
              {tag}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
