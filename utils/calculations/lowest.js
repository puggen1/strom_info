export const lowestHour = (data) => {
  let lowestHour = data[0];
  data.map((hour) => {
    if (hour.NOK_per_kWh <= lowestHour.NOK_per_kWh) {
      lowestHour = hour;
    }
  });
  return lowestHour;
};
