import { useQuery } from "react-query";
import { queryCity } from "../api";
import SpinTwitter from "../components/SpinTwitter";

const Home = () => {
  const { isLoading, refetch } = useQuery(["city", "广州"], () => queryCity, {
    refetchOnWindowFocus: false,
  });

  return (
    <>
      {isLoading ? (
        <SpinTwitter />
      ) : (
        <div
          className="bg-white h-full rounded-lg p-5 flex items-center justify-center"
          onClick={() => refetch}
        >
          <div className="text-3xl text-gray-500">
            欢迎使用蓝峰峰后台管理系统
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
