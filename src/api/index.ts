export const queryCity = (city?: string | undefined) =>
  fetch(`http://jsonplaceholder.typicode.com/posts`)
    .then((res) => res.json())
    .then((res) => res);
