function checkObj(obj) {
  return "particle" in obj;
}

console.log(checkObj({id: 1, particle: 10})); // выведет true
console.log(checkObj({id: 2, name: "tag"})); // выведет false


// Мы создаем функцию checkObj, которая принимает объект в качестве аргумента. Внутри функции мы используем оператор in, чтобы проверить, существует ли ключ "particle" в объекте. Если ключ существует, функция вернет true, в противном случае - false.

// При вызове функции с объектом {id: 1, particle: 10} результатом будет true, а при вызове с объектом {id: 2, name: "tag"} - false.