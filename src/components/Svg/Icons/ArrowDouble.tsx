import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="42px" viewBox="0 0 42 42" {...props}>
      <rect x="36" y="36" width="30" height="30" rx="7" transform="rotate(180 36 36)" fill="white" fillOpacity="0.15" />
      <path d="M20 25L16 21L20 17" stroke="white" strokeWidth="2" />
      <path d="M26 25L22 21L26 17" stroke="white" strokeWidth="2" />
    </svg>
  );
};

export default Icon;
