function getInfo(prices) {
    let countStart = 0;
    let countEnd = 0;
  
    for (let i = 0; i < prices.length; i++) {
      if (prices[i].startsWith('Цена')) {
        countStart++;
      }
      if (prices[i].endsWith('$')) {
        countEnd++;
      }
    }
  
    return [countStart, countEnd];
  }
  
  let prices = [
    'Цена товара - 1200$',
    'Стоимость - 500$',
    'Цена не определена', '9999',
    'Ценовая категория - больше 300$',
    'Цена за услугу 500 EUR',
    '150$',
  ];
  
  console.log(getInfo(prices)); // [3, 4]
  