// Создайте функцию, которая принимает в качестве аргументов массив из слов, а возвращает созданное из этих слов предложение.

const toSentence = (arr) => arr.join(" ");
console.log(toSentence(["I", "am", "groot"]));

module.exports = toSentence;
