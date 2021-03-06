import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9 1C9 0.447715 8.55228 0 8 0C7.44772 0 7 0.447715 7 1V5C7 5.55228 7.44772 6 8 6C8.55228 6 9 5.55228 9 5V1Z"
        fill="#4F46E5"
      />
      <path
        d="M12.7 3.80005C12.3 3.40005 11.7 3.50005 11.3 3.90005C10.9 4.30005 11 4.90005 11.4 5.30005C12.4 6.20005 13 7.60005 13 9.00005C13 11.8 10.8 14 8 14C5.2 14 3 11.8 3 9.00005C3 7.60005 3.6 6.20005 4.7 5.30005C5.1 4.90005 5.1 4.30005 4.8 3.90005C4.4 3.50005 3.8 3.50005 3.4 3.80005C1.9 5.10005 1 7.00005 1 9.00005C1 12.9001 4.1 16 8 16C11.9 16 15 12.9001 15 9.00005C15 7.00005 14.2 5.10005 12.7 3.80005Z"
        fill="#4F46E5"
      />
    </Svg>
  );
};

export default Icon;
