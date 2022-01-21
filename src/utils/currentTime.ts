// 判断是否晚上来设置自动主题改变
export const getCurrentTime = (): boolean => {
  const date = new Date();
  if (date.getHours() >= 0 && date.getHours() < 18) {
    return false;
  } else {
    return true;
  }
};
