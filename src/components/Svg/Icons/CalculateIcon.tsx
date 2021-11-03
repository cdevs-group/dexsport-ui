import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path
        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"
        fill="#4BE43E"
      />
      <path
        d="M6.25 7.72H11.25V9.22H6.25V7.72ZM13 15.75H18V17.25H13V15.75ZM13 13.25H18V14.75H13V13.25ZM8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18ZM14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z"
        fill="#4BE43E"
      />
    </Svg>
  );
};

export default Icon;
