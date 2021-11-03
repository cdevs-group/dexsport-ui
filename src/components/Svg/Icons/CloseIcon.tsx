import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg width={42} height={42} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x={6} y={6} width={30} height={30} rx={7} fill={props.fill || "rgb(58,58,64)"} />
      <g filter="url(#prefix__filter0_dCloseIcon)" stroke="#fff" strokeWidth={2} strokeLinecap="round">
        <path d="M17.465 17.465l7.07 7.07M24.537 17.465l-7.071 7.07" />
      </g>
      <defs>
        <filter
          id="prefix__filter0_dCloseIcon"
          x={12.465}
          y={14.464}
          width={17.073}
          height={17.071}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={2} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};

export default Icon;
