
// const items = document.getElementsByClassName('collection-item');
// const items = document.querySelectorAll('.collection-item');

// console.log(items)
// console.log(items[2]);
// items[2].style.color = 'red';
// items[2].textContent = 'haloow';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// document.getElementsByTagName--------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>
// let list = document.getElementsByTagName('li');

// console.log(list);
// console.log(list[1]);

// list[0].style.color = 'red';
// list[0].textContent = 'hello';

// Convert HTML collection into array   ------------------------------>>>>>>>>>>>>>>>>>>>>>>>>
// let list = document.getElementsByTagName('li');

// list = Array.from(list);
// // list.reverse();

// list.forEach(function(li, index){
//     console.log(li.className);
//     li.textContent = `${index}: hey`
// });

// // Arrow function --------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>
// list.forEach((li, index) => {
//     console.log(li.className);
//     li.textContent = `${index}: Yow`
// });

// document.querySelectorAll ----------------------------------->>>>>>>>>>>>>>>>>>>>>>
// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(item, index){
// item.textContent = `${index}: hey bro`
// });

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(odd , index){
odd.style.background = 'cyan'
})

for(let i = 0 ; i < liEven.length; i++){
liEven[i].style.background = 'green';
};


