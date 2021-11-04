/// <reference types="react" />
interface IProps {
    handleTakeGift: () => void;
    texts: {
        title: string;
        button: string;
        claimed: string;
    };
    claimedGift: boolean;
    images?: {
        bg: string;
    };
    giftLoader?: boolean;
}
declare const TakeGift: ({ handleTakeGift, texts, claimedGift, images, giftLoader }: IProps) => JSX.Element;
export default TakeGift;
