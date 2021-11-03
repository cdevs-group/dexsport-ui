import React from "react";
import styled from "styled-components";
import { space, background, layout } from "styled-system";
import Text from "../Text/Text";
import { CloseIcon, CercleIcon, CompleteIcon, ErrorIcon } from "../Svg";
import { AlertProps, variants } from "./types";

const StyledAlert = styled.div`
  display: flex;
  align-items: baseline;
  width: fit-content;
  position: relative;
  z-index: 5;
  transition: 0.3s ease;
  padding: 15px 90px 15px 23px;
  background: ${({ theme }) => theme.colors.buttonBg};
  box-shadow: inset ${({ theme }) => theme.colors.textShadow};
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.text};
  ${background}
  ${space}
  ${layout}
`;

const getIcon = (variant: AlertProps["variant"] = variants.COLLECTION) => {
  switch (variant) {
    case variants.COLLECTION:
      return <CercleIcon spin={true} />;
    case variants.WINNING:
      return <CloseIcon />;
    case variants.SUCCESS:
      return <CompleteIcon fill="#47DA3B" />;
    case variants.INFO:
      return <></>;
    case variants.ERROR:
      return <ErrorIcon />;
    default:
      return <></>;
  }
};

const Button = styled.button`
  position: absolute;
  padding: 0;
  background: none;
  border: none;
  top: 4px;
  right: 4px;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
`;

const SetButton = ({ variant, onClick, icon }: AlertProps) => {
  const Icon = getIcon(variant);
  return (
    <Button disabled={variant !== "winning"} onClick={onClick}>
      {icon || Icon}
    </Button>
  );
};

const Alert: React.FC<AlertProps> = ({ title, children, variant, onClick, icon, propsWrapper }) => {
  return (
    <StyledAlert {...propsWrapper}>
      <Row>
        {title && (
          <Text fontWeight={600} marginRight="5px">
            {title}
          </Text>
        )}
        <div>{children}</div>
      </Row>
      <SetButton icon={icon} variant={variant} onClick={onClick} />
    </StyledAlert>
  );
};

export default Alert;
