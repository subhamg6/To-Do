const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskButton.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText) {
        const li = document.createElement('li');
        li.classList.add('task-item');

        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;
        taskContent.classList.add('task-content');
        li.appendChild(taskContent);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', () => deleteTask(li));
        li.appendChild(deleteButton);

        taskList.appendChild(li);

        taskInput.value = ''; // Clear input after adding task
    } else {
        alert('Please enter a task');
    }
}

function deleteTask(taskElement) {
    taskList.removeChild(taskElement);
}

taskList.addEventListener('click', function(e) {
    if (e.target && e.target.nodeName === 'SPAN') {
        const task = e.target;
        task.classList.toggle('completed');
    }
});
