import {
  Metamask,
  TrustWallet,
  MathWallet,
  TokenPocket,
  WalletConnect,
  BinanceWallet,
  SafepackWallet,
  Coin98,
} from "../../constants/images";
import { Config, ConnectorNames } from "./types";

export const connectors: Config[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "Coin98",
    icon: Coin98,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "Trust Wallet",
    icon: TrustWallet,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "MathWallet",
    icon: MathWallet,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "Token Pocket",
    icon: TokenPocket,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "Wallet Connect",
    icon: WalletConnect,
    connectorId: ConnectorNames.WalletConnect,
  },
  {
    title: "Binance Chain Wallet",
    icon: BinanceWallet,
    connectorId: ConnectorNames.BSC,
  },
  {
    title: "SafePal Wallet",
    icon: SafepackWallet,
    connectorId: ConnectorNames.Injected,
  },
];

export const connectorLocalStorageKey = "connectorId";
