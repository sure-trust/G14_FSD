var selectedTask = null;

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var task = document.createElement("li");
        task.innerText = taskInput.value;

        task.addEventListener("click", function () {
            if (selectedTask === task) {
                selectedTask = null;
                task.classList.remove("selected");
            } else {
                if (selectedTask !== null) {
                    selectedTask.classList.remove("selected");
                }
                selectedTask = task;
                task.classList.add("selected");
            }
        });

        var deleteButton = document.createElement("button");
        deleteButton.innerText = "Remove";
        deleteButton.onclick = function (event) {
            event.stopPropagation();
            taskList.removeChild(task);
            selectedTask = null;
        };

        task.appendChild(deleteButton);
        taskList.appendChild(task);
        taskInput.value = "";
    }
}