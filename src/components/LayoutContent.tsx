import { Outlet, useNavigate } from "react-router-dom";
import Layout, { Content, Footer } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import { Suspense, useEffect, useState } from "react";
import LeftSider from "../components/LeftSider";
import LayoutHeader from "../components/LayoutHeader";
import Nprogress from "./Nprogress";

const LayoutContent = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isLogin = JSON.parse(window.localStorage.getItem("login") as string);
    if (!isLogin) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Layout className="h-full">
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <LeftSider inlineCollapsed={collapsed} />
        </Sider>
        <Layout>
          <LayoutHeader />
          <Content className="relative">
            <Suspense fallback={<Nprogress />}>
              <Outlet />
            </Suspense>
          </Content>
          <Footer className="text-gray-500 text-center select-none">
            推荐使用Chrome浏览器，可以获得最佳页面体验。
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default LayoutContent;
