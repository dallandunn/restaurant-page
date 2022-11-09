import Icon from './donut-svgrepo-com.svg';

function createHeader() {
    const header = document.createElement("div");
    header.setAttribute("id", "header");

    const logo = document.createElement("div");
    logo.setAttribute("id", "logo");

    // const logoImage = document.createElement("img");
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
        li.textContent = item;
        links.appendChild(li);
    });

    header.appendChild(logo);
    header.appendChild(links);

    return header;
}

function createHome() {
    const info = document.createElement("div");
    info.setAttribute("id", "info");

    const tag = document.createElement("h3");
    tag.textContent = "Delight in every bite!";
    info.appendChild(tag);

    const text = document.createElement("div")
    text.setAttribute("id", "text");

    const p = document.createElement("p");
    p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
                    + "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend "
                    + "donec pretium vulputate sapien nec. Erat nam at lectus urna duis convallis. "
                    + "Potenti nullam ac tortor vitae purus faucibus. Platea dictumst vestibulum rhoncus est."
    text.appendChild(p);

    const button = document.createElement("button");
    button.textContent = "View Menu";
    text.appendChild(button);
    
    info.appendChild(text);

    return info;
}

export { createHeader, createHome };