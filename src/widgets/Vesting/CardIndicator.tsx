import React from "react";
import styled from "styled-components";
import { Text } from "../../components/Text";
import { transparentize } from "polished";

interface IProps {
  data: {
    text: string;
    value: string;
  };
  canClaim: boolean;
  disabledTopCards?: boolean;
  id: string;
}

const CardIndicator = ({ data, canClaim, disabledTopCards, id }: IProps) => {
  return (
    <div style={{ position: "relative" }}>
      <Card id={id}>
        <TextTop>{data.text}</TextTop>
        <TextBottom>{data.value}</TextBottom>
      </Card>{" "}
      <Claimed canClaim={canClaim} disabledTopCards={!!disabledTopCards} id={id} />
    </div>
  );
};

const Card = styled.div<{ blur?: boolean; blurTop?: boolean }>`
  position: relative;
  background: ${({ theme }) => theme.colors.dark};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  border-radius: 20px;
  overflow: hidden;
`;

const TextTop = styled(Text)`
  padding: 6px 24px;
  background: ${({ theme }) => theme.colors.gradient};
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.02em;
`;
const TextBottom = styled(Text)`
  padding: 10px 24px 20px;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
`;

const Claimed = styled.div<{ canClaim: boolean; disabledTopCards: boolean; id: string }>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(15px);
  background: ${({ theme }) => transparentize(0.5, theme.colors.grey)};
  transition: 0.3s;
  opacity: ${({ canClaim, disabledTopCards }) => (disabledTopCards || !canClaim ? 1 : 0)};
  pointer-events: ${({ canClaim, disabledTopCards }) => (disabledTopCards || !canClaim ? "auto" : "none")};
  border-radius: 20px;
  z-index: 1;
  background-image: ${({ id }) => `-moz-element(#${id})`};
  background-repeat: no-repeat;
  background-position: 50% 0;
  filter: blur(10px);
`;

export default CardIndicator;
