import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="42px" viewBox="0 0 42 42" {...props}>
      <rect fill={props.fill || "#4BE43E"} x="6" y="6" width="30" height="30" rx="7" />
      <g filter="url(#filter0_d)">
        <mask id="path-2-inside-1234" fill="white">
          <rect x="15" y="15" width="6" height="6" rx="1" />
        </mask>
        <rect
          fill={props.fill || "rgba(0,0,0,0)"}
          x="15"
          y="15"
          width="6"
          height="6"
          rx="1"
          stroke="white"
          strokeWidth="3.2"
          mask="url(#path-2-inside-1234)"
        />
      </g>
      <g filter="url(#filter12121_d)">
        <mask id="path-3-inside-23562" fill="white">
          <rect x="22" y="15" width="6" height="6" rx="1" />
        </mask>
        <rect
          fill={props.fill || "rgba(0,0,0,0)"}
          x="22"
          y="15"
          width="6"
          height="6"
          rx="1"
          stroke="white"
          strokeWidth="3.2"
          mask="url(#path-3-inside-23562)"
        />
      </g>
      <g filter="url(#filter2_d)">
        <rect
          fill={props.fill || "rgba(0,0,0,0)"}
          x="22.8"
          y="22.8"
          width="4.4"
          height="4.4"
          rx="2.2"
          stroke="white"
          strokeWidth="1.6"
        />
      </g>
      <g filter="url(#filter333_d)">
        <mask id="path-5-inside-32" fill="white">
          <rect x="15" y="22" width="6" height="6" rx="1" />
        </mask>
        <rect
          fill={props.fill || "rgba(0,0,0,0)"}
          x="15"
          y="22"
          width="6"
          height="6"
          rx="1"
          stroke="white"
          strokeWidth="3.2"
          mask="url(#path-5-inside-32)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="11"
          y="13"
          width="14"
          height="14"
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
        <filter
          id="filter12121_d"
          x="18"
          y="13"
          width="14"
          height="14"
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
        <filter
          id="filter2_d"
          x="18"
          y="20"
          width="14"
          height="14"
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
        <filter
          id="filter333_d"
          x="11"
          y="20"
          width="14"
          height="14"
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
      </defs>
    </Svg>
  );
};

export default Icon;
