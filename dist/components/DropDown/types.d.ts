import { ReactNode } from "react";
import { LangType } from "../../widgets/Menu/types";
export interface LanguagesProps {
    currentLang: string;
    langs: LangType[];
    setLang: (lang: LangType) => void;
}
export interface DropDownProps {
    icon: ReactNode;
    open: boolean;
    setOpen: (value: boolean) => void;
    children: ReactNode;
}
