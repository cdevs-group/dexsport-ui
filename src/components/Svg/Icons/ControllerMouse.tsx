import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g opacity="0.5">
        <path
          d="M20 8.93C19.96 4.54 16.4 1 12 1C7.6 1 4.04 4.54 4 8.93V14.93C4 19.35 7.58 22.93 12 22.93C16.42 22.93 20 19.35 20 14.93V8.93ZM18 8.93H13V3.09C15.81 3.56 17.96 5.99 18 8.93ZM11 3.09V8.93H6C6.01881 7.52547 6.52939 6.17198 7.44292 5.10497C8.35646 4.03796 9.61514 3.32496 11 3.09ZM18 14.93C18 18.24 15.31 20.93 12 20.93C8.69 20.93 6 18.24 6 14.93V10.93H18V14.93Z"
          fill="white"
          {...props}
        />
      </g>
    </svg>
  );
};

export default Icon;
