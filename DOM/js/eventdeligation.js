// Event bbbling --------------------------------------------->>>>>>>>>>
// document.querySelector('.card-title').addEventListener('click', function(){
//     console.log('card-tite');
// });
// document.querySelector('.card-content').addEventListener('click', function(){
//     console.log('card-content');
// });


//  Event deligation 

const delItem = document.querySelector('.delete-item');
delItem.addEventListener('click', deleteItem);
document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
    if (e.target.parentElement.className === 'delete-item secondary-content'){
        console.log('tama');
    }

    if(e.target.parentElement.classList.contains('delete-item')){
        e.target.parentElement.parentElement.remove();
    }
}

