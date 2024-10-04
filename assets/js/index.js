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

        document.querySelector(`tbody tr:nth-child(${task.day}) td:nth-of-type(${task.time})`).appendChild(h1El);



    // make element to put in right spot

    // put element in right spot
});
