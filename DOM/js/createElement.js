
const li = document.createElement('li');

// add class ------------------------>>>>>>>>>>>>>>>>>>>>>>

li.className = 'collection-item';

// add id ---------------------------->>>>>>>>>>>>>>
li.id = 'new-item';

// add atr ---------------------------->>>>>>>>>>>>
li.setAttribute('title','new Item');

// create text node and append 
li.appendChild(document.createTextNode('hello world')) ;

// create new link element 
const link = document.createElement('a');

//Add classes 
link.className = 'delete-item secondary-content';

// Add icon html 
link.innerHTML = '<i class="fas fa-user-times"></i>';


// append link to li 
li.appendChild(link);

// append li as ul 
document.querySelector('ul.collection').appendChild(li);
console.log(li);
