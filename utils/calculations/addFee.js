import { extraCost } from "../constants";

const addFee = (data) => {
  const newData = data.map((hour) => {
    const modifyableHour = {...hour}
    if (modifyableHour.newPrice || modifyableHour.newPrice === 0) {
      modifyableHour.newPrice += extraCost;
    } else {
      modifyableHour.NOK_per_kWh += extraCost;

    }
    return modifyableHour;
  });
  return newData
};

export default addFee;
