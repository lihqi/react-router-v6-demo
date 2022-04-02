import {
  FacebookOutlined,
  GoogleOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import LoginFooterItem from "./LoginFooterItem";

const LoginFooter = () => {
  return (
    <div className="my-5">
      <div className="flex items-center justify-center space-x-2">
        <div className="w-1/3 h-px bg-gray-300"></div>
        <span className="text-lg select-none">or</span>
        <div className="w-1/3 h-px bg-gray-300"></div>
      </div>
      <div className="flex items-center justify-center space-x-5 mt-5">
        <LoginFooterItem Icon={GoogleOutlined} title="Google" />
        <LoginFooterItem Icon={TwitterOutlined} title="Twitter" />
        <LoginFooterItem Icon={FacebookOutlined} title="Facebook" />
      </div>
    </div>
  );
};

export default LoginFooter;
