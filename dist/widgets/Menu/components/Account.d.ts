import React from "react";
import { Login } from "../../WalletModal/types";
import { TextsConnect, TextsAccount } from "../../WalletModal/useWalletModal";
interface Props {
    account?: string;
    login: Login;
    text: string;
    logout: () => void;
    textsConnect: TextsConnect;
    textsAccount: TextsAccount;
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
declare const Account: React.FC<Props>;
export default Account;
