const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');  

const jump = () => {
    mario.classList.add('jump');    


setTimeout (() => {

    mario.classList.remove('jump');  
       
}, 750);

}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 75 && pipePosition > 0 && marioPosition < 105) {

        pipe.style.animation = 'none';
        pipe.style.left = '${pipePosition}px';

        mario.style.animation = 'none';
        mario.style.bottom = '${marioPosition}px';

        mario.src = './images/game-over.png';
        mario.style.width = '100px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
        return;
    }

}, 10);

document.addEventListener('keydown', jump);
