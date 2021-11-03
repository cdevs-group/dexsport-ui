import { AlertTheme } from "../components/Alert/types";
import { ModalTheme } from "../widgets/Modal/types";
import { Colors, Breakpoints, MediaQueries, Spacing, Radii, ZIndices } from "./types";

export interface BaseTheme {
  siteWidth: number;
  isDark: boolean;
  colors: Colors;
  alert: AlertTheme;
  modal: ModalTheme;
  breakpoints: Breakpoints;
  mediaQueries: MediaQueries;
  spacing: Spacing;
  radii: Radii;
  zIndices: ZIndices;
}

export { default as dark } from "./dark";
export { default as light } from "./light";

export { lightColors } from "./colors";
export { darkColors } from "./colors";
