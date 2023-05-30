'use strict';

function solve(steps, footprintLength, speed) {

    let distance = (steps * footprintLength);
    speed = (speed * 1000) / 3600;
    let aditionalSeconds = (parseInt(distance / 500)) * 60;
    let time = Math.ceil(distance / speed) + aditionalSeconds;

    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60)
    let seconds = Math.floor((time % 3600) % 60)

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    console.log(`${hours}:${minutes}:${seconds}`)
}

