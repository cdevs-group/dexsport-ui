import React from "react";
import { TextsAccount } from "./useWalletModal";
interface Props {
    account: string;
    logout: () => void;
    onDismiss?: () => void;
    texts: TextsAccount;
}
declare const AccountModal: React.FC<Props>;
export default AccountModal;
