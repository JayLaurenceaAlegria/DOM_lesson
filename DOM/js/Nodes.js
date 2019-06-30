let val;  

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

// val = listItem;
// val = list;
// val = list.childNodes;
// val = list.childNodes[1].nodeName; 
// val = list.childNodes[0].nodeType; 

// get children of element nodes ----------------------------------------->>>>>>>>>>>>>>>>>>>>>
val = list.children;
// val = list.children[1].textContent = 'hey';

//Children of chidren ------------------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>
list.children[2].children[0].id = 'test-link';
val = list.children[2].children[0]

// first child 
val = list.firstChild;
val = list.firstElementChild;

// last child 
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount

//get parent node 
val = listItem.parentNode;
val = listItem.parentElement.parentElement;


// get previous siblings 
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;

val = listItem.previousElementSibling;

console.log(val);
