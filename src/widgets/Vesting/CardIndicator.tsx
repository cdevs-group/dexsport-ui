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
        <Text
          color="greyText"
          fontSize="14px"
          lineHeight="24px"
          letterSpacing="-0.02em"
          marginBottom="2px"
          fontWeight="400"
        >
          {data.text}
        </Text>
        <Text fontSize="24px" lineHeight="32px" letterSpacing="-0.02em" fontWeight="400">
          {data.value}
        </Text>
      </Card>{" "}
      <Claimed canClaim={canClaim} disabledTopCards={!!disabledTopCards} id={id} />
    </div>
  );
};

const Card = styled.div<{ blur?: boolean; blurTop?: boolean }>`
  position: relative;
  padding: 18px 24px;
  background: ${({ theme }) => theme.colors.dark};
  box-shadow: ${({ theme }) => theme.colors.boxShadow2};
  border-radius: 20px;
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
