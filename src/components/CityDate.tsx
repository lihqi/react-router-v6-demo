// import { useQuery } from "react-query";
// import { queryCity } from "../api";
import { useRef } from "react";

const CityDate = () => {
  const cityRef = useRef("广州");
  // const { data, isLoading } = useQuery(
  //   ["city", cityRef.current],
  //   ({ queryKey }) => queryCity(queryKey[1]),
  //   {
  //     refetchOnWindowFocus: false,
  //   }
  // );
  // return (
  //   <>
  //     {isLoading ? (
  //       <>Loading...</>
  //     ) : (
  //       " " + data.data.cityname + " " + data.data.weather
  //     )}
  //   </>
  // );
  return <div>{cityRef.current}</div>;
};

export default CityDate;
