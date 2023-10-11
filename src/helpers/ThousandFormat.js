const ThousandFormat = (number = 0) => {
  const tousand = new Intl.NumberFormat();
  return tousand.format(number);
};

export default ThousandFormat;
