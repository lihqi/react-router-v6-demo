import {
  HomeOutlined,
  AppstoreOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";
import { lazy, ReactNode } from "react";
// import Details from "../page/Details";
// import Home from "../page/Home";
// import Role from "../page/Role";
// import Rules from "../page/Rules";
const Role = lazy(() => import("../page/Role"));
const Home = lazy(() => import("../page/Home"));
const Details = lazy(() => import("../page/Details"));
const Rules = lazy(() => import("../page/Rules"));

export interface IRouters {
  path: string;
  name: string;
  Icon?: ReactNode;
  Component?: ReactNode;
  children?: IRouters[];
}

const Routers: IRouters[] = [
  {
    path: "/",
    name: "Home",
    Icon: HomeOutlined,
    Component: Home,
  },
  {
    path: "/details",
    name: "Details",
    Icon: AppstoreOutlined,
    children: [
      {
        path: "/detail",
        name: "Detail",
        Component: Details,
      },
      {
        path: "/rules",
        name: "Rules",
        Icon: "",
        Component: Rules,
      },
    ],
  },
  {
    path: "/role",
    name: "Role",
    Icon: AppstoreAddOutlined,
    Component: Role,
  },
];

export default Routers;
