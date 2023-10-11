export default (number = 0) => {
  const tousand = new Intl.NumberFormat();
  return tousand.format(number);
};
