/*

Создайте функцию, которая принимает в качестве аргументов многомерный массив (массив, содержащий другие массивы) чисел и число из одного из вложенных массивов, а возвращает индекс вложенного массива, в котором это число находится.

Пример: ( [[1], [2, 3], [4]], 3 ) => 1 */

const nestedArr = (arr, number) => {
  let result;
  result = arr.findIndex((item) => item.includes(number));
  return result === -1 ? undefined : result; // смотрим услб если result false (result === -1), то undefined, в противном случае возвращаем результат
};

// module.exports = nestedArr;
