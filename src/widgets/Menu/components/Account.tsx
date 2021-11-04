import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Text from "../../../components/Text/Text";
import { ellipsis } from "../../../helpers/ellipsis";
import { useWalletModal } from "../../WalletModal";
import { Login } from "../../WalletModal/types";
import { AVATAR_HEADER } from "../../../constants/images";
import { TextsConnect, TextsAccount } from "../../WalletModal/useWalletModal";
import { Flex } from "../../../components/Box";
import { WalletIcon } from "../../../components/Svg";
import DropdownMenu from "./DropdownMenu";

interface Props {
  account?: string;
  login: Login;
  text: string;
  logout: () => void;
  textsConnect: TextsConnect;
  textsAccount: TextsAccount;
  hrefLearnHow?: string;
  handleAddToken?: () => void;
  linkExternalWalletModal?: string;
  textDropdown: {
    connected: string;
    balance: string;
    disconnect: string;
    addToken: string;
    copied: string;
  };
  balance?: string | number;
}

const Account: React.FC<Props> = ({
  text,
  account,
  login,
  logout,
  textsAccount,
  textsConnect,
  hrefLearnHow,
  handleAddToken,
  linkExternalWalletModal,
  textDropdown,
  balance,
}) => {
  const { onPresentConnectModal } = useWalletModal(login, logout, textsAccount, textsConnect, account, hrefLearnHow);
  const [isOpen, setOpen] = useState(false);
  const refSelect = useRef<any>(null);

  const handleOpenDropdown = () => {
    setOpen(!isOpen);
  };

  const handleClickOutside = useCallback(
    (e) => {
      if (refSelect.current !== e.target && refSelect.current && !refSelect.current.contains(e.target)) {
        setOpen(false);
      }
    },
    [setOpen]
  );

  useEffect(() => {
    if (document && refSelect && refSelect.current) {
      document.addEventListener("mousedown", handleClickOutside, false);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, false);
    };
  }, [refSelect, handleClickOutside]);

  return (
    <>
      {account ? (
        <WrapperAccountBlock ref={refSelect}>
          <AccountBlock as="button" onClick={handleOpenDropdown}>
            {ellipsis(account)}
            <BalanceBlock>
              <WalletIcon />
              <BalanceText>{`${balance || 0} DESU`}</BalanceText>
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
            balance={balance}
            isOpen={isOpen}
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
