/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
    // Напишите код здесь
    str1arr = str1.toLowerCase().split('');
    str2arr = str2.toLowerCase().split('');
    str1.toLowerCase().split('').forEach(element => {
        if(str2arr.length > 0 && str1arr.length > 0 && 
            str2arr.includes(element)) {
            str2arr.splice(str2arr.indexOf(element),1);
            str1arr.splice(str1arr.indexOf(element),1);
        }
    });
    if(str1arr.length == 0 && str2arr.length == 0 && 
        str1.toLowerCase() != str2.toLowerCase()) {
        return true;
    }
    else {
        return false;
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false
console.log(anagram('up', 'UP')); 