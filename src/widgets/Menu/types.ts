import { Variant } from "../../components/Button/types";
import { Login } from "../WalletModal/types";
import { TextsAccount, TextsConnect } from "../WalletModal/useWalletModal";

export const sizes = {
  MD: "md",
  LG: "lg",
  XL: "xl",
  XXL: "xxl",
} as const;

export interface LinkHeaderProps {
  name: string;
  size?: string;
  className?: string;
  url: string;
  onClick: () => void;
}

export interface AccProps {
  isAuth: boolean;
  accName?: string;
}

export interface Profile {
  username?: string;
  image?: string;
  profileLink: string;
  noProfileLink: string;
  showPip?: boolean;
}

export interface Language {
  code: string;
  language: string;
  locale: string;
}
export interface MenuEntry {
  name: string;
  url: string;
}

export interface LangType {
  code: string;
  language: string;
}
export interface PanelProps {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
  currentLang: string;
  langs: LangType[];
  setLang: (lang: LangType) => void;
  links: Array<MenuEntry>;
}

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
export interface NavProps extends PanelProps {
  account?: string;
  login: Login;
  profile?: Profile;
  logout: () => void;
  textConnect?: string;
  textsConnect: TextsConnect;
  textsAccount: TextsAccount;
  hrefLearnHow?: string;
  linkLogo: string;
  network?: BlockChainNetwork;
  titleNetwork?: string;
  linkTextNetwork?: string;
  linkHrefNetwork?: string;
  handleToggleNetwork?: (e: any) => void;
  valuesNetworks?: string[];
  listNetwork?: BlockChainNetwork[];
  vesting?: boolean;
  yayBalance?: string | number;
  dataTransactions?: Array<any>;
  handleClaimed?: (value: string) => void;
  bridge?: boolean;
  textsBridge?: textsBridge;
  transactionsList?: Array<Itransactions> | [];
  handleAddToken?: () => void;
  disclaimer?: boolean;
  disclaimerText?: string;
  marginContent?: string;
  minHeight?: string;
  buttonLogoutType?: Variant;
  linkExternalWalletModal?: string;
}

export type BlockChainNetwork = {
  name: string;
  icon?: string;
  chainId: string;
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls: string[];
  blockExplorerUrls: string[];
};
