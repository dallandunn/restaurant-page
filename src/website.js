import Icon from './images/donut-svgrepo-com.svg';

function createHeader() {
    const header = document.createElement("div");
    header.setAttribute("id", "header");

    const logo = document.createElement("div");
    logo.setAttribute("id", "logo");

    const logoIcon = new Image();
    logoIcon.src = Icon;
    const title = document.createElement("h1");
    title.textContent = "Delightful Donuts";

    logo.appendChild(logoIcon);
    logo.appendChild(title);

    const links = document.createElement("ul");
    let linkItems = ['Home', 'Menu', 'Contact'];
    linkItems.forEach((item) => {
        var li = document.createElement('li');
        li.setAttribute('id', item.toLowerCase());
        li.textContent = item;
        links.appendChild(li);
    });

    header.appendChild(logo);
    header.appendChild(links);

    return header;
}

function resetPage() {
    const content = document.getElementById('content');
    if (content.children.length > 1) {
        content.removeChild(content.children[1]);
    }
}

export { createHeader, resetPage };