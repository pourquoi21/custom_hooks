import React, { useState, useEffect, useRef } from "react";

import "./styles.css";
import useAxios from "./useAxios";

export default function App() {
  const { loading, data, error } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });

  console.log(loading, data, error);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}
