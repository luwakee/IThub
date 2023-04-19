class Email {
    constructor(email) {
      this._email = email;
    }
  
    get isValid() {
      const emailParts = this._email.split('@');
      const domain = emailParts[1].split('.');
      const invalidChars = /[*#$%^]/;
  
      return !invalidChars.test(emailParts[0]) && domain[1].length <= 3;
    }
  
    setEmail(emailParts) {
      this._email = emailParts.join('@');
    }
  
    get email() {
      return this._email;
    }
  }

// Здесь мы создали класс Email, который содержит свойство _email и два геттера, isValid и email, и сеттер setEmail. Геттер isValid проверяет, содержит ли логин запрещенные символы, и проверяет длину доменной зоны. Сеттер setEmail задает новое значение _email в виде массива. Геттер email возвращает текущее значение _email.

// Теперь создадим класс Contact, наследующий класс Email:

  class Contact extends Email {
    constructor(email, phone) {
      super(email);
      this._phone = phone;
    }
  
    get phoneType() {
      const phoneLength = this._phone.replace('+', '').length;
      if (phoneLength === 12) {
        return 'Мобильный';
      } else if (phoneLength === 18) {
        return 'Городской';
      } else {
        return 'Неизвестный';
      }
    }
  
    get phone() {
      return this._phone;
    }
  }


// Здесь мы создали класс Contact, который наследует класс Email. В конструкторе класса Contact мы вызываем конструктор класса Email с помощью ключевого слова super и добавляем свойство _phone. У класса Contact есть новый геттер phoneType, который определяет тип телефона на основе длины телефона и наличия знака +. Геттер phone возвращает текущее значение _phone.

const contact1 = new Contact('example@gmail.com', '+12345678901');
console.log(contact1.email);
console.log(contact1.isValid); 
console.log(contact1.phoneType);
contact1.setEmail(['newEmail', 'gmail', 'com']);
console.log(contact1.email); 

const contact2 = new Contact('invalid#email@yahoo.net', '123456789012345678');
console.log(contact2.email); 
console.log(contact2.isValid); 
console.log(contact2.phoneType);
contact2.setEmail(['newEmail', 'yahoo', 'net']);
console.log(contact2.email); 
