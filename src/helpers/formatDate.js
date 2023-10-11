const formatDate = (date) => {
  const d = new Date(date);
  const dtf = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
  const [{ value: Fmount }, , { value: Fdate }, , { value: Fyear }] =
    dtf.formatToParts(d);
  return `${Fdate} ${Fmount}, ${Fyear}`;
};
export default formatDate;
