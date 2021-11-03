import { scales, variants } from "./types";

export const scaleVariants = {
  [scales.MD]: {
    height: "50px",
    padding: "0 24px",
    fontSize: "15px",
    lineHeight: "20px",
  },
  [scales.SM]: {
    height: "32px",
    padding: "0 16px",
    fontSize: "13px",
    lineHeight: "16px",
    borderRadius: "7px",
  },
  [scales.XS]: {
    height: "20px",
    fontSize: "12px",
    padding: "0 8px",
  },
};

export const styleVariants = {
  [variants.PRIMARY]: {
    backgroundColor: "primary",
    color: "white",
  },
  [variants.SECONDARY]: {
    backgroundColor: "transparent",
    border: "1px solid #4BE43E",
    boxShadow: "none",
    borderRadius: 10,
    color: "#4BE43E",
    ":disabled": {
      backgroundColor: "transparent",
    },
  },
  [variants.TERTIARY]: {
    backgroundColor: "tertiary",
    boxShadow: "none",
    color: "primary",
  },
  [variants.SUBTLE]: {
    backgroundColor: "textSubtle",
    color: "white",
  },
  [variants.DANGER]: {
    backgroundColor: "failure",
    color: "white",
  },
  [variants.SUCCESS]: {
    backgroundColor: "success",
    color: "white",
  },
  [variants.TEXT]: {
    backgroundColor: "transparent",
    color: "green",
    boxShadow: "none",
  },
  [variants.GREEN]: {
    background: "linear-gradient(180deg, #4CEE3E -16%, #47DA3B 100%)",
    color: "#fff",
    boxShadow: "none",
  },
  [variants.PINK]: {
    backgroundColor: "#FF6161",
    color: "#fff",
    boxShadow: "none",
  },
  [variants.OPTION]: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    color: "#fff",
    boxShadow: "none",
  },
  [variants.YELLOW]: {
    background: " linear-gradient(180deg, #FFB001 -16%, #FFA201 100%)",
    color: "#fff",
    boxShadow: "none",
  },
  [variants.GRAY]: {
    background: "linear-gradient(180deg, #8A92B2 0%, #62688F 100%)",
    color: "#fff",
    boxShadow: "none",
  },
  [variants.WHITE]: {
    background: "#fff",
    color: "#4BE43E",
    boxShadow: "none",
  },
  [variants.LOAD_COLOR]: {
    backgroundColor: "transparent",
    color: "green",
    boxShadow: "none",
    opacity: "1",
  },
};
