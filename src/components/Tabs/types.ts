export interface TabsProp {
  tabValue?: number;
  onClick?: (e: any) => Promise<void> | void;
  tabsList?: Array<string>;
}
