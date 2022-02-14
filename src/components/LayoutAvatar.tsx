import Avatar from "antd/lib/avatar/avatar";
import { ExclamationCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { localStorage } from "../utils";
import confirm from "antd/lib/modal/confirm";

const LayoutAvatar = () => {
  const navitage = useNavigate();
  const loginOut = () => {
    // eslint-disable-next-line no-restricted-globals
    confirm({
      title: "是否要退出登录？",
      icon: <ExclamationCircleOutlined className="text-orange-300" />,
      okText: "确认",
      cancelText: "取消",
      maskClosable: true,
      onOk: () => {
        localStorage.setItem("login", false);
        navitage("/login", { replace: true });
      },
    });
  };
  return (
    <>
      {true ? (
        <Avatar
          className="flex justify-center items-center"
          size="large"
          icon={<UserOutlined />}
          alt="用户头像"
        />
      ) : (
        <Avatar
          size="large"
          style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
        >
          U
        </Avatar>
      )}
      <Button type="link" className="text-base" onClick={loginOut}>
        退出
      </Button>
    </>
  );
};

export default LayoutAvatar;
