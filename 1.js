//Создайте функцию, которая принимает в качестве аргумента строку и выводит каждый символ этой строки в консоль.

const logEachLetter = (str) => {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    result = console.log(str[i]);
  }
  return result;
};
console.log(logEachLetter("hello"));

// module.exports = logEachLetter
