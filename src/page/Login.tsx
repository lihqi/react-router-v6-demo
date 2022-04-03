// import { useTheme } from "../hooks/useTheme";
import Title from "../components/login/Title";
import CLeft from "../components/login/CLeft";
import Cright from "../components/login/Cright";

const Login = () => {
  return (
    <div className="h-screen min-h-[720px] flex justify-center items-center dark:bg-gray-900">
      <img
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-screen"
        src="images/home_bg.svg"
        alt="Home背景图"
      />
      <div className="relative z-10 w-full h-full min-h-[680px] backdrop-filter backdrop-blur-sm p-10 shadow-2xl flex flex-col sm:rounded-3xl sm:w-2/3 sm:h-4/5 dark:bg-white">
        {/* title */}
        <Title />
        {/* content */}
        <div className="flex-1 py-10 flex justify-center sm:space-x-10">
          {/* content-left */}
          <CLeft />
          {/* content-right */}
          <Cright />
        </div>
      </div>
    </div>
  );
};

export default Login;
