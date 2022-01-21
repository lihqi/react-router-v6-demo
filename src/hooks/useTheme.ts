export const useTheme = () => {
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
