import React, { useState } from "react";
import styled from "styled-components";
import { CloseIcon2 } from "../Svg";
import { Text } from "../Text";

const Disclaimer: React.FC<{ text: string }> = ({ text }) => {
  const [open, setOpen] = useState(true);

  return (
    <Block open={open}>
      <StyledText>{text}</StyledText>
      <Button onClick={() => setOpen(false)}>
        <CloseIcon2 role="button" />
      </Button>
    </Block>
  );
};

export default Disclaimer;

const Block = styled.div<{ open: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  width: 100%;
  padding: ${({ open }) => (!open ? 0 : "13px 46px 13px 23px")};
  background-color: ${({ theme }) => theme.colors.green};
  z-index: 1;
  overflow: hidden;
  max-height: ${({ open }) => (!open ? 0 : 100)};
  ${({ theme }) => theme.mediaQueries.lg} {
    padding: ${({ open }) => (!open ? 0 : "13px 46px")};
  }
  & svg {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    flex-shrink: 0;
    cursor: pointer;
  }
`;
const StyledText = styled(Text)`
  max-width: 1200px;
  margin: 0 auto;
  font-weight: 500;
  font-size: 11px;
  line-height: 14px;
  text-align: left;
  & br {
    display: block;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    text-align: center;
    font-size: 15px;
    color: #fff;
    font-weight: 500;
    line-height: 1.5;
    & br {
      display: none;
    }
  }
`;
const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
`;
