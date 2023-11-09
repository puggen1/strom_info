const numberFormater = (number, id) => {
  if (id === 1) {
    return number.toFixed(2);
  }

  return (number * 10).toFixed(0);
};
export default numberFormater;
