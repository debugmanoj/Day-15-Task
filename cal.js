let title=document.createElement("h1")
title.setAttribute("id","heading")
title.innerText="Web Developer Task"
document.body.append(title)
function handleKeyPress(event) {
    let value=event.key
    let check=event.keyCode
    if((check>=65 && check<=90)||(check>=97 && check<=122) )
    {
        alert("Press the keyboard button ")
    }
    else{
        Gots(value)
    }
}
let container=document.createElement("div");
container.setAttribute("class","cal-container")
let  mainDiv=document.createElement("div")
mainDiv.setAttribute("class","calc")
var keys=["","C","<--",".","X","7","8","9","/","4","5","6","-","1","2","3","+","0","00","="]
for(let i=0;i<keys.length;i++){
    let div = document.createElement("div");
    let button=document.createElement("button")
    
    if (i === 0) {
        div.setAttribute("class", "Display");
        button.innerText=keys[i]
        button.addEventListener("keydown", handleKeyPress);
        button.setAttribute("id","values")
        
        
    } else if (i === 1) {
        button.innerText="C"
        div.append(button);
        button.addEventListener("keydown", handleKeyPress);
        button.setAttribute("id","values")
        // div.innerText = keys[i];
    } else {
        button.innerText=keys[i]
        // div.innerText = keys[i];
        button.addEventListener("keydown", handleKeyPress);
        button.setAttribute("id","values")
        div.append(button);
    }
    
    container.append(div);
    
}
mainDiv.append(container)
document.body.appendChild(mainDiv)
document.addEventListener("keydown", handleKeyPress);

function  Gots(val){
    let values=document.querySelectorAll("#values");
    values.forEach(button => {

        if(button.innerText===val){
            
             
        } // Access inner text of each button
    });
}