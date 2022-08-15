import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const { pathname } = useLocation();
  console.log("bla/", pathname);
  useEffect(() => {
    const timer = setTimeout(
      () => window.scrollTo(0, 0, { behavior: "smooth" }),
      500
    );
    return () => clearTimeout(timer);
  }, [pathname]);
  return null;
};

export default React.memo(ScrollTop);
