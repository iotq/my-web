import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export function MainLayout() {

  return (
    <Layout className="min-h-screen!">
      <Sidebar />
      <Layout.Content className="relative p-8!">
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};
