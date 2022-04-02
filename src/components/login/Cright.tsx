import { LockOutlined, UserAddOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { ChangeEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { localStorage } from "../../utils";
import LoginFooter from "./LoginFooter";

const Cright = () => {
  const navigate = useNavigate();
  const [isLogin, setisLogin] = useState(false);
  const [userFouce, setUserFouce] = useState(false);
  const [pwdFouce, setPwdFouce] = useState(false);
  // const { setLight, setDark, setAuto } = useTheme();
  const UserRef = useRef<HTMLInputElement>(null);
  const PwdRef = useRef<HTMLInputElement>(null);

  const UserFouce = () => {
    setUserFouce(true);
    UserRef.current?.focus();
  };
  const PwdFouce = () => {
    setPwdFouce(true);
    PwdRef.current?.focus();
  };
  const userBlur = () => {
    if (!UserRef.current?.value) {
      setUserFouce(false);
    }
  };
  const pwdBlur = () => {
    if (!PwdRef.current?.value) {
      setPwdFouce(false);
    }
  };
  const subChange = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(UserRef.current?.value, PwdRef.current?.value);
    setisLogin(!isLogin);
    setTimeout(() => {
      setisLogin((isLogin) => !isLogin);
      localStorage.setItem("login", true);
      navigate("/", { replace: true });
    }, 1000);
  };
  return (
    <>
      <div className="w-full flex-shrink-0 flex flex-col sm:w-[400px]">
        <div>
          <div className="text-4xl text-center mb-8">Welcome Back :)</div>
          <p
            className="text-gray-500 my-4 text-center"
            style={{ textIndent: "2rem" }}
          >
            欢迎来到蓝大牛后台管理系统！
          </p>
        </div>
        {/* from */}
        <form onSubmit={subChange} className="mt-5 space-y-5">
          {/* User */}
          <div
            className={`h-14 px-2 flex items-center space-x-2 border-2 border-gray-400 rounded ${
              userFouce ? "border-blue-500" : ""
            }`}
            onClick={UserFouce}
            onBlur={userBlur}
          >
            <UserAddOutlined
              className={`text-slate-500 text-2xl leading-4 ${
                userFouce ? "text-blue-500" : ""
              }`}
            />
            <div className="flex-1 relative h-full">
              <div
                className={`absolute top-0  transition-all ease-out ${
                  userFouce ? "translate-y-0" : "translate-y-3"
                } ${userFouce ? "text-base" : "text-lg"} ${
                  userFouce ? "text-blue-400" : "text-slate-400"
                }`}
              >
                UserName
              </div>
              <input
                className="absolute top-0 bottom-0 z-10 text-lg caret-blue-500 w-full mt-3 pt-3 pb-2 bg-transparent outline-none"
                type="text"
                ref={UserRef}
              />
            </div>
          </div>
          {/* Password */}
          <div
            className={`h-14 px-2 flex items-center space-x-2 border-2 border-gray-400 rounded ${
              pwdFouce ? "border-blue-500" : ""
            }`}
            onClick={PwdFouce}
            onBlur={pwdBlur}
          >
            <LockOutlined
              className={`text-slate-500 text-2xl leading-4 ${
                pwdFouce ? "text-blue-500" : ""
              }`}
            />
            <div className="flex-1 relative h-full">
              <div
                className={`absolute top-0 transition-all ease-out ${
                  pwdFouce ? "translate-y-0" : "translate-y-3"
                } ${pwdFouce ? "text-base" : "text-lg"} ${
                  pwdFouce ? "text-blue-400" : "text-slate-400"
                }`}
              >
                Password
              </div>
              <input
                className="absolute top-0 bottom-0 z-10 text-lg caret-blue-500 w-full mt-3 pt-3 pb-2 bg-transparent outline-none"
                type="password"
                ref={PwdRef}
              />
            </div>
          </div>
          {/* Submit */}
          <Button
            className="w-40"
            type="primary"
            htmlType="submit"
            shape="round"
            size="large"
          >
            登录
          </Button>
        </form>
        {/* footer */}
        <LoginFooter />
      </div>
    </>
  );
};

export default Cright;
