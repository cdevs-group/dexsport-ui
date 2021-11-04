import React from "react";
import { TextsAccount } from "./useWalletModal";
import { Variant } from "../../components/Button/types";
interface Props {
    account: string;
    logout: () => void;
    onDismiss?: () => void;
    texts: TextsAccount;
    yayBalance?: string | number;
    dataTransactions?: Array<any>;
    handleClaimed: (value: string) => void;
    handleAddToken: () => void;
    marginContent?: string;
    minHeight?: string;
    buttonLogoutType?: Variant;
    linkExternalWalletModal?: string;
}
declare const AccountVestingModal: React.FC<Props>;
export default AccountVestingModal;
