import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "@/foundation/App";
import "@/foundation/styles.css";
import "@/foundation/dark.css";

const root = document.getElementById("root");
if (!root) throw new Error("Portfolio root element is missing");
createRoot(root).render(<StrictMode><App /></StrictMode>);
