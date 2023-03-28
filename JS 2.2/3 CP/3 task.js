function sumElems(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let num = Number(array[i]);
    if (!isNaN(num)) {
      sum += num;
    }
  }
  return sum;
}

let array = ["10", "Строка", "15g", "205", "05"];
let result = sumElems(array);
console.log(result);
