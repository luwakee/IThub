function reverseIndex(array) {
  let reversed = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  console.log(reversed);
}

let array = [5, 4, 3, 2, 1];
reverseIndex(array);
