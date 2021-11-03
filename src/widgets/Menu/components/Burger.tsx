import React from "react";
import styled from "styled-components";

const Burger = ({ open, onClick }: { open: boolean; onClick: () => void }) => {
  return (
    <BurgerWrap onClick={onClick} className={open ? "open" : ""}>
      <RoundWrap>
        <BurgerRound1 />
        <BurgerRound2 />
        <BurgerRound3 />
        <BurgerRound4 />
      </RoundWrap>
    </BurgerWrap>
  );
};

export default Burger;

const BurgerWrap = styled.button`
  border: none;
  padding: 0;
  outline: none;
  position: relative;
  width: 30px;
  height: 30px;
  cursor: pointer;
  border-radius: 7px;
  background: ${({ theme }) => theme.colors.bgOpacity};
  ${({ theme }) => theme.mediaQueries.lg} {
    display: none;
  }
`;

const RoundWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  transition: 0.3s;
  pointer-events: none;
  ${BurgerWrap}.open & {
    transform: rotate(180deg);
  }
`;

const BurgerRound1 = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  background: ${({ theme }) => theme.colors.text};
  border-radius: 50%;
  top: calc(50% - 3px);
  left: 6px;
`;

const BurgerRound2 = styled(BurgerRound1)`
  top: 6px;
  left: calc(50% - 3px);
`;

const BurgerRound3 = styled(BurgerRound1)`
  left: auto;
  right: 6px;
  top: calc(50% - 3px);
  background: ${({ theme }) => theme.colors.green};
`;

const BurgerRound4 = styled(BurgerRound2)`
  top: auto;
  left: calc(50% - 3px);
  bottom: 6px;
`;
