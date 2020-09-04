/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход целое неотрицательное
 * число n. Возвращать функция должна количество нулей, содержащихся в аргументе.
 * 
*/

function countZeros(n) {
    // Напишите код здесь
    let count = Math.floor(n / 10);
    let newNum = n.toString().split('');
    
    if(n === 100) {
        count += Number(newNum[0]);
    }
    if (n > 100) {
        count += Number(newNum[0]) + 9*Number(newNum[0]);
    }
    return count;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
console.log(countZeros(100)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
console.log(countZeros(342));
console.log(countZeros(9));