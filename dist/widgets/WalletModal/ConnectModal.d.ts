import React from "react";
import { Login } from "./types";
import { BlockChainNetwork } from "../Menu/types";
interface Props {
    login: Login;
    onDismiss?: () => void;
    texts: {
        title: string;
        link: string;
    };
    hrefLearnHow?: string;
    network?: BlockChainNetwork;
}
export declare const Button: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {}, never>;
declare const ConnectModal: React.FC<Props>;
export default ConnectModal;
