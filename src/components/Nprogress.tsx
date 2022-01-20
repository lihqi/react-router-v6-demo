import nProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Nprogress = () => {
  const location = useLocation();
  useEffect(() => {
    nProgress.start();
    return () => {
      nProgress.done();
    };
  }, [location]);

  return <></>;
};

export default Nprogress;
