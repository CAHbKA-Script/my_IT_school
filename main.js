//TASK 1
console.log("Task 1: \n");

function subAndDiv (a, b, c) {
    return (a - b) / c;
}

console.log("(27-7)/2=" + subAndDiv(27, 7, 2));

//TASK 2
console.log("\nTask 2: \n");

function degree_2_3 (a) {
    return [a ** 2, a ** 3];
}

let resFunc2 = degree_2_3(5, 7);
console.log("5^2=" + resFunc2[0]);
console.log("5^3=" + resFunc2[1]);

//TASK 3
console.log("\nTask 3: \n");

function min (a, b) {
    return a < b ? a : b;
}

function max (a, b) {
    return a > b ? a : b;
}

console.log("a = 123, b = 78 \nmin: " + min(123, 78)+"\nmax: " + max(123, 78));

//TASK 4
console.log("\nTask 4: \n");

function getRangeNumbers() {
    let start = +prompt("Введите начальлное значение диапазона:");
    let end = +prompt("Введите конечное значение диапазона:");
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}

function displayRange (arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

let arr = getRangeNumbers();
displayRange (arr);

//TASK 5
console.log("\nTask 5: \n");

function isEven (number) {
    return number % 2 === 0;
}
console.log("Is even function");
console.log("3 - " + isEven(3) + "; 4 - " + isEven(4) + "; 5 - " + isEven(5) + "; 6 - " + isEven(6));

//TASK 6
console.log("\nTask 6: \n");

function filterArr (arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (isEven(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(filterArr(arr));

//TASK 7
console.log("\nTask 7: \n");

function getItems () {
    let count = +prompt("Введите количество рядов");
    let item = prompt("Введите символ заполнения фигуры, или нажмите ОК для использования символов по умолчанию");
    return [count, item];
}

function drawFigure (count) {
    if (!arguments[1] || arguments[1] === " ") arguments[1] = "";
    for (let i = 1; i <= count; i++) {
        let str = "";
        for (let j = 0; j < i; j++) {
            str += arguments[1][0] || i;
        }
        console.log(str);
    }
}

let [count, item] = getItems();
drawFigure(count, item);

//TASK 8
console.log("\nTask 8: \n");

(function draw (count) {
    for (let i = 1; i <= count; i++) {
        console.log(drawLine(i));
    }

    console.log("\nRevers\n");

    for (let i = count; i > 0; i--) {
        console.log(drawLine(i));
    }

    function drawLine (index) {
        let str = "";
        for (let i = 0; i < count - index; i++) {
            str += " ";
        }
    
        for (let i = 0; i < 2 * index - 1; i++) {
            str += "*";
        }
        return str;
    }
}) (count)

//TASK 9
console.log("\nTask 9: \n");

let arrFib = [];

for (let i = 0;; i++) {
    if (fibNum (i) > 1000) {
        break;
    }
    arrFib.push(fibNum(i));
}

console.log("Числа Фибоначчи:\n");
console.log(arrFib.join(", "))

function fibNum (n) {
    if (n < 0) return 0;
    return n == 0 || n == 1 ? n : fibNum(n - 2) + fibNum(n - 1);
}

//TASK 10
console.log("\nTask 10: \n");

let number = +prompt("Введите число: \n");
console.log("Итоговоая сумма цифр: " + toDigital(number));

function toDigital (number) {
    let str = String(number);
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += parseInt(str[i]);
    }

    console.log("Число: " + number + ". Cумма цифр: " + sum);

    if (sum > 10) {
        return toDigital(sum);
    }
    return sum;
}

//TASK 11
console.log("\nTask 11: \n");

function displayArr(arr) {
    let result = "";
    result += arr.shift();
    result += arr.length ? ", " + displayArr(arr) : ";";
    return result;
}

let recursArr = [1, 3, 5, 1, 4, 7, 9, 10, 12, 11];
console.log("Исходный массив:\n" + recursArr);
console.log("Рекурсивный вывод:\n");
console.log(displayArr(recursArr));

//TASK 12
console.log("\nTask 12: \n");

function getInformation () {
    let name = prompt("Введите имя");
    let surname = prompt("Введите фамилию");
    let lastname = prompt("Введите отчество");
    let group = prompt("Введите группу");

    let str = [];
    str.push("Домашняя работа: \"Функции\"");
    str.push("Выполнил: студент гр. " + group);
    str.push(surname + " " + name + " " + lastname);

    let resArr = fillStr(str, getMaxLength(str));
    resArr.forEach(element => console.log(element));


    function getMaxLength (arr) {
        let maxIndex = 0;
        for (let i = 1; i < arr.length; i++) {
            if (arr[maxIndex].length < arr [i].length) {
                maxIndex = i;
            }
        }
        return arr[maxIndex].length;
    }

    function fillStr (array, maxLength) {
        let arr = array;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].length < maxLength) {
                while (arr[i].length < maxLength) {
                    arr[i] += " ";
                }
            }
            arr[i] = "*" + arr[i] + "*";
        }

        let stars = "";
        while (stars.length < arr[0].length) {
            stars += "*";
        }

        arr.unshift(stars);
        arr.push(stars);
        return arr;
    }

}

getInformation();

//TASK 13
console.log("\nTask 13: \n");

function getMail () {

    while (true) {
        let mail = prompt("Введите адрес электронной почты");
        let key = true;

        for (let i = 0; i < mail.length; i++) {
            if (!checkSymbol(mail[i])) {
                key = false;
            }
        }

        if (!key) {
            key = false;
            alert("Адрес электронной почты может содержать только латинские буквы, цифры, точку, дефис, нижнее подчеркивание\n" + mail);
        }

        let checkDup = checkDuplicate(mail);

        if (!checkDup[0]) {
            key = false;
            alert(checkDup[1]);
        }
    
        if (!checkFirstLast(mail)) {
            key = false;
            alert("Первый и последний символ должны быть латинскими буквами\n" + mail);
        }

        let checkName = checkNameLength(mail);
    
        if (!checkName[0]) {
            key = false;
            alert(checkName[1] + "\n" + mail);
        }

        let checkDomain = checkDomainLength(mail);
    
        if (!checkDomain[0]) {
            key = false;
            alert(checkDomain[1] + "\n" + mail);
        }

        if (key) {
            alert(mail);
            break;
        }
    } 

}

function checkSymbol (symbol) {
    if (symbol == "." || symbol == "-" || symbol == "_") return true;
    if (symbol >= "0" && symbol <= "9") return true;
    if (symbol >= "@" && symbol <= "Z") return true;
    if (symbol >= "a" && symbol <= "z") return true;
    return false;
}

function checkDuplicate (mail) {
    let countAt = Array.from(mail).filter(el => el == "@").length;
    if ( countAt != 1 ) return [false, "В почтовом адресе должен быть только один символ @. Не более, не менее"];
    let lowerMail = mail.toLowerCase();
    for (let i = 1; i < lowerMail.length; i++) {
        if ((lowerMail[i] < "a" || lowerMail[i] > "z") && (lowerMail[i-1] < "a" || lowerMail[i-1] > "z")) {
            return [false, "В имени почты нельзя использовать идущие друг за другом точку, дефис, нижнее подчеркивание, @"];
        }
    }
    return [true, "Ok"];
}

function checkFirstLast (mail) {
    let lowerMail = mail.toLowerCase();
    if (lowerMail[0] < "a" || lowerMail[0] > "z") return false;
    if (lowerMail[lowerMail.length - 1] < "a" || lowerMail[lowerMail.length - 1] > "z") return false;
    return true;
}

function checkNameLength (mail) {
    let indexAt = mail.indexOf("@");
    let nameMail = mail.slice(0, indexAt);
    if (nameMail.length < 3) {
        return [false, "Длина имени почты должна быть не менее 3 симовлов. Введенная длина меньше 3"];
    }
    else if (nameMail.length > 32) {
        return [false, "Длина имени почты должна быть не более 32 симовлов. Введенная длина больше 32"];
    }
    return [true, "Ok"];
}

function checkDomainLength (mail) {
    let indexDot = mail.lastIndexOf(".");
    let domain = mail.slice(indexDot + 1);

    if (domain.length < 2) {
        return [false, "Длина домена почты должна быть не менее 2 симовлов. Введенная длина меньше 2"];
    }
    else if (domain.length > 11) {
        return [false, "Длина домена почты должна быть не более 11 симовлов. Введенная длина больше 11"];
    }
    return [true, "Ok"];
}

getMail();