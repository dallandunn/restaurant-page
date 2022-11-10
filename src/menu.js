import strawberry from './images/strawberry-frosted.jpg';
import chocolateFrosted from './images/chocolate-frosted.jpeg';
import glazed from './images/glazed.jpeg';
import chocolate from './images/chocolate.jpeg';
import powdered from './images/powdered.jpeg';
import jelly from './images/jelly.jpeg';
import vanilla from './images/vanilla-frosted.jpeg';
import blueberry from './images/blueberry.jpeg';
import bostonCream from './images/boston-cream.jpeg';
import apple from './images/apple-cider.jpeg';
import mapleBacon from './images/maple-bacon.jpeg';
import cinnamon from './images/cinnamon.jpeg';

function createMenu() {
    const info = document.createElement('div');
    var menuItems = {
        'Glazed Donut': ['A simple classic', glazed],
        'Chocolate Donut': ['For Chocolate lovers', chocolate],
        'Powdered Donut': ['Freshly made daily', powdered],
        'Jelly Donut': ['Filled with jelly', jelly],
        'Strawberry Frosted Donut': ['With Sprinkles!', strawberry],
        'Chocolate Frosted Donut': ['A fan favorite', chocolateFrosted],
        'Vanilla Frosted Donut': ['With Sprinkles!', vanilla],
        'Blueberry Cake Donut': ['With glaze', blueberry],
        'Boston Cream Donut': ['Filled with cream', bostonCream],
        'Apple Cider Donut': ['The perfect fall treat', apple],
        'Maple Bacon Donut': ['mmmmm bacon!', mapleBacon],
        'Cinnamon Donut': ['Coated with cinnamon sugar', cinnamon]
    };

    const title = document.createElement('h3');
    title.textContent = 'Menu';
    info.appendChild(title);

    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu-content');
    info.appendChild(menu);

    for (const [key, value] of Object.entries(menuItems)) {
        createMenuItem(menu, key, value[0], value[1]);
    }

    return info;
}

function createMenuItem(parentElem, menuItem, itemDescription, imageAddress) {
    const itemContainer = document.createElement('div');
    itemContainer.setAttribute('class', 'menu-item');

    newElement('h2', menuItem, itemContainer);
    newElement('p', itemDescription, itemContainer);
    const image = document.createElement('img');
    image.src = imageAddress; 
    itemContainer.appendChild(image);

    parentElem.appendChild(itemContainer);
}

function newElement(type, content, parentElem) {
    const elem = document.createElement(type);
    elem.textContent = content;
    parentElem.appendChild(elem);
}

export { createMenu };