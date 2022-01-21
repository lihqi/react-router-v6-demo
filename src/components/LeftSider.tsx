import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";

import { FC, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Routers, { IRouters } from "../Routes/Routes";

interface IProps {
  inlineCollapsed: boolean;
}

const rootSubmenuKeys = ["/details"];

const LeftSider: FC<IProps> = ({ inlineCollapsed }) => {
  const [openKeys, setOpenKeys] = useState<any[]>([]);
  const { pathname } = useLocation();

  useEffect(() => {
    const { path } = openKeyItem(Routers);
    setOpenKeys([path]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // 只打开一个列
  const onOpenChange = (keys: string[]) => {
    const latestOpenKey: string | undefined = keys.find(
      (key) => openKeys.indexOf(key) === -1
    );
    if (rootSubmenuKeys.indexOf(latestOpenKey as string) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  // 动态加载列
  const menuItem = (Routers: IRouters[]) => {
    return Routers.map(({ path, name, icon: Icon, children }: any) => {
      if (children) {
        return (
          <SubMenu key={path} icon={<Icon />} title={name}>
            {menuItem(children)}
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item key={path} icon={Icon && <Icon />}>
            <Link to={path}>{name}</Link>
          </Menu.Item>
        );
      }
    });
  };
  // 获取当前展开的列
  const openKeyItem = (Routers: IRouters[]): any => {
    return Routers.find((item) => {
      if (item.children) {
        return openKeyItem(item.children);
      } else {
        return item.path === pathname;
      }
    });
  };

  return (
    <>
      <div
        className="h-16 text-white text-3xl
       flex justify-center items-center
        bg-slate-500 bg-clip-text"
      >
        LFF
      </div>
      <Menu
        selectedKeys={[pathname]}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        mode="inline"
        theme="dark"
        inlineCollapsed={inlineCollapsed}
      >
        {menuItem(Routers)}
      </Menu>
    </>
  );
};

export default LeftSider;
