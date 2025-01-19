import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";
import RelativeRouting from "./relative-routing";

const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(<RelativeRouting />);
}
