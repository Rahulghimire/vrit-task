import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import logo from "./assets/logo192.png"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <React.Suspense
      fallback={
        <div className="bg-[#fff]">
          <img
            src={logo}
            className="m-auto flex h-screen w-52 items-center object-contain"
            alt="image not found"
          />
        </div>
      }
    >
      <App />
    </React.Suspense>
  </React.StrictMode>
);
