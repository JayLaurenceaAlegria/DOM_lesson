const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const heading  = document.querySelector('h5');
const select  = document.querySelector('select');


// clear input label ----------------------------------->>>>>>>>>>>
taskInput.value = null;

form.addEventListener('submit', runEvent);  
// taskInput.addEventListener('keyup', runEvent); ----------------------------events>>>>>>>>>>>
// taskInput.addEventListener('keypress', runEvent);
// taskInput.addEventListener('focus', runEvent);
// taskInput.addEventListener('blur', runEvent);
// taskInput.addEventListener('cut', runEvent); -------------------------------cut-->>>>>>>>>>>>
// taskInput.addEventListener('copy', runEvent); -------------------------------copy-->>>>>>>>>
// taskInput.addEventListener('paste', runEvent); ----------------------------paste---->>>>>>
// taskInput.addEventListener('input', runEvent); 

// taskInput.addEventListener('change', runEvent);




function runEvent(e){
// console.log(`Event type : ${e.type}`);
// console.log(taskInput.value);
// heading.innerText = taskInput.value;
const ul = document.querySelector('.collection')
const a = document.querySelector('.delete-item');
const i = document.querySelector('.fa-user-times');
const newA = document.createElement('a')
newA.className = 'delete-item secondary-content' ; 
const newI = document.createElement('i')
const newLi = document.createElement('li');

newLi.className = ('collection-item');
newLi.innerText = taskInput.value;
ul.append(newLi);
e.preventDefault();

}