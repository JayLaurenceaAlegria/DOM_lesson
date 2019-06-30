const clearBtn = document.querySelector('.card');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click 
// clearBtn.addEventListener('click', runEvent);
// clearBtn.addEventListener('mouseenter', runEvent);
// clearBtn.addEventListener('mouseover', runEvent);
// clearBtn.addEventListener('mousemove', runEvent);
clearBtn.addEventListener('mouseover', runEvent);
function runEvent (e){
    console.log(`Event type : ${e.type}`);
    heading.textContent = `MouseY: ${e.offsetY} MouseY: ${e.offsetX}`;
    e.preventDefault();
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY} , 10 , 0.4)`;
}