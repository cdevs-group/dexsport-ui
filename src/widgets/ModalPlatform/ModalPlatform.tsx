import React from "react";
import styled from "styled-components";
import { Modal } from "../Modal";
import { Link } from "../../components/Link";
import { transparentize } from "polished";
import { Text } from "../../components/Text";

interface IProps {
  platforms: Array<{
    name: string;
    link: string;
    icon?: string;
  }>;
  linkAbout?: string;
  title: string;
  onDismiss: () => null;
}

const ModalPlatform = ({ onDismiss, title, platforms, linkAbout }: IProps) => {
  return (
    <Modal title={title} welcome paddingTopHeader="20px" onDismiss={onDismiss}>
      <Wrap>
        {platforms?.length > 1 && (
          <Buttons>
            {platforms?.map((el, i) => (
              <React.Fragment key={i}>
                <Button target="_blank" as="a" href={el.link}>
                  <TextStyled>{el.name}</TextStyled>
                  <img src={el.icon} alt="" />
                </Button>
              </React.Fragment>
            ))}
          </Buttons>
        )}
        {platforms?.length === 1 && (
          <ButtonOne>
            {platforms?.map((el, i) => (
              <React.Fragment key={i}>
                <Button target="_blank" as="a" href={el.link}>
                  <TextStyled>{el.name}</TextStyled>
                  <img src={el.icon} alt="" />
                </Button>
              </React.Fragment>
            ))}
          </ButtonOne>
        )}
        {linkAbout ? (
          <Link href={linkAbout} style={{ margin: "0 auto" }}>
            {linkAbout}
          </Link>
        ) : null}
      </Wrap>
    </Modal>
  );
};

export default ModalPlatform;

const Wrap = styled.div`
  padding: 0 20px 26px;
`;

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 10px;
  border-radius: 12px;
  background: ${({ theme }) => transparentize(0.85, theme.colors.grey)};
  cursor: pointer;
  border: none;
`;

const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 14px;
  margin: 40px 0;
`;
const TextStyled = styled(Text)`
  flex-grow: 1;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-align: center;
`;

const ButtonOne = styled.div`
  max-width: 167px;
  margin: 40px auto;
`;
