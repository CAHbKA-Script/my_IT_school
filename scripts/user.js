/**
 * @typedef {Object} Data
 * @property {string} id 
 * @property {string} name 
 * @property {string} email 
 * @property {string} address 
 * @property {string} phone 
 */

const generateId = () => {
    return Date.now().toString(36);
}

class User {
    /**@type {Data} */
    data = {};

    constructor ({id, name, email, address, phone}) {
        this.data.id = id || generateId();
        this.data.name = name || "No name";
        this.data.email = email || "No email";
        this.data.address = address || "No address";
        this.data.phone = phone || "No phone";
    }

    edit (newData) {
        this.data = Object.assign(this.data, newData);
    }

    get () {
        return this.data;
    }
}

export default User;
export {generateId};