import { ReactNode } from "react";
import { SpaceProps } from "styled-system";
import { AlertWrapperProps } from "../../components/Alert/types";
export declare const types: {
    COLLECTION: string;
    SUCCESS: string;
    WINNING: string;
    INFO: string;
    ERROR: string;
};
export declare type Types = typeof types[keyof typeof types];
export interface Toast {
    id: string;
    type: Types;
    title: string;
    description?: ReactNode;
    icon?: ReactNode;
}
export interface ToastContainerProps {
    toasts: Toast[];
    stackSpacing?: number;
    ttl?: number;
    onRemove: (id: string) => void;
    propsWrapper?: SpaceProps;
    propsWrapperAlert?: AlertWrapperProps;
}
export interface ToastProps {
    toast: Toast;
    onRemove: ToastContainerProps["onRemove"];
    ttl: number;
    style?: Partial<CSSStyleDeclaration>;
    icon?: ReactNode;
    propsWrapperAlert?: AlertWrapperProps;
}
