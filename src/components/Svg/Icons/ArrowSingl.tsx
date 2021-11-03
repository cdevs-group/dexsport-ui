import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="42px" viewBox="0 0 42 42" {...props}>
      <rect x="36" y="36" width="30" height="30" rx="7" transform="rotate(180 36 36)" fill="white" fillOpacity="0.15" />
      <path d="M22 25L18 21L22 17" stroke="white" strokeWidth="2" />
    </svg>
  );
};

export default Icon;
