import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Text } from "../../../components/Text";
import { AVATAR, DEX_TOKEN } from "../../../constants/images";
import { ellipsis } from "../../../helpers/ellipsis";
import { Flex } from "../../../components/Box";
import { CopyIcon2, DisconnectIcon, OpenNewIcon } from "../../../components/Svg";
import { Button } from "../../../components/Button";

interface DropdownMenuProps {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
  balance: string | number | undefined;
  account: string;
  logout: () => void;
  handleAddToken?: () => void;
  linkExternalWalletModal?: string;
  texts: {
    connected: string;
    balance: string;
    disconnect: string;
    addToken: string;
    copied: string;
  };
}

const DropdownMenu = ({
  linkExternalWalletModal,
  account,
  isOpen,
  setOpen,
  handleAddToken,
  logout,
  balance,
  texts,
}: DropdownMenuProps) => {
  const [isTooltipDisplayed, setIsTooltipDisplayed] = useState(false);
  const refSelect = useRef<any>(null);

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
    <Wrapper ref={refSelect} open={isOpen}>
      <ConnectLine>
        <TitleStyle>{texts.connected}</TitleStyle>
        <ContentLine>
          <img src={AVATAR} alt="avatar" />
          {ellipsis(account, 5)}
          <Buttons>
            <ActionButton as="a" href={linkExternalWalletModal}>
              <OpenNewIcon />
            </ActionButton>
            <ActionButton
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(account);
                  setIsTooltipDisplayed(true);
                  setTimeout(() => {
                    setIsTooltipDisplayed(false);
                  }, 1000);
                }
              }}
            >
              <CopyIcon2 />
            </ActionButton>
          </Buttons>
          <Tooltip isTooltipDisplayed={isTooltipDisplayed}>{texts.copied}</Tooltip>
        </ContentLine>
      </ConnectLine>
      <BalanceLine>
        <TitleStyle>{texts.balance}</TitleStyle>
        <ContentLine>
          <img src={DEX_TOKEN} alt="token" />
          {balance || 0}
          <Buttons>
            <AddTokenButton onClick={handleAddToken}>{texts.addToken}</AddTokenButton>
          </Buttons>
        </ContentLine>
      </BalanceLine>
      <DisconnectLine>
        <DisconnectButton onClick={logout}>
          <DisconnectIcon />
          {texts.disconnect}
        </DisconnectButton>
      </DisconnectLine>
    </Wrapper>
  );
};

export default DropdownMenu;

const Wrapper = styled.div<{ open: boolean }>`
  position: absolute;
  min-width: 350px;
  top: ${({ open }) => (open ? "calc(100% + 17px)" : "calc(100% + 40px)")};
  right: 30px;
  background: ${({ theme }) => theme.colors.dark};
  box-shadow: ${({ theme }) => theme.colors.boxShadow6};
  border-radius: 20px;
  transition: 0.3s;
  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open ? "all" : "none")};
  color: ${({ theme }) => theme.colors.white};

  &:after {
    position: absolute;
    content: "";
    display: block;
    height: 35px;
    width: 35px;
    background: ${({ theme }) => theme.colors.dark};
    transform: rotate(45deg);
    top: -8px;
    right: 33px;
  }
`;
const ConnectLine = styled.div`
  padding: 23px 36px 0;
`;
const BalanceLine = styled(ConnectLine)`
  padding-bottom: 20px;
  position: relative;

  &:after {
    width: 100%;
    height: 1px;
    display: block;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.white};
    opacity: 0.1;
  }
`;
const DisconnectLine = styled(ConnectLine)`
  padding-bottom: 24px;
  text-align: left;
`;
const TitleStyle = styled(Text)`
  margin-bottom: 23px;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: left;
  opacity: 0.8;
`;
const ContentLine = styled(Flex)`
  position: relative;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;

  & img {
    margin-right: 10px;
  }
`;
const DisconnectButton = styled(Button)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.purple};
  box-shadow: ${({ theme }) => theme.colors.boxShadow2};

  & svg {
    margin-right: 8px;
  }
`;
const Buttons = styled(Flex)`
  max-width: 86px;
  width: 100%;
  margin-left: auto;
  justify-content: space-between;
  align-items: center;
`;
const AddTokenButton = styled.button`
  width: 100%;
  height: 38px;
  padding: 12px 5px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.whiteRgba};
  font-weight: 500;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.white};
  line-height: 14px;
  border: none;
  outline: none;
  cursor: pointer;
`;
const ActionButton = styled.button`
  max-width: 38px;
  max-height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.whiteRgba};
  cursor: pointer;
`;
const Tooltip = styled.div<{ isTooltipDisplayed: boolean; left?: string }>`
  display: ${({ isTooltipDisplayed }) => (isTooltipDisplayed ? "block" : "none")};
  position: absolute;
  bottom: -22px;
  right: 0;
  left: ${({ left }) => left || 0};
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.dark};
  border-radius: 16px;
  opacity: 0.7;
`;
