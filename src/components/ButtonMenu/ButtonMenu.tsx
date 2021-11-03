import React, { cloneElement, Children, ReactElement } from "react";
import styled, { DefaultTheme } from "styled-components";
import { space } from "styled-system";
import { scales } from "../Button/types";
import { ButtonMenuProps } from "./types";
import getThemeValue from "../../util/getThemeValue";

interface StyledButtonMenuProps extends ButtonMenuProps {
  theme: DefaultTheme;
}

const getBackgroundColor = ({ color, theme }: StyledButtonMenuProps) => {
  return getThemeValue(`colors.${color}`, color)(theme);
};

const StyledButtonMenu = styled.div<StyledButtonMenuProps>`
  background-color: ${getBackgroundColor};
  border-radius: 9px;
  display: ${({ fullWidth }) => (fullWidth ? "flex" : "inline-flex")};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  box-shadow: ${({ theme }) => theme.colors.boxShadow4};
  font-weight: 400;
  & > button,
  & > a {
    flex: ${({ fullWidth }) => (fullWidth ? 1 : "auto")};
  }
  & > button + button,
  & > a + a {
    margin-left: 2px; // To avoid focus shadow overlap
  }
  & > button,
  & a {
    box-shadow: none;
  }
  ${({ disabled, theme, color }: any) => {
    if (disabled) {
      return `
        opacity: 0.5;
        & > button:disabled {
          background-color: transparent;
          color: ${color ? theme.colors[color] : theme.colors.text};
        }
    `;
    }
    return "";
  }}
  ${space}
`;

const ButtonMenu: React.FC<ButtonMenuProps> = ({
  activeIndex = 0,
  scale = scales.MD,
  color,
  onItemClick,
  disabled,
  children,
  fullWidth = false,
  ...props
}) => {
  return (
    <StyledButtonMenu disabled={disabled} color={color} fullWidth={fullWidth} {...props}>
      {Children.map(children, (child: ReactElement, index) => {
        return cloneElement(child, {
          isActive: activeIndex === index,
          onClick: onItemClick ? () => onItemClick(index) : undefined,
          scale,
          color,
          disabled,
        });
      })}
    </StyledButtonMenu>
  );
};

export default ButtonMenu;
