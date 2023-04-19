const products = require('./products');

// 1. Отфильтруйте товары по условию, если их количество будет больше 10.
const filteredProducts = products.filter((product) => product.count > 10);
console.log(filteredProducts);

// 2. Найдите значение элемента массива (товара), чья цена находится в диапазоне от 800 до 900 включительно.
const foundProduct = products.find((product) => product.price >= 800 && product.price <= 900);
console.log(foundProduct);

// 3. Отсортируйте данные товаров по цене (по убыванию)
const sortedProducts = products.sort((a, b) => b.price - a.price);
console.log(sortedProducts);

// 4. Посчитайте итоговую стоимость всех товаров в массиве.
const totalCost = products.reduce((acc, product) => acc + (product.price * product.count), 0);
console.log(totalCost);

// 5. Преобразуйте массив таким образом, чтобы изменить свойство marks и получить итоговую сумму оценок.
const transformedProducts = products.map((product) => {
  const marksSum = product.marks.reduce((acc, mark) => acc + mark, 0);
  const marksTotal = marksSum / product.marks.length;
  return {
    ...product,
    marks: marksTotal,
    marks_total: marksSum,
  };
});
const sortedTransformedProducts = transformedProducts.sort((a, b) => b.marks_total - a.marks_total);
console.log(sortedTransformedProducts);


// Мы импортируем массив products из файла products.js в начале кода с помощью require('./products'). Это позволяет нам использовать массив products в нашем коде.