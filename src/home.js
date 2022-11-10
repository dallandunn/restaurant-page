import { resetPage } from "./website";
import { createMenu } from "./menu";

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
    button.addEventListener('click', () => {
        resetPage();
        const content = document.getElementById('content');
        content.appendChild(createMenu());
    });
    button.textContent = "View Menu";
    text.appendChild(button);
    
    info.appendChild(text);

    return info;
}

export { createHome };