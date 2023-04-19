function kingSayd(string) {
    if (string.startsWith("Король сказал:")) {
      console.log(string);
    } else {
      console.log("Король сказал: " + string);
    }
  }
  
  // Пример использования:
  kingSayd("сегодня хорошая погода"); // Король сказал: сегодня хорошая погода
  kingSayd("Король сказал: завтра будет дождь"); // Король сказал: завтра будет дождь
  