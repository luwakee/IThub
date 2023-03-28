let word = "Арнольд";
let newWord = "";

for (let i = 0; i < word.length; i++) {
  let letter = word[i].toLowerCase(); // приводим букву к нижнему регистру для проверки
  if (letter !== "а" && letter !== "о") {
    newWord += word[i];
  }
}

console.log(newWord); // выводим результат в консоль
