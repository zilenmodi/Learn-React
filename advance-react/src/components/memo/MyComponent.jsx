import React from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import { useState } from "react";
import Button from "./Button";
import ChildComponent from "./ChildComponent";

const list = ["Zilen", "Om", "Shivam", "Harsh", "Vatsal"];

const MyComponent = () => {
  console.log("MyComponentRendering");
  const [flag, setFlag] = useState(false);
  const [count, setCount] = useState(0);

  const handleToggle = useCallback(() => {
    return setFlag(!flag);
  }, [flag]);

  const handleCount = useCallback(() => {
    return setCount(count + 1);
  }, [count]);

  //memorised value that takes lots of computation
  const listDummy = useMemo(() => {
    const result = list.sort();
    return result;
  }, []);

  //   const listDummy = () => {
  //     console.log("Again computation");
  //     const result = list.sort();
  //     return result;
  //   };

  return (
    <>
      <h1>MyComponent {count}</h1>
      <Button text={"Toggle"} handleToggle={handleToggle} />
      <Button text={"Increment"} handleCount={handleCount} />
      <ChildComponent listDummy={listDummy} />
    </>
  );
};

export default MyComponent;
