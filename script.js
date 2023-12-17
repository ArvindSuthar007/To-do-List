const inputbutton = document.getElementsByTagName("button")[0];
const inputbox = document.getElementsByClassName("inputbox")[0];
const ul = document.querySelector("ul");

const delParent = (event) => {
    event.target.parentNode.remove();
}
const lineThrough = (event) => {
    event.target.classList.toggle("liner");
}

const valuelen = () => {
    return inputbox.value.length;
}

const delbutton = () => {
    const del = document.createElement("button");
    del.classList.add("del");
    del.appendChild(document.createTextNode("del"));
    del.addEventListener("click", delParent);

    return del;
}

const clicker = () => {
    if(valuelen() > 0) {
        const div = document.createElement("div");
        div.classList.add("wrapper");
        ul.appendChild(div);

        const li = document.createElement("li");
        li.appendChild(document.createTextNode(inputbox.value));
        li.addEventListener("click", lineThrough);
        li.classList.add("theek");
        div.appendChild(li);

        div.appendChild(delbutton());

        inputbox.value = "";
    }
}

const keypress = (event) => {
    if(event.key === "Enter") clicker();
}

inputbox.addEventListener("keydown", keypress);
inputbutton.addEventListener("click", clicker);

document.querySelector("button.del").addEventListener("click", delParent);
ul.querySelector("li").addEventListener("click", lineThrough);