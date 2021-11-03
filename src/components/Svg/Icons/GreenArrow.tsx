import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18">
      <path
        d="M7.58579 14.6571L1.92893 9.00022M1.92893 9.00022L7.58579 3.34337M1.92893 9.00022L16.0711 9.00022"
        stroke="url(#paint0_linearzaq)"
        strokeWidth="2"
        strokeLinecap="round"
        {...props}
      />
      <defs>
        <linearGradient
          id="paint0_linearzaq"
          x1="4.33309"
          y1="13.6671"
          x2="12.5355"
          y2="5.46469"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4CEE3E" />
          <stop offset="1" stopColor="#47DA3B" />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;
