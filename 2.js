/*

Создайте функцию, которая возвращает массив из 10 случайных целых чисел от 0 до 10.

Пример: () => [ 0, 1, 2, 2, 7, 4, 3, 2, 6, 3 ]

*/

// Эта функция не должна иметь параметров, она должна просто генерировать массив с 10 случайными числами

const randomArr = () => {
  let result = [];
  for (let i = 0; i < 10; i++) {
    result.push(Math.floor(Math.random() * (10+1)));
  }
  return result;
};




// module.exports = randomArr;
console.log(randomArr())