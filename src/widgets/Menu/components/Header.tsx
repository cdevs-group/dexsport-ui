import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { NavProps } from "../types";
import Account from "./Account";
import MenuLink from "./MenuLink";
import Burger from "./Burger";
import Languages from "../../../components/DropDown/Languages";
import Logo from "../image/Logo.png";
import Disclaimer from "../../../components/Disclaimer/Disclaimer";
import { LOGO_HEADER } from "../../../constants/images";

const Header: React.FC<NavProps> = ({
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  links,
  textConnect,
  textsAccount,
  textsConnect,
  hrefLearnHow,
  linkLogo,
  handleToggleNetwork,
  linkTextNetwork,
  linkHrefNetwork,
  titleNetwork,
  valuesNetworks,
  listNetwork,
  vesting,
  yayBalance,
  dataTransactions,
  handleClaimed,
  bridge,
  textsBridge,
  transactionsList,
  handleAddToken,
  disclaimer,
  disclaimerText,
  marginContent,
  minHeight,
  buttonLogoutType,
  linkExternalWalletModal,
  textDropdown,
}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const refSelect = useRef<any>(null);

  const handleClickOutside = useCallback(
    (e) => {
      if (refSelect.current !== e.target && refSelect.current && !refSelect.current.contains(e.target)) {
        setOpenMenu(false);
      }
    },
    [setOpenMenu]
  );

  useEffect(() => {
    if (document && refSelect && refSelect.current) {
      document.addEventListener("mousedown", handleClickOutside, false);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, false);
    };
  }, [refSelect, handleClickOutside]);

  const handleLink = () => {
    setOpenMenu(false);
  };

  return (
    <HeaderWrap ref={refSelect}>
      {disclaimer ? <Disclaimer text={disclaimerText || ""} /> : null}
      <Content>
        <Line>
          <LogoWrap href={linkLogo}>
            <img src={LOGO_HEADER} alt="" />
          </LogoWrap>
          <Nav className={openMenu ? "open" : ""}>
            <AccountMob>
              <Account
                text={textConnect || "Connect"}
                account={account}
                login={login}
                logout={logout}
                textsAccount={textsAccount}
                textsConnect={textsConnect}
                hrefLearnHow={hrefLearnHow}
                vesting={vesting}
                bridge={bridge}
                yayBalance={yayBalance}
                dataTransactions={dataTransactions}
                handleClaimed={handleClaimed}
                textsBridge={textsBridge}
                transactionsList={transactionsList}
                handleAddToken={handleAddToken}
                marginContent={marginContent}
                minHeight={minHeight}
                buttonLogoutType={buttonLogoutType}
                linkExternalWalletModal={linkExternalWalletModal}
                textDropdown={textDropdown}
              />
              <CloseButton onClick={() => setOpenMenu(!openMenu)}>
                <CloseLine />
              </CloseButton>
            </AccountMob>
            {links.map((item, i) => (
              <MenuLink key={i} size="md" name={item.name} url={item.url} onClick={handleLink} />
            ))}
            <LanguageBlockMob>
              <Languages currentLang={currentLang} setLang={setLang} langs={langs} />
            </LanguageBlockMob>
          </Nav>
          <RightContent>
            <AccountDesk>
              <Account
                text={textConnect || "Connect"}
                account={account}
                login={login}
                logout={logout}
                textsAccount={textsAccount}
                textsConnect={textsConnect}
                hrefLearnHow={hrefLearnHow}
                vesting={vesting}
                bridge={bridge}
                yayBalance={yayBalance}
                dataTransactions={dataTransactions}
                handleClaimed={handleClaimed}
                textsBridge={textsBridge}
                transactionsList={transactionsList}
                handleAddToken={handleAddToken}
                marginContent={marginContent}
                minHeight={minHeight}
                buttonLogoutType={buttonLogoutType}
                textDropdown={textDropdown}
                linkExternalWalletModal={linkExternalWalletModal}
              />
            </AccountDesk>
            <LanguageBlockDesk>
              <Languages currentLang={currentLang} setLang={setLang} langs={langs} />
            </LanguageBlockDesk>
            <Burger open={openMenu} onClick={() => setOpenMenu(!openMenu)} />
          </RightContent>
        </Line>
      </Content>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 10;
  & svg {
    flex-shrink: 0;
  }
`;
const Content = styled.div`
  background: ${({ theme }) => theme.colors.gradient2};
  box-shadow: ${({ theme }) => theme.colors.boxShadow3};
`;
const Line = styled.div`
  padding: 15px 15px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 0 15px;
  }
`;
const AccountDesk = styled.div`
  display: none;
  ${({ theme }) => theme.mediaQueries.md} {
    display: block;
  }
`;
const AccountMob = styled.div`
  display: block;
  ${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
`;
const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  min-height: 100vh;
  height: 100vh;
  right: -100%;
  width: 100vw;
  padding: 20px 30px 20px;
  top: 40px;
  transition: 0.3s ease-in-out;
  background: rgba(38, 38, 45, 0.7);
  backdrop-filter: blur(25px);
  z-index: 1;
  &.open {
    right: 0%;
    pointer-events: all;
  }
  //background-color: ${({ theme }) => theme.colors.grey};
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
    position: relative;
    background: transparent;
    padding: 0;
    height: auto;
    min-height: 0;
    left: 0;
    top: 0;
    z-index: 3;
  }
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
`;

const LanguageBlockMob = styled.div`
  margin-top: 37px;
  ${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
`;

const LanguageBlockDesk = styled.div`
  display: none;
  ${({ theme }) => theme.mediaQueries.md} {
    display: block;
    margin-left: 11px;
  }
`;

const LogoWrap = styled.a`
  display: flex;
  align-items: center;

  // & img {
  //   width: 79px;
  //   height: 34px;
  // }
  // & svg {
  //   width: 133px;
  //   ${({ theme }) => theme.mediaQueries.md} {
  //     width: 153px;
  //   }
  // }
  ${({ theme }) => theme.mediaQueries.md} {
    padding-right: 80px;
    & img {
      width: auto;
      height: auto;
    }
  }
`;
const CloseButton = styled.button`
  height: 50px;
  width: 50px;
  top: 15px;
  right: -10px;
  position: absolute;
  border: none;
  background: none;
  outline: none;
`;
const CloseLine = styled.div`
  width: 20px;
  height: 2px;
  transform: rotate(45deg);
  position: relative;
  background: ${({ theme }) => theme.colors.white};
  &:after {
    display: block;
    position: absolute;
    content: "";
    width: 20px;
    height: 2px;
    transform: rotate(-90deg);
    background: ${({ theme }) => theme.colors.white};
  }
`;
export default Header;
