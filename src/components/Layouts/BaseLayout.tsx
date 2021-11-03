import React from "react";
import styled from "styled-components";
import { BaseLayoutProps } from "./types";

const BaseLayoutBlock = styled.div<{ src: string }>`
  width: 100%;
  min-height: 100vh;
  padding-top: 59px;
  background: ${({ src }) => `url(${src}) no-repeat center top / cover`}, ${({ theme }) => theme.colors.background};
  ${({ theme }) => theme.mediaQueries.sm} {
    padding-top: 80px;
  }
`;

const BaseLayout: React.FC<BaseLayoutProps> = ({ src, children }) => {
  return <BaseLayoutBlock src={src}>{children}</BaseLayoutBlock>;
};

export default BaseLayout;
