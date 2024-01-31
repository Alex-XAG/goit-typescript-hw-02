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
  if (data === 0) {
    return false;
  }
  return true;
}
