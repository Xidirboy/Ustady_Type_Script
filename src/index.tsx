import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./style.css";
import "toastr/build/toastr.min.css";
import App from "./App.tsx";

// Ensure the root element exists and is of type HTMLElement
const rootElement = document.getElementById("root") as HTMLElement;

if (rootElement) {
  // Create the root and render the App component
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}

// Call reportWebVitals to measure performance
reportWebVitals();
