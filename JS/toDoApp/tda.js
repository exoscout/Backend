let task={
    id: 0,
    title: "",
    dueDate: "",
    priority: "",
    status: 0
}

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
displayTasks(tasks);

function addTask() {
  let newTask = {
    id: Date.now(),
    title: document.getElementById("taskInput").value,
    dueDate: document.getElementById("dueDateInput").value,
    priority: document.getElementById("priorityInput").value,
    status: 0
  };

  tasks.push(newTask);
  tasks.sort((a, b) => {
    return new Date(a.dueDate) - new Date(b.dueDate);
  });
  displayTasks(tasks);
}

document.getElementById("addTaskBtn").addEventListener("click", function(){
    addTask();
    document.getElementById("taskInput").value = "";
    document.getElementById("dueDateInput").value = "";
    document.getElementById("priorityInput").value = "";
});

function displayTasks(tasks) {
    let taskList = document.getElementById("taskList");
    let completedList = document.getElementById("completedTaskList");
    taskList.innerHTML = "";
    completedList.innerHTML = "";
    tasks.forEach(task => {
        let taskItem = document.createElement("tr");
        taskItem.className = "task-item";

        let priorityColor = "";
        if(task.priority === "high") priorityColor = "🔴";
        else if(task.priority === "medium") priorityColor = "🟠";
        else if(task.priority === "low") priorityColor = "🟢";

        let done=document.createElement("input");
        done.type="checkbox";
        done.checked = task.status === 1;

        done.addEventListener("change", function() {
            task.status = done.checked ? 1 : 0;
            // displayTasks(tasks);
        });

        let td5 = document.createElement("td");
        td5.appendChild(done);
        
        taskItem.innerHTML = `
                            <td>${task.title}</td>
                            <td>${task.dueDate}</td>
                            <td>${priorityColor}</td>
                            <td>${task.status === 0 ? "Pending" : "Completed"}</td>
            `;
        taskItem.appendChild(td5);

        if(task.status === 0){
            taskList.appendChild(taskItem);
        } else {
            
            completedTaskList.appendChild(taskItem);
        }

        localStorage.setItem("tasks", JSON.stringify(tasks));
    });
}

document.getElementById("taskList").addEventListener("change", function(e){
    if(e.target.type === "checkbox"){
        let taskItem = e.target.parentElement.parentElement;
        let title = taskItem.children[0].textContent;
        let task = tasks.find(t => t.title === title);
        let idx=0;
        if(task){
            idx++;
            task.status = e.target.checked ? 1 : 0;
            displayTasks(tasks);
        }
    }
}); 

document.querySelector("#clearTasksBtn").addEventListener("click", function(){
    tasks = tasks.filter(task => task.status === 0);
    displayTasks(tasks);
});