import React from "react";
interface IProps {
    data: {
        totalRaised: string;
        total: string;
        left?: string;
    };
    handleClaimTokens: () => void;
    texts: {
        title: string;
        button: string;
        totalRaised: string;
        total: string;
        left?: string;
    };
    disabledButton?: boolean;
    isLoading?: boolean;
    disabledCardClaimTokens?: boolean;
}
declare const ClaimTokens: ({ data, texts, handleClaimTokens, disabledButton, isLoading, disabledCardClaimTokens, }: IProps) => JSX.Element;
export declare const Wrap: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Blur: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    disabledCard?: boolean | undefined;
}, never>;
export declare const Card: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    disabledCard?: boolean | undefined;
}, never>;
export declare const StyledTitle: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../../components/Text").TextProps, never>;
export declare const StyledButton: import("styled-components").StyledComponent<{
    <E extends React.ElementType<any> = "button">(props: import("../../components/Button").ButtonProps<E>): JSX.Element;
    defaultProps: {
        isLoading: boolean;
        external: boolean;
        variant: "primary";
        scale: "md";
        disabled: boolean;
    };
}, import("styled-components").DefaultTheme, {}, never>;
export default ClaimTokens;
