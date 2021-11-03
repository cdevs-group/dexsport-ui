import React, { ReactNode } from "react";
import styled from "styled-components";

interface IBlurWithBorder {
  noticeType?: NoticeBridgeType;
  children?: ReactNode;
  radiusBlur?: string;
}

export enum NoticeBridgeType {
  ERROR = "error",
  SUCCESS = "success",
}

const getBgNotice = (type: any) => {
  switch (type) {
    case NoticeBridgeType.SUCCESS:
      return {
        color: "green",
        bg: `
      radial-gradient(98% 49.86% at 100.03% 100%, #4BE43E 0%, rgba(75, 228, 62, 0.05) 100%),
      radial-gradient(24.21% 39.21% at 0% 0%, rgba(255, 255, 255, 0.81) 0%, rgba(255, 255, 255, 0.19) 100%),
      radial-gradient(21.19% 40.1% at 100.03% 0%, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);
      `,
      };
    case NoticeBridgeType.ERROR:
      return {
        color: "redBg",
        bg: `
      radial-gradient(98% 49.86% at 100.03% 100%, #F03A00 0%, rgba(240, 58, 0, 0.05) 100%),
      radial-gradient(24.21% 39.21% at 0% 0%, rgba(255, 255, 255, 0.81) 0%, rgba(255, 255, 255, 0.19) 100%),
      radial-gradient(21.19% 40.1% at 100.03% 0%, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);
      `,
      };
    default:
      return { color: "green", bg: "none" };
  }
};

const BlurWithBorder = ({ radiusBlur, noticeType, children }: IBlurWithBorder) => {
  return (
    <>
      <Notice>{children}</Notice>
      <Border radiusBlur={radiusBlur} noticeType={noticeType} />
    </>
  );
};

export default BlurWithBorder;

const Notice = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  //padding: 0 10px 50px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Border = styled.div<{ noticeType?: NoticeBridgeType; radiusBlur?: string }>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 1px;
  background: ${({ noticeType }) => getBgNotice(noticeType)?.bg};
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  border-radius: ${({ radiusBlur }) => (radiusBlur ? radiusBlur : "15px")};

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: ${({ theme }) => theme.colors.dark};
    border-radius: inherit;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    display: block;
  }
`;
const WrapperBlur = styled.div`
  margin: 0 auto;
  position: relative;
  width: fit-content;
  height: fit-content;
`;
