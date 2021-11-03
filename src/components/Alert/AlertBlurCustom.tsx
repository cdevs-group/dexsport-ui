import React from "react";
import { space, background, layout } from "styled-system";
import { transparentize } from "polished";
import styled from "styled-components";
import Text from "../Text/Text";
import { CloseIcon } from "../Svg";
import { AlertProps } from "./types";
import { Flex } from "../Box";
import { Button } from "../Button";

const StyledAlert = styled.div`
  width: 100%;
  max-width: 367px;
  position: relative;
  z-index: 5;
  transition: 0.3s ease;
  padding: 15px 60px 25px 23px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => transparentize(0.75, theme.colors.black)};
  overflow: hidden;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  ${background}
  ${space}
  ${layout}
`;

const ButtonClose = styled(Button)`
  position: absolute;
  padding: 0;
  background: none;
  border: none;
  top: 4px;
  right: 4px;
  cursor: pointer;
  box-shadow: none;
  &:disabled {
    cursor: default;
  }
`;

const AlertBlurCustom: React.FC<AlertProps> = ({ handleClose, title, children, propsWrapper }) => {
  return (
    <StyledAlert {...propsWrapper}>
      <div>
        <Flex justifyContent="space-between">
          <Text fontWeight={600} mb="7px">
            {title}
          </Text>
          <ButtonClose onClick={handleClose}>
            <CloseIcon fill="none" />
          </ButtonClose>
        </Flex>
        <div>{children}</div>
      </div>
    </StyledAlert>
  );
};

export default AlertBlurCustom;
