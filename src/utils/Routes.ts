import {
  HomeOutlined,
  AppstoreOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";
import { lazy, ReactNode } from "react";
const Role = lazy(() => import("../page/Role"));
const Home = lazy(() => import("../page/Home"));
const Details = lazy(() => import("../page/Details"));
const Rules = lazy(() => import("../page/Rules"));

export interface IRouters {
  path: string;
  name: string;
  icon?: ReactNode;
  Component?: ReactNode;
  children?: IRouters[];
}

const Routers: IRouters[] = [
  {
    path: "/",
    name: "Home",
    icon: HomeOutlined,
    Component: Home,
  },
  {
    path: "/details",
    name: "Details",
    icon: AppstoreOutlined,
    children: [
      {
        path: "/detail",
        name: "Detail",
        Component: Details,
      },
      {
        path: "/rules",
        name: "Rules",
        Component: Rules,
      },
    ],
  },
  {
    path: "/role",
    name: "Role",
    icon: AppstoreAddOutlined,
    Component: Role,
  },
];

export default Routers;
