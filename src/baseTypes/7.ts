/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Weekdays {
  Mon = 0,
  Tue = 0,
  Wed = 0,
  Thu = 0,
  Fri = 0,
  Sat = 1,
  Sun = 1,
}
function isWeekend(data: Weekdays): boolean {
  return data === 0 ? false : true;

  // if (data === 0) {
  //   return false;
  // }
  // return true;
}

// const isWeekendArrow = (data: Weekdays): boolean => (data === 0 ? false : true);
