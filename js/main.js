import {Stopwatch} from './classes/stopwatch.js';

let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let time = document.getElementById('time');

let newWatch = new Stopwatch(time);

start.addEventListener('click', ()=> {
    console.log('start');
    newWatch.start();
});

stop.addEventListener('click', ()=> {
    console.log('stop');
    newWatch.stop();
});

reset.addEventListener('click', ()=> {
    console.log('reset');
    newWatch.reset();
});

