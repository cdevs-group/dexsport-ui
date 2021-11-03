import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { NavProps } from "../types";
import Account from "./Account";
import MenuLink from "./MenuLink";
import Burger from "./Burger";
import Languages from "../../../components/DropDown/Languages";
import Network from "./Network";
import Disclaimer from "../../../components/Disclaimer/Disclaimer";
import { LOGO_HEADER } from "../../../constants/images";

const Header: React.FC<NavProps> = ({
  account,
  login,
  logout,
  langs,
  setLang,
  currentLang,
  links,
  textConnect,
  textsAccount,
  textsConnect,
  hrefLearnHow,
  linkLogo,
  network,
  handleToggleNetwork,
  linkTextNetwork,
  linkHrefNetwork,
  titleNetwork,
  valuesNetworks,
  listNetwork,
  vesting,
  desuBalance,
  dataTransactions,
  handleClaimed,
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
            {links.map((item, i) => (
              <MenuLink key={i} size="md" name={item.name} url={item.url} onClick={handleLink} />
            ))}
            <LanguageBlockMob>
              <Languages currentLang={currentLang} setLang={setLang} langs={langs} />
            </LanguageBlockMob>
          </Nav>
          <RightContent>
            {/*{network ? (*/}
            {/*  <Network*/}
            {/*    titleNetwork={titleNetwork}*/}
            {/*    linkHrefNetwork={linkHrefNetwork}*/}
            {/*    linkTextNetwork={linkTextNetwork}*/}
            {/*    handleToggleNetwork={handleToggleNetwork}*/}
            {/*    network={network}*/}
            {/*    valuesNetworks={valuesNetworks}*/}
            {/*    listNetwork={listNetwork}*/}
            {/*  />*/}
            {/*) : null}*/}
            <Account
              text={textConnect || "Connect"}
              account={account}
              login={login}
              logout={logout}
              textsAccount={textsAccount}
              textsConnect={textsConnect}
              hrefLearnHow={hrefLearnHow}
              network={network}
              vesting={vesting}
              desuBalance={desuBalance}
              dataTransactions={dataTransactions}
              handleClaimed={handleClaimed}
              handleAddToken={handleAddToken}
              marginContent={marginContent}
              minHeight={minHeight}
              buttonLogoutType={buttonLogoutType}
              linkExternalWalletModal={linkExternalWalletModal}
              textDropdown={textDropdown}
            />
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
  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 21px 15px 15px;
  }
`;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  position: fixed;
  min-height: 100vh;
  height: 100%;
  left: -100%;
  padding: 20px 30px 20px;
  top: 59px;
  transition: 0.3s ease-in-out;
  &.open {
    left: 0;
  }
  background-color: ${({ theme }) => theme.colors.grey};
  ${({ theme }) => theme.mediaQueries.lg} {
    flex-direction: row;
    position: relative;
    background: transparent;
    padding: 0;
    height: auto;
    min-height: 0;
    left: 0;
    top: 0;
  }
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
`;

const LanguageBlockMob = styled.div`
  ${({ theme }) => theme.mediaQueries.lg} {
    display: none;
  }
`;

const LanguageBlockDesk = styled.div`
  display: none;
  ${({ theme }) => theme.mediaQueries.lg} {
    display: block;
    margin-left: 11px;
  }
`;

const LogoWrap = styled.a`
  display: flex;
  align-items: center;
  & img {
    width: 79px;
    height: 34px;
  }
  & svg {
    width: 133px;
    ${({ theme }) => theme.mediaQueries.lg} {
      width: 153px;
    }
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    & img {
      width: auto;
      height: auto;
    }
  }
`;

export default Header;
