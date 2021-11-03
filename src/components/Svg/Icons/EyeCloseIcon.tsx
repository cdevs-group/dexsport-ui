import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="30" height="30" viewBox="0 0 30 30" color="none" {...props}>
      <rect width="30" height="30" rx="7" fill="white" fillOpacity="0.15" />
      <path
        d="M6 12.4706L7.00285 13.5324C11.3437 18.1286 18.6563 18.1286 22.9971 13.5324L24 12.4706"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M8.64683 15.647L7.05859 17.2353" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M21.8825 15.647L23.4707 17.2353" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M15 16.9999L15 19.9999" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </Svg>
  );
};

export default Icon;
