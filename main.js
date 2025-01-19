//TASK 1
console.log("\nTask 1:\n");
let arr =  [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//TASK 2
console.log("\nTask 2:\n");
arr =  [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > -10 && arr[i] < -3) console.log(arr[i]);
}

//TASK 3
console.log("\nTask 3:\n");
arr = [];
let i = 23;
while (i <= 57) {
    arr.push(i);
    i++;
}
console.log("Цикл while: \n" + arr);

arr = [];
i = 23;
for (;i <= 57; i++) {
    arr.push(i);
}
console.log("Цикл for: \n" + arr);

//TASK 4
console.log("\nTask 4:\n");
arr = [];
for (let i = 0; i < 100; i+=3) {
    arr.push(String(i));
}
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === "1" || arr[i][0] === "2" || arr[i][0] === "5") 
        console.log(arr[i]);
}

//TASK 5
console.log("\nTask 5:\n");
arr = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"]
for (let i = 0; i < arr.length; i++) {
    let tag = "<span";
    if (arr[i] === "СБ" || arr[i] === "ВС") tag+= " class=\"weekend\"";
    tag += (">" + arr[i] + "</span>");
    document.write(tag);
}

//TASK 6
console.log("\nTask 6:\n");
console.log(arr);
console.log("Последний элмент: " + arr[arr.length - 1]);

//TASK 7
console.log("\nTask 7:\n");
arr = [];
while (true) {
    let num = prompt("Ввдите число");
    while (isNaN(num)) {
        alert("Вы ввели не число! Введите число!");
        num = prompt("Ввдите число");
        if (!isNaN(num)) break;
    }
    if (num === "") break;
    arr.push(num);
}
console.log(arr);
arr.sort(function(a, b) {
    return a - b;
});
console.log(arr);

//TASK 8
console.log("\nTask 8:\n");
arr =  [12, false, "Текст", 4, 2, -5, 0];
console.log(arr.reverse());

while(arr.length > 0) {
    console.log(arr.shift());
}

//TASK 9
console.log("\nTask 9:\n");
arr = [5, 9, 21, , , 9, 78, , , , 6];
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) === "undefined") {
        count++;
    }
}
console.log("Количество нулевых элементов: " + count);

//TASK 10
console.log("\nTask 10:\n");
arr = [48, 9, 0, 4, 0, 21, 2, 1, 8, 84, 76, 8, 4, 13, 2, 0];
let first = arr.indexOf(0);
let last = arr.lastIndexOf(0);
let sum = 0;
if (first === -1 || last === -1 || (first === last)) {
    console.log("Сумма ровна: 0\nНет двух нулей");
}
else {
    for (let i = first; i < last; i++) {
        sum += arr[i];
    }
    console.log("Сумма между двумя нулями:" + sum);
}

//TASK 11
console.log("\nTask 11:\n");
count = prompt("Введите высоту треугольника");
while (true) {
    if (count === "" || isNaN(count)) {
        alert("Пожалуйста, введите число");
        count = prompt("Введите высоту треугольника");
    }
    else break;
}

arr = [];
for (let i = 1; i <= count; i++) {
    arr.push([]);
    for (let j = 0; j < count - i; j++) {
        arr[i-1].push(" ");
    }
    for (let j = 0; j < i * 2 -1; j++) {
        arr[i - 1].push("^");
    }
}
for (let i = 0; i < count; i++) {
    console.log(arr[i].join(""));
}
console.log(arr);