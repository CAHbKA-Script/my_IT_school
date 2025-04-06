import User from "./user.js";

class Contacts {
    /**@type {User[]} */
    data = [];

    add ({id, name, email, address, phone}) {
        const user = new User({id, name, email, address, phone});
        this.data.push(user);
        return id;
    }

    get groupById () {
        const data = this.data.reduce((acc, el) => {
            acc[el.data.id] = el;
            return acc;
        }, {});
        return data;
    }

    edit (id, newData) {
        /**@type {User} */
        const user = this.groupById[id];
        if (!user) return;
        user.edit(newData);
    }

    remove (id) {
        this.data = this.data.filter(el => el.data.id !== id);
    }

    get () {
        return this.data;
    }

    checkLifespan () {
        const cookies = this.getCookies();
        if (!cookies) {
            localStorage.setItem("contacts", JSON.stringify([]));
            return;
        }
        let localData = JSON.parse(localStorage.getItem("contacts"));
        if (!localData) return;
        localData = localData.filter(el => {
            return cookies.includes(`${el.data.id}`)}
        );
        localStorage.setItem("contacts", JSON.stringify(localData));
    }

    get store () {
        this.checkLifespan();
        let localData = JSON.parse(localStorage.getItem("contacts"));
        if (!localData) return;
        const userArr = [];
        localData.forEach(el => {
            userArr.push(new User({
                id: el.data.id, 
                name: el.data.name, 
                email: el.data.email, 
                address: el.data.address, 
                phone: el.data.phone
            }));
        });
        return userArr;
    }

    set store (newData) {
        if (!newData) return;
        localStorage.setItem("contacts", JSON.stringify(newData));
    }

    setCookies(name) {
        const maxAge = 8.64e5;
        document.cookie = `${name}=; max-age=${maxAge}`;
    }
    
    getCookies() {
        return document.cookie.match(/\w+/gi);
    }

    deleteCookies (name) {
        document.cookie = `${name}=; max-age=0`;
    }

    deleteAllCookies () {
        const cookies = this.getCookies();
        cookies.forEach(el => this.deleteCookies(el));
    }

}

export default Contacts;