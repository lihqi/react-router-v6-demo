import { Button, Space } from "antd";
import { useNavigate } from "react-router-dom";

const NotFount = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col">
        <h1 className="text-2xl font-medium text-center mb-5">NotFount</h1>
        <Space>
          <Button type="primary" ghost onClick={() => window.history.back()}>
            返回上一页
          </Button>
          <Button
            type="primary"
            onClick={() => navigate("/", { replace: true })}
          >
            首页
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default NotFount;
