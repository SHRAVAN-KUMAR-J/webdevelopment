let input = document.getElementById("taskInput");
let button = document.getElementById("addbtn");
let taskList = document.getElementById("taskList");                         
button.addEventListener("click", function() {
    let task = input.value;                         
    if (task) {
        let listItem = document.createElement("li");
        listItem.textContent = task;
        taskList.appendChild(listItem);
        input.value = ""; // Clear the input field after adding the task
    }
});