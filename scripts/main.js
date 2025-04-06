import Contacts from "./contacts.js";
class ContactsApp extends Contacts {
    /**@type {HTMLElement} */
    appContainer = null;
    contactsContainer = null;

    async getData () {
        if (!this.store || this.store.length > 0) return;
        await fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(response => {
                response.forEach(el => {
                    setTimeout( 
                        this.add({
                            id: el.id,
                            name: el.name,
                            email: el.email,
                            address: `${el.address.city}, ${el.address.street}, ${el.address.suite}`,
                            phone: el.phone
                        }), 100);
                })
            })
            .then( _ => {
                this.store = this.data;
                this.data.forEach(el => this.setCookies(el.data.id));
            });
    }

    constructor () {
        super();
        this.appContainer = document.createElement("div");
        this.appContainer.classList.add("container");

        this.init();
        this.getData().then( _ => this.render());

        this.contactsContainer = document.createElement("div");
        this.contactsContainer.classList.add("contacts-container");
        this.render();
        this.appContainer.append(this.contactsContainer);
        document.body.append(this.appContainer);
    }

    init () {
        const form = document.createElement("form");
        form.classList.add("form");

        const inputName = document.createElement("input");
        inputName.setAttribute("type", "text");
        inputName.setAttribute("placeholder", "Enter the name");

        const inputEmail = document.createElement("input");
        inputEmail.setAttribute("type", "text");
        inputEmail.setAttribute("placeholder", "Enter the email");

        const inputAddress = document.createElement("input");
        inputAddress.setAttribute("type", "text");
        inputAddress.setAttribute("placeholder", "Enter the address");

        const inputPhone = document.createElement("input");
        inputPhone.setAttribute("type", "text");
        inputPhone.setAttribute("placeholder", "Enter the phone");

        const button = document.createElement("button");
        button.setAttribute("type", "submit");
        button.innerText = "Create contact";

        const buttonDelete = document.createElement("div");
        buttonDelete.classList.add("deleteButton");
        buttonDelete.innerText = "Delete all";
        buttonDelete.addEventListener("click", () => {
            if (!this.data.length) return;
            if (confirm("Do you really want to delete all contacts?")) {
                this.data = [];
                this.store = [];
                this.deleteAllCookies();
                this.render();
            }
        });


        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const name = inputName.value;
            const email = inputEmail.value;
            const address = inputAddress.value;
            const phone = inputPhone.value;
            const idItem = this.add({name, email, address, phone});

            this.store = this.data;

            this.setCookies(idItem);

            inputName.value = "";
            inputEmail.value = "";
            inputAddress.value = "";
            inputPhone.value = "";
            this.render();
        });

        form.append(inputName, inputEmail, inputAddress, inputPhone, button, buttonDelete);
        this.appContainer.append(form);

        const localData = this.store;
        if (!localData) return;
        this.data = this.data.concat(localData);
    }

    render () {
        if (this.data.length < 1) {
            this.contactsContainer.innerText = "";
            this.contactsContainer.innerText = "Contact List Empty";
            return;
        }

        this.contactsContainer.innerHTML = "";
        
        this.data.forEach(el => {
            let readOnly = true; 
            const contactItem = document.createElement("div");
            contactItem.classList.add("contact-item");
            
            const contactItemText = document.createElement("div");
            contactItemText.classList.add("contact-item__text");

            const name = document.createElement("input");
            name.setAttribute("type", "text");
            name.setAttribute("readonly", "");
            name.value = el.data.name;
    
            const email = document.createElement("input");
            email.setAttribute("type", "text");
            email.setAttribute("readonly", "");
            email.value = el.data.email;
    
            const address = document.createElement("input");
            address.setAttribute("type", "text");
            address.setAttribute("readonly", "");
            address.value = el.data.address;
    
            const phone = document.createElement("input");
            phone.setAttribute("type", "text");
            phone.setAttribute("readonly", "");
            phone.value = el.data.phone;

            const editButton = document.createElement("div");
            editButton.classList.add("edit");
            editButton.innerHTML = "&#x270F;&#xFE0F;";
            editButton.addEventListener("click", () => {
                readOnly = !readOnly;
                if (!readOnly) {
                    editButton.innerHTML = "&#x1F4BE;"
                    name.removeAttribute("readonly");
                    email.removeAttribute("readonly");
                    address.removeAttribute("readonly");
                    phone.removeAttribute("readonly");
                }
                else {
                    editButton.innerHTML = "&#x270F;&#xFE0F;";
                    name.setAttribute("readonly", "");
                    email.setAttribute("readonly", "");
                    address.setAttribute("readonly", "");
                    phone.setAttribute("readonly", "");
                    const id = el.data.id;
                    this.edit(id, {name: name.value, email: email.value, address: address.value, phone: phone.value});
                    this.store = this.data;
                    this.setCookies(id);
                }
            });

            const deleteButton = document.createElement("div");
            deleteButton.classList.add("delete");
            deleteButton.innerHTML = "&#x1F5D1;&#xFE0F;";
            deleteButton.addEventListener("click", () =>{
                if (confirm("Do you really want to delete this contact?")) {
                    this.remove(el.data.id);
                    this.store = this.data;
                    this.deleteCookies(el.data.id);
                    this.render();
                }
            });

            const buttons = document.createElement("div");
            buttons.classList.add("buttons");
            buttons.append(editButton, deleteButton);
            contactItemText.append(name, email, address, phone);
            contactItem.append(contactItemText, buttons);
            this.contactsContainer.append(contactItem);
        });
    }
}

const contactsApp = new ContactsApp();