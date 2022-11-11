function createContact() {
    const container = document.createElement('div');
    container.setAttribute('id', 'container');

    const title = document.createElement('h3');
    title.textContent = 'Contact Us!';

    const info = document.createElement('div');
    info.setAttribute('id', 'contact-info');

    var contact = {
        'Address': '1600 Pennsylvania Avenue NW, Washington, DC',
        'Phone': '(123) 456-789',
        'Hours': 'Mon-Sun 5am - 2pm'
    };

    for (const [key, value] of Object.entries(contact)) {
        contactInfo(key, value, info);
    }

    container.appendChild(title);
    container.appendChild(info);

    return container;

}

function contactInfo(type, value, parentElem) {
    const container = document.createElement('div');
    container.setAttribute('class', 'contact-item');

    const title = document.createElement('h2');
    title.textContent = type;

    const text = document.createElement('p');
    text.textContent = value;
    
    const line = document.createElement('hr');
    line.setAttribute('class', 'line');

    container.appendChild(title);
    container.appendChild(line);
    container.appendChild(text);
    

    parentElem.appendChild(container);
}

export { createContact };