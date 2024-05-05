import { useEffect, useState } from "react";

function useLocalStorage(field, key) {
  console.log(field, "props"); // name, pohone, email, gender

  const [val, setVal] = useState(() => {
    const val = JSON.parse(localStorage.getItem(key))?.[field];
    return val ? val : "";
  });

  useEffect(() => {
    const oldObj = JSON.parse(localStorage.getItem(key));

    localStorage.setItem(
      key,
      JSON.stringify({
        ...oldObj,
        [field]: val,
      })
    );
  }, [val, field, key]);

  return [val, setVal];
}

export default useLocalStorage;

// Custom hooks are nothing but component only - JSX part.
/**
 * It means we can use
 * useState, useEffect, useRef .....
 * Math
 * EVERYTHING that a component does except returning jsx
 *
 *
 *
 * LEARNING: RE-USABILITY,
 */
