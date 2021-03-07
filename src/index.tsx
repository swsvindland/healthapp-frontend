import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import * as registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

registerServiceWorker.unregister();
