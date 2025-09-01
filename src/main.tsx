import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./demo/reducer_demo";
// import App from "./demo/ref_demo";
// import App from "./demo/context_demo";
// import App from "./hook_demo/memo_demo";
// import App from "./hook_closure/set_timeout_closure";
import App from "./hook_closure/use_setInterval_hook";
createRoot(document.getElementById("root")!).render(<App />);
