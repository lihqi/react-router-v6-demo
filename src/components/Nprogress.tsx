import nProgress from "nprogress";
import "nprogress/nprogress.css";
import { ReactNode, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Nprogress = ({ children }: { children: ReactNode }) => {
  const nprogressRef = useRef<any>(nProgress.start());
  const location = useLocation();
  useEffect(() => {
    nprogressRef.current = nProgress.done();
  }, [location]);

  return <>{children}</>;
};

export default Nprogress;
