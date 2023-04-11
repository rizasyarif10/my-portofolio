import React from "react";

export default function Header({ children, background }) {
  return (
    <div className={`${background} bg-cover bg-no-repeat bg-center`}>
      {children}
    </div>
  );
}
