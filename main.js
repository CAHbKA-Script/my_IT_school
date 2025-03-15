function TaskList() {
    this.taskList = new Map(),
    this.getTask = (id) => {
        return this.taskList.get(id);
    }
    this.push = (task) => {
        this.taskList.set(task.id, task);
    }
    this.remove = (id) => {
        this.taskList.delete(id);
    }
    this.changeComplete = (id) => {
        this.taskList.get(id).complete = !this.taskList.get(id).complete;
    }
    this.editText = (id, newText) => {
        this.taskList.get(id).text = newText;
    }
    this.keys = () => {
        return [...this.taskList.keys()];
    }
    this.clear = () => {
        this.taskList.clear();
    }
}

function Task (id, complete, text) {
    this.id = id, 
    this.complete = complete,
    this.text = text
}

function addTaskList(inputSelector, formSelector, listSelector) {
    const input = document.querySelector(inputSelector);
    const form = document.querySelector(formSelector);
    const list = document.querySelector(listSelector);

    const taskList = new TaskList();

    const getId = () => {
        const idList = taskList.keys();
        const id = Math.floor(Math.random() * 9999);
        if (idList.includes(id)) return "" + getId();
        return "" + id;
    }

    (function checkStorage () {
        let idList = taskList.keys();
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (idList.includes(key)) continue;
            console.log(JSON.parse(localStorage.getItem(key)));
            taskList.push(JSON.parse(localStorage.getItem(key)));
        }
        idList = taskList.keys();
        const itemsId = [...document.querySelectorAll(".task-item")].map(el => el.getAttribute("id"));

        for (let id of idList) {
            console.log(id)
            if (!itemsId.includes(id)) createTaskItem(taskList.getTask(id));
        }
    })()

    function createTask () {
        const newTask = new Task(getId(), false, input.value);
        taskList.push(newTask);
        localStorage.setItem(newTask.id, JSON.stringify(newTask));
        createTaskItem(newTask);
    }

    function changeStorageCompleted(task) {
        console.log(task)
        localStorage.setItem(task.id, JSON.stringify(task));
    }

    function deleteTask (id) {
        taskList.remove(id);
        localStorage.removeItem(id);
        const taskItem = document.getElementById(id);
        taskItem.remove();
    }

    // function createContextMenu(x, y) {
    //     const menu = document.createElement("div");
    //     menu.classList.add("menu");
    //     menu.style.top = y + "px";
    //     menu.style.left = x + "px";
    //     menu.innerText = "Edit";
    //     document.body.appendChild(menu);
    // }


    function createTaskItem (task) {
        const item = document.createElement("div");
        item.setAttribute("id", task.id);
        item.classList.add("task-item");
        const ticking = document.createElement("div");
        ticking.classList.add("ticking");

        const textTask = document.createElement("div");
        textTask.classList.add("task-text");
        textTask.textContent = task.text;
        textTask.addEventListener("dblclick", function() {
            if(!this.classList.contains("completed")) {
                this.setAttribute("contentEditable", "true");
                this.focus();
            }
        });
        textTask.addEventListener("mousedown",  function(event) {
            if(!this.classList.contains("completed")) {
                if (event.button === 2) {
                    this.setAttribute("contentEditable", "true");
                    this.focus();
                }
            }
        });
        textTask.addEventListener("contextmenu",  function(event) {
            if(!this.classList.contains("completed")) 
                event.preventDefault();
        });
        textTask.addEventListener("keydown", function(event) {
            if (event.altKey && event.key === "Enter") {
                console.log("alt enter")
                this.setAttribute("contentEditable", "false");
                if (this.textContent.length > 0) {
                    taskList.editText(task.id, this.textContent);
                    localStorage.setItem(task.id, JSON.stringify(task));
                }
                else {
                    this.textContent = task.text;
                }
            } 
        });

        if (task.complete) {    
            textTask.classList.add("completed")
            ticking.classList.add("active");
        }
        ticking.addEventListener("click", function() {
            this.classList.toggle("active");
            textTask.classList.toggle("completed")
            taskList.changeComplete(task.id);
            changeStorageCompleted(taskList.getTask(task.id));
        });

        // textTask.addEventListener("contextmenu", function (event)  {
        //     event.preventDefault();
        //     createContextMenu(event.pageX, event.pageY);
        // });

        // textTask.addEventListener("click", function (event)  {
        // });
        // ///////
        // textTask.addEventListener("mousedown", () => false);
        // ///////

        const div = document.createElement("div");
        div.classList.add("cross");
        div.addEventListener("click", () => {
            if (confirm("Вы действительно хотите удалить эту задачу?")) {
                deleteTask(task.id);
            }
        });

        const editEl = document.createElement("div");
        editEl.classList.add("edit");
        editEl.addEventListener("click", () => {
            if (textTask.getAttribute("contentEditable") === "true") {
                textTask.setAttribute("contentEditable", "false");
                if (textTask.textContent.length > 0) {
                    taskList.editText(task.id, textTask.textContent);
                    localStorage.setItem(task.id, JSON.stringify(task));
                }
                else {
                    this.textContent = task.text;
                }
                return;
            }
            if(!textTask.classList.contains("completed")) {
                textTask.setAttribute("contentEditable", "true");
                textTask.focus();
            }
        })

        item.append(ticking, textTask, editEl, div);
        list.appendChild(item);
        input.value = "";
    }

    const submitAction = (event) => {
        event.preventDefault();
        createTask();
    }

    form.addEventListener("submit", submitAction);
    const removeAll = document.querySelector(".danger-button span");
    removeAll.addEventListener("click", () => {
        if (confirm("Вы действительно хотите удалить все задачи?")) {
            taskList.clear();
            localStorage.clear();
            list.innerHTML = "";    
        }
    });
}

addTaskList(".form input", ".form", ".task-items");