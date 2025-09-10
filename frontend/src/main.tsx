import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Mount App into <div id="root"></div>
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
