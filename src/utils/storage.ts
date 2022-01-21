interface localStorageType {
  getItem: (key: string) => any;
  setItem: (key: string, value: any) => void;
  removeItem: (key: string) => void;
  clear: () => void;
}

export const localStorage: localStorageType = {
  getItem: (key) => window.localStorage.getItem(key) as string,
  setItem: (key, value) =>
    window.localStorage.setItem(key, JSON.stringify(value)),
  removeItem: (key) => window.localStorage.removeItem(key),
  clear: () => window.localStorage.clear(),
};
