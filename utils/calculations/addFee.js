import { extraCost } from "../constants";

const addFee = (data) => {
  return data.map((hour) => {
    if (hour.newPrice || hour.newPrice === 0) {
      hour.newPrice += extraCost;
    } else {
      hour.NOK_per_kWh += extraCost;

    }
    return hour;
  });
};

export default addFee;
