import React from "react";
interface Props {
    toCopy: string;
    textCopied: string;
    icon?: React.ReactNode;
    left?: string;
}
declare const CopyToClipboard: React.FC<Props>;
export default CopyToClipboard;
