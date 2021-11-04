/// <reference types="react" />
interface Iprops {
    images?: {
        bg: string;
    };
    texts: {
        title: string;
        button: string;
        description: string;
    };
    linkClaimTokens?: string;
    disabledCardClaimTokens?: boolean;
}
declare const TokenOnPoolz: ({ images, texts, linkClaimTokens, disabledCardClaimTokens }: Iprops) => JSX.Element;
export default TokenOnPoolz;
export declare const Wrap: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Blur: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    disabledCard?: boolean | undefined;
}, never>;
