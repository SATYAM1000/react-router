import ReactDOM from "react-dom/client";

import "./index.css";
import RelativeRouting from "./relative-routing";
import { RouterProvider } from "react-router-dom";
import { router } from "./data-layer-apis/router";

const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
}
