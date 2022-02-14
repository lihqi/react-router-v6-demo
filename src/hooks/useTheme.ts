import { useEffect } from "react";
import { localStorage } from "../utils";

// 判断是否晚上来设置自动主题改变
export const getCurrentTime = (): boolean => {
  const date = new Date();
  // 0-18时为light
  if (date.getHours() >= 0 && date.getHours() < 18) {
    return false;
  } else {
    return true;
  }
};

export const useTheme = () => {
  //加载判断theme
  useEffect(() => {
    const theme = localStorage.getItem("theme");
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
