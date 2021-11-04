import React from "react";
interface IPropsIcon {
    active: boolean;
    children: React.ReactNode;
}
declare const IconBlock: ({ active, children }: IPropsIcon) => JSX.Element;
export default IconBlock;
