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
//  Create function reverse, that take an array with any type and return array in reverse-row

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

// Create function getProperty(), wich accept obj and key like a string/
// Function must return value of this key from obj.

const student = {
  name: "John",
  age: 25,
};

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

let studentName = getProperty(student, "name");
console.log(studentName);

// let studentAddress = getProperty(student, "address");
// console.log(studentAdress); // undefined

// Partial <T>
type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
  return { ...todo, ...fieldsToUpdate };
}

const todo1: Todo = {
  title: "Learn TypeScript",
  description: " Study the basics of TypeScript",
  completed: false,
};

const todo2 = updateTodo(todo1, {
  description: " Study generics in TypeScript",
});
console.log(todo2);

// ReadOnly

type User = {
  name: string;
  age: number;
};

const john: Readonly<User> = {
  name: "John",
  age: 30,
};

// john.age = 31; // Error: Impossible to change "age", because this field  is only to Read

const numbers1: ReadonlyArray<number> = [1, 2, 3, 4, 5];

// numbers1.push(6); // Error: Property 'push' does not exist on type 'readonly number[]';
// numbers1[0] = 0; // Error: Index signature in type 'readonly number[]' only permits reading

// Pick<T,K>

// type Person = {
//   name: string;
//   age: number;
//   address: string;
// };

// type PersonSummary = Pick<Person, "name" | "age">;

// type PersonSummary = {
//   name: string;
//   age: number;
// };

// const johnSummary: PersonSummary = {
//   name: "John",
//   age: 30,
// };

// Omit<T,K>

// type Person = {
//   name: string;
//   age: number;
//   address: string;
// };

// type PersonWithoutAddress = Omit<Person, "address">;

// const johnSummary: PersonWithoutAddress = {
//   name: "John",
//   age: 30,
//   // address: "123  main St" // This property isn`t possible here
// };

// Record<K,T>

type CityDataBase = Record<string, number>;
const dataBase: CityDataBase = {
  Kyiv: 2884000,
  Kharkiv: 1441000,
  Odesa: 1015000,
};

// // Add a new mark in database, where key (name of city) has type string, value (citizen) has type number.
dataBase.Lviv = 721301;
