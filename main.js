//TASK 1
console.log("Task 1:\n");
let num1 = 1;
while (num1 <=50) {
    console.log(num1);
    num1++;
}
console.log("Второй массив\n");

for (let i = 35; i >=8; i--) {
    console.log(i);
}

//TASK 2
document.write("Task 2:", "</br>");
for (let i = 89; i >= 11; i--) {
    document.write(i, "</br>");
}

//TASK 3
console.log("\nTask 3:\n");
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Сумма чисел от 0 до 100 ровна " + sum);

//TASK 4
console.log("\nTask 4:");
for (let i = 1; i <=5; i++) {
    let sum = 0;
    for (let j = 1; j <= i; j++) {
        sum += j;
    }
    console.log("\nСумма чисел в числе " + i + " равна " + sum);
}

//TASK 5
console.log("\nTask 5:\n");
console.log("Цикл while:\n");

let key = 8;
while (key <= 56) {
    if (key % 2 === 0) console.log(key);
    key++;
}

console.log("\nЦикл for:\n");
for (let i = 8; i <= 56; i += 2) {
    console.log(i);
}

//TASK 6
console.log("\nTask 6:\n");

for (let i = 2; i <= 10; i++) {
    for(let j = 1; j <= 10; j++) {
        console.log(i + "*" + j + "=" + i * j);
    }
    console.log("=======");
}

//TASK 7
console.log("\nTask 7:\n");
let res = n = 1000;
let num = 0;

while (res > 50) {
    res /= 2;
    num++;
}

console.log("Полученное число: " + res + "\nКлдичесвто итераций: " + num);

//TASK 8
let sumTask8 = 0;
let count = 0;
while (true) {
    let num = parseInt(prompt("Введите число"));
    if (num === 0 || isNaN(num)) {
        break;
    }
    sumTask8 += num;
    count++;
}

alert("Сумма введенных чисел: " + sumTask8 + "\nСреднее арифметическое: " + (sumTask8 / count));

//TASK 9
console.log("\nTask 9:\n");
let strNum = "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57";
let buffer = "";
let min = 100;
let max = 0;
for (let i = 0; i < strNum.length; i++) {
    if (strNum[i] !== " ") {
        buffer += strNum[i];
    }
    else {
        min = +buffer < min ? +buffer : min;
        max = +buffer > max ? +buffer : max;
        buffer = "";
    }
}
console.log("Минимальное число: " + min + "\nМаксимальное число: " + max);

//TASK 10
console.log("\nTask 10:\n");
let inputNumStr = prompt("Введите число");

while (true) {
    if (inputNumStr === "" || isNaN(inputNumStr)) {
        alert("Вы ввели не число");
        inputNumStr = prompt("Введите число");
    }
    else {
        break;
    }
}

for (let i = 0; i < inputNumStr.length; i++) {
    console.log(inputNumStr[i]);
}

let inputNum = Number(inputNumStr);
let coeff = 10;
let countTask10 = 0;
let sumTask10 = 0;
let reverse = "";


while (inputNum > 0) {
    sumTask10 += inputNum % coeff;
    countTask10++;
    reverse += inputNum % coeff;
    inputNum = parseInt(inputNum / coeff);
}

alert("Сумма цифр: " + sumTask10 + "\nКоличество цифр: " +countTask10 + "\nОбратный порядок: " + reverse);
    