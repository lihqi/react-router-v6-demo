import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const defaultPath = [
  ["/", "首页"],
  ["/detail", "详情"],
  ["/rules", "权限"],
  ["/role", "用户"],
];

const LayoutTitle = () => {
  const [title, setTtitle] = useState("");
  const { pathname } = useLocation();
  useEffect(() => {
    const pathName = defaultPath.find((i) => i[0] === pathname)!;
    setTtitle(pathName[1]);
  }, [pathname]);
  return <div>{title}</div>;
};

export default LayoutTitle;
