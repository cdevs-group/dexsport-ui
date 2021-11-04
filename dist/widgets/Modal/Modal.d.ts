import React from "react";
import { InjectedProps } from "./types";
interface Props extends InjectedProps {
    title?: string;
    hideCloseButton?: boolean;
    bodyPadding?: string;
    image?: React.ReactNode;
}
declare const Modal: React.FC<Props>;
export default Modal;
