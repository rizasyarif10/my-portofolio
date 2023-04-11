import React from "react";
import LottieAnimation from "../lottieanimation";

export default function Loader({icon, width, height}) {
  return (
    <div className="relative">
      <div className="h-screen flex justify-center items-center mx-auto">
        <LottieAnimation icon={icon} width={width} height={height}/>
      </div>
    </div>
  );
}
