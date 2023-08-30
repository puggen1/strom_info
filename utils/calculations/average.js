export const averageHour = (data) => {
  let initialValue = 0;
  const reducedresult = data.reduce((acc, curr) => {
    acc += curr.NOK_per_kWh;
    return acc;
  }, initialValue);
  return reducedresult / 24;
};
