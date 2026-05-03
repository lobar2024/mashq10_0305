let todos = [];

function addTask(task) {
    todos.push(task);
}

function showTasks() {
    console.log(todos);
}

addTask("Dars qilish");
addTask("Kitob o‘qish");

showTasks();
