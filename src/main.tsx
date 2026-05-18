import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import zhTW from "antd/locale/zh_TW";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      locale={zhTW}
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: "#d4a853",
          colorBgContainer: "#111111",
          colorBgElevated: "#1a1a1a",
          colorBorder: "#2a2520",
          colorText: "#f0ece4",
          colorTextSecondary: "#a09890",
          fontFamily: '"DM Sans", sans-serif',
          borderRadius: 4,
        },
        components: {
          Menu: {
            itemColor: "#a09890",
            itemHoverColor: "#f0ece4",
            itemSelectedColor: "#d4a853",
            itemBg: "transparent",
            itemHoverBg: "#242424",
            itemSelectedBg: "rgba(212,168,83,0.08)",
            subMenuItemBg: "transparent",
          },
          Tag: {
            colorBorder: "#2a2520",
          },
        },
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
);
