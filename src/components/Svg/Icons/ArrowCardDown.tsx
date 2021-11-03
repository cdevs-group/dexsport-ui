import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="19" height="22" viewBox="0 0 19 19" fill="#fff" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d12ArrowCardDown)">
        <path
          d="M14.1601 9.77351L9.64417 14.2894M9.64417 14.2894L5.12825 9.77351M9.64417 14.2894L9.64417 2.99964"
          stroke={props.color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d12ArrowCardDown"
          x="0.378906"
          y="0.25"
          width="18.5318"
          height="21.1004"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <linearGradient
          id="paint0_linear"
          x1="13.3698"
          y1="12.3702"
          x2="6.82172"
          y2="5.82208"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4CEE3E" />
          <stop offset="1" stopColor="#47DA3B" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Icon;
