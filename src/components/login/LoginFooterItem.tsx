import { Tooltip } from "antd";
import { FC } from "react";

interface IProps {
  Icon: Function;
  title: string;
}

const LoginFooterItem: FC<IProps> = ({ Icon, title }) => {
  return (
    <Tooltip title={title}>
      <div className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full transition hover:bg-gray-300 group">
        <Icon className="text-2xl leading-[0] transition group-hover:text-blue-500" />
      </div>
    </Tooltip>
  );
};

export default LoginFooterItem;
