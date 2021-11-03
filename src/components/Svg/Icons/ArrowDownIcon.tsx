import { fill } from "lodash";
import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1 1L5 5L9 1" stroke={props.stroke || "#fff"} strokeWidth="1.8" />
    </svg>
  );
};

export default Icon;
