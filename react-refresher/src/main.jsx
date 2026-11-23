import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import EffectApi from "./EffectApi";
import Form from "./Form";

// const h1 = React.createElement("h1", null, "refresher")
let name = "tarun";

createRoot(document.getElementById("root")).render(
  <>
    {/* <App /> */}
    {/* <EffectApi /> */}
    <Form />
  </>,
);
