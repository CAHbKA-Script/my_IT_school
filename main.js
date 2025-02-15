const html = document.getElementsByTagName("html")[0];
html.setAttribute("lang", "en");

const head = document.querySelector("head");
const metaCharSet = document.createElement("meta");
metaCharSet.setAttribute("charset", "UTF-8");
const metaViewport = document.createElement("meta");
metaViewport.setAttribute("name", "viewport");
metaViewport.setAttribute("content", "width=device-width, initial-scale=1.0");
const title = document.createElement("title");
title.textContent = "Страница на js";

const link1 = document.createElement("link"),
    link2 = document.createElement("link"),
    link3 = document.createElement("link");

link1.setAttribute("rel", "preconnect");
link1.setAttribute("href", "https://fonts.googleapis.com");
link2.setAttribute("rel", "preconnect");
link2.setAttribute("crossorigin", "");
link2.setAttribute("href", "https://fonts.gstatic.com");
link3.setAttribute("href", "https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&family=Montserrat:wght@100..900&family=Open+Sans&display=swap");
link3.setAttribute("rel", "stylesheet");

head.append(metaCharSet, metaViewport, title);
head.append(link1, link2, link3);

const body = document.querySelector("body");
const style = document.createElement("style");
style.textContent = `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        color: #9FA3A7;
    }

    h2 {
        font-family: "Arvo";
        font-weight: normal;
        line-height: 48px;
        font-size: 36px;
        color: #212121;
        text-align: center;
    }

    p {
        font-family: "Open Sans", serif;
        line-height: 26px;
        font-size: 14px;
        text-align: center;
        margin-bottom: 55px;
        margin-top: 10px;
    }

    span, a {
        font-family: "Montserrat";
        font-size: 12px;
        letter-spacing: 2.4px;
        font-weight: bold;
    }

    a {
        color: #212121;
        text-decoration: none;
        text-transform: uppercase;
        display: inline-block;
        padding: 15px 24px;
        border: 3px solid #FFC80A;
        border-radius: 30px;
    }

    .container {
        max-width: 1280px;
        padding: 30px 240px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .block_items {
        display: flex;
    }

    .block_items__item {
        padding: 80px 95px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .block_items__item h2 {
        margin-top: 20px;
        margin-bottom: 25px;
    }

    .block_items__item p {
        margin-bottom: 60px;
        line-height: 22px;
        font-size: 12px;
    }

    .block_items__item:nth-child(1) {
        border: 2px solid #e4dddd;
        border-right: 0px;
        border-radius: 5px 0 0 5px;
    }

    .block_items__item:nth-child(2) {
        background-color: #8F75BE;
    }

    .block_items__item:nth-child(2) span {
        color: #FFC80A;
    }

    .block_items__item:nth-child(2) h2, 
    .block_items__item:nth-child(2) p, 
    .block_items__item:nth-child(2) a {
        color: #ffffff;
    }
`;
body.append(style);

const container = document.createElement("div");
container.classList.add('container');
const block_items = document.createElement("div");
block_items.classList.add("block_items");
const block_items__item = document.createElement("div");
block_items__item.classList.add("block_items__item");

const h2 = document.createElement("h2");
h2.innerText = "Choose Your Option";
const p = document.createElement("p");
p.textContent = "But I must explain to you how all this mistaken idea of denouncing";
const span = document.createElement("span");
span.textContent = "FREELANCER";
const a = document.createElement("a");
a.innerText = "start here";

const copyH2 = h2.cloneNode();
copyH2.textContent = "Initially designed to";
const copyP = p.cloneNode();
copyP.textContent = "But I must explain to you how all this mistaken idea of denouncing";


block_items__item.append(span, copyH2, copyP, a);
const item2 = block_items__item.cloneNode(true);
const studio = item2.querySelector("span");
studio.textContent = "STUDIO";
block_items.append(block_items__item, item2);
container.append(h2, p, block_items);
body.append(container);