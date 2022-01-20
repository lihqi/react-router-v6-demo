import { Route, Routes } from "react-router-dom";
import Routers, { IRouters } from "../utils/Routes";
import LayoutContent from "../components/LayoutContent";
import Login from "./Login";
import NotFount from "../components/NotFount";

const App = () => {
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
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LayoutContent />}>
          {routesLoad(Routers)}
        </Route>
        <Route path="/login/ssologin" element={<div>单点登录</div>}></Route>
        <Route path="*" element={<NotFount />} />
      </Routes>
    </div>
  );
};

export default App;
