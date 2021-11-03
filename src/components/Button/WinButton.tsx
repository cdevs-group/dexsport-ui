import React from "react";
import { Button } from "./index";
import { Flex } from "../Box";
import styled from "styled-components";
import { WINNER3 } from "../../constants/images";

const WinButton = ({ children, image, onClick }: { children: string; onClick: () => void; image: string }) => {
  return (
    <Flex width="fit-content" position="relative" alignItems="center">
      <Button onClick={onClick} height="46px" width="100%" maxWidth="198px" padding="0 75px 0 20px" variant="green">
        {children}
      </Button>
      <ImgBlock>
        <img src={image || WINNER3} />
      </ImgBlock>
    </Flex>
  );
};

export default WinButton;

const ImgBlock = styled.div`
  position: absolute;
  top: -27px;
  right: -7px;
  pointer-events: none;
  cursor: pointer;
`;
