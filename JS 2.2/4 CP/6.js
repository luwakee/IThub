let users = [
    {id: 1, name: 'Alex', lastname: 'Wilyam', age: 20},
    {id: 2, name: 'Steven', lastname: 'King', age: 34} 
];

// добавление нового пользователя
function addUser(name, lastname, age) {
  const id = users.length + 1;
  const user = { id, name, lastname, age };
  users.push(user);
}

// изменение данных о пользователе
function updateUser(id, name, lastname, age) {
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex !== -1) {
    users[userIndex] = { id, name, lastname, age };
  }
}

// удаление пользователя по id
function deleteUser(id) {
  users = users.filter(user => user.id !== id);
}

// пример использования
console.log(users); // [{id: 1, name: 'Alex', lastname: 'Wilyam', age: 20}, {id: 2, name: 'Steven', lastname: 'King', age: 34}]
addUser('John', 'Doe', 25);
console.log(users); // [{id: 1, name: 'Alex', lastname: 'Wilyam', age: 20}, {id: 2, name: 'Steven', lastname: 'King', age: 34}, {id: 3, name: 'John', lastname: 'Doe', age: 25}]
updateUser(2, 'Mark', 'Smith', 30);
console.log(users); // [{id: 1, name: 'Alex', lastname: 'Wilyam', age: 20}, {id: 2, name: 'Mark', lastname: 'Smith', age: 30}, {id: 3, name: 'John', lastname: 'Doe', age: 25}]
deleteUser(1);
console.log(users); // [{id: 2, name: 'Mark', lastname: 'Smith', age: 30}, {id: 3, name: 'John', lastname: 'Doe', age: 25}]


// В этом решении используются методы массива push, findIndex и filter. Функция addUser добавляет нового пользователя, генерируя уникальный id, который зависит от количества пользователей в массиве users. Функция updateUser находит пользователя по id, используя метод findIndex, и заменяет его свойства на новые. Функция deleteUser удаляет пользователя по id, используя метод filter.