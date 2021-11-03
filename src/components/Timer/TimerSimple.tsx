import React from "react";
import styled, { DefaultTheme } from "styled-components";
import { TimerSimpleProps, TimerColorProps } from "./types";
import getThemeValue from "../../util/getThemeValue";

interface ThemedProps extends TimerColorProps {
  theme: DefaultTheme;
}

interface MyTimerProps {
  expiryTimestamp: any;
  color: string;
  texts: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
}

const getColor = ({ color, theme }: ThemedProps) => {
  return getThemeValue(`colors.${color}`, color)(theme);
};

function MyTimer({ expiryTimestamp, color, texts }: MyTimerProps) {
  const days = Math.floor(expiryTimestamp / 86400);
  const hours = Math.floor(expiryTimestamp / 3600);
  const minutes = Math.floor((expiryTimestamp - hours * 3600) / 60);
  const seconds = expiryTimestamp - hours * 3600 - minutes * 60;

  const handleDigit = (value: number) => {
    const leftDigit = value >= 10 ? value.toString()[0] : "0";
    const rightDigit = value >= 10 ? value.toString()[1] : value.toString();
    return { leftDigit, rightDigit };
  };

  const timeArray = [days, hours, minutes, seconds];
  const timeTextArray = [texts.days, texts.hours, texts.minutes, texts.seconds];

  return (
    <Wrap color={color}>
      {timeArray.map((item, i) => (
        <React.Fragment key={`item-${i}`}>
          {handleDigit(item).leftDigit}
          {handleDigit(item).rightDigit}
          {timeTextArray[i]}{" "}
        </React.Fragment>
      ))}
    </Wrap>
  );
}

const TimerSimple: React.FC<TimerSimpleProps> = ({ time, color, texts }) => {
  return (
    <div>
      <MyTimer expiryTimestamp={time || 0} color={color || "text"} texts={texts} />
    </div>
  );
};
export default TimerSimple;

const Wrap = styled.div<TimerColorProps>`
  height: 32px;
  color: ${getColor};
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  white-space: nowrap;
`;
