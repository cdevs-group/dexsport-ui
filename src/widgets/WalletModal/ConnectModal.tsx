import React from "react";
import styled from "styled-components";
import { transparentize } from "polished";
import { Link } from "../../components/Link";
import { Modal } from "../Modal";
import { Login } from "./types";
import { Text } from "../../components/Text";
import { connectorLocalStorageKey, getNetwork } from "./config";
import { BlockChainNetwork } from "../Menu/types";

interface Props {
  login: Login;
  onDismiss?: () => void;
  texts: {
    title: string;
    link: string;
  };
  hrefLearnHow?: string;
  network?: BlockChainNetwork;
}

const HelpLink = styled(Link)`
  display: block;
  align-self: center;
  margin: 0 auto;
  padding: 24px 0 26px 0;
  background: ${({ theme }) => theme.colors.linkColor};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 15px;
`;

const Wrap = styled.div`
  text-align: center;
  padding: 0 14px;
  min-width: 303px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 0 20px 0 27px;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  padding: 6px 6px 6px 27px;
  width: 100%;
  background: ${({ theme }) => theme.colors.dark};
  border: 0;
  border-radius: 12px;
  box-shadow: inset 0px 4px 4px ${({ theme }) => theme.colors.boxShadow};
  cursor: pointer;
  font-family: inherit;
  font-size: 15px;
  letter-spacing: 0.03em;
  line-height: 19px;
  outline: 0;
  transition: background-color 0.2s;
  color: ${({ theme }) => theme.colors.white};
`;

const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 9px;
  background: ${({ theme }) => transparentize(0.95, theme.colors.white)};
`;

const ConnectModal: React.FC<Props> = ({ texts, login, hrefLearnHow, network, onDismiss = () => null }) => (
  <Modal title={texts.title} onDismiss={onDismiss}>
    {getNetwork(network?.chainId)?.map((entry, index) => (
      <Wrap key={index}>
        <Button
          onClick={() => {
            login(entry.connectorId);
            window.localStorage.setItem(connectorLocalStorageKey, entry.connectorId);
            onDismiss();
          }}
        >
          <Text fontWeight={500} color="text" mr="16px" fontSize="15px">
            {entry.title}
          </Text>
          <ImgWrap>
            <img src={entry.icon} />
          </ImgWrap>
        </Button>
      </Wrap>
    ))}
    <HelpLink href={hrefLearnHow} external>
      {texts.link}
    </HelpLink>
  </Modal>
);

export default ConnectModal;
