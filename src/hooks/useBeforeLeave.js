import React, { useEffect, useRef } from "react";

import "./styles.css";

export default function App() {
  const useBeforeLeave = (onBefore) => {
    if (typeof onBefore !== "function") return;
    const handle = (event) => {
      console.log(event);
      onBefore();
    };
    useEffect(() => {
      document.addEventListener("mouseleave", handle);
      return () => document.removeEventListener("mouseleave", handle);
    }, []);
  };

  const begForLife = () => console.log("Plz don't leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}
