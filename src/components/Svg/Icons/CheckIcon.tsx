import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1.375 4.5L5.96875 9.09375L13.625 1.4375" stroke="url(#paint0_linear_1:648)" stroke-width="2.8" />
      <defs>
        <linearGradient
          id="paint0_linear_1:648"
          x1="1.375"
          y1="5.26559"
          x2="13.625"
          y2="5.26559"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3C43DF" />
          <stop offset="0.338542" stopColor="#4932CF" />
          <stop offset="1" stop-color="#6112B0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Icon;
