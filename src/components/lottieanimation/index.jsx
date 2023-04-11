import Lottie from "lottie-react-web";
import React from "react";

export default function LottieAnimation({ icon, width, height }) {
  const options = {
    animationData: icon,
    loop: true,
  };
  return <Lottie options={options} width = {width} height = {height} />;
}
