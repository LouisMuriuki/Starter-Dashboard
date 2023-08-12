import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HeaderContextProvider } from "./context/HeaderContext";
import { DrawerContextProvider } from "./context/DrawerContext";
import { FilterContextProvider } from "./context/FilterContext";
import { ConfigProvider, theme } from "antd";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ConfigProvider>
    <React.StrictMode>
      <DrawerContextProvider>
        <FilterContextProvider>
          <HeaderContextProvider>
            <App />
          </HeaderContextProvider>
        </FilterContextProvider>
      </DrawerContextProvider>
    </React.StrictMode>
  </ConfigProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
