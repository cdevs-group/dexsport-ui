import { SpaceProps, TypographyProps } from "styled-system";
export interface TextProps extends SpaceProps, TypographyProps {
    color?: string;
    fontSize?: string;
    bold?: boolean;
    small?: boolean;
    textTransform?: "uppercase" | "lowercase" | "capitalize";
    size?: string;
}
export declare const sizes: {
    readonly XS: "xs";
    readonly SM: "sm";
    readonly MD: "md";
    readonly LG: "lg";
    readonly XL: "xl";
    readonly XXL: "xxl";
};
