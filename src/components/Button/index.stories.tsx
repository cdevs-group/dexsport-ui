import React from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import WinButton from "./WinButton";
import { WINNER3 } from "../../constants/images";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {},
};

const Row = styled.div`
  margin-bottom: 32px;
  & > button + button,
  & > a + a {
    margin-left: 16px;
  }
`;

export const Variants: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Row>
          <Button width="170px" scale="md" variant="green">
            Button
          </Button>
          <Button width="170px" disabled scale="md" variant="green">
            Button
          </Button>
          <Button width="170px" scale="md" variant="option">
            Button
          </Button>
        </Row>
        <Row>
          <Button width="170px" scale="md" variant="pink">
            Button
          </Button>
          <Button width="170px" disabled scale="md" variant="pink">
            Button
          </Button>
          <Button width="300px" spin scale="md" variant="green">
            Collect Winnings
          </Button>
        </Row>
        <Row>
          <Button width="130px" scale="sm" variant="green">
            Button
          </Button>
          <Button width="130px" scale="sm" disabled variant="green">
            Button
          </Button>
          <Button width="130px" scale="sm" variant="pink">
            Button
          </Button>
          <Button width="130px" scale="sm" disabled variant="pink">
            Button
          </Button>
          <Button width="130px" scale="sm" variant="option">
            Button
          </Button>
        </Row>
        <Row>
          <Button width="130px" scale="sm" variant="text">
            Button
          </Button>
          <Button width="130px" scale="sm" variant="text" spinColor>
            Button
          </Button>
          <Button width="130px" scale="sm" variant="load-color">
            Button
          </Button>
          <WinButton onClick={() => alert("click")} image={WINNER3}>
            Leaderboard
          </WinButton>
        </Row>
      </BrowserRouter>
    </div>
  );
};
