import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="42px" viewBox="0 0 42 42" {...props}>
      <rect x="6" y="6" width="30" height="30" rx="7" fill={props.fill || "#4BE43E"} />
      <g filter={props.fill || "url(#filter0_dAddIcon)"}>
        <path d="M21 16V26" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M26 21L16 21" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </g>
      <defs>
        <filter
          id="filter0_dAddIcon"
          x="11"
          y="13"
          width="20"
          height="20"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <linearGradient id="paint0_linear" x1="21" y1="1.2" x2="21" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4CEE3E" />
          <stop offset="1" stopColor="#47DA3B" />
        </linearGradient>
      </defs>{" "}
    </Svg>
  );
};

export default Icon;
