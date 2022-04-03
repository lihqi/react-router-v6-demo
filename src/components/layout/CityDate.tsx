import { useQuery } from "react-query";

const CityDate = () => {
  const { data, isLoading } = useQuery(
    ["weather", "440100"],
    ({ queryKey }) =>
      fetch(
        `https://restapi.amap.com/v3/weather/weatherInfo?extensions=base&output=JSON&city=${queryKey[1]}&key=9e3a557bd203beaf81aa0af83e2e8e82`,
        {
          method: "get",
        }
      )
        .then((res) => res.json())
        .then((res) => res),
    {
      refetchOnWindowFocus: false,
    }
  );
  return (
    <>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <span>{`${data?.lives[0].city} ${data?.lives[0].weather}`}</span>
      )}
    </>
  );
};

export default CityDate;
