import React from "react";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import BG from "./img/widget.png";

interface IProps {
  texts: {
    title: string;
    button: string;
  };
  images?: string;
  link?: string;
}

const Platform = ({ link, texts, images }: IProps) => {
  return (
    <div style={{ position: "relative" }}>
      <Card id="TakeGift" src={images || BG}>
        <StyledTitle>{texts.title}</StyledTitle>
        <StyledButton variant="violet" as="a" href={link} target="_blank">
          {texts.button}
        </StyledButton>
      </Card>
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

export default Platform;
