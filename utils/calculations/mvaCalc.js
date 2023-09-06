const mvaCalc = (data) => {
  let newData = data.map((hour) => {
    let newPrice = hour.NOK_per_kWh * 1.25;
    return { newPrice: newPrice, ...hour };
  });
  return newData;
};

export default mvaCalc;
