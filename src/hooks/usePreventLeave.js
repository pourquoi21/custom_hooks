import React, { useEffect, useRef } from "react";

import "./styles.css";

export default function App() {
  const usePreventLeave = () => {
    const listener = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };
    const enablePrevent = () =>
      window.addEventListener("beforeunload", listener);
    const disablePrevent = () =>
      window.removeEventListener("beforeunload", listener);
    return { enablePrevent, disablePrevent };
  };

  const { enablePrevent, disablePrevent } = usePreventLeave();

  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
}
