//TASK 1
console.log("\nTASK 1:\n");
let str1 = "aaa@bbb@ccc";
let regex = /@/g;
console.log(str1.replace(regex, "!"));

//TASK 2
console.log("\nTASK 2:\n");
let date = new Date();
console.log(date);
let checkDate = (date) => date < 10 ? "0" + date : date;
let str2 = `${date.getFullYear()}-${checkDate(date.getMonth())}-${checkDate(date.getDate())}`
console.log(str2);
let regex2 = /(\d{4})-(\d{2})-(\d{2})/;
console.log(str2.replace(regex2, '$3/$2/$1'));

//TASK 3
console.log("\nTASK 3:\n");
let str3 = "Я учу javascript!";
let word1 = "учу", word2 = "javascript";
let res = str3.slice(str3.indexOf(word1), str3.indexOf(word1) + word1.length);
console.log(res);
res = str3.substring(str3.indexOf(word2), str3.indexOf(word2) + word2.length);
console.log(res);
res = str3.substr(str3.indexOf(word1), word1.length);
console.log(res)

//TASK 4
console.log("\nTASK 4:\n");
let arr = [4, 2, 5, 19, 13, 0, 10];

res = Math.pow(arr.reduce((sum, el) => sum += Math.pow(el, 3), 0), 1/2);
console.log(res);

//TASK 5
console.log("\nTASK 5:\n");
let a = 3, b = 5;
let c = Math.abs(a - b);
console.log(`3 - 5 = ${a - b}; c = ${c}`);

a = 6, b = 1;
c = Math.abs(a - b);
console.log(`3 - 5 = ${a - b}; c = ${c}`);

//TASK 6
console.log("\nTASK 6:\n");

console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${checkDate(date.getDate())}.${checkDate(date.getMonth())}.${date.getFullYear()}`)

//TASK 7
console.log("\nTASK 7:\n");
let str7 = "aa aba abba abbba abca abea";
let regex7 = /ab+a/g;
res = str7.match(regex7);
console.log(...res);

//TASK 8
console.log("\nTASK 8:\n");

function checkPhoneNumber (phone) {
    let regex = /\b\+?\d{3}\s?(\d{2}|\(\d{1,3}\))\s?\d{3}(?<sep>[\s-]?)\d{2}(\k<sep>)\d{2}\b/g;
    console.log(false);
    return regex.test(phone);
}

// while (true) {
//     let input = prompt ("Введите номер телефона\nпример: +375(29)1111111, 375 29 111 11 11, 37529 111-11-11");
//     if (checkPhoneNumber (input)) {
//         alert("Ваш номер телефона: " + input);
//         break;
//     }
//     else alert ("Что-то ввели не так " + input);
// }

//TASK 9
console.log("\nTASK 9:\n");

function checkEmil (emil) {
    let regex = /\b[A-Za-z]\w{2,31}[A-Za-z]@[A-Za-z][A-Za-z\.-][A-Za-z]{1,9}(\.[A-Za-z]{2,11})\b/g;
    return regex.test(emil);
}

// while (true) {
//     let input = prompt ("Введите электронную почту\nпример: mail@mail.by");
//     if (checkEmil (input)) {
//         alert("Ваша почта: " + input);
//         break;
//     }
//     else alert ("Что-то ввели не так " + input);
// }

//TASK 10
console.log("\nTASK 10:\n");

function checkPath (path) {
    let regex = /^(?<protocol>https?:\/\/)?(?<domain>[\w.\-]{5,40})(?<otherAddress>[\w.\-\/]{1,100}\/?)?(?<params>\?[\w\.&=\-]{1,100})?(?<hash>#[\w\.&=\-]{1,100})?$/g;
    let res = regex.exec(path);
    let returnArr = [];
    for (let key in res.groups) {
        returnArr.push(res.groups[key])
    }
    return returnArr;
}

let path = "https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3"

console.log(checkPath(path));