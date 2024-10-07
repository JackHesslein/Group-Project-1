const form = document.querySelector('form');

// Listen for form submission event
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const values = {};

    // Get values of inputs
    // Values into an object
    values.day = document.querySelector("[name = 'day']").value;
    values.time = document.querySelector("[name = 'time']").value;
    values.title = document.querySelector("[name = 'title']").value;
    values.description = document.querySelector("[name = 'description']").value;
    values.importance = document.querySelector("[name = 'importance']").value;
    values.notes = document.querySelector("[name = 'notes']").value;

    // get existing tasks from local storage
    const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // add new task to existing array
    existingTasks.push(values);

    // Put updated array in local storage
    localStorage.setItem('tasks', JSON.stringify(existingTasks));

    // Redirect to planner page
    location.assign('./index.html');

})

//link to planner page
const backToHome = document.getElementById('Back to Home');

//link to planner
addTasksButton.addEventListener('click', function() {
    window.location.href = 'index.html'; 
});



