"use strict";
// написати сценарій, який буде
// виводити, чи парне введене число.
// якщо так — виводити за допомогою alert "так, парне"
// якщо ні, то "непарне"
const numberFromUser = prompt('Введіть число');
const result = (numberFromUser % 2 === 0 && 'так, парне') || 'непарне';
alert(result);