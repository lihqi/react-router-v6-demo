import { Route, Routes } from "react-router-dom";
import Routers, { IRouters } from "../utils/Routes";
import LayoutContent from "../components/LayoutContent";
import Login from "./Login";

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
        <Route path="*" element={<div>NotFount</div>} />
      </Routes>
    </div>
  );
};

export default App;
