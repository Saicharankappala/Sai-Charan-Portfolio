import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


const originalError = console.error;
console.error = (...args) => {
  if (args[0] && args[0].includes("ResizeObserver loop")) {
    return;
  }
  originalError(...args);
};

ReactDOM.render(<App />, document.getElementById("root"));
<React.StrictMode>
  <App />
</React.StrictMode>
