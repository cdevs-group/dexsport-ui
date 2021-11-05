export interface VestingWidgetProps {
  dataClaimTokens: {
    totalRaised: string;
    total: string;
    left?: string;
  };
  handleClaimTokens: () => void;
  textsClaimTokens: {
    title: string;
    button: string;
    totalRaised: string;
    total: string;
    left?: string;
  };
  dataCardsIndicators: {
    text: string;
    value: string;
  }[];
  imagesBg?: string;
  textsPlatform: {
    title: string;
    button: string;
  };
  canClaim: boolean;
  linkPlatform?: string;
  dataTimer: {
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
  textsPoolz: {
    title: string;
    description: string;
    button: string;
  };
  linkClaimTokens?: string;
  disabledButtonClaimTokens?: boolean;
  isLoadingButtonClaimTokens?: boolean;
  disabledTopCards?: boolean;
  disabledCardClaimTokens?: boolean;
}
