import { ReactElement } from "react";
import { SpaceProps, TypographyProps } from "styled-system";
import { BaseButtonProps, Scale } from "../Button/types";

export interface ButtonMenuItemProps extends BaseButtonProps {
  isActive?: boolean;
}

export interface ButtonMenuProps extends SpaceProps, TypographyProps {
  color?: string;
  activeIndex?: number;
  onItemClick?: (index: number) => void;
  scale?: Scale;
  disabled?: boolean;
  children: ReactElement[];
  fullWidth?: boolean;
}
