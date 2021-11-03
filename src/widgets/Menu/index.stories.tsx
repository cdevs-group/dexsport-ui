import React from "react";
import Header from "./components/Header";
import noop from "lodash/noop";
import { BrowserRouter } from "react-router-dom";
import { links } from "./config";
import { useState } from "react";
import { BNB2 } from "../../constants/images";
import { Avalanche } from "../../constants/images";

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
          textDropdown={textsDropdown}
          linkLogo="/"
        />
      </div>
    </BrowserRouter>
  );
};

const NETWORK_CHAIN = [
  {
    name: "Binance",
    icon: BNB2,
    chainId: "56",
    chainName: "Binance Smart Chain Mainnet",
    nativeCurrency: {
      name: "BNB",
      symbol: "bnb",
      decimals: 18,
    },
    rpcUrls: [
      "https://bsc-dataseed1.ninicoin.io",
      "https://bsc-dataseed1.defibit.io",
      "https://bsc-dataseed.binance.org",
    ],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  {
    name: "AVAX",
    icon: Avalanche,
    chainId: "43114",
    chainName: "AVAX Mainnet",
    nativeCurrency: {
      name: "AVAX",
      symbol: "avax",
      decimals: 18,
    },
    rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
    blockExplorerUrls: ["https://cchain.explorer.avax.network/"],
  },
];

export const HeaderNetwork: React.FC = () => {
  const langs = [
    { locale: "en-US", language: "English", code: "en" },
    { locale: "de-DE", language: "Deutsch", code: "de" },
  ];

  const [network, setNetwork] = useState(NETWORK_CHAIN[0]);

  const handleToggleNetwork = (val) => {
    setNetwork(NETWORK_CHAIN.find((el) => el.chainId === val));
  };

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
          network={network}
          handleToggleNetwork={handleToggleNetwork}
          linkTextNetwork="Learn how connect"
          linkHrefNetwork="http"
          titleNetwork="Choose network"
          textsAccount={textsAccount}
          textsConnect={textsConnect}
          linkLogo="/"
          valuesNetworks={["56", "43114"]}
          listNetwork={NETWORK_CHAIN}
          textDropdown={textsDropdown}
        />
      </div>
    </BrowserRouter>
  );
};

export const HeaderVesting: React.FC = () => {
  const langs = [
    { locale: "en-US", language: "English", code: "en" },
    { locale: "de-DE", language: "Deutsch", code: "de" },
  ];
  const [network, setNetwork] = useState(NETWORK_CHAIN[0]);

  const handleToggleNetwork = (val) => {
    setNetwork(NETWORK_CHAIN.find((el) => el.chainId === val));
  };

  const textsAccount = {
    copy: "Copy",
    title: "Your wallet",
    button: "Logout",
    view: "View on BscScan",
    copied: "Copied",
    yayBalance: "$YAY balance",
    address: "Your address",
    // tabs: ["Wallet", "Transactions"],
    // recentTransactions: "Recent transactions",
    claimed: "Claimed",
    // noRecentTransactions: "No recent transactions",
    addToken: "Add token",
  };

  const textsConnect = {
    title: "Сonnect wallet",
    link: "Learn how connect",
  };

  // const dataTransactions = [
  //   { id: "001", value: "+12,000,00 $YAY" },
  //   { id: "002", value: "+12,000,00 $YAY" },
  //   { id: "003", value: "+12,000,00 $YAY" },
  //   { id: "004", value: "+12,000,00 $YAY" },
  // ];

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
          network={network}
          handleToggleNetwork={handleToggleNetwork}
          linkTextNetwork="Learn how connect"
          linkHrefNetwork="http"
          titleNetwork="Choose network"
          textsAccount={textsAccount}
          textsConnect={textsConnect}
          linkLogo="/"
          vesting
          desuBalance="25000000"
          // dataTransactions={dataTransactions}
          handleClaimed={(value) => console.log(value)}
          marginContent="0"
          minHeight="313px"
          buttonLogoutType="green"
          textDropdown={textsDropdown}
        />
      </div>
    </BrowserRouter>
  );
};

export const HeaderVestingNoTransactions: React.FC = () => {
  const langs = [
    { locale: "en-US", language: "English", code: "en" },
    { locale: "de-DE", language: "Deutsch", code: "de" },
  ];
  const [network, setNetwork] = useState(NETWORK_CHAIN[0]);

  const handleToggleNetwork = (val) => {
    setNetwork(NETWORK_CHAIN.find((el) => el.chainId === val));
  };

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
    noRecentTransactions: "No recent transactions",
    addToken: "Add token",
  };

  const textsConnect = {
    title: "Сonnect wallet",
    link: "Learn how connect",
  };

  const dataTransactions = [];

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
          network={network}
          handleToggleNetwork={handleToggleNetwork}
          linkTextNetwork="Learn how connect"
          linkHrefNetwork="http"
          titleNetwork="Choose network"
          textsAccount={textsAccount}
          textsConnect={textsConnect}
          linkLogo="/"
          vesting
          desuBalance="25000000"
          dataTransactions={dataTransactions}
          handleClaimed={(value) => console.log(value)}
          textDropdown={textsDropdown}
        />
      </div>
    </BrowserRouter>
  );
};
