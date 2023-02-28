import React, { useEffect, useRef } from "react";

import "./styles.css";

export default function App() {
  const useClick = (onClick) => {
    if (typeof onClick !== "function") return;
    const element = useRef();
    useEffect(() => {
      if (element.current) {
        element.current.addEventListener("click", onClick);
      }
      return () => {
        if (element.current) {
          element.current.removeEventListener("click", onClick);
        }
      };
    }, []);
    return element;
  };

  const sayHello = () => console.log("Hello");
  const title = useClick(sayHello);

  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
}
