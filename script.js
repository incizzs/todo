/*document.getElementById("addButton").onclick = function(){myFunction()};
function myFunction(){
    console.log("clicked")
}*/
function getInputValue(){
    const mission = document.getElementById("todoInput").value;//getting the text from input

    if(mission.trim()==""){
        alert("you cannot add a blank mission")
        return;
    }

    else{
    const li = document.createElement('li');//creating a new li element 
    const box = document.createElement('input');
    box.type="checkbox";
    box.className="mr-1"
    li.appendChild(box);
    const span = document.createElement('span');
    box.addEventListener("change",(event) => {
        if(box.checked==true){
            span.style.textDecoration="line-through";
        }
        else{
            span.style.textDecoration = "none";
        }
    })
    span.textContent=mission;
    li.appendChild(span);
    const del = document.createElement('button');//creating a delete task buttonn
    del.textContent = "X";//text of the delete button
    del.className="ml-5 border rounded-lg bg-red-500 w-5 text-gray-200"
    li.appendChild(del);// adding delete button into li
    del.onclick = function(){li.remove()}// removing the task when delete button is clicked
    document.getElementById("myMissions").appendChild(li);//adding li to the list
    document.getElementById("todoInput").value = "";//clearing the input after adding the text
    }
}

document.getElementById("todoInput").addEventListener("keydown", (event) => {
    if(event.key == "Enter"){
        getInputValue()
    }
})


/*
+getInputValue function runs when Add button is clicked
*/





