import App from "./App.tsx";
import { createRoot } from "react-dom/client";
import React, { StrictMode } from "react";

const node = document.getElementById("root") as HTMLElement;
const root = createRoot(node);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
