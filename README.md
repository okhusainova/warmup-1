# CodingJS
Задачи: https://the-winter.github.io/codingjs/

## Запуск
В PHPStorm для исполнения файла в Ноде можно нажать `Ctrl+Shift+R` или правой кнопкой и выбрать `run filename.js`.

## Тесты
Удобно добавлять тесты перед тем, как начать решение. Тесты можно посмотреть нажав `Solve` еще до решения. Т. к. задачи на JS, браузер для них не нужен и мы можем запускать их в Ноде. А в Ноде есть удобный модуль `assert` для тестирования. У этого модуля есть метод `.equal`, который позволяет делать простые сравнения:

```js
// Тесты:
const assert = require('assert');

// Например, при запуске `parrotTrouble(true, 6)` мы должны получить `true`.
// Если все ок, то ничего не выведется, если будет косяк, то все упадет с ошибкой:
assert.equal(parrotTrouble(true, 6), true);

assert.equal(parrotTrouble(true, 7), false);
assert.equal(parrotTrouble(false, 6), false);
assert.equal(parrotTrouble(true, 21), true);
assert.equal(parrotTrouble(false, 21), false);
assert.equal(parrotTrouble(true, 23), true);
assert.equal(parrotTrouble(false, 23), false);
assert.equal(parrotTrouble(true, 20), false);
assert.equal(parrotTrouble(false, 12), false);
```

При последующих измененях кода (после замечаний) тесты помогут ничего не сломать.
