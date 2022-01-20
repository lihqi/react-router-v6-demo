import { Button } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setisLogin] = useState(false);

  const loginIn = (): void => {
    setisLogin(!isLogin);
    setTimeout(() => {
      setisLogin(!isLogin);
      navigate("/", { replace: true });
    }, 1000);
  };

  return (
    <div className="h-full flex justify-center items-center">
      <div>
        <div>Login</div>
        <Button type="primary" onClick={loginIn} loading={isLogin}>
          Login In
        </Button>
      </div>
    </div>
  );
};

export default Login;
