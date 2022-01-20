export const queryCity = (city: string | undefined) =>
  fetch(`https://api.muxiaoguo.cn/api/tianqi?city=${city}&type=1`)
    .then((res) => res.json())
    .then((res) => res);
