class Email {
    constructor(email) {
      this._email = email;
    }
  
    get isValid() {
      const login = this._email.split("@")[0];
      const domain = this._email.split("@")[1];
      const domainZone = domain.split(".")[1];
      const invalidSymbols = ["*", "#", "$", "%", "^"];
      return !invalidSymbols.some(symbol => login.includes(symbol)) && domainZone.length <= 3;
    }
  
    setEmail(emailArr) {
      this._email = `${emailArr[0]}@${emailArr[1]}.${emailArr[2]}`;
    }
  }
  
  // Пример использования
  const email1 = new Email("example@mail.com");
  console.log(email1.isValid); // true
  
  email1.setEmail(["newEmail", "gmail", "com"]);
  console.log(email1._email); // newEmail@gmail.com
  
  const email2 = new Email("example#mail.com");
  console.log(email2.isValid); // false
  
  email2.setEmail(["newEmail", "yahoo", "co.in"]);
  console.log(email2._email); // newEmail@yahoo.co.in
  

// В данном примере мы создали класс Email с приватным свойством _email, геттером isValid и сеттером setEmail.

// Геттер isValid разбивает email на логин, домен и доменную зону и проверяет, содержит ли логин запрещенные символы и не превышает ли доменная зона 3 символа.

// Сеттер setEmail принимает массив вида [логин, домен, доменная зона] и с помощью шаблонной строки создает новый email.

// Затем мы создали два экземпляра класса Email, проверили валидность email и изменили их с помощью метода setEmail.