import React from "react";
import styled from "styled-components";
import Text from "../../../components/Text/Text";
import { ellipsis } from "../../../helpers/ellipsis";
import { useWalletModal } from "../../WalletModal";
import { Login } from "../../WalletModal/types";
import { AccountIcon, AVATAR_HEADER } from "../../../constants/images";
import { TextsConnect, TextsAccount } from "../../WalletModal/useWalletModal";
import { BlockChainNetwork } from "../types";
import { Variant } from "../../../components/Button/types";
import { Flex } from "../../../components/Box";
import { WalletIcon } from "../../../components/Svg";

interface textsBridge {
  titleModal: string;
  title: string;
  network: string;
  wallet: string;
  newtworkName: string;
  walletName: string;
  button: string;
  completeText: string;
  noRecentTransactions?: string;
  transactionTitle?: string;
  tabsList?: Array<string>;
}

interface Itransactions {
  number: string;
  link: string;
  status: boolean;
  profit: string;
  linkHref: string;
}

interface Props {
  account?: string;
  login: Login;
  text: string;
  logout: () => void;
  textsConnect: TextsConnect;
  textsAccount: TextsAccount;
  hrefLearnHow?: string;
  vesting?: boolean;
  yayBalance?: string | number;
  dataTransactions?: Array<any>;
  handleClaimed?: (value: string) => void;
  bridge?: boolean;
  textsBridge?: textsBridge;
  transactionsList?: Array<Itransactions> | [];
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
  vesting,
  yayBalance,
  dataTransactions,
  handleClaimed,
  bridge,
  textsBridge,
  transactionsList,
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
          <BalanceBlock>
            <WalletIcon />
            <BalanceText>{`${yayBalance || 0} DESU`}</BalanceText>
          </BalanceBlock>
          <Avatar>
            <img src={AVATAR_HEADER} />
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
  flex-direction: column;
  height: 100%;
  align-items: end;
  justify-content: center;
  font-weight: normal;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  border: none;
  &.notAuth {
    align-items: center;
    flex-direction: row;
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.purple};
    box-shadow: ${({ theme }) => theme.colors.boxShadow2};
  }
  min-height: 40px;
  min-width: 166px;
  font-size: 15px;
  line-height: 19px;
  padding: 0 36px 0 20px;
  border-radius: 12px;
  order: 0;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-right: 34px;
  }
`;
const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  right: -8px;
  background: ${({ theme }) => theme.colors.white};
  top: 50%;
  transform: translateY(-50%);

  & img {
    width: 20px;
    height: 20px;
  }

  &.notAuth {
    width: calc(100% - 4px);
    right: 0;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    right: -10px;

    & img {
      width: 20px;
      height: 20px;
    }
  }
`;
const BalanceBlock = styled(Flex)`
  align-items: center;
  margin-top: 1px;
  justify-content: space-between;
  width: 100%;
`;
const BalanceText = styled(Text)`
  margin-left: 10px;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
`;
const WrapperAccountBlock = styled.div`
  position: relative;
  z-index: 2;
`;
export default Account;
