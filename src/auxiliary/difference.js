const differenceInMinutes = (startDate, finishDate) => {
  const start = new Date(startDate);
  const finish = new Date(finishDate);
  const differenceInMs = finish - start;
  const differenceInMinutes = Math.floor(differenceInMs / 1000 / 60);

  return differenceInMinutes;
};
export default differenceInMinutes;
