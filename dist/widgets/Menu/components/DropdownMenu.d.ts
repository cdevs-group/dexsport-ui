/// <reference types="react" />
interface DropdownMenuProps {
    isOpen: boolean;
    balance: string | number | undefined;
    account: string;
    logout: () => void;
    handleAddToken?: () => void;
    linkExternalWalletModal?: string;
    texts: {
        connected: string;
        balance: string;
        disconnect: string;
        addToken: string;
        copied: string;
    };
}
declare const DropdownMenu: ({ linkExternalWalletModal, account, isOpen, handleAddToken, logout, balance, texts, }: DropdownMenuProps) => JSX.Element;
export default DropdownMenu;
