export const averageHour = (data) => {
  let initialValue = 0;
  const reducedresult = data.reduce((acc, curr) => {
    if (curr.newPrice) {
      acc += curr.newPrice;
      return acc;
    } else {
      acc += curr.NOK_per_kWh;
      return acc;
    }
  }, initialValue);
  return reducedresult / Object.keys(data).length;
};
