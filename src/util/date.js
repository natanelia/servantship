const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

export const getFormattedDate = date => {
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + " " + monthNames[monthIndex] + " " + year;
};

export const getFormattedDateSpan = (startDate, endDate) => {
  if (startDate.getFullYear() != endDate.getFullYear()) {
    return (
      startDate.getDate() +
      " " +
      monthNames[startDate.getMonth()] +
      " " +
      startDate.getFullYear() +
      " - " +
      endDate.getDate() +
      " " +
      monthNames[startDate.getMonth()] +
      " " +
      startDate.getFullYear()
    );
  } else if (startDate.getMonth() != endDate.getMonth()) {
    return (
      startDate.getDate() +
      " " +
      monthNames[startDate.getMonth()] +
      " - " +
      endDate.getDate() +
      " " +
      monthNames[endDate.getMonth()]
    );
  } else if (startDate.getDate() != endDate.getDate()) {
    return (
      startDate.getDate() +
      " - " +
      endDate.getDate() +
      " " +
      startDate.getMonth()
    );
  } else {
    return (
      startDate.getDate() +
      " " +
      monthNames[startDate.getMonth()] +
      " " +
      startDate.getFullYear()
    );
  }
};

export const getFormattedTime = date => {
  const hours = date.getHours() + "";
  const minutes = date.getMinutes() + "";
  const fHours = hours.length > 1 ? hours : "0" + hours;
  const fMinutes = minutes.length > 1 ? minutes : "0" + minutes;
  return fHours + ":" + fMinutes;
};

export const getFormattedDateTimeSpan = (timeStarted, timeEnded) => {
  const startTime = new Date(timeStarted);
  const endTime = new Date(timeEnded);

  const startDate = getFormattedDate(startTime);
  const endDate = getFormattedDate(endTime);
  if (startDate == endDate) {
    return (
      getFormattedDateSpan(startTime, endTime) +
      " " +
      getFormattedTime(startTime) +
      " - " +
      getFormattedTime(endTime)
    );
  } else {
    return getFormattedDateSpan(startTime, endTime);
  }
};
