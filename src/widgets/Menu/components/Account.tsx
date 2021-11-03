import React, { useCallback, useEffect, useRef, useState } from "react";
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
import DropdownMenu from "./DropdownMenu";

interface ITextDropdown {
  connected: string;
  balance: string;
  disconnect: string;
  addToken: string;
  copied: string;
}

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
  desuBalance?: string | number;
  dataTransactions?: Array<any>;
  handleClaimed?: (value: string) => void;
  handleAddToken?: () => void;
  marginContent?: string;
  minHeight?: string;
  buttonLogoutType?: Variant;
  linkExternalWalletModal?: string;
  textDropdown: ITextDropdown;
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
  desuBalance,
  dataTransactions,
  handleClaimed,
  handleAddToken,
  marginContent,
  minHeight,
  buttonLogoutType,
  linkExternalWalletModal,
  textDropdown,
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
    desuBalance,
    dataTransactions,
    handleClaimed,
    handleAddToken,
    marginContent,
    minHeight,
    buttonLogoutType,
    linkExternalWalletModal
  );
  const [isOpen, setOpen] = useState(false);

  const handleOpenDropdown = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      {account ? (
        <WrapperAccountBlock>
          <AccountBlock as="button" onClick={handleOpenDropdown}>
            {ellipsis(account)}
            <BalanceBlock>
              <WalletIcon />
              <BalanceText>{`${desuBalance || 0} DESU`}</BalanceText>
            </BalanceBlock>
            <Avatar>
              <img src={AVATAR_HEADER} />
            </Avatar>
          </AccountBlock>
          <DropdownMenu
            linkExternalWalletModal={linkExternalWalletModal}
            logout={logout}
            account={account}
            handleAddToken={handleAddToken}
            balance={desuBalance}
            isOpen={isOpen}
            setOpen={setOpen}
            texts={textDropdown}
          />
        </WrapperAccountBlock>
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
  min-height: 30px;
  height: 100%;
  min-width: 120px;
  align-items: end;
  justify-content: center;
  margin-right: 6px;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  padding: 0 26px 0 10px;
  background: ${({ theme }) => theme.colors.black};
  border-radius: 7px;
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  border: none;
  order: -1;

  &.notAuth {
    align-items: center;
    flex-direction: row;
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.purple};
    box-shadow: ${({ theme }) => theme.colors.boxShadow2};
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    min-height: 40px;
    min-width: 166px;
    margin-right: 34px;
    font-size: 15px;
    line-height: 19px;
    padding: 0 36px 0 20px;
    border-radius: 12px;
    order: 0;
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
`;
export default Account;
