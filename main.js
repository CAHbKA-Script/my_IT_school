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
        return name;
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
        return age;
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
        return phone;
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
        return email;
    }

    this.addDate = (name, age, phone, email) => {
        this.name = this.setName (name);
        this.age = this.setAge (age);
        this.phone = this.setPhone (phone);
        this.email = this.setEmail (email);
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

const phoneBook = new PhoneBook ();
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