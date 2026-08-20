import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { enableRevealAnimations } from "./lib/reveal-support";
import "./styles/app.css";

enableRevealAnimations();

const root = document.getElementById("root");
if (!root) throw new Error("#root não encontrado");

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
