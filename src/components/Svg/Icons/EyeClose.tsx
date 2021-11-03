import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="42px" viewBox="0 0 42 42" {...props}>
      <rect x="6" y="6" width="30" height="30" rx="7" fill={props.fill || "#4BE43E"} />
      <g filter="url(#filter110_d112EyeClose)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.0864 19.5899C12.5892 19.3613 13.1821 19.5837 13.4106 20.0864L13.5125 20.3107C14.8107 23.1666 17.6583 25.0002 20.7955 25.0002H21.205C24.3422 25.0002 27.1898 23.1666 28.488 20.3107L28.5899 20.0864C28.8184 19.5837 29.4113 19.3613 29.914 19.5899C30.4168 19.8184 30.6391 20.4113 30.4106 20.914L30.3087 21.1383C28.686 24.7082 25.1265 27.0002 21.205 27.0002H20.7955C16.874 27.0002 13.3145 24.7082 11.6918 21.1383L11.5899 20.914C11.3613 20.4113 11.5837 19.8184 12.0864 19.5899Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter110_d112EyeClose"
          x="7.5"
          y="17.5"
          width="27.0005"
          height="15.5002"
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
        <linearGradient id="paint0_linear112" x1="21" y1="1.2" x2="21" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4CEE3E" />
          <stop offset="1" stopColor="#47DA3B" />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;
