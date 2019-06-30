// document.querySelector('.clear-task').addEventListener('click',function(e){
//     console.log('test');
//     e.preventDefault();
// });

document.querySelector('.clear-task').addEventListener('click', Onclick);


function Onclick(e){
   let val; 
   val = e;

   //event target element
   val= e.target;
    val = e.clientY;
    val = e.clientX;

    val = e.offsetY;
    val = e.offsetX;
   e.preventDefault();
   console.log(val);
}