exports.myDateTime = function () {
  return Date();
};
exports.currentday = function () {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const d = new Date('2021-03-25');
  let day = days[d.getDay()];
  return day;
};
