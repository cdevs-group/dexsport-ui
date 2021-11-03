import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11 11L19.25 2.75V9.16667V2.75H12.8333"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.25 2.75H4.58333C3.57042 2.75 2.75 3.57042 2.75 4.58333V17.4167C2.75 18.4296 3.57042 19.25 4.58333 19.25H17.4167C18.4296 19.25 19.25 18.4296 19.25 17.4167V13.75"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Icon;
