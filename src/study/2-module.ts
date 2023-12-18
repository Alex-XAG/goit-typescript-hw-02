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
