import React, { useEffect, useState } from "react";

const App = () => {
  const [dark, setDark] = useState(false);
  const [count, setCount] = useState(0);
  const onToggleTheme = () => {
    setDark(!dark);
    // console.log(dark);
  };

  // 1. Without dep array[]
  //   useEffect(() => {
  //     console.log("Runs on every render");
  //   });

  // 2. empty dep array[]
  //   useEffect(() => {
  //     console.log("first load one time");
  //   }, []);

  // 3. With dep array[] - when the value change at that only render
  useEffect(() => {
    console.log("Render only if somethign changes ex: count");
  }, [count]);

  return (
    // <div style={{ height: "100vh", backgroundColor: dark ? "#000" : "#fff" }}>
    //   <button onClick={onToggleTheme}>Toogle theme</button>
    // </div>
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: "10px",
      }}
    >
      <button onClick={() => setCount(count - 1)}>-</button>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default App;
