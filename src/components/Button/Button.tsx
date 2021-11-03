import React, { cloneElement, ElementType, isValidElement } from "react";
import LoaderSmall from "../Loader/LoaderSmall";
import { CercleIcon } from "../Svg";
import StyledButton from "./StyledButton";
import { ButtonProps, scales, variants } from "./types";

const Button = <E extends ElementType = "button">(props: ButtonProps<E>): JSX.Element => {
  const { startIcon, endIcon, external, className, isLoading, disabled, children, variant, ...rest } = props;
  const isDisabled = isLoading || disabled || props.spinColor || variant === variants.LOAD_COLOR;
  const classNames = className ? [className] : [];
  if (isLoading) {
    classNames.push("yay-button--loading");
  }

  if (isDisabled && !isLoading) {
    classNames.push("yay-button--disabled");
  }

  return (
    <StyledButton
      $isLoading={isLoading}
      variant={variant}
      className={classNames.join(" ")}
      disabled={isDisabled}
      {...rest}
    >
      <>
        {isValidElement(startIcon) &&
          cloneElement(startIcon, {
            mr: "0.5rem",
          })}
        {props.spinColor || variant === variants.LOAD_COLOR ? <LoaderSmall /> : children}
        {props.spin ? <CercleIcon spin={true} fill="rgba(0,0,0,0)" /> : null}
        {isValidElement(endIcon) &&
          cloneElement(endIcon, {
            ml: "0.5rem",
          })}
      </>
    </StyledButton>
  );
};

Button.defaultProps = {
  isLoading: false,
  external: false,
  variant: variants.PRIMARY,
  scale: scales.MD,
  disabled: false,
};

export default Button;
