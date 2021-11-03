import React from "react";
import styled, { keyframes } from "styled-components";

const LoaderSmall: React.FC = () => {
  return (
    <LoaderBlock>
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M42.5818 7.25455C38.7515 3.08485 33.0788 1 25.5636 1H2V49H25.5636C33.0788 49 38.7515 46.9152 42.5818 42.7455C46.4121 38.5273 48.3273 32.6121 48.3273 25C48.3273 17.3394 46.4121 11.4242 42.5818 7.25455ZM35.3338 26.837L16.6011 40.3936L21.0088 28.4319L11.0914 23.6472L29.8242 10.0906L25.4165 22.0523L35.3338 26.837Z"
          fill="white"
        ></path>
      </svg>
    </LoaderBlock>
  );
};

export default LoaderSmall;

const flip = keyframes`
    0%   { transform: rotateY(0deg); }
    50%   { transform: rotateY(180deg); }
    100% { transform: rotateY(0deg); }
  `;

const LoaderBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  & svg {
    max-width: 30px;
    max-height: 30px;
    transition: 0.6s;
    transform-style: preserve-3d;
    animation: ${flip} 3s linear infinite;
  }
`;
