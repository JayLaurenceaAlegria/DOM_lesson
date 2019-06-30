// document.getElementById(); ------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>
// console.log(document.getElementById('task-title'));

// get things from element ------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);


// change styling -------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>

const taskTitle = document.getElementById('task-title');
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.display = 'none';

// change content ----------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>
taskTitle.textContent='Task List';
taskTitle.innerText='My task';
taskTitle.innerHTML='<span class="red-text">Task List</span>';


// $('#task-title');   ---- jquery sample 

// document.querySelector --------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));



document.querySelector('li').style.color = 'red';
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(2)').style.color = 'green';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(even)').textContent = 'odd';
document.querySelector('li:nth-child(even)').textContent = 'even';






