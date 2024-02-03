// Index Properties

type Goods = {
  [key: string]: number;
};

// type Fruits = {
//   apples: number;
//   bananas: number;
//   oranges: number;
// };

// type FrozenGoods = {
//   iceCream: number;
//   fish: number;
//   berry: number;
// };

const fruits: Goods = {
  apples: 15,
  bananas: 30,
  oranges: 30,
};

const frozenGoods: Goods = {
  iceCream: 25,
  fish: 30,
  berry: 10,
};

// Визначте інтерфейс для об'єкта, де ключем є рядок, а значенням може бути або рядок, або число
// Створіть декілька об'єктів цього типу

type MixedType = {
  [key: string]: number | string;
};

const userInfo: MixedType = {
  name: "Alex",
  age: 36,
  country: "Ukraine",
};

const bookDetails: MixedType = {
  title: "Bible",
  pageCount: 350,
};

// Generics
// 1. Create commune functions, classes that can work whith different entry types and save the typisation

// function identity<T>(arg: T): T {
//   return arg;
// }

// // 1
// // function identity<string>(arg:string): string {
// //   return arg;
// // }

// // 2
// // function identity<number>(arg:number): number {
// //   return arg;
// // }

// let output1 = identity<string>("myString");
// let output2 = identity<number>(100);

// //////////////////////////// Task for students
//  Create function reberse, that take an array with any type and return array in reverse-row

function reverse<T>(items: T[]): T[] {
  return items.reverse();
}

let numbers = reverse<number>([1, 2, 3, 4, 5]);
console.log(numbers); // [5,4,3,2,1]

let strings = reverse<string>(["a", "b", "c", "d"]);
console.log(strings); // ['d','c','b','a']

// extends and keyOf

function lengthOfObject<T extends { length: number }>(obj: T): number {
  return obj.length;
}

lengthOfObject({ name: "Earth", length: 10 });
