import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./demo/reducer_demo";
// import App from "./demo/ref_demo";
// import App from "./demo/context_demo";
import App from "./demo/memo_demo";
createRoot(document.getElementById("root")!).render(<App />);
