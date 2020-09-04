/*
 * Задача 8: «Фибоначчи»
 *
 * Последовательность Фибоначчи — это порядок чисел, где каждое последующее
 * число является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 * 
 * Напишите функцию, которая принимает на вход число n и возвращает n-й элемент
 * последовательности Фибоначчи.
*/

let fibArr = [0, 1];

function fibonacci(n) {
    // Напишите код здесь
    if (n > 0) {
        for (let i = 0; i <= n - 2; i++) {
            fibArr[i + 2] = fibArr[i] + fibArr[i + 1];
        }
        return (fibArr[n - 1]);
    }
    else {
        return fibArr[0];
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fibonacci(4)); // 2. Четвёртое число последовательности — двойка (0, 1, 1, 2)
console.log(fibonacci(0));
console.log(fibonacci(3));
console.log(fibonacci(5));
console.log(fibonacci(6));