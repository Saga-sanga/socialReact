import { useState } from "react";

export function useLocalStorage(keyName: any, defaultValue: any) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value);
      } else {
        localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (error) {
      return defaultValue;
    }
  });
  const setValue = (newValue: any) => {
    try {
      localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (error) {
      console.log(error);
    }
    setStoredValue(newValue);
  };
  return [storedValue, setValue];
}
