import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import LinkExternal from "../../components/Link/LinkExternal";
import Flex from "../../components/Box/Flex";
import { Modal } from "../Modal";
import CopyToClipboard from "./CopyToClipboard";
import styled from "styled-components";
import { Button as Input } from "./ConnectModal";
import { connectorLocalStorageKey } from "./config";
import { TextsAccount } from "./useWalletModal";

interface Props {
  account: string;
  logout: () => void;
  onDismiss?: () => void;
  texts: TextsAccount;
}

const AccountModal: React.FC<Props> = ({ texts, account, logout, onDismiss = () => null }) => (
  <Modal title={texts.title} onDismiss={onDismiss}>
    <ModalWrap>
      <Text bold style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" }}>
        <AccountWrap as="div">
          <AccountText fontWeight={500} color="text">
            {account}
          </AccountText>
        </AccountWrap>
      </Text>
      <Flex mb="32px">
        <LinkExternal color="#47DA3B" small href={`https://bscscan.com/address/${account}`} mr="16px">
          {texts.view}
        </LinkExternal>
        <CopyText color="#47DA3B">
          <CopyToClipboard toCopy={account} textCopied={texts.copied}>
            {texts.copy}
          </CopyToClipboard>
        </CopyText>
      </Flex>
      <Flex justifyContent="center">
        <Button
          mt="60px"
          scale="md"
          width="100%"
          variant="green"
          onClick={() => {
            logout();
            window.localStorage.removeItem(connectorLocalStorageKey);
            onDismiss();
          }}
        >
          {texts.button}
        </Button>
      </Flex>
    </ModalWrap>
  </Modal>
);

export default AccountModal;

const ModalWrap = styled.div`
  padding: 0 20px 20px;
`;
const AccountWrap = styled(Input)`
  padding: 17px 15px;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 17px 20px;
  }
`;
const CopyText = styled(Text)`
  transition: none.2s;
  &:hover {
    text-decoration: underline;
  }
`;

const AccountText = styled(Text)`
  font-size: 10px;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 11px;
  }
`;
