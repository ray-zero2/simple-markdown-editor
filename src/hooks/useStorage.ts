import { useCallback, useState } from "react"
import STORAGE_KEYS from '../config/storageKeys';

type StorageKeyName = keyof typeof STORAGE_KEYS;

const useStorage = (storageKey: StorageKeyName, initValue?: string) => {
  const storageValue = localStorage.getItem(storageKey);
  const startValue = storageValue || initValue || "";
  const [value, setValue] = useState(startValue);

  const setStorage = useCallback((value: string) => {
    setValue(value);
    localStorage.setItem(storageKey, value);
  }, []);

  return [value, setStorage] as const;
}

export default useStorage;
