const inputbutton = document.getElementsByTagName("button")[0];
const inputbox = document.getElementsByClassName("inputbox")[0];
const ul = document.querySelector("ul");


const lineThrough = (event) => {
    event.target.classList.toggle("liner");
}
ul.querySelector("li").addEventListener("click", lineThrough);

const delParent = (event) => {
    event.target.parentNode.remove();
}

const clicker = () => {
    if(inputbox.value !== "") {
        const div = document.createElement("div");
        div.classList.add("wrapper");
        ul.appendChild(div);
        
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(inputbox.value));
        li.addEventListener("click", lineThrough);
        li.classList.add("theek");
        div.appendChild(li);
        
        const del = document.createElement("button");
        del.classList.add("del");
        del.appendChild(document.createTextNode("del"));
        del.addEventListener("click", delParent);
        div.appendChild(del);

        inputbox.value = "";
    }
}
document.querySelector("button.del").addEventListener("click", delParent);

inputbox.addEventListener("keydown", (event) => {
    if(event.key === "Enter") clicker();
});
inputbutton.addEventListener("click", clicker);


const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");

const bgChanger = () => {
    document.body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

color1.addEventListener("input", bgChanger);
color2.addEventListener("input", bgChanger);