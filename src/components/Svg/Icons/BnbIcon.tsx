import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="29" height="29" viewBox="0 0 29 29" {...props}>
      <rect width="28.0333" height="29" rx="7" fill={props.fill || "url(#paint7447834)"} />
      <path
        d="M14.1042 6.76672L8.94336 11.6768L10.8579 13.4983L14.1042 10.4097L17.3506 13.4983L19.2651 11.6768L14.1042 6.76672Z"
        fill="white"
      />
      <path
        d="M14.1028 23.3718L19.2637 18.4617L17.3492 16.6402L14.1028 19.7289L10.8564 16.6402L8.94192 18.4617L14.1028 23.3718Z"
        fill="white"
      />
      <rect
        x="12.1797"
        y="15.0173"
        width="2.71084"
        height="2.71084"
        transform="rotate(-45 12.1797 15.0173)"
        fill="white"
      />
      <rect
        x="18.5605"
        y="15.0173"
        width="2.71084"
        height="2.71084"
        transform="rotate(-45 18.5605 15.0173)"
        fill="white"
      />
      <rect
        x="5.80078"
        y="15.0173"
        width="2.71084"
        height="2.71084"
        transform="rotate(-45 5.80078 15.0173)"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint7447834"
          x1="14.0167"
          y1="-6.76667"
          x2="14.0167"
          y2="34.3167"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC700" />
          <stop offset="1" stopColor="#FF8A00" />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;
