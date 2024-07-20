const useDayGetter = () => {
  const dateNow = new Date();
  const getTomorrow = () => {
    return (
      dateNow.getFullYear().toString() +
      "/" +
      dateNow.getMonth().toString() +
      "/" +
      (dateNow.getDate() + 1).toString()
    );
  };
  const getToday = () => {
    return (
      dateNow.getFullYear().toString() +
      "/" +
      dateNow.getMonth().toString() +
      "/" +
      dateNow.getDate().toString()
    );
  };

  return { getToday, getTomorrow };
};

export default useDayGetter;
