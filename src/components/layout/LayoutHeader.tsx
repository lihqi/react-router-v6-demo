import { Header } from "antd/lib/layout/layout";
import LayoutAvatar from "./LayoutAvatar";
import CityDate from "./CityDate";
import DateTime from "./DateTime";
import LayoutTitle from "./LayoutTitle";

const LayoutHeader = () => {
  return (
    <Header className="bg-white flex items-center justify-between px-5">
      <LayoutTitle />
      <div className="space-x-3 flex items-center">
        <div className="text-base flex items-center space-x-5">
          <DateTime />
          <CityDate />
        </div>
        <div>欢迎</div>
        <LayoutAvatar />
      </div>
    </Header>
  );
};

export default LayoutHeader;
