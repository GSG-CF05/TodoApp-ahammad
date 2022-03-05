let inputText = document.getElementById("enterTasks");
let addButton = document.getElementById("addButton");
let listElement=document.querySelector('.tasks');
let doneActionElement=document.querySelector('.done')
let themeElement=document.querySelector('.theme')



themeElement.addEventListener('click',toggleTheme)

function toggleTheme(){
    let themeColor = localStorage.getItem('themeColor')

    if (themeColor!=='on')
    {
        setDarkTheme()
        localStorage.setItem('themeColor','on')
    }

    else
    {
        setDarkTheme()
        localStorage.setItem('themColor','off')

    }


}

let themeColor = localStorage.getItem('themeColor')
if (themeColor=='on')
{
    setDarkTheme()
}

function setDarkTheme(){
    document.body.classList.toggle('dark')
}
// let tasks=[]

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
    {
        console.log('else')
        tasks=[]
        console.log(tasks.length)

        
    }   
    else{
        
        // console.log('hi')
        tasks=JSON.parse(localStorage.getItem('task'))
        tasks.forEach((element,index)=>{
            addItemToList(element,index)
            console.log(element,index)})

        
    }
}


addButton.addEventListener("click", addTask);
// Add task to the list

function addTask() {
    let task = inputText.value;
    if (task.trim()!==""){
    tasks.push(task);
    let index=tasks.length
    console.log(index)
    
    localStorage.setItem("task", JSON.stringify(tasks));
    inputText.value = "";
    console.log(task,index)

    addItemToList(task,index)
   
    }

    
}

function addItemToList(task,index)
{
    let taskItem=document.createElement("li");
    taskItem.classList.add("task");
    
    taskItem.innerHTML=`<i index= ${index} class="fas fa-check"></i> ${task}`
    listElement.appendChild(taskItem);
   

    let actions=document.createElement("span");

    actions.classList.add("actions");
    actions.setAttribute("index",index)
    actions.innerHTML=' <i class="fas fa-edit"></i> <i class="fas fa-trash-alt"></i>'
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