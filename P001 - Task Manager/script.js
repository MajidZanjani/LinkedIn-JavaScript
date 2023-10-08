var tasks = [];

function addTask() {
  const title = document.getElementById('task-title').value;
  const description = document.getElementById('task-description').value;
  const dueDate = document.getElementById('due-date').value;
  const priority = document.getElementById('priority').value;

  if (title && description && dueDate) {
    const task = {
      title: title,
      description: description,
      dueDate: dueDate,
      priority: priority,
      completed: false,
    };

    tasks.push(task);
    displayTasks();
    resetForm();
  } else {
    alert('Please fill out all fields.');
  }
}

function displayTasks() {
  const tasksList = document.getElementById('tasks-list');
  tasksList.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskElement = document.createElement('div');
    taskElement.className = `task ${task.completed ? 'completed' : ''}`;
    taskElement.innerHTML = `
            <h2>${task.title}</h2>
            <p>${task.description}</p>
            <p>Due Date: ${task.dueDate}</p>
            <p>Priority: ${task.priority}</p>
            <button onclick="completeTask(${index})">${
      task.completed ? 'Undo' : 'Complete'
    }</button>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
    tasksList.appendChild(taskElement);
  });
  console.log(tasks);
}

function completeTask(index) {
  tasks[index].completed = !tasks[index].completed;
  displayTasks();
}

function editTask(index) {
  const task = tasks[index];
  document.getElementById('task-title').value = task.title;
  document.getElementById('task-description').value = task.description;
  document.getElementById('due-date').value = task.dueDate;
  document.getElementById('priority').value = task.priority;
  tasks.splice(index, 1);
  displayTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

function resetForm() {
  document.getElementById('task-title').value = '';
  document.getElementById('task-description').value = '';
  document.getElementById('due-date').value = '';
  document.getElementById('priority').value = 'low';
}

displayTasks();
