export const timePeriod = (start, end) => {
  const startTime = new Date(start);
  const endTime = new Date(end);
  const formatedStart =
    startTime.getHours().toLocaleString("no-NO", { minimumIntegerDigits: 2 }) +
    ":" +
    startTime.getMinutes().toLocaleString("no-NO", { minimumIntegerDigits: 2 });
  const formatedEnd =
    endTime.getHours().toLocaleString("no-NO", { minimumIntegerDigits: 2 }) +
    ":" +
    endTime.getMinutes().toLocaleString("no-NO", { minimumIntegerDigits: 2 });
  return formatedStart + " - " + formatedEnd;
};
