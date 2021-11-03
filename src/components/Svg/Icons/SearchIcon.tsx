import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="42px" viewBox="0 0 42 42" {...props}>
      <rect x="6" y="6" width="30" height="30" rx="7" fill={props.fill || "#4BE43E"} />
      <g filter="url(#filter0_d111SearchIcon)">
        <circle
          fill={props.fill || "rgba(0,0,0,0)"}
          cx="20.5"
          cy="20.5"
          r="4.6"
          stroke={props.color || "white"}
          strokeWidth="1.8"
        />
        <path d="M24 24L26 26" stroke={props.color || "white"} strokeWidth="1.8" strokeLinecap="round" />
      </g>
      <defs>
        <filter
          id="filter0_d111SearchIcon"
          x="11"
          y="13"
          width="19.8996"
          height="19.9001"
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
        <linearGradient id="paint0_linear111" x1="21" y1="1.2" x2="21" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4CEE3E" />
          <stop offset="1" stopColor="#47DA3B" />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;
