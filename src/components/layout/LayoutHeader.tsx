import { Header } from "antd/lib/layout/layout";
import dayjs from "dayjs";
import LayoutAvatar from "./LayoutAvatar";
import CityDate from "./CityDate";

const LayoutHeader = () => {
  return (
    <Header className="bg-white flex items-center justify-end px-5">
      <div className="space-x-3 flex items-center">
        <div className="text-base flex items-center space-x-5">
          <span>{dayjs().format("YYYY-MM-DD")}</span>
          <CityDate />
        </div>
        <div>欢迎</div>
        <LayoutAvatar />
      </div>
    </Header>
  );
};

export default LayoutHeader;
