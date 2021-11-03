import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg viewBox="0 0 26 24" width="26" height="24" fill="none">
      <g filter="url(#filter989823)">
        <path d="M13 15.5L15 12.5H19" stroke={props.stroke || "#F3F3F3"} strokeWidth="2" strokeLinecap="round" />
      </g>
      <circle cx="15.5" cy="13.5" r="9.5" stroke={props.stroke || "#F3F3F3"} strokeWidth="2" />
      <defs>
        <filter
          id="filter989823"
          x="0"
          y="0.5"
          width="24.0001"
          height="21.0001"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dx="-4" dy="-3" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};

export default Icon;
