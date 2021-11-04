import React from "react";
import { BlockChainNetwork } from "../types";
interface Props {
    title?: string;
    linkText?: string;
    linkHref?: string;
    handleToggleNetwork?: (e: any) => void;
    onDismiss?: () => void;
    valuesNetworks?: string[];
    listNetwork?: BlockChainNetwork[];
}
declare const NetworkModal: React.FC<Props>;
export default NetworkModal;
