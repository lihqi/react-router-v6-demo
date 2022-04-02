import nProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Nprogress = () => {
  const nprogressRef = useRef(nProgress.start());
  const location = useLocation();
  useEffect(() => {
    console.log();
    if (nprogressRef.current.status !== null) {
      nprogressRef.current = nProgress.done();
    }
  }, [location.pathname]);

  return null;
};

export default Nprogress;
