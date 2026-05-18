import avatarImg from "@/assets/avatar.png";
import {
  FolderOpenOutlined,
  GithubFilled,
  MailOutlined,
  ThunderboltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Button, Image, Layout, Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const menuItems: MenuProps["items"] = [
  {
    key: "/about",
    icon: <UserOutlined />,
    label: "關於我",
  },
  {
    key: "/skills",
    icon: <ThunderboltOutlined />,
    label: "技能專長",
  },
  {
    key: "/projects",
    icon: <FolderOpenOutlined />,
    label: "作品專案",
  },
  {
    key: "/contact",
    icon: <MailOutlined />,
    label: "聯絡方式",
  },
];

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    navigate(e.key);
  };

  return (
    <Layout.Sider className="py-8! pl-8! bg-transparent!" width={320}>
      <div className="pt-10 pb-6 animate-slide-left">
        <div className="mb-6 relative p-4!">
          <Avatar
            size={120}
            icon={<Image width={200} alt="basic" src={avatarImg} />}
          />
        </div>
        <h1
          className="text-3xl tracking-wide leading-tight"
        >
          蔡騰飛
        </h1>
        <p
          className="text-xs mt-2 tracking-widest uppercase"
          style={{ color: "var(--accent)" }}
        >
          Full-Stack Developer
        </p>
        <p
          className="text-sm mt-3 leading-6"
          style={{ color: "var(--text-secondary)" }}
        >
          熱愛用程式碼打造精緻體驗，
          <br />
          持續探索技術的無限可能。
        </p>
      </div>

      <div className="px-8 my-4!">
        <div className="h-px" style={{ background: "var(--border)" }} />
      </div>
      <nav className="flex-1 px-4 py-6 overflow-y-auto">
        <p
          className="text-[10px] tracking-[0.2em] uppercase mb-4 px-4"
          style={{ color: "var(--text-muted)" }}
        >
          導航
        </p>
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={handleMenuClick}
        />
      </nav>

      <div
        className="px-8 py-6 border-t animate-fade-in delay-600 pt-4!"
        style={{ borderColor: "var(--border)" }}
      >
        <Button
          shape="circle"
          icon={<GithubFilled />}
          href="https://github.com/iotq"
          target="_blank"
          rel="noopener noreferrer"
        />
        <p
          className="text-[10px] tracking-wider pt-4!"
          style={{ color: "var(--text-muted)" }}
        >
          © 2026 Choi Tang Fei
        </p>
      </div>
    </Layout.Sider>
  );
}

export default Sidebar;
