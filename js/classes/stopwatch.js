export class Stopwatch {

    constructor(time) {
        this.interval = null;
        this.isOn = false;
        this.counter = 0;
        this.offset = null;
        this.time = time;
    }

    start() {

        if (!this.isOn) {
            this.offset = Date.now();
            console.log('new offset ', this.offset, this.counter)
            this.interval = setInterval(() => {
                this.update();
            }, 100);
            this.isOn = true;
        }
    }

    stop() {

        if (this.isOn) {
            clearInterval(this.interval);
            this.interval = null;
            this.isOn = false;
        }
    }

    reset() {
        clearInterval(this.interval);
        this.interval = null;
        this.counter = 0;
        this.offset = null;
        this.isOn = false;
        this.time.innerHTML = `<span class="time">00&nbsp;:&nbsp;</span><span class="time">00&nbsp;:&nbsp;</span><span class="time">00&nbsp;.&nbsp;</span><span class="time">000</span>`;
    }

    update() {
        let currTime = Date.now();
        this.counter += currTime - this.offset;
        this.offset = currTime;
        let formattedTime = this.timeformatter(this.counter);
        console.log(formattedTime);
        this.time.innerHTML = formattedTime;
    }

    timeformatter(time) {
        console.log(time);

        let miliSec = String(time%1000);
        time = (time - miliSec)/1000;
        let seconds = String(time%60);
        time = (time - seconds)/60;
        let minutes = String(time%60);
        time = (time-minutes)/60;
        let hours = String(time)

        while(miliSec.length != 3 && miliSec.length<3 && miliSec.length >=0) {
            miliSec = '0'+miliSec;
        }
        while(seconds.length != 2 && seconds.length<2 && seconds.length >=0) {
            seconds = '0'+seconds;
        }
        while(minutes.length != 2 && minutes.length<2 && minutes.length >=0) {
            minutes = '0'+minutes;
        }
        while(hours.length != 2 && hours.length<2 && hours.length >=0) {
            hours = '0'+hours;
        }
        return `<span class="time">${hours} : </span><span class="time">${minutes} : </span><span class="time">${seconds} . </span><span class="time">${miliSec}</span>`
    }


}