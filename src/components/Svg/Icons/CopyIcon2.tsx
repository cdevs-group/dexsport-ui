import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.41667 15.5833H4.58333C4.0971 15.5833 3.63079 15.3902 3.28697 15.0464C2.94315 14.7025 2.75 14.2362 2.75 13.75V4.58333C2.75 4.0971 2.94315 3.63079 3.28697 3.28697C3.63079 2.94315 4.0971 2.75 4.58333 2.75H13.75C14.2362 2.75 14.7025 2.94315 15.0464 3.28697C15.3902 3.63079 15.5833 4.0971 15.5833 4.58333V6.41667"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.2374 6.41663H7.42991C6.87049 6.41663 6.41699 6.87012 6.41699 7.42954V18.237C6.41699 18.7965 6.87049 19.25 7.42991 19.25H18.2374C18.7968 19.25 19.2503 18.7965 19.2503 18.237V7.42954C19.2503 6.87012 18.7968 6.41663 18.2374 6.41663Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Icon;
