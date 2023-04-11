import React from "react";
import { BrowserRouter } from "react-router-dom";
import RouteApps from "./routes/routes";
import DefaultTop from "./utils/defaultTop";

export default function App() {
  return (
    <BrowserRouter>
      <DefaultTop />
      <RouteApps />
    </BrowserRouter>
  );
}
