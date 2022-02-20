import nProgress from "nprogress";
import "nprogress/nprogress.css";
import { ReactNode, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Nprogress = ({ children }: { children: ReactNode }) => {
  const nprogressRef = useRef<any>(nProgress.start());
  const location = useLocation();
  useEffect(() => {
    console.log();
    if (nprogressRef.current.status !== null) {
      nprogressRef.current = nProgress.done();
    }
  }, [location.key]);

  return <>{children}</>;
};

export default Nprogress;
