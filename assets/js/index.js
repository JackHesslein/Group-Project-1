// get existing tasks from local storage
const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];




// go through one by one
existingTasks.forEach(task => {
    console.log(task);

    const h1El = document.createElement('h1');
    h1El.textContent = task.title;
    // look at day number and time number
    // 1=sun, 2=mon, 3=tues, 4=wed, 5=thurs, 6=fri, 7=sat
    // time 1=morning, 2=afternoon, 3=evening

    // make element to put in right spot
    // put element in right spot
    document.querySelector(`tbody tr:nth-child(${task.day}) td:nth-of-type(${task.time})`).appendChild(h1El);
});

//add button for Add task

//link to task page


// Add button for Clear planner
const clearTasksButton = document.getElementById('clearTasksButton');
clearTasksButton.addEventListener('click', function() {
    // Clear the displayed tasks
    document.querySelectorAll('tbody h1').forEach(h1 => h1.remove());

    // Clear tasks from local storage
    localStorage.removeItem('tasks');
});

//popup for add new task or exist (goes in HTML)