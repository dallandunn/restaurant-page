import './style.css';
import { createHeader, resetPage } from './website';
import { createHome } from './home';
import { createMenu } from './menu';

const content = document.getElementById("content");
content.appendChild(createHeader());
content.appendChild(createHome());

const homeLink = document.getElementById("home");
const menuLink = document.getElementById("menu");
const contactLink = document.getElementById("contact");

homeLink.addEventListener('click', () => {
    resetPage();
    content.appendChild(createHome());
});

menuLink.addEventListener('click', () => {
    resetPage();
    content.appendChild(createMenu());
});