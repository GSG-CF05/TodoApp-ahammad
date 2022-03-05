let inputText = document.getElementById("enterTasks");
let addButton = document.getElementById("addButton");
let listElement=document.querySelector('.tasks');
let doneActionElement=document.querySelector('.done')
let themeElement=document.querySelector('.theme')

let isEditTask=false
let updateItem

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


document.addEventListener('DOMContentLoaded', getTodoListOnLoad)

function getTodoListOnLoad(){
    //console.log('loaded')
   
    if(localStorage.getItem('task')===null)
    {
        //console.log('else')
        tasks=[]
        //console.log(tasks.length)

        
    }   
    else{
        
        //console.log('hi')
        listElement.innerHTML=""
       
        tasks=JSON.parse(localStorage.getItem('task'))
        tasks.forEach((element,index)=>{
           
            addItemToList(element,index)
            //console.log(element,index)
        })

        
    }
}


addButton.addEventListener("click", addTask);
// Add task to the list

function addTask() {
    let task = inputText.value;
    if (task.trim()!=="" && !isEditTask){
    tasks.push(task);
    let index=tasks.length
    //console.log(index)
    
    localStorage.setItem("task", JSON.stringify(tasks));
    inputText.value = "";
    console.log(task,index)

    addItemToList(task,index)
   
    }
    if (task.trim()!=="" && isEditTask)
    
    {
        tasks[updateItem]=inputText.value
        localStorage.setItem("task", JSON.stringify(tasks));
        inputText.value = "";
        console.log(task)
        getTodoListOnLoad()

    }
    
    
}

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
    //console.log(actions);

}




function toggleDone(index)
{
    
    let toggled=document.querySelectorAll("li")[index]
    console.log(toggled)
    toggled.classList.toggle('done')
}

function deleteTask(index)
{
    
    let newArr=JSON.parse(localStorage.getItem('task'))
    newArr.splice(index,1)
    localStorage.setItem('task',JSON.stringify(newArr))
    getTodoListOnLoad()

}

function editTodoTask(index)
{
    isEditTask=true
    inputText.value=tasks[index]
    updateItem=index

    console.log(index)
}