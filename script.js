let inputText = document.getElementById("enterTasks");
let addButton = document.getElementById("addButton");
let listElement=document.querySelector('.tasks');
let doneActionElement=document.querySelector('.done')
let themeElement=document.querySelector('.theme')

//! Variables to update process
let isEditTask=false
let updateItem

//* Dark Mode option

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
        localStorage.setItem('themeColor','off')

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


//* Display items in LocalStorage when Loading the App

document.addEventListener('DOMContentLoaded', getTodoListOnLoad)

function getTodoListOnLoad(){
      
    if(localStorage.getItem('task')===null)
    {
        tasks=[]
              
    }   
    else
    {
        listElement.innerHTML=""
        tasks=JSON.parse(localStorage.getItem('task'))
        tasks.forEach((element,index)=>{
                      
            addItemToList(element,index)
            
        })
        
    }
}

//* Add Items to the list
addButton.addEventListener("click", addTask);

function addTask() {
    let task = inputText.value;
    if (task.trim()!=="" && !isEditTask)
    
    {
        tasks.push(task);
        let index=tasks.length
        localStorage.setItem("task", JSON.stringify(tasks));
        inputText.value = "";
        addItemToList(task,index)
   
    }
    else if (task.trim()!=="" && isEditTask)
      
    {
        tasks[updateItem]=inputText.value
        localStorage.setItem("task", JSON.stringify(tasks));
        inputText.value = "";
        console.log(task)
        getTodoListOnLoad()

    }
    
    
}

//* Function to display items on the webpage (can be reused)

function addItemToList(task,index)

{
    let taskItem=document.createElement("li");
    taskItem.classList.add("task");
    taskItem.innerHTML=`<i onClick=toggleDone(${index}) index= ${index} class="fas fa-check"></i> ${task}`
    listElement.appendChild(taskItem);
   
    let actions=document.createElement("span");
    actions.classList.add("actions");
    actions.setAttribute("index",index)
    actions.innerHTML=`<i onClick=editTodoTask(${index}) class="fas fa-edit"></i> <i onClick=deleteTask(${index}) class="fas fa-trash-alt"></i>`
    taskItem.appendChild(actions);


}


//* Add a line to mark the task as done

function toggleDone(index)
{
    
    let toggled=document.querySelectorAll("li")[index]
    console.log(toggled)
    toggled.classList.toggle('done')
}

//* Delete Task

function deleteTask(index)
{
    
    let newArr=JSON.parse(localStorage.getItem('task'))
    newArr.splice(index,1)
    localStorage.setItem('task',JSON.stringify(newArr))
    getTodoListOnLoad()

}

//* Edit Task

function editTodoTask(index)
{
    isEditTask=true
    inputText.value=tasks[index]
    updateItem=index

}