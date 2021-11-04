import React from "react";
import styled from "styled-components";

const Burger = ({ open, onClick }: { open: boolean; onClick: () => void }) => {
  return (
    <BurgerWrap onClick={onClick}>
      <BurgerLine />
    </BurgerWrap>
  );
};

export default Burger;

const BurgerWrap = styled.button`
  display: block;
  border: none;
  outline: none;
  padding: 0;
  background: none;
  ${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
`;
const BurgerLine = styled.div`
  height: 2px;
  width: 19px;
  background: ${({ theme }) => theme.colors.white};
  position: relative;
  &:after,
  &:before {
    position: absolute;
    content: "";
    display: block;
    background: ${({ theme }) => theme.colors.white};
    width: 100%;
    height: 100%;
  }
  &:after {
    top: 8px;
  }
  &:before {
    bottom: 8px;
  }
`;
