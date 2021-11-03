import { MouseEvent, ReactNode } from "react";
import { SpaceProps, BackgroundProps, LayoutProps } from "styled-system";

export type AlertTheme = {
  background: string;
};

export const variants = {
  COLLECTION: "collection",
  SUCCESS: "success",
  WINNING: "winning",
  INFO: "info",
  ERROR: "error",
} as const;

export type Variants = typeof variants[keyof typeof variants];

export interface AlertWrapperProps extends SpaceProps, BackgroundProps, LayoutProps {}
export interface AlertProps {
  variant?: Variants;
  title?: string;
  children?: ReactNode;
  onClick?: (evt: MouseEvent<HTMLButtonElement>) => void;
  buttonText?: string;
  handleClose?: (evt: MouseEvent<HTMLButtonElement>) => void;
  icon?: ReactNode;
  propsWrapper?: AlertWrapperProps;
  fillCloseIcon?: string;
}
