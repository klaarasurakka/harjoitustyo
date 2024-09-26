// Valitaan tarvittavat elementit
const taskInput = document.getElementById('taskInput');
const taskLocation = document.getElementById('taskLocation');
const homeList = document.getElementById('homeList');
const workList = document.getElementById('workList');
const schoolList = document.getElementById('schoolList');
const addTaskBtn = document.getElementById('addTask');

// Tehtävän lisäämisen toiminto
addTask.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    const selectedLocation = taskLocation.value;  // Haetaan valittu paikka

    if (taskText !== '') {
        // Luodaan uusi tehtävä-elementti
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';

        // Ympyränappi tehtävän merkkaamiseen tehdyksi
        const circleBtn = document.createElement('button');
        circleBtn.className = 'circleBtn';
        li.appendChild(circleBtn);

        // Tehtäväteksti sisältää span-elementin
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        li.appendChild(taskSpan);

        // Lisätään "Poista" nappi
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm deleteBtn';
        deleteBtn.textContent = 'Poista';
        li.appendChild(deleteBtn);

        // Lisätään tehtävä valittuun listaan
        if (selectedLocation === 'home') {
            homeList.appendChild(li);
        } else if (selectedLocation === 'work') {
            workList.appendChild(li);
        } else if (selectedLocation === 'school') {
            schoolList.appendChild(li);
        }

        // Tyhjennetään syötekenttä
        taskInput.value = "";

        // Poista tehtävä -toiminto
        deleteBtn.addEventListener('click', function() {
            li.remove();  // Poistaa tehtävän
        });

        // Tehtävä merkitään tehdyksi tai pois tehdyistä kun painetaan ympyränappia
        circleBtn.addEventListener('click', function() {
            taskSpan.classList.toggle('task-completed');
            circleBtn.classList.toggle('completed');  // Muuttaa ympyränapin vihreäksi kun tehtävä on tehty
        });
    }
});
