import React from "react";
import Navbar from "../navbar/navbar";

export default function BaseLayout({ children }) {
  return (
    <div className="relative z-0 bg-primary">
      <Navbar />
      {children}
    </div>
  );
}
