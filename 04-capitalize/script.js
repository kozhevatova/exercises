/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/



function capitalize(str) {
    // Напишите код здесь
    let newStr = "";
    if (str !== "") {
        str = str.trim().split(" ");
        str.forEach((element) => {
            element = element.charAt(0).toUpperCase() + element.slice(1);
            newStr += element + " ";
        })
    }

    return newStr.trim();
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"
console.log(capitalize('Испробовать Их Все Должны Вы'));