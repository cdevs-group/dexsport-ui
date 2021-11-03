import React from "react";
import styled from "styled-components";
import { transparentize } from "polished";
import { Text } from "../../components/Text";
import { TimerSimple } from "../../components/Timer";

interface IProps {
  data: {
    textFront: string;
    textBack: string;
    textStage: string;
    timeSecond: number;
    totalSeconds: number;
    textsTime: {
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
    };
  };
  canClaim: boolean;
  disabledTopCards?: boolean;
}

const CardTimer = ({ data, canClaim, disabledTopCards }: IProps) => {
  const progress = 100 - (data.timeSecond * 100) / data.totalSeconds;

  const Progress = () => (
    <ProgressTrack>
      <ProgressBar progress={progress} />
    </ProgressTrack>
  );

  return (
    <div style={{ position: "relative" }}>
      <Wrapper canClaim={canClaim} disabledTopCards={!!disabledTopCards} id="CardTimer">
        <Inner className="card-inner">
          <CardFront canClaim={canClaim} disabledTopCards={!!disabledTopCards}>
            <TextTop>{data.textBack}</TextTop>
            <BlockBottom>
              <Text fontSize="24px" lineHeight="32px" letterSpacing="-0.02em" fontWeight="400">
                {data.textStage}
              </Text>
              <Progress />
            </BlockBottom>
          </CardFront>
          <CardBack canClaim={canClaim} disabledTopCards={!!disabledTopCards}>
            <TextTop>{data.textFront}</TextTop>
            <BlockBottom>
              <TimerSimple time={data.timeSecond} texts={data.textsTime} />
              <Progress />
            </BlockBottom>
          </CardBack>
        </Inner>
      </Wrapper>
      <Claimed canClaim={canClaim} disabledTopCards={!!disabledTopCards} />
    </div>
  );
};

const CardFront = styled.div<{ canClaim: boolean; disabledTopCards: boolean }>`
  width: 100%;
  background: ${({ theme }) => theme.colors.dark};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  border-radius: 20px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  top: 0;
  transition: 0;
  overflow: hidden;
  backface-visibility: ${({ canClaim, disabledTopCards }) => (disabledTopCards || !canClaim ? "" : "hidden")};
`;

const CardBack = styled(CardFront)`
  transform: rotateY(180deg) translateX(50%);
`;

const Wrapper = styled.div<{ canClaim: boolean; disabledTopCards: boolean }>`
  position: relative;
  perspective: 1000px;
  min-height: 97px;
  width: 100%;
  border-radius: 20px;
  &:hover {
    & .card-inner {
      transform: ${({ canClaim, disabledTopCards }) => (disabledTopCards || !canClaim ? "none" : "rotateY(180deg)")};
    }
  }
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 600ms;
  border-radius: 15px;
  box-sizing: border-box;
`;
const TextTop = styled(Text)`
  padding: 6px 24px;
  background: ${({ theme }) => theme.colors.gradient};
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.02em;
`;

const BlockBottom = styled.div`
  padding: 10px 24px;
`;

const ProgressTrack = styled.div`
  height: 2px;
  width: 100%;
  margin-top: 8px;
  background: ${({ theme }) => transparentize(0.9, theme.colors.grey2)};
  box-shadow: ${({ theme }) => theme.colors.boxShadow4};
  border-radius: 6px;
`;

const ProgressBar = styled.div<{ progress: number }>`
  height: 100%;
  width: ${({ progress }) => `${progress}%`};
  box-shadow: ${({ theme }) => theme.colors.boxShadow5};
  background: ${({ theme }) => theme.colors.gradient};
  border-radius: inherit;
`;
const Claimed = styled.div<{ canClaim: boolean; disabledTopCards: boolean }>`
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
  background: ${({ theme }) => transparentize(0.5, theme.colors.dark)};
  transition: 0.3s;
  opacity: ${({ canClaim, disabledTopCards }) => (disabledTopCards || !canClaim ? 1 : 0)};
  pointer-events: ${({ canClaim, disabledTopCards }) => (disabledTopCards || !canClaim ? "auto" : "none")};
  border-radius: 20px;
  z-index: 1;
  background-image: ${`-moz-element(#CardTimer)`};
  background-repeat: no-repeat;
  background-position: 50% 0;
  filter: blur(10px);
`;

export default CardTimer;
