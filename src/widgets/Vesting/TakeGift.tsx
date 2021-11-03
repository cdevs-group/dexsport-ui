import React from "react";
import styled from "styled-components";
import { transparentize } from "polished";
import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import { Loader } from "../../components/Loader";
import BG from "./img/widget.png";

interface IProps {
  handleTakeGift: () => void;
  texts: {
    title: string;
    button: string;
    claimed: string;
  };
  claimedGift: boolean;
  images?: {
    bg: string;
  };
  giftLoader?: boolean;
}

const TakeGift = ({ handleTakeGift, texts, claimedGift, images, giftLoader }: IProps) => {
  return (
    <div style={{ position: "relative" }}>
      <Card id="TakeGift" src={images?.bg || BG}>
        <StyledTitle>{texts.title}</StyledTitle>
        <StyledButton variant="violet" onClick={handleTakeGift}>
          {texts.button}
        </StyledButton>
      </Card>
      <BlurWrapper claimedGift={claimedGift} giftLoader={giftLoader}></BlurWrapper>
      <Claimed giftLoader={giftLoader}>
        <Loader />
      </Claimed>
      <Claimed claimedGift={claimedGift}>
        <Text fontSize="24px" lineHeight="32px" letterSpacing="-0.02em" textAlign="center">
          {texts.claimed}
        </Text>
      </Claimed>
    </div>
  );
};

const Card = styled.div<{ src?: string }>`
  position: relative;
  display: block;
  padding: 37px 24px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  background: ${({ src }) => `url(${src}) no-repeat left center /cover`};
  border-radius: 20px;
  height: 100%;
  min-height: 250px;
  & img {
    display: block;
    margin: 0 auto 6px;
  }
`;

const StyledTitle = styled(Text)`
  margin-bottom: 33px;
  text-align: center;
  font-size: 22px;
  line-height: 32px;
  letter-spacing: -0.02em;
  font-weight: 700;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 24px;
  }
`;

const StyledButton = styled(Button)`
  width: 100%;
  font-weight: 400;
`;

const Claimed = styled.div<{ claimedGift?: boolean; giftLoader?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => transparentize(0.5, theme.colors.dark)};
  transition: 0.3s;
  opacity: ${({ claimedGift, giftLoader }) => (claimedGift || giftLoader ? 1 : 0)};
  pointer-events: ${({ claimedGift, giftLoader }) => (claimedGift || giftLoader ? "auto" : "none")};
  border-radius: 20px;
  z-index: 2;
`;

const BlurWrapper = styled.div<{ claimedGift?: boolean; giftLoader?: boolean }>`
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
  opacity: ${({ claimedGift, giftLoader }) => (claimedGift || giftLoader ? 1 : 0)};
  pointer-events: ${({ claimedGift, giftLoader }) => (claimedGift || giftLoader ? "auto" : "none")};
  border-radius: 20px;
  z-index: 1;
  background-image: ${`-moz-element(#TakeGift)`};
  background-repeat: no-repeat;
  background-position: 50% 0;
  filter: blur(6px);
`;
export default TakeGift;
