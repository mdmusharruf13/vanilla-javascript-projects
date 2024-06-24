import { data } from './database/data.js';

const image = document.querySelector('.img')
const title = document.querySelector('.title')
const author = document.querySelector('.author')
const content = document.querySelector('.content')
const link = document.querySelector('.link');
const prevBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');

let index = 0;

window.addEventListener('DOMContentLoaded', () => {
    renderPost()
});


function renderPost() {
    image.src = data[index].image;
    title.textContent = data[index].title;
    author.textContent = data[index].author;
    content.textContent = (data[index].text).slice(0, 250);
    link.setAttribute('href', data[index].url);
}

prevBtn.addEventListener('click', () => {
    index--;
    if (index < 0) {
        index = data.length - 1;
    }
    renderPost();
});
nextBtn.addEventListener('click', () => {
    index++;
    if (index > data.length) {
        index = 0;
    }
    renderPost();
});