let word = "потоп";
let wordReversed = "";

// переворачиваем слово и сохраняем в переменную wordReversed
for (let i = word.length - 1; i >= 0; i--) {
  wordReversed += word[i];
}

// сравниваем исходное слово с перевернутым
if (word === wordReversed) {
  console.log("YES");
} else {
  console.log("NO");
}
