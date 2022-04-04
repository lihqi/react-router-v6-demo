import { Route, Routes } from "react-router-dom";
import Routers, { IRouters } from "../router/Routes";
import Login from "./Login";
import NotFount from "../components/NotFount";
import { useTheme } from "../hooks/useTheme";
import Nprogress from "../components/Nprogress";
import LayoutContent from "../components/layout/LayoutContent";

const App = () => {
  useTheme();
  // 动态加载路由
  const routesLoad = (Routers: IRouters[]): any => {
    return Routers.map(({ path, Component, children }: any) => {
      if (children) {
        return routesLoad(children);
      } else {
        return <Route key={path} path={path} element={<Component />} />;
      }
    });
  };
  return (
    <div className="h-screen">
      <Nprogress />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LayoutContent />}>
          {routesLoad(Routers)}
        </Route>
        <Route path="*" element={<NotFount />} />
      </Routes>
    </div>
  );
};
{
  /* <Route path="/login/ssologin" element={<div>单点登录</div>}></Route> */
}
export default App;
