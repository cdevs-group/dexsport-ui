import React from "react";
import styled from "styled-components";
import Text from "../../../components/Text/Text";
import { ellipsis } from "../../../helpers/ellipsis";
import { useWalletModal } from "../../WalletModal";
import { Login } from "../../WalletModal/types";
import { AccountIcon } from "../../../constants/images";
import { TextsConnect, TextsAccount } from "../../WalletModal/useWalletModal";
import { BlockChainNetwork } from "../types";
import { Variant } from "../../../components/Button/types";

interface Props {
  account?: string;
  login: Login;
  text: string;
  logout: () => void;
  textsConnect: TextsConnect;
  textsAccount: TextsAccount;
  hrefLearnHow?: string;
  network?: BlockChainNetwork;
  vesting?: boolean;
  yayBalance?: string | number;
  dataTransactions?: Array<any>;
  handleClaimed?: (value: string) => void;
  handleAddToken?: () => void;
  marginContent?: string;
  minHeight?: string;
  buttonLogoutType?: Variant;
  linkExternalWalletModal?: string;
}

const Account: React.FC<Props> = ({
  text,
  account,
  login,
  logout,
  textsAccount,
  textsConnect,
  hrefLearnHow,
  network,
  vesting,
  yayBalance,
  dataTransactions,
  handleClaimed,
  handleAddToken,
  marginContent,
  minHeight,
  buttonLogoutType,
  linkExternalWalletModal,
}) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(
    login,
    logout,
    textsAccount,
    textsConnect,
    network,
    account,
    hrefLearnHow,
    vesting,
    yayBalance,
    dataTransactions,
    handleClaimed,
    handleAddToken,
    marginContent,
    minHeight,
    buttonLogoutType,
    linkExternalWalletModal
  );

  return (
    <>
      {account ? (
        <AccountBlock
          as="button"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {ellipsis(account)}
          <Avatar>
            <img src={AccountIcon} />
          </Avatar>
        </AccountBlock>
      ) : (
        <AccountBlock
          as="button"
          onClick={() => {
            onPresentConnectModal();
          }}
          className="notAuth"
        >
          <Avatar className="notAuth">{text}</Avatar>
        </AccountBlock>
      )}
    </>
  );
};

const AccountBlock = styled(Text)`
  position: relative;
  display: flex;
  min-height: 30px;
  height: 100%;
  min-width: 120px;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
  font-size: 11px;
  line-height: 14px;
  padding: 0 26px 0 10px;
  background: ${({ theme }) => theme.colors.grey};
  border-radius: 7px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  cursor: pointer;
  border: none;
  order: -1;
  &.notAuth {
    background: ${({ theme }) => theme.colors.success};
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    min-height: 40px;
    min-width: 160px;
    margin-right: 11px;
    font-size: 15px;
    line-height: 19px;
    padding: 0 56px 0 20px;
    border-radius: 12px;
    order: 0;
  }
`;
const Avatar = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  right: 2px;
  top: 50%;
  transform: translateY(-50%);
  & img {
    width: 26px;
    height: 26px;
  }
  &.notAuth {
    width: calc(100% - 4px);
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    right: 4px;
    & img {
      width: 32px;
      height: 32px;
    }
  }
`;

export default Account;
