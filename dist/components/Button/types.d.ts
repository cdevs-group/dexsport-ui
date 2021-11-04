import { ComponentProps, ElementType, ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";
import { LayoutProps, SpaceProps, TypographyProps } from "styled-system";
export declare const scales: {
    readonly MD: "md";
    readonly SM: "sm";
    readonly XS: "xs";
};
export declare const variants: {
    readonly PRIMARY: "primary";
    readonly SECONDARY: "secondary";
    readonly TERTIARY: "tertiary";
    readonly TEXT: "text";
    readonly DANGER: "danger";
    readonly SUBTLE: "subtle";
    readonly SUCCESS: "success";
    readonly GREEN: "green";
    readonly PINK: "pink";
    readonly OPTION: "option";
    readonly YELLOW: "yellow";
    readonly GRAY: "gray";
    readonly WHITE: "white";
    readonly LOAD_COLOR: "load-color";
    readonly VIOLET: "violet";
};
export declare type Scale = typeof scales[keyof typeof scales];
export declare type Variant = typeof variants[keyof typeof variants];
/**
 * @see https://www.benmvp.com/blog/polymorphic-react-components-typescript/
 */
export declare type AsProps<E extends ElementType = ElementType> = {
    as?: E;
};
export declare type MergeProps<E extends ElementType> = AsProps<E> & Omit<ComponentProps<E>, keyof AsProps>;
export declare type PolymorphicComponentProps<E extends ElementType, P> = P & MergeProps<E>;
export declare type PolymorphicComponent<P, D extends ElementType = "button"> = <E extends ElementType = D>(props: PolymorphicComponentProps<E, P>) => ReactElement | null;
export interface BaseButtonProps extends LayoutProps, SpaceProps, TypographyProps {
    as?: "a" | "button" | typeof Link;
    external?: boolean;
    isLoading?: boolean;
    scale?: Scale;
    variant?: Variant;
    disabled?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    spin?: boolean;
    spinColor?: boolean;
}
export declare type ButtonProps<P extends ElementType = "button"> = PolymorphicComponentProps<P, BaseButtonProps>;
