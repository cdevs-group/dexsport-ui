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
  black: "#000000",
  grey: "#29303A",
  violet: "#6112B0",
  boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.11), 0px 0px 6px rgba(0, 0, 0, 0.11)",
  boxShadow2: "0px 0px 6px rgba(0, 0, 0, 0.11)",
  boxShadow3: "0px 4px 30px rgba(0, 0, 0, 0.2)",
  gradient: "linear-gradient(90deg, #3C43DF 0%, #4932CF 33.85%, #6112B0 100%)",
};

export const lightColors: Colors = {
  ...baseColors,
  background: "#ffffff",
};

export const darkColors: Colors = {
  ...baseColors,
  background: "#1F262F",
};
