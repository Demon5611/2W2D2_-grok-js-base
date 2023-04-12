/*

Создайте функцию, которая принимает в качестве аргументов 2 неотрицательных числа, а возвращает сумму всех целых чисел в диапазоне между ними.

Первое число может больше второго!

Пример: (5, 3) => 12

*/
let sumOfIntegers = () => {
  let result = "";
  for (i = 0; i < 10; i++) {
    result.push(Math.floor(Math.random() * (10 + 1)));
  }
  return result;
};
console.log(sumOfIntegers());
// module.exports = sumOfIntegers;
