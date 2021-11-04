import { Login } from "./types";
import { BlockChainNetwork } from "../Menu/types";
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
declare const useWalletModal: (login: Login, logout: () => void, textsAccount: TextsAccount, textsConnect: TextsConnect, network?: BlockChainNetwork | undefined, account?: string | undefined, hrefLearnHow?: string | undefined, vesting?: boolean | undefined, yayBalance?: string | number | undefined, dataTransactions?: any[] | undefined, handleClaimed?: any, handleAddToken?: any, marginContent?: string | undefined, minHeight?: string | undefined, buttonLogoutType?: Variant | undefined, linkExternalWalletModal?: string | undefined) => ReturnType;
export default useWalletModal;
