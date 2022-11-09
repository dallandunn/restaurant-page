import './style.css';
// import backgroundImage from './background-image.jpg';
import { createHeader, createHome } from './home';

const content = document.getElementById("content");
content.appendChild(createHeader());
content.appendChild(createHome());