import React from "react";
import { Login } from "../../WalletModal/types";
import { TextsConnect, TextsAccount } from "../../WalletModal/useWalletModal";
import { BlockChainNetwork } from "../types";
import { Variant } from "../../../components/Button/types";
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
declare const Account: React.FC<Props>;
export default Account;
