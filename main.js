function checkPhoneNumber (phone) {
    let regex = /\b\+?\d{3}\s?(\d{2}|\(\d{1,3}\))\s?\d{3}(?<sep>[\s-]?)\d{2}(\k<sep>)\d{2}\b/g;
    return regex.test(phone);
}

function checkEmil (emil) {
    let regex = /\b[A-Za-z]\w{2,31}[A-Za-z]@[A-Za-z][A-Za-z\.-][A-Za-z]{1,9}(\.[A-Za-z]{2,11})\b/g;
    return regex.test(emil);
}

function checkName (name) {
    return /^[A-Z][a-z]{1,10}\s[A-Z][a-z]{1,10}(\s[A-Z][a-z]{1,10})?$/.test(name);
}

function Contact () {

    this.setName = (name) => {
        if (!name) name = prompt ("Введите ФИО");
        while (!checkName (name)) {
            name = prompt ("Было введено некорректное ФИО, повторите ввод\nпример: Иван Иванов Иванович");
            if (checkName (name)) {
                alert("Вы ФИО: " + name);
                break;
            }
            else alert ("Что-то ввели не так " + name);
        }
        this.name = name;
    }

    this.getName = () => {
        return this.name;
    }

    this.setAge = (age) => {
        if (!age) age = prompt ("Введите возраст");
        while (!age) {
            if (+age >= 18 && +age <= 100) {
                alert("Вы ввели возраст: " + age);
                break;
            }
            else {
                age = prompt ("Был введен некорректный возраст, повторите ввод (Возраст должен быть больше 18 и меньше 100)\n");
                alert ("Что-то ввели не так " + age);
            } 
        }
        this.age = age;
    }

    this.setPhone = (phone) => {
        if (!phone) phone = prompt ("Введите номер телефона");
        while (!checkPhoneNumber (phone)) {
            phone = prompt ("Был введен некорректный номер телефона, повторите ввод\nпример: +375(29)1111111, 375 29 111 11 11, 37529 111-11-11");
            if (checkPhoneNumber (phone)) {
                alert("Вы ввели номер телефона: " + phone);
                break;
            }
            else alert ("Что-то ввели не так " + phone);
        }
        this.phone = phone;
    }

    this.setEmail = (email) => {
        if (!email) email = prompt ("Введите адрес почты");
        while (!checkEmil (email)) {
            email = prompt ("Был введен некорректный адрес почты, повторите ввод\nпример: mail@mail.by");
            if (checkPhoneNumber (email)) {
                alert("Вы ввели адрес почты: " + email);
                break;
            }
            else alert ("Что-то ввели не так " + email);
        }
        this.email = email;
    }

    this.addDate = (name, age, phone, email) => {
        this.setName (name);
        this.setAge (age);
        this.setPhone (phone);
        this.setEmail (email);
    }

    this.display = () => {
        console.log(`Имя: ${this.name}. Возраст: ${this.age}. Телефон: ${this.phone}. Email: ${this.email}`);
    }

}

function PhoneBook () {
    this.contacts = [];

    this.addContact = (contact) => {
        if (!contact) {
            contact = new Contact();
            contact.addContact();
        }
        this.contacts.push(contact);
    }

    this.displayContact = (name) => {
        let res = this.contacts.filter((elem) => {
            return elem.getName() === name;
        });
        if (res.length > 0) {
            console.log(`\nПо ФИО ${name} найдено:`);
            res.forEach((elem) => elem.display());
        }
        else {
            console.log(`\nПо ФИО ${name} ничего не найдено:`);
        }
    }

    this.displayAll = () => {
        console.log("\nСписок контактов:");
        this.contacts.forEach((elem) => elem.display());
    }
}

function NewPhoneBook () {
    PhoneBook.call(this);

    this.displayAll = () => {
        console.log("\nСписок контактов:");
        this.contacts.forEach((elem) => {
            elem.display();
            console.log("__________________________________________________________________________________________________");
        });
    }
}

const phoneBook = new NewPhoneBook ();

let petr = new Contact ();
petr.addDate("Ivanov Ivan Ivanovich", 19, "+375(29)123-45-67", "ivanov@mail.ru");
phoneBook.addContact(petr);
let misha = new Contact ();
misha.addDate("Zybenko Mikhail Petrovich", 45, "+375(33)777-77-77", "zybenko777p@mail.ru");
phoneBook.addContact(misha);
let vasiliy = new Contact ();
vasiliy.addDate("Vasko Vasiliy Ivanovich", 88, "+375 44 873-23-23", "vasiliy@mail.ru");
phoneBook.addContact(vasiliy);
let alex = new Contact ();
alex.addDate("Kozel Alexandr Igorevich", 22, "+375(33)1212121", "alex_mail@mail.com");
phoneBook.addContact(alex);
phoneBook.displayContact("Kozel Alexandr Igorevich");
phoneBook.displayContact("asd asd asd");

phoneBook.displayAll();




//Вторая часть задания

function ElementCreator() {

    /**
     * @param {string} tagName
     */
    this.create = (tagName) => {
        return document.createElement(tagName);
    }

    /**
     * @param {HTMLElement} element
     * @param {string} name
     * @param {string} value
     */
    this.attr = (element, name, value) => {
        if (value) {
            element.setAttribute(name, value);
        }
        else {
            return element.getAttribute(name);
        }
    }

    /**
     * @param {HTMLElement} element
     * @param {string} value
     */
    this.html = (element, value) => {
        if (value) {
            element.innerHTML = value;
        }
        else {
            return element.innerHTML;
        }
    }

    /**
     * @param {string} selector
     * @param {HTMLElement} element
     */
    this.search = (selector, element) => {
        let res = null;
        if (element) {
            res = element.querySelectorAll(selector);
        }
        else {
            res = document.querySelectorAll(selector);
        }
        return res;
    }

    /**
     * @param {HTMLElement} element
     * @param {string} className
     */
    this.hasClass = (element, className) => {
        return element.classList.contains(className);
    }

    /**
     * @param {HTMLElement} element
     * @param {string} className
     */
    this.addClass = function (element, className) {
        if (!this.hasClass(element, className)) {
            element.classList.add(className);
        }
    }

    /**
     * @param {HTMLElement} element
     * @param {string} className
     */
    this.removeClass = function (element, className) {
        if (this.hasClass(element, className)) {
            element.classList.remove(className);
        }
    }

    /**
     * @param {HTMLElement} element
     * @param {string} className
     */
    this.toggleClass = function (element, className) {
        if (!this.hasClass(element, className)) {
            element.classList.add(className);
        }
        else {
            element.classList.remove(className);
        }
    }

    /**
     * @param {HTMLElement} element
     * @param {HTMLElement} newElement
     * @param {HTMLElement} beforeElement
     */
    this.append = (element, newElement, beforeElement) => {
        if (beforeElement) {
            element.insertBefore(newElement, beforeElement);
        }
        else {
            element.append(newElement);
        }
    }
    
    /**
     * @param {HTMLElement} element
     * @param {string} eventName
     * @param {Function} functionName
     */
    this.on = (element, eventName, functionName) => {
        element.addEventListener(eventName, functionName);
    }
}

const dom = new ElementCreator();
const container = dom.search(".container")[0];

function butHandler (event) {
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, rem!";
    const p = dom.create("p");
    dom.addClass(p, "text");
    dom.html(p, text);

    dom.on(p, "mouseover", clueEventOver);
    dom.on(p, "mouseout", clueEventOut);

    dom.append(container, p);
}


const but = dom.create("button");
dom.html(but, "Нажать для добавления элемента");
dom.on(but, "click", butHandler);
dom.append(container, but);

const input = dom.search(".form input")[0];
dom.attr(input, "placeholder", "Введите класс элмента для переключения (удаления/добавления)");

const classSwitch = dom.search(".switch")[0];
dom.on(classSwitch, "click", () => {
    const className = input.value;
    const elements = dom.search(".container p");
    if (elements.length > 0) {
        elements.forEach(el => dom.toggleClass(el, className));
    }
    input.value = "";
});