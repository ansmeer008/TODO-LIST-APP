import { useState, useEffect } from "react";

function useLocalStorage(key, initialState) {
  const [state, setState] = useState(
    () => JSON.parse(window.localStorage.getItem(key)) || initialState
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorage;

//로컬 스토리지 사용 : contentLists, checkedLists, isAllDone, getCookies
