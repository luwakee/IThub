function iIstFridayToday() {
    const today = new Date();
    const dayOfWeek = today.getDay();
  
    if (dayOfWeek === 5) {
      console.log("Сегодня пятница!");
    } else if (dayOfWeek === 4) {
      console.log("Пятница была вчера");
    } else if (dayOfWeek === 6) {
      console.log("Завтра пятница!");
    } else {
      const daysUntilFriday = dayOfWeek < 5 ? 5 - dayOfWeek : 7 - dayOfWeek + 5;
      console.log(`Пятница будет через ${daysUntilFriday} ${daysUntilFriday === 1 ? "день" : "дня"}`);
    }
  }
  
  iIstFridayToday();


//   Здесь мы используем метод getDay() объекта Date для получения номера дня недели (0 соответствует воскресенью, 1 - понедельнику и т.д.). Затем мы проверяем, является ли сегодняшний день пятницей (5), предыдущим днем (4) или следующим днем (6). Если ни один из этих случаев не выполняется, мы вычисляем количество дней до следующей пятницы и выводим сообщение с этим количеством дней в нужной форме.