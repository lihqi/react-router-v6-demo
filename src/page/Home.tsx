import { useQuery } from "react-query";
import { queryCity } from "../api";
import SpinTwitter from "../components/SpinTwitter";

const Home = () => {
  const { isLoading } = useQuery(
    ["city", "广州"],
    ({ queryKey }) => queryCity(queryKey[1]),
    {
      refetchOnWindowFocus: false,
    }
  );
  return <>{isLoading ? <SpinTwitter /> : <div>准备开始</div>}</>;
};

export default Home;
