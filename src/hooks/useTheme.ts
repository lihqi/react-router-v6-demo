import { useEffect } from "react";
import { getCurrentTime, localStorage } from "../utils";

export const useTheme = () => {
  //加载判断theme
  useEffect(() => {
    const theme:string = localStorage.getItem("theme");
    if (!!theme) {
      if (theme === "dark") {
        document.documentElement.classList.add(theme);
      }
    } else {
      if (getCurrentTime()) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  const setLight = (theme: string): void => {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", theme);
  };
  const setDark = (theme: string): void => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", theme);
  };
  const setAuto = (): void => {
    document.documentElement.classList.remove("dark");
    localStorage.removeItem("theme");
  };
  return {
    setLight,
    setDark,
    setAuto,
  };
};
