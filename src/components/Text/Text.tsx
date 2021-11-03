import styled, { DefaultTheme } from "styled-components";
import { space, typography } from "styled-system";
import { TextProps, sizes } from "./types";
import getThemeValue from "../../util/getThemeValue";

interface ThemedProps extends TextProps {
  theme: DefaultTheme;
}

const style: any = {
  [sizes.XS]: {
    fontSize: "11px",
    fontSizeLg: "14px",
  },
  [sizes.SM]: {
    fontSize: "13px",
    fontSizeLg: "16px",
  },
  [sizes.MD]: {
    fontSize: "15px",
    fontSizeLg: "19px",
  },
  [sizes.LG]: {
    fontSize: "21px",
    fontSizeLg: "27px",
  },
  [sizes.XL]: {
    fontSize: "24px",
    fontSizeLg: "30px",
  },
};

const getColor = ({ color, theme }: ThemedProps) => {
  return getThemeValue(`colors.${color}`, color)(theme);
};

const getFontSize = ({ fontSize, small }: TextProps) => {
  return small ? "14px" : fontSize || "16px";
};

const Text = styled.div<TextProps>`
  font-size: ${({ size }) => style[size || sizes.MD].fontSize};
  line-height: ${({ size }) => style[size || sizes.MD].fontSizeLg};
  /* color:${({ theme }) => theme.colors.text}; */
  color: ${getColor};
  /* font-size: ${getFontSize}; */
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
  font-weight: ${({ bold }) => (bold ? 700 : 500) || 500};
  line-height: 1.5;
  ${space}
  ${typography}
`;

Text.defaultProps = {
  color: "text",
  small: false,
};

export default Text;
