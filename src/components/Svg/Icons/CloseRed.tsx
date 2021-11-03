import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="42px" viewBox="0 0 42 42" {...props}>
      <rect x="6" y="6" width="30" height="30" rx="7" fill="url(#paint0_linearCloseRedIcon)" />
      <g filter="url(#filter0_dCloseRedIcon)">
        <path d="M17.5352 17.4648L24.6062 24.5359" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M24.6064 17.4648L17.5354 24.5359" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </g>
      <defs>
        <filter
          id="filter0_dCloseRedIcon"
          x="12.1211"
          y="14.0508"
          width="17.8994"
          height="17.8994"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <linearGradient id="paint0_linearCloseRedIcon" x1="21" y1="6" x2="21" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF6161" />
          <stop offset="1" stopColor="#F45555" />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;
