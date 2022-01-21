import { Button } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useTheme } from "../hooks/useTheme";
import { localStorage } from "../utils";

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setisLogin] = useState(false);
  // const { setLight, setDark, setAuto } = useTheme();

  const loginIn = (): void => {
    setisLogin(!isLogin);
    setTimeout(() => {
      setisLogin((isLogin) => !isLogin);
      localStorage.setItem("login", true);
      navigate("/", { replace: true });
    }, 1000);
  };

  return (
    <div className="h-full flex justify-center items-center dark:bg-gray-900">
      <div>
        <div className="dark:text-white">Login</div>
        <Button type="primary" onClick={loginIn} loading={isLogin}>
          Login In
        </Button>
      </div>
    </div>
  );
};

export default Login;
