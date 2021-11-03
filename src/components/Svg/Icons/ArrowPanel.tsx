import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1 9L5 5L1 1" stroke="#A3A3A3" strokeWidth="1.8" />
    </svg>
  );
};

export default Icon;
