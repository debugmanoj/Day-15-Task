

function added(event){  
    console.log(event)
    event.preventDefault();
    let formData = {}; 
    for (let i = 0; i < event.target.length; i++) {
        let element = event.target[i];
        if (element.tagName === 'INPUT' || element.tagName === 'SELECT') {
            formData[element.id] = element.value; 
        }
    }
    //Calling function to add it on table
    createTable(formData) ;
    for (let i = 0; i < event.target.length; i++) {
        let element = event.target[i];
        if (element.tagName === 'INPUT' || element.tagName === 'SELECT') {
            if(element.value==="submit"){
                
            }
            else{
                element.value=""; 
            }

            
        }
    }


}
function createTable(datas){
    let entries = document.getElementById("entries");
    let tr = document.createElement("tr");
//mapping the datas to add into table
    for (let key in datas) {
        if (datas.hasOwnProperty(key)) {
            let td = document.createElement("td");
            td.innerText = datas[key];
            tr.appendChild(td);
        }
    }

    entries.appendChild(tr);

}