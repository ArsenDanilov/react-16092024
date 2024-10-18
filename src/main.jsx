import { createRoot } from "react-dom/client";
import { App } from "./components/App/App";
import "./components/normalize.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App title="Restaurants app" />);
