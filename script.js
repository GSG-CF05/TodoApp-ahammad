let inputText = document.getElementById("enterTasks");
let addButton = document.getElementById("addButton");
let listElement=document.querySelector('.tasks');
let doneActionElement=document.querySelector('.done')
let themeElement=document.querySelector('.theme')
let tasks=[]

// document.onload=function(){
//     console.log('loaded');
//     if(localStorage.getItem('tasks')!=null){
//         tasks=JSON.parse(localStorage.getItem('tasks'));
//         listElement.innerHTML='';
//         for(let i=0;i<tasks.length;i++){
//             let li=document.createElement('li');
//             li.innerHTML=tasks[i];
//             listElement.appendChild(li);
//         }
//     }
// }

document.addEventListener('DOMContentLoaded', getTodoListOnLoad)

function getTodoListOnLoad(){
    console.log('loaded')
    let todos=[]
    if(localStorage.getItem('task')===null)
    {console.log('else')
    tasks=[]
        
    }   
    else{
        
        // console.log('hi')
        todos=JSON.parse(localStorage.getItem('task'))
        todos.forEach(element=>{
            addItemToList(element)
            console.log(element)})

        
    }
}


addButton.addEventListener("click", addTask);
// Add task to the list
function addTask() {
    let task = inputText.value;
    if (task!==""){
    tasks.push(task);
    localStorage.setItem("task", JSON.stringify(tasks));
    inputText.value = "";

    addItemToList(task)
   
    }

    
}

function addItemToList(task)
{
    let taskItem=document.createElement("li");
    taskItem.classList.add("task");
    taskItem.innerHTML=task;
    listElement.appendChild(taskItem);
    

    let actions=document.createElement("span");

    actions.classList.add("actions");
    actions.innerHTML="<i class='fas fa-check done'></i><i class='fas fa-edit'></i><i class='fas fa-trash-alt'></i>";
    taskItem.appendChild(actions);
    console.log(actions);
}

if (doneActionElement!==null)
{
    doneActionElement.addEventListener('click',toggleDoneAction)
}


function toggleDoneAction()
{
    console.log('toggle')
}
themeElement.addEventListener('click',changeTheme)
function changeTheme(){
    
}