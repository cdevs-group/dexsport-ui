import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#1FC7D4",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
  dark: "#1F262F",
  white: "#ffffff",
  whiteRgba: "rgba(255,255,255,0.1)",
  black: "#000000",
  grey: "#29303A",
  lightGrey: "#F3F3F3",
  grey2: "#201E1E",
  grey3: "#BCBCBC",
  violet: "#6112B0",
  boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.11), 0px 0px 6px rgba(0, 0, 0, 0.11)",
  boxShadow2: "0px 0px 6px rgba(0, 0, 0, 0.11)",
  boxShadow3: "0px 4px 30px rgba(0, 0, 0, 0.2)",
  boxShadow4: "inset 0px 1px 8px rgba(0, 0, 0, 0.19)",
  boxShadow5: "0px 0px 20px rgba(97, 18, 176, 0.35)",
  boxShadow6: "0px 4px 10px rgba(0, 0, 0, 0.25)",
  boxShadow7: " inset 0px 4px 4px rgba(0, 0, 0, 0.2)",
  gradient: "linear-gradient(90deg, #3C43DF 0%, #4932CF 33.85%, #6112B0 100%)",
  gradient2:
    "linear-gradient(90deg, rgba(60, 67, 223, 0.5) 0%, rgba(73, 50, 207, 0.5) 33.85%, rgba(97, 18, 176, 0.5) 100%);",
  gradient3: "linear-gradient(180deg, #3C43DF 0%, #4932CF 32.29%, #6112B0 100%)",
  purple: "#4932CF",
};

export const lightColors: Colors = {
  ...baseColors,
  background: "#ffffff",
};

export const darkColors: Colors = {
  ...baseColors,
  background: "#1F262F",
};
