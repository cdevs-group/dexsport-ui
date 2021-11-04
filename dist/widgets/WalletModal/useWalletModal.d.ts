import { Login } from "./types";
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
declare const useWalletModal: (login: Login, logout: () => void, textsAccount: TextsAccount, textsConnect: TextsConnect, account?: string | undefined, hrefLearnHow?: string | undefined) => ReturnType;
export default useWalletModal;
