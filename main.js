alert("Task 1:");

let name = prompt("Введите ваше имя");
let age = prompt("Введите ваш возраст");
let city = prompt("Введите ваш город");
let phone = prompt("Введите ваш телефон");
let email = prompt("Введите вашу почту");
let company = prompt("Введите вашу компанию");

alert("Меня зовут "+ name + ". Мне " + age + " лет. Я проживаю в городе " + city + " и работаю в компании " + company + ". Мои контактные данные: " + phone +", " + email + ".");

alert("Task 2:");

alert(name + " родился в " + (2025-age) + " году");

let numStr = "234702";
alert("Task 3:\n\"" + numStr +"\"");

let leftPart = +numStr[0] + +numStr[1] + +numStr[2];
let rightPart = +numStr[3] + +numStr[4] + +numStr[5];

if (leftPart === rightPart) {
    alert("Да! Равно.");
}
else {
    alert("Нет! Не равно.");
}

alert("Task 4:");

let a = 1;
if (a > 0) {
    alert("a="+ a + "\nВерно! а больше 0");
}
else {
    alert("a="+ a + "\nНе верно! а не больше 0");
}

a = 0;
if (a > 0) {
    alert("a="+ a + "\nВерно! а больше 0");
}
else {
    alert("a="+ a + "\nНе верно! а не больше 0");
}

a = -3;
if (a > 0) {
    alert("a="+ a + "\nВерно! а больше 0");
}
else {
    alert("a="+ a + "\nНе верно! а не больше 0");
}

a = 10;
let b = 2;
alert("Task 5: \na=" + a +", b=" +b);
let sum = a + b;

alert("Сумма:" + sum +"\nРазность: " + (a - b) + "\nПроизведение: " + (a * b) + "\nЧастное: " + (a / b));
if (sum > 1 ) {
    alert("Квадрат суммы: " + sum**2);
}

alert("Task 6: \n 2<a<11 или 6<=b<14");
(2 < a && a < 11) || (6 <= b && b < 14) ? alert("Верно!") : alert("Не верно");

alert("Task 7:");
let n = prompt("Введите число от 0 до 59");
let quarter = String(n / 15);

switch (quarter[0]) {
    case "0": 
        alert("Первая четверть");
        break;
    case "1":
        alert("Вторая часть");
        break;
    case "2": 
        alert("Третья часть");
        break;
    case "3":
        alert("Четвертая часть");
        break;
    default:
        alert("Число не находится в диапазоне от 0 до 59");
}

alert("Task 8:");
let day = +prompt("Введите количество дней для определения декады");
let dayInMonth = day % 31;
let decade = String((dayInMonth - 1) / 10);

switch (decade[0]) {
    case "0": 
        alert("Первая декада");
        break;
    case "1":
        alert("Вторая декада");
        break;
    case "2": 
        alert("Третья декада");
        break;
    default:
        alert("Число не находится в диапазоне от 0 до 59");
}

alert("Task 9:");

let days = Number(prompt("Введите количество дней")),
    weeks = days / 7,
    months = days / 31,
    years = days / 365,
    hours = days * 24;
    minutes = days * 24 * 60;
    seconds = days * 24 * 60 * 60;
alert("Years: "+ years + "\nMonths: " + months + "\nDays: " + days + "\nHours: " + hours + "\nMinutes: " + minutes + "\nSeconds: " + seconds);

if (weeks < 1) {
    alert("Меньше недели");
}
else if (months < 1) {
    alert("Меньше месяца");
}
else if (years < 1) {
    alert("Меньше года");
}
else {
    alert("Количество дней больше или равно 365");
}

alert("Task 10:");
alert("Было введено: " + day + " дней");
let month, timeOfYear;

if (day <= 31) {
    month = "Январь";
}
else if (31 < day && day <= 59) {
    month = "Февраль";
} 
else if (59 < day && day <= 90) {
    month = "Март";
}
else if (90 < day && day <= 120) {
    month = "Апрель";
}
else if (120 < day && day < 151) {
    month = "Май";
}
else if (151 < day && day <= 181) {
    month = "Июнь";
}
else if (181 < day && day <= 212) {
    month = "Июль";
}
else if (212 < day && day <= 243) {
    month = "Август";
}
else if (243 < day && day <= 273) {
    month = "Сентябрь";
}
else if (273 < day && day <= 304) {
    month = "Октябрь";
}
else if (304 < day && day <= 334) {
    month = "Ноябрь";
}
else if (334 < day && day <= 365) {
    month = "Декабрь";
}

switch (month) {
    case "Январь":
        timeOfYear = "зима"
        break;
    case "Февраль":
        timeOfYear = "зима"
        break;
    case "Март":
        timeOfYear = "весна"
        break; 
    case "Апрель":
        timeOfYear = "весна"
        break;
    case "Май":
        timeOfYear = "весна"
        break;
    case "Июнь":
        timeOfYear = "лето"
        break; 
    case "Июль":
        timeOfYear = "лето"
        break;
    case "Август":
        timeOfYear = "лето"
        break;
    case "Сентябрь":
        timeOfYear = "осень"
        break; 
    case "Октябрь":
        timeOfYear = "осень"
        break;
    case "Ноябрь":
        timeOfYear = "осень"
        break;
    case "Январь":
        timeOfYear = "зима"
        break;    
}

alert("Количество дней: " + day + "\nМесяц: " + month + "\nВремя года: " + timeOfYear);