import BigNumber from "bignumber.js";

export const BIG_TEN = new BigNumber(10);

export const getBalanceAmount = (amount: any, decimals = 18) => {
  if (amount) return new BigNumber(amount).dividedBy(BIG_TEN.pow(decimals)).toString(10);
};
