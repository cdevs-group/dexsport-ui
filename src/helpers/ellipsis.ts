export const ellipsis = (value: string, count = 4) => {
  if (value && value.length && value.length > 10) {
    return `${value.substr(0, count)} ... ${value.substr(value.length - count, value.length)}`;
  }
  return value;
};
