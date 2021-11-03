import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="30" height="30" rx="7" fill={props.fill || "#4BE43E"} />
      <g>
        <path d="M15 20L20 25L27 16" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="10"
          y="13"
          width="22"
          height="19.5082"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.604167 0 0 0 0 0.29 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <linearGradient id="paint0_linear" x1="21" y1="6" x2="21" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFEA2C" />
          <stop offset="1" stopColor="#FFB72C" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Icon;
