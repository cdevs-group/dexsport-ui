import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.46484 4.46484L11.5359 11.5359" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M11.5371 4.46484L4.46604 11.5359" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

export default Icon;
