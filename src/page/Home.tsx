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
        <div className="" onClick={() => refetch}>
          准备开始
        </div>
      )}
    </>
  );
};

export default Home;
