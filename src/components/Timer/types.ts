export interface TimerColorProps {
  color?: string;
  disabled?: boolean;
  avax?: boolean;
  height?: string;
  width?: string;
  background?: string;
  borderRadius?: string;
  margin?: string;
  fontSize?: string;
  hoursHide?: boolean;
}
export interface TimerProps {
  color?: string;
  time?: number;
  isLoad?: boolean;
  disabled?: boolean;
  avax?: boolean;
  height?: string;
  borderRadius?: string;
  background?: string;
  width?: string;
  marginPoint?: string;
  margin?: string;
  widthWrapper?: string;
  fontSize?: string;
  hoursHide?: boolean;
}

export interface TimerSimpleProps {
  time: number;
  texts: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
  color?: string;
}
