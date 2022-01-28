// ---------------BODY----------------------
let body = document.getElementsByTagName('body');
body[0].style.backgroundColor = prompt ('Введіть фон для сторінки');
body[0].style.fontFamily = prompt ('Введіть тип шрифта на сторінці');

// ------------My page-----------------------
let page = document.getElementsByTagName('h1');
page[0].style.textAlign = prompt ('Введіть вирівнювання для заголовка');

// ------------Paragraf posylannia------------
let paragraf = document.getElementsByTagName('p');
paragraf[0].style.backgroundColor = prompt ('Введіть фон для параграфа з посиланням');
paragraf[0].style.color = prompt ('Введіть колір тексту для параграфа з посиланням');
// ----------------Posylannia-------------------
let link = document.getElementsByClassName('link');
for (let i = 0; i < link.length; i++) {
    link[i].style.color = prompt ('Введіть колір тексту для посилання');
    link[i].target ='_blank';
};
// ----------------block-------------------
let block = document.getElementsByTagName('div');
block[0].style.fontSize = prompt ('Введіть розмір тексту');
block[0].style.color = prompt ('Введіть колір тексту');
block[0].style.fontWeight = prompt ('Введіть товщину тексту');
// ----------------type-------------------
let ul = document.getElementsByTagName('ul');
ul[0].style.listStyleType = prompt ('Введіть тип маркового списку');

// ----------------Dodatkovo-------------------
let link = document.getElementsByClassName('link');
for (let i = 0; i < link.length; i++) {
    link[i].target ='_blank';
    link[i].textContent = prompt ('Введіть адресу');
    link[i].href = 'http://www.' + link[i].textContent;
};