document.addEventListener('DOMContentLoaded', () => {
    const upBtn = document.querySelector('#up');
    const leftBtn = document.querySelector('#left');
    const downBtn = document.querySelector('#down');
    const rightBtn = document.querySelector('#right');

    const grid = document.querySelector('.grid');
    let squares = Array.from(document.querySelectorAll('.grid div'));

    let message = document.querySelector('#message');
    const warning = "You are on the boundary";
    const greeting = "Let's Play!"

    const width = 10;
    let currentPosition = 99;
    let currentRow = 9;
    let currentColumn = 9; 

    function draw() {
      squares[currentPosition].classList.add('currentBlock');  
    }

    function undraw() {
        squares[currentPosition].classList.remove('currentBlock');
    }

   draw();

    upBtn.addEventListener('click', () => {
        if(currentColumn >= 0 && currentRow > 0){
            undraw();
            currentPosition -= width;
            draw();
            currentRow--;
            message.innerHTML = greeting;
        } else {
            message.innerHTML = warning;
        }
    });
    
    leftBtn.addEventListener('click', () => {
        if(currentColumn > 0 && currentRow >= 0)
        {
            undraw();
            currentPosition -= 1;
            draw();
            currentColumn--;
            message.innerHTML = greeting;
        } else {
            message.innerHTML = warning;
        }
    });

    
    downBtn.addEventListener('click', () => {
        if(currentRow < 9)
        {
            undraw();
            currentPosition += width;
            draw();
            currentRow++;
            message.innerHTML = greeting;
        } else {
            message.innerHTML = warning;
        }
    });

    
    rightBtn.addEventListener('click', () => {
        if(currentColumn < 9) {
            undraw();
            currentPosition += 1;
            draw();
            currentColumn++;
            message.innerHTML = greeting;
        } else {
            message.innerHTML = warning;
        }
    });
});