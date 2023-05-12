import "./App.css";
import { io } from "socket.io-client";
import { useCallback, useEffect, useRef, useState } from "react";
import Test from "./Test";

function App() {
  const ref = useRef(null);
  ref.current = ref.current ?? io("http://localhost:8500");

  return <>{ref.current && <Test connection={ref.current} />}</>;
}

export default App;
