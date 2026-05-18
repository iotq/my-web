import {
  ClockCircleOutlined,
  EnvironmentOutlined,
  MailOutlined,
} from "@ant-design/icons";

const contactInfo = [
  {
    icon: <MailOutlined />,
    label: "Email",
    value: "choitangfei@shiningrain.net",
  },
  {
    icon: <EnvironmentOutlined />,
    label: "位置",
    value: "香港",
  },
  {
    icon: <ClockCircleOutlined />,
    label: "回覆時間",
    value: "通常在 24 小時內回覆",
  },
];

export function Contact() {
  return (
    <div>
      {/* Header */}
      <div className="mb-12 animate-fade-up">
        <p
          className="text-[11px] tracking-[0.25em] uppercase mb-3"
          style={{ color: "var(--accent)" }}
        >
          Get In Touch
        </p>
        <h1 className="font-display text-5xl font-light tracking-wide mb-2">
          聯絡方式
        </h1>
        <div
          className="h-[2px] mt-4"
          style={{
            width: 0,
            animation: "expandLine 0.8s 0.3s ease forwards",
            background: "var(--accent)",
          }}
        />
      </div>

      {/* Intro text */}
      <p
        className="text-base leading-6 mb-10 animate-fade-up delay-200"
        style={{ color: "var(--text-secondary)" }}
      >
        無論是合作邀約、技術交流，或只是想打個招呼，都歡迎透過以下方式聯繫我。
      </p>

      <div className="flex gap-16 flex-wrap">
        {/* Left — Contact Info */}
        <div className="space-y-6 animate-fade-up delay-300 min-w-[240px]">
          {contactInfo.map((item) => (
            <div key={item.label} className="flex items-start gap-4">
              <div
                className="w-9 h-9 rounded flex items-center justify-center shrink-0 mt-0.5"
                style={{
                  background: "rgba(212,168,83,0.08)",
                  color: "var(--accent)",
                  fontSize: 14,
                }}
              >
                {item.icon}
              </div>
              <div>
                <p
                  className="text-[10px] tracking-[0.15em] uppercase mb-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  {item.label}
                </p>

                <p className="text-sm" style={{ color: "var(--text-primary)" }}>
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
