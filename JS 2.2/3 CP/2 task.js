function changeElem(array, n) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] * n);
  }
  return newArray;
}

let array = [1, 2, 3, 4];
let result = changeElem(array, 3); // 3 is n number
console.log(result);
console.log(array);
