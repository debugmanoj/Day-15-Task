let title=document.createElement("h1")
title.setAttribute("id","heading")
title.innerText="Web Developer Task"
document.body.append(title)
function handleKeyPress(event) {
    let keyCode = event.keyCode || event.which;

    if (!((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105))) {
        alert("Only numbers are allowed");
        event.preventDefault();
    }
}
let container=document.createElement("div");
container.setAttribute("class","cal-container")
let  mainDiv=document.createElement("div")
mainDiv.setAttribute("class","calc")
var keys=["","C","<--",".","X","7","8","9","4","5","6","1","2","1","+","0","00","="]

for(let i=0;i<keys.length;i++){
    let div = document.createElement("div");
    let button=document.createElement("button")
    
    if (i === 0) {
        div.setAttribute("class", "cal-container");
        

    } else if (i === 1) {
        div.setAttribute("class", "Display");
        // div.innerText = keys[i];
    } else {
        button.innerHTML=keys[i]
        // div.innerText = keys[i];
        div.addEventListener("keydown", handleKeyPress);
    }
    div.append(button)
    container.appendChild(div);
    
}
mainDiv.append(container)
document.body.append(mainDiv)