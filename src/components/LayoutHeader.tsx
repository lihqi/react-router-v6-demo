import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { Header } from "antd/lib/layout/layout";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { queryCity } from "../api";
import { useRef } from "react";

const LayoutHeader = () => {
  const cityRef = useRef("广州");
  const navitage = useNavigate();
  const { data, isLoading } = useQuery(
    ["city", cityRef.current],
    ({ queryKey }) => queryCity(queryKey[1]),
    {
      refetchOnWindowFocus: false,
    }
  );
  const loginOut = () => {
    window.localStorage.setItem("login", JSON.stringify(false));
    navitage("/login", { replace: true });
  };
  return (
    <Header className="bg-white flex items-center justify-end px-5">
      <div className="space-x-3 flex items-center">
        <div className="text-base">
          {dayjs().format("YYYY-MM-DD")}
          {isLoading ? (
            <>Loading...</>
          ) : (
            " " + data.data.cityname + " " + data.data.weather
          )}
        </div>
        <div>欢迎</div>
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
      </div>
    </Header>
  );
};

export default LayoutHeader;
