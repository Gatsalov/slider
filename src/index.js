(function(){let btns = document.querySelectorAll('.slider__arrow');

function clickEventHandler(e){
  move(e.target.dataset.direction);
}

function addClickEvent(){
  for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('mousedown', clickEventHandler)
  }
}

function keypadEventHandler(e){
    if(e.keyCode === 37){
        move('left');
    }else if(e.keyCode === 39){
        move('right');
    }
}
function addKeypadEvent(){
  addEventListener('keydown',keypadEventHandler)
}


function move(direction){

    let slide = document.querySelector('.focus'),
        shiftPosition = slide.clientWidth,
        nextSibling = slide.nextElementSibling,
        prevSibling = slide.previousElementSibling,
        parent = slide.parentNode,
        currentPosition = parent.offsetLeft;
    
    parent.addEventListener('transitionend',(e)=>{
      addEvents()
    })
    if(direction == 'left' && prevSibling){
        clearEvents();
        parent.style.left = `${ currentPosition += shiftPosition}px`;
        prevSibling.classList.add('focus');
        slide.classList.remove('focus');
    }else if(direction == 'right' && nextSibling){
        clearEvents();
        parent.style.left = `${ currentPosition -= shiftPosition}px`;
        nextSibling.classList.add('focus');
        slide.classList.remove('focus');
    }
}


function clearEvents (){
  for(let i = 0; i < btns.length; i++){
    btns[i].removeEventListener('mousedown', clickEventHandler)
  }
  removeEventListener('keydown', keypadEventHandler)
}

function addEvents (){
  addKeypadEvent();
  addClickEvent();
}
addEvents();
})()