import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1 9H9M9 9V1M9 9L1 1" stroke="#4BE43E" strokeWidth="1.8" strokeLinecap="round" {...props} />
    </svg>
  );
};

export default Icon;
