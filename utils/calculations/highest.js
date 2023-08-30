export const topHour = (data) => {
  let highestHour = data[0];
  data.map((hour) => {
    if (hour.NOK_per_kWh >= highestHour.NOK_per_kWh) {
      highestHour = hour;
    }
  });
  console.log(highestHour);
  return highestHour;
};
