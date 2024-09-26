const taskInput = document.getElementById('taskInput');
const taskLocation = document.getElementById('taskLocation');
const homeList = document.getElementById('homeList');
const workList = document.getElementById('workList');
const schoolList = document.getElementById('schoolList');
const addTaskBtn = document.getElementById('addTask');

addTask.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    const selectedLocation = taskLocation.value; 

    if (taskText !== '') {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';

        const circleBtn = document.createElement('button');
        circleBtn.className = 'circleBtn';
        li.appendChild(circleBtn);

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        li.appendChild(taskSpan);

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm deleteBtn';
        deleteBtn.textContent = 'Poista';
        li.appendChild(deleteBtn);

        if (selectedLocation === 'home') {
            homeList.appendChild(li);
        } else if (selectedLocation === 'work') {
            workList.appendChild(li);
        } else if (selectedLocation === 'school') {
            schoolList.appendChild(li);
        }

        taskInput.value = "";

        deleteBtn.addEventListener('click', function() {
            li.remove();  // Poistaa tehtävän
        });

        circleBtn.addEventListener('click', function() {
            taskSpan.classList.toggle('task-completed');
            circleBtn.classList.toggle('completed');
        });
    }
});
