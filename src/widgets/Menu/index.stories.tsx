import React from "react";
import Header from "./components/Header";
import noop from "lodash/noop";
import { BrowserRouter } from "react-router-dom";
import { links } from "./config";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: { isAuth: Boolean },
};

const textsDropdown = {
  connected: "Connected",
  balance: "Your balance",
  disconnect: "Disconnect",
  addToken: "Add token",
  copied: "Copied",
};

export const HeaderDefault: React.FC = () => {
  const langs = [
    { locale: "en-US", language: "English", code: "en" },
    { locale: "de-DE", language: "Deutsch", code: "de" },
  ];

  const textsAccount = {
    copy: "Copy",
    title: "Your wallet",
    button: "Logout",
    view: "View on BscScan",
    copied: "Copied",
    yayBalance: "$YAY balance",
    address: "Your address",
    tabs: ["Wallet", "Transactions"],
    recentTransactions: "Recent transactions",
    claimed: "Claimed",
    addToken: "Add token",
  };

  const textsConnect = {
    title: "Сonnect wallet",
    link: "Learn how connect",
  };

  return (
    <BrowserRouter>
      <div style={{ marginTop: "50px" }}>
        <Header
          account="0xbdda50183d817c3289f895a4472eb475967dc980"
          login={noop}
          logout={noop}
          isDark={false}
          toggleTheme={noop}
          langs={langs}
          setLang={noop}
          currentLang="EN"
          links={links}
          profile={{
            profileLink: "/profile",
            noProfileLink: "/no-profile",
          }}
          textsAccount={textsAccount}
          textsConnect={textsConnect}
          linkLogo="/"
          textDropdown={textsDropdown}
        />
      </div>
    </BrowserRouter>
  );
};
