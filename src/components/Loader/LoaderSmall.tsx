import React from "react";
import styled, { keyframes } from "styled-components";

const LoaderSmall: React.FC = () => {
  return (
    <LoaderBlock>
      <span />
    </LoaderBlock>
  );
};

export default LoaderSmall;

const loader1 = keyframes`
    0%   { transform: rotate(0deg); }
    25%   { transform: rotate(90deg); }
    50%   { transform: rotate(180deg); }
	  75% { transform: rotate(270deg); }
    100% { transform: rotate(360deg); }
  `;

const loaderdot1 = keyframes`
    0% { transform: translate3d(0, 0, 0); }
    50%  { transform: translate3d(3px, 0, 0); }
    100% { transform: translate3d(0, 0, 0); }
  `;
const loaderdot2 = keyframes`
    0%   { transform: translate3d(0, 0, 0); }
    50%  { transform: translate3d(-3px, 0, 0); }
    100% { transform: translate3d(0, 0, 0); }
  `;
const loaderdot3 = keyframes`
    0%   { transform: translate3d(0, 0, 0); }
    50%  { transform: translate3d(0, 3px, 0); }
    100% { transform: translate3d(0, 0, 0); }
 `;
const loaderdot4 = keyframes`
    0%   { transform: translate3d(0, 0, 0); }
    50%  { transform: translate3d(0, -3px, 0); }
    100% { transform: translate3d(0, 0, 0); }
  `;

const LoaderBlock = styled.div`
  height: 35px;
  width: 35px;
  animation: ${loader1} 3s linear 0s infinite normal;
  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: auto;
    margin: auto;
    width: 11px;
    height: 11px;
    background: #ff9525;
    border-radius: 50%;
    animation: ${loaderdot1} 1s ease-out infinite;
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: auto;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 11px;
    height: 11px;
    background: #69e35f;
    border-radius: 50%;
    animation: ${loaderdot2} 1s ease-out infinite;
  }
  & span {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    height: 35px;
    width: 35px;
    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      bottom: auto;
      right: 0;
      margin: auto;
      width: 11px;
      height: 11px;
      background: #ff6161;
      border-radius: 50%;
      animation: ${loaderdot3} 1s ease-out infinite;
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: auto;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      width: 11px;
      height: 11px;
      background: #eccb57;
      border-radius: 50%;
      animation: ${loaderdot4} 1s ease-out infinite;
    }
  }
`;
