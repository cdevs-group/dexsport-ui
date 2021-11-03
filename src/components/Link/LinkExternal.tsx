import React from "react";
import Link from "./Link";
import { LinkProps } from "./types";
import OpenNewIcon from "../Svg/Icons/OpenNewIcon";

const LinkExternal: React.FC<LinkProps> = ({ children, icon, ...props }) => {
  return (
    <Link external {...props}>
      {children}
      {icon || <OpenNewIcon ml="4px" />}
    </Link>
  );
};

export default LinkExternal;
