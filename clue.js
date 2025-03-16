const createClue = (content, position) => {
    const clue = document.createElement("div");
    clue.classList.add("clue-item");
    clue.innerText = "Подключенные классы: " + content;
    if (position) {
        clue.style.top = "-30%";
    }
    else {
        clue.style.bottom = "-30%";
    }
    return clue;
}

const clueEventOver = (event) => {
    const target = event.target;
    const value = target.classList;
    const userScreen = window.innerHeight;
    const position = event.clientY;
    let topFlag = false;
    if (position > userScreen * .75) topFlag = true;
    const clue = createClue(value, topFlag);
    target.append(clue);
}

const clueEventOut = (event) => {
    const target = event.target;
    const clue = target.querySelector(".clue-item");
    if (!clue) return;
    target.removeChild(clue); 
}