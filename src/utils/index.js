import moment from "moment";

export const getDates = (startYear, endYear) => {
  var getDaysBetweenDates = function (startDate, endDate) {
    var now = startDate.clone(),
      dates = [];

    while (now.isSameOrBefore(endDate)) {
      dates.push({
        day: now.format("D"),
        month: now.format("MM"),
        year: now.format("YYYY"),
      });
      now.add(1, "days");
    }
    console.log(startYear, endYear);
    return dates;
  };

  var startDate = moment(`${startYear}-12-01`);
  var endDate = moment(`${endYear}-11-30`);

  var dateList = getDaysBetweenDates(startDate, endDate);
  return dateList;
};
