const ball = document.getElementById('ball');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const speedUp = document.getElementById('speed-up');
const speedDown = document.getElementById('slow-down');
const reverse = document.getElementById('reverse');


const rollAnimation = [
    {transform: 'rotate(0) translate3D(-50%, -50%, 0)',
    color: 'white'} , 
{
    color: 'purple'
} , 
{
    color: 'pink'
} ,
{
    color: 'yellow'
} ,
{
    transform: 'rotate(360deg) translate3D(-50%, -50%, 0)',
    color: 'white'
}
];

const rollOptions  = {
    duration: 3000,
    iterations: Infinity
}


const roll = ball.animate(rollAnimation, rollOptions);


playBtn.addEventListener("click", () => {
    roll.playbackRate= 1;
    roll.play()
});
pauseBtn.addEventListener("click", () => roll.pause());
reverse.addEventListener("click", () => roll.reverse());

speedUp.addEventListener("click", () => {
    roll.playbackRate = roll.playbackRate * 1.168;
    roll.play()
});
speedDown.addEventListener("click", () => {
   roll.playbackRate =  roll.playbackRate / 1.168;
    roll.play()
});