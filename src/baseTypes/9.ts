/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/

type Details = {
  [key: string]: Date;
};
// type PageDiscription = {
//   [key: string]: string | number | string[] | Details; // any
// };

type PageDiscription = {
  title: string;
  likes: number;
  accounts: string[];
  status: string;
  details?: Details;
};
const page1: PageDiscription = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: PageDiscription = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

export {};
