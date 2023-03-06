import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Reset } from "styled-reset";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Reset />
    <App />
  </StrictMode>
);
