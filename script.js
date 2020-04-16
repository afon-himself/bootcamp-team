window.addEventListener('load', runApp);
let wrapperDiv
let countHover;
let firstStart = true;
function runApp() {
    countHover = 0
    let element = document.querySelector('#my-button');
    element.addEventListener('mouseover', overButton);
    wrapperDiv = document.querySelector('body');
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function newPosition(oldTop, oldLeft, width, height) {
    let range = 20;
    let newTop = getRandomInt(0, height);
    let newLeft = getRandomInt(0, width);
    if (((oldTop - range) < newTop && (oldTop + range) > newTop) ||
        ((oldLeft - range) < newLeft && (oldLeft + range) > newLeft)) {
        return newPosition(oldTop, oldLeft, width, height);
    }
    else return [newTop, newLeft];
}



function overButton(e) {
    countHover++;
    e.target.style.position = 'absolute';
    e.target.style.background = '#b39cd0';

    let buttonPosition = newPosition(
        e.target.offsetTop,
        e.target.offsetLeft,
        wrapperDiv.offsetWidth - 100,
        wrapperDiv.offsetHeight - 50);
    console.log(buttonPosition);
    console.warn([wrapperDiv.offsetWidth, wrapperDiv.offsetHeight]);

    if (countHover < 30) {
        e.target.style.top = buttonPosition[0] + 'px';
        e.target.style.left = buttonPosition[1] + 'px';
    }

    if (firstStart) {
        e.target.style.top = 50 + '%';
        e.target.style.left = 50 + '%';
        firstStart= false;
    }
}