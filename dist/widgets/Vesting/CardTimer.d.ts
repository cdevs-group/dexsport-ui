/// <reference types="react" />
interface IProps {
    data: {
        textFront: string;
        textBack: string;
        textStage: string;
        timeSecond: number;
        totalSeconds: number;
        textsTime: {
            days: string;
            hours: string;
            minutes: string;
            seconds: string;
        };
    };
    canClaim: boolean;
    disabledTopCards?: boolean;
}
declare const CardTimer: ({ data, canClaim, disabledTopCards }: IProps) => JSX.Element;
export default CardTimer;
