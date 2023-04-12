/*

Создайте функцию, которая принимает в качестве аргументов многомерный массив (массив, содержащий другие массивы) чисел и число из одного из вложенных массивов, а возвращает индекс вложенного массива, в котором это число находится.

Пример: ( [[1], [2, 3], [4]], 3 ) => 1



const nestedArr = (arr, number) => {
  let result;
  result = arr.findIndex((item) => item.includes(number));
  return result === -1 ? undefined : result;
};


// const nestedArr = (arr, number) => {
//   let result = "";
//   result = arr.findIndex((item) => item.some((elem) => elem === number));
//   return result;
// };

// // console.log(nestedArr([[1], [2, 3], [4]], 4));
// module.exports = nestedArr;
