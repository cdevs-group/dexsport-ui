/// <reference types="react" />
interface IProps {
    data: {
        text: string;
        value: string;
    };
    canClaim: boolean;
    disabledTopCards?: boolean;
    id: string;
}
declare const CardIndicator: ({ data, canClaim, disabledTopCards, id }: IProps) => JSX.Element;
export default CardIndicator;
