const input = document.querySelector(".search-box");
const taskcontainer = document.getElementById("task-container");
const btn = document.querySelector(".add-btn");
const form = document.querySelector('form');
var id=1;
function addtask(e) {
    if(input.value == ""){
        alert("You must write something.")
    }
    else{
        const task = `<div class="task" id=${id}>
            <input type="checkbox" class="check" value="1" onclick="Check(${id})">
            <span>${input.value}</span>
            <button class="delete" onclick="Delete(${id})">
            <i class="fa-solid fa-trash"></i>
            </button>
        </div>`;
        id++;

        taskcontainer.insertAdjacentHTML("beforeend",task);
        input.value="";
        // saving();
    }   
}

function Check(id)
{
    let doc = document.getElementById(id);
    let input = doc.querySelector('input');
    doc.querySelector(".check");
    if(input.value==1)
    {
        doc.querySelector('span').style.textDecoration = "line-through";
        input.value = 0;
        // saving();
    }
    else 
    {
        doc.querySelector('span').style.textDecoration = "none";
        input.value=1;
        // saving();
    }
    
}

function Delete(id){
    let doc = document.getElementById(id).style.display="none";
    // saving();
}

// function saving(){
//     localStorage.setItem("data", taskcontainer.innerHTML);
// }

// function showTask(){
//     taskcontainer.innerHTML = localStorage.getItem("data");
// }
// showTask();
