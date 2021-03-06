import React from "react";
import styled from "styled-components";
import { transparentize } from "polished";
import BG from "./img/widget.png";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import { StyledTitle } from "./ClaimTokens";

interface Iprops {
  images?: string;
  texts: {
    title: string;
    button: string;
    description: string;
  };
  linkClaimTokens?: string;
  disabledCardClaimTokens?: boolean;
}

const TokenOnPoolz = ({ images, texts, linkClaimTokens, disabledCardClaimTokens }: Iprops) => {
  return (
    <Wrap style={{ position: "relative" }}>
      <Wrapper id="TokenOnPoolz" src={images || BG}>
        <CardStyle>
          <StyledTitle size="xl">{texts.title}</StyledTitle>
          <Text margin="42px 0">{texts.description}</Text>
          <StyledButton as="a" margin="0 auto" minWidth="204px" variant="violet" href={linkClaimTokens || "#"}>
            {texts.button}
          </StyledButton>
        </CardStyle>
      </Wrapper>
      <Blur disabledCard={disabledCardClaimTokens} />
    </Wrap>
  );
};

export default TokenOnPoolz;

export const Wrap = styled.div`
  ${({ theme }) => theme.mediaQueries.lg} {
    grid-column: 1/4;
  }
`;

export const Blur = styled.div<{ disabledCard?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(15px);
  background: ${({ theme }) => transparentize(0.5, theme.colors.dark)};
  transition: 0.3s;
  opacity: ${({ disabledCard }) => (disabledCard ? 1 : 0)};
  pointer-events: ${({ disabledCard }) => (disabledCard ? "auto" : "none")};
  border-radius: 20px;
  z-index: 1;
  background-image: ${`-moz-element(#TokenOnPoolz)`};
  background-repeat: no-repeat;
  background-position: 50% 0;
  filter: blur(10px);
`;

const CardStyle = styled.div`
  text-align: center;
  padding: 20px 50px 21px;
  height: 100%;
`;

const Wrapper = styled.div<{ src?: string }>`
  position: relative;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  background: ${({ src }) => `url(${src}) no-repeat left center /cover`};
  overflow: hidden;
  border-radius: 20px;
  min-height: 250px;
`;

const StyledButton = styled(Button)`
  display: block;
  width: 100%;
  padding: 14px;
  margin: 0 auto;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.gradient3};
  border-radius: 10px;
  max-width: 204px;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.04em;
`;
