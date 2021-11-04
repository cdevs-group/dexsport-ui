import React from "react";
import { useModal } from "../Modal";
import ConnectModal from "./ConnectModal";
import AccountModal from "./AccountModal";
import { Login } from "./types";
import AccountVestingModal from "./AccountVestingModal";
import { Variant } from "../../components/Button/types";

interface ReturnType {
  onPresentConnectModal: () => void;
  onPresentAccountModal: () => void;
}

export interface TextsAccount {
  title: string;
  copy: string;
  button: string;
  view: string;
  copied: string;
  yayBalance?: string;
  address?: string;
  tabs?: Array<string>;
  recentTransactions?: string;
  claimed?: string;
  noRecentTransactions?: string;
  addToken?: string;
}

export interface TextsConnect {
  title: string;
  link: string;
}

const useWalletModal = (
  login: Login,
  logout: () => void,
  textsAccount: TextsAccount,
  textsConnect: TextsConnect,
  account?: string,
  hrefLearnHow?: string,
  vesting?: boolean,
  yayBalance?: string | number,
  dataTransactions?: Array<any>,
  handleClaimed?: any,
  handleAddToken?: any,
  marginContent?: string,
  minHeight?: string,
  buttonLogoutType?: Variant,
  linkExternalWalletModal?: string
): ReturnType => {
  const pageModal = () => {
    return <AccountModal texts={textsAccount} account={account || ""} logout={logout} />;
  };

  const [onPresentConnectModal] = useModal(
    <ConnectModal texts={textsConnect} login={login} hrefLearnHow={hrefLearnHow} />
  );
  const [onPresentAccountModal] = useModal(pageModal());

  return { onPresentConnectModal, onPresentAccountModal };
};

export default useWalletModal;
