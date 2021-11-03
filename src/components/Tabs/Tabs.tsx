import React from "react";
import styled from "styled-components";
import { transparentize } from "polished";
import { TabsProp } from "./types";

const Tabs = ({ tabValue, onClick, tabsList }: TabsProp) => {
  return (
    <TabsWrap length={tabsList?.length}>
      {tabsList?.map((item, i) => (
        <Tab onClick={onClick} className={tabValue === i ? "active" : ""} key={i} value={i}>
          {item}
        </Tab>
      ))}
    </TabsWrap>
  );
};

export default Tabs;

const TabsWrap = styled.div<{ length?: number }>`
  display: grid;
  grid-template-columns: repeat(${({ length }) => length || 2}, 1fr);
  background: ${({ theme }) => theme.colors.dark};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
`;

const Tab = styled.button`
  padding: 15px 16px;
  border: none;
  background: transparent;
  border-radius: 12px;
  font-size: 15px;
  line-height: 19px;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.5px;
  text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);
  transition: 0.3s;
  cursor: pointer;
  color: ${({ theme }) => transparentize(0.3, theme.colors.white)};
  &.active {
    background: ${({ theme }) => transparentize(0.85, theme.colors.white)};
    color: ${({ theme }) => theme.colors.white};
  }
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 15px 30px;
  }
`;
