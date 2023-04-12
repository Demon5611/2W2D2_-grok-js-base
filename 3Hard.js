/*

  Создайте функцию, которая убирает из строки символ "_", а следующую за "_" букву делает заглавной

  Для начала пропиши аргументы функции.  

  Пример: 'elbrus_bootcamp' => 'elbrusBootcamp'

*/

const camelCase = (str) => {
  let i = 0;
  let result = "";
  while (i < str.length) {
    if (str[i] === "_") {
      result = `${result}${str[i + 1].toUpperCase()}`;
    } else {
      result = `${result}${str[i]}`;
    }
    i++;
  }
  return result;
};

// console.log(camelCase("el_brus_bootcamp"))
module.exports = camelCase;
