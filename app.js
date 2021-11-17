let newDiv = document.createElement("div");
newDiv.style.border = "solid 1px black";
newDiv.style.width = "200px";
newDiv.style.height = "200px";
newDiv.style.background = "black";

document.body.append(newDiv);

function newElement(type) {
    let newThings = document.createElement(type);
    newThings.style.width = "200px";
    newThings.style.height = "200px";
    newThings.style.background = "black";
    newThings.style.border = "3px solid red";
    newThings.style.color = "white";
    newThings.innerHTML = "test"
    return newThings;
}

document.body.append(newElement("p"))
document.body.append(newElement("span"))
document.body.append(newElement("div"))