import { useEffect, useState } from "react";
import dayjs from "dayjs";

const DateTime = () => {
  const [date, setData] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setData(dayjs().format("YYYY-MM-DD HH:mm:ss"));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [date]);
  return <span>{date}</span>;
};

export default DateTime;
