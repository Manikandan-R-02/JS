let inputBox = document.getElementById("input-box")
let button = document.getElementById("add")
let taskPlace = document.getElementById("taskplace")

let tasklist=[]

button.addEventListener("click",()=>{
    let taskValue=inputBox.value.trim()
    if(taskValue){
        tasklist.push(taskValue)
        displayTask(taskValue)
        inputBox.value=''
    }
    else{
        alert("please enter your task")

    }
})

displayTask=(taskName)=>{
    let task = document.createElement("p")
    task.innerText=taskName
    taskPlace.appendChild(task)

    task.addEventListener("click",()=>{
        task.style.textDecoration="line-through"
    })

    task.addEventListener("dblclick",(taskname)=>{
        taskPlace.removeChild(task)
        remove(taskName)
    })
}

remove=(name)=>{
    index=tasklist.indexOf(name)
    if(index>-1){
        tasklist= tasklist.splice(index,1)
    }
    
}