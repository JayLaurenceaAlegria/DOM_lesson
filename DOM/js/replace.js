//create element 
const newHeading = document.createElement('h2');

// Add id 
newHeading.id = 'task-title';
var value = document.createTextNode('Task list')
// new text node 
newHeading.appendChild(value);

// get old heading
const oldheading = document.getElementById('task-title');
const cardAction = document.querySelector('.card-action');

cardAction.replaceChild(newHeading,oldheading);

// remove element 
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// remove list item 
lis[0].remove();

// remove child element --------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
list.removeChild(lis[3]);

// classes and attribute 
const firstli = document.querySelector('li:first-child');
const link = firstli.children[0];

let val;
// classes -------------------------------------->>>>>>>>>>>>>>>>>>>>>
val = link.className;
val = link.classList;
val = link.classList[0];

link.classList.add('test');

// attributes 
val = link.getAttribute('href');
val = link.setAttribute('href','http://google.com');
link.setAttribute('tittle', 'Google');

console.log(link);