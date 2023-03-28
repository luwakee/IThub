function checkElem(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return true;
    }
  }
  return false;
}

// Пример использования
let array = [1, 2, 3, 4];
let result = checkElem(array, (elem) => elem == 3);
console.log(result);
